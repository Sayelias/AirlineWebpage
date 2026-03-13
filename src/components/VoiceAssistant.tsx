import { useState, useCallback, useEffect, useRef } from "react";
import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  MeetingSessionConfiguration,
} from "amazon-chime-sdk-js";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Plane, Volume2 } from "lucide-react";

const WEBRTC_API_URL =
  "https://vwzty2i1bf.execute-api.us-east-1.amazonaws.com/prod/voice/start-call";

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const meetingSessionRef = useRef<DefaultMeetingSession | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    setStatusMessage("Checking permissions...");

    try {
      // Check microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((t) => t.stop());

      setStatusMessage("Connecting to AnyCompany Airlines...");

      // Call the StartWebRTC API
      const response = await fetch(WEBRTC_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName: "Website Visitor",
          attributes: {
            Channel: "web-voice",
            Source: "airline-website",
            Timestamp: new Date().toISOString(),
          },
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || `HTTP ${response.status}`);
      }

      const data = await response.json();
      if (!data.success || !data.ConnectionData) {
        throw new Error("Invalid response from WebRTC API");
      }

      setStatusMessage("Setting up call...");

      // Set up Chime meeting session
      const logger = new ConsoleLogger("SkyAssist-WebRTC", 2);
      const deviceController = new DefaultDeviceController(logger);
      const configuration = new MeetingSessionConfiguration(
        data.ConnectionData.Meeting,
        data.ConnectionData.Attendee
      );

      const meetingSession = new DefaultMeetingSession(
        configuration,
        logger,
        deviceController
      );

      // Bind audio output
      if (audioElementRef.current) {
        meetingSession.audioVideo.bindAudioElement(audioElementRef.current);
      }

      // Add observer for connection events
      meetingSession.audioVideo.addObserver({
        audioVideoDidStart: () => {
          console.log("✅ WebRTC call connected");
          setIsConnected(true);
          setIsConnecting(false);
          setStatusMessage("");
        },
        audioVideoDidStop: () => {
          console.log("📞 WebRTC call ended");
          setIsConnected(false);
          setIsConnecting(false);
          setIsSpeaking(false);
          meetingSessionRef.current = null;
        },
        connectionDidBecomePoor: () => {
          console.log("⚠️ Connection quality is poor");
        },
      });

      meetingSessionRef.current = meetingSession;

      // Start the call
      meetingSession.audioVideo.start();
    } catch (error: any) {
      console.error("Failed to start WebRTC call:", error);
      setStatusMessage(`Error: ${error.message}`);
      setIsConnecting(false);
      setTimeout(() => setStatusMessage(""), 4000);
    }
  }, []);

  const stopConversation = useCallback(async () => {
    try {
      if (meetingSessionRef.current) {
        meetingSessionRef.current.audioVideo.stop();
        meetingSessionRef.current = null;
      }
    } catch (error) {
      console.error("Error ending call:", error);
    }
    setIsConnected(false);
    setIsConnecting(false);
    setIsSpeaking(false);
    setStatusMessage("");
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      if (isConnected) {
        stopConversation();
      }
      setIsOpen(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (meetingSessionRef.current) {
        meetingSessionRef.current.audioVideo.stop();
      }
    };
  }, []);

  return (
    <>
      {/* Hidden audio element for WebRTC output */}
      <audio ref={audioElementRef} id="webrtc-audio-output" autoPlay />

      {/* Floating trigger button */}
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-sky shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Voice Assistant"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary-foreground" />
        ) : (
          <Mic className="h-6 w-6 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 z-50 flex w-[360px] flex-col overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-black/40"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/50 bg-gradient-sky px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20">
                <Plane className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-primary-foreground">
                  SkyAssist
                </h3>
                <p className="text-xs text-primary-foreground/70">
                  AnyCompany Airlines Voice Agent
                </p>
              </div>
            </div>

            {/* Content area */}
            <div className="flex min-h-[240px] max-h-[320px] flex-col items-center justify-center gap-3 overflow-y-auto p-4 text-center">
              {!isConnected && !isConnecting && !statusMessage && (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    <Mic className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-foreground">
                      How can I help you fly?
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Ask about flights, bookings, baggage, or SkyRewards
                    </p>
                  </div>
                </>
              )}

              {isConnecting && (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20"
                  >
                    <Plane className="h-5 w-5 text-primary" />
                  </motion.div>
                  <p className="text-xs text-muted-foreground">
                    {statusMessage || "Connecting…"}
                  </p>
                </>
              )}

              {isConnected && (
                <>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20"
                  >
                    <Volume2 className="h-5 w-5 text-primary" />
                  </motion.div>
                  <p className="text-xs text-muted-foreground">
                    Connected — speak to our agent
                  </p>
                </>
              )}

              {!isConnecting && !isConnected && statusMessage && (
                <p className="text-xs text-destructive">{statusMessage}</p>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center border-t border-border/50 bg-background/50 px-5 py-4">
              {!isConnected ? (
                <button
                  onClick={startConversation}
                  disabled={isConnecting}
                  className="flex items-center gap-2 rounded-full bg-gradient-sky px-6 py-2.5 font-display text-xs font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50"
                >
                  {isConnecting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                        className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                      />
                      Connecting…
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4" />
                      Start Conversation
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={stopConversation}
                  className="flex items-center gap-2 rounded-full bg-destructive px-6 py-2.5 font-display text-xs font-semibold text-destructive-foreground transition-all hover:bg-destructive/90"
                >
                  <MicOff className="h-4 w-4" />
                  End Conversation
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAssistant;
