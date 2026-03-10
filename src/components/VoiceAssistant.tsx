import { useState, useCallback, useEffect, useRef } from "react";
import { useConversation } from "@elevenlabs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Plane, Volume2 } from "lucide-react";

const AGENT_ID = "agent_6301kkbfp4bqf38rcg5k7qgw4pbv";

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [transcript, setTranscript] = useState<{ role: string; text: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const conversation = useConversation({
    onConnect: () => console.log("Connected to SkyAssist"),
    onDisconnect: () => {
      console.log("Disconnected from SkyAssist");
      setIsConnecting(false);
    },
    onError: (error) => {
      console.error("Voice error:", error);
      setIsConnecting(false);
    },
    onMessage: (message: any) => {
      if (message.type === "user_transcript") {
        const text = message.user_transcription_event?.user_transcript;
        if (text) setTranscript((prev) => [...prev, { role: "user", text }]);
      } else if (message.type === "agent_response") {
        const text = message.agent_response_event?.agent_response;
        if (text) setTranscript((prev) => [...prev, { role: "agent", text }]);
      }
    },
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [transcript]);

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: AGENT_ID,
      });
    } catch (error) {
      console.error("Failed to start:", error);
      setIsConnecting(false);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
    setTranscript([]);
  }, [conversation]);

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      if (conversation.status === "connected") {
        stopConversation();
      }
      setIsOpen(false);
    }
  };

  const isConnected = conversation.status === "connected";

  return (
    <>
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

            {/* Transcript area */}
            <div
              ref={scrollRef}
              className="flex min-h-[240px] max-h-[320px] flex-col gap-3 overflow-y-auto p-4"
            >
              {transcript.length === 0 && !isConnected && (
                <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
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
                </div>
              )}

              {transcript.length === 0 && isConnected && (
                <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20"
                  >
                    <Volume2 className="h-5 w-5 text-primary" />
                  </motion.div>
                  <p className="text-xs text-muted-foreground">Listening…</p>
                </div>
              )}

              {transcript.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-md bg-primary text-primary-foreground"
                        : "rounded-bl-md bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Speaking indicator */}
            {isConnected && conversation.isSpeaking && (
              <div className="flex items-center gap-2 border-t border-border/50 px-5 py-2">
                <motion.div
                  className="flex gap-1"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                      animate={{ scaleY: [1, 1.8, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </motion.div>
                <span className="text-xs text-muted-foreground">SkyAssist is speaking…</span>
              </div>
            )}

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
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
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
