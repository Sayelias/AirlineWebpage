import { useState, useCallback, useEffect, useRef } from "react";
import { useConversation } from "@elevenlabs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, X, Plane } from "lucide-react";

const AGENT_ID = "agent_6301kkbfp4bqf38rcg5k7qgw4pbv";

const AudioOrb = ({
  isConnected,
  isSpeaking,
}: {
  isConnected: boolean;
  isSpeaking: boolean;
}) => {
  const ringCount = 4;

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute rounded-full bg-primary/10"
        animate={{
          width: isConnected ? (isSpeaking ? 280 : 220) : 180,
          height: isConnected ? (isSpeaking ? 280 : 220) : 180,
          opacity: isConnected ? 0.4 : 0.15,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ filter: "blur(40px)" }}
      />

      {/* Concentric rings */}
      {Array.from({ length: ringCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/20"
          animate={{
            width: isConnected
              ? isSpeaking
                ? 120 + i * 40 + Math.sin(i * 1.5) * 15
                : 100 + i * 35
              : 80 + i * 25,
            height: isConnected
              ? isSpeaking
                ? 120 + i * 40 + Math.sin(i * 1.5) * 15
                : 100 + i * 35
              : 80 + i * 25,
            opacity: isSpeaking ? 0.5 - i * 0.08 : 0.25 - i * 0.04,
            scale: isSpeaking ? [1, 1.05, 1] : [1, 1.02, 1],
          }}
          transition={{
            duration: isSpeaking ? 0.6 : 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * (isSpeaking ? 0.08 : 0.2),
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Core orb */}
      <motion.div
        className="relative z-10 flex items-center justify-center rounded-full bg-gradient-sky shadow-lg shadow-primary/30"
        animate={{
          width: isConnected ? (isSpeaking ? 88 : 80) : 72,
          height: isConnected ? (isSpeaking ? 88 : 80) : 72,
          scale: isSpeaking ? [1, 1.08, 1] : [1, 1.03, 1],
        }}
        transition={{
          duration: isSpeaking ? 0.5 : 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-sky-light/20"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <Plane className="h-7 w-7 text-primary-foreground" />
      </motion.div>
    </div>
  );
};

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [transcript, setTranscript] = useState<
    { role: string; text: string; id: number }[]
  >([]);
  const idRef = useRef(0);

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
        if (text)
          setTranscript((prev) => [
            ...prev,
            { role: "user", text, id: ++idRef.current },
          ]);
      } else if (message.type === "agent_response") {
        const text = message.agent_response_event?.agent_response;
        if (text)
          setTranscript((prev) => [
            ...prev,
            { role: "agent", text, id: ++idRef.current },
          ]);
      }
    },
  });

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId: AGENT_ID } as any);
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
      if (conversation.status === "connected") stopConversation();
      setIsOpen(false);
    }
  };

  const isConnected = conversation.status === "connected";

  // Show last 3 messages for floating transcript
  const recentMessages = transcript.slice(-3);

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={handleToggle}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-sky shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Voice Assistant"
          >
            <Mic className="h-6 w-6 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-screen glassmorphic overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-2xl"
            style={{ backgroundColor: "hsl(var(--background) / 0.6)" }}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={handleToggle}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-border/30 bg-card/40 text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </motion.button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute top-8 flex items-center gap-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                <Plane className="h-4 w-4 text-primary" />
              </div>
              <span className="font-display text-sm font-bold text-foreground/80">
                SkyAssist
              </span>
            </motion.div>

            {/* Center orb */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring", damping: 20 }}
            >
              <AudioOrb
                isConnected={isConnected}
                isSpeaking={conversation.isSpeaking}
              />
            </motion.div>

            {/* Status text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 font-display text-sm text-muted-foreground"
            >
              {!isConnected && !isConnecting && "Tap the mic to start"}
              {isConnecting && "Connecting…"}
              {isConnected &&
                !conversation.isSpeaking &&
                transcript.length === 0 &&
                "Listening…"}
              {isConnected &&
                !conversation.isSpeaking &&
                transcript.length > 0 &&
                "Listening…"}
              {isConnected && conversation.isSpeaking && "SkyAssist is speaking…"}
            </motion.p>

            {/* Floating transcript */}
            <div className="mt-6 flex min-h-[120px] w-full max-w-md flex-col items-center gap-3 px-6">
              <AnimatePresence mode="popLayout">
                {recentMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className={`w-full rounded-2xl px-5 py-3 text-center text-sm leading-relaxed backdrop-blur-md ${
                      msg.role === "user"
                        ? "border border-primary/20 bg-primary/10 text-foreground"
                        : "border border-border/20 bg-card/40 text-foreground/90"
                    }`}
                  >
                    <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {msg.role === "user" ? "You" : "SkyAssist"}
                    </span>
                    {msg.text}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Bottom controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="absolute bottom-10 flex items-center gap-4"
            >
              {!isConnected ? (
                <motion.button
                  onClick={startConversation}
                  disabled={isConnecting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-sky shadow-lg shadow-primary/30 transition-shadow hover:shadow-xl hover:shadow-primary/40 disabled:opacity-50"
                >
                  {isConnecting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                      className="h-6 w-6 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
                    />
                  ) : (
                    <Mic className="h-6 w-6 text-primary-foreground" />
                  )}
                </motion.button>
              ) : (
                <motion.button
                  onClick={stopConversation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive shadow-lg shadow-destructive/30 transition-shadow hover:shadow-xl"
                >
                  <MicOff className="h-6 w-6 text-destructive-foreground" />
                </motion.button>
              )}
            </motion.div>

            {/* Hint text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 text-[11px] text-muted-foreground"
            >
              Ask about flights, bookings, baggage, or SkyRewards
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VoiceAssistant;
