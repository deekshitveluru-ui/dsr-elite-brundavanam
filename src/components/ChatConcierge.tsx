"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to DSR Elite Brundavanam. I am your digital concierge. How may I assist you with your investment journey today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", content: inputValue.trim() }];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setMessages((prev) => [...prev, data]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "I am experiencing a secure network delay. Please email info.dsrelite@gmail.com for immediate assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-8 right-20 z-[100] flex flex-col items-end">

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-[90vw] md:w-[400px] h-[500px] mb-6 flex flex-col bg-white rounded-md shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-dsr-dark p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-dsr-gold/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-dsr-gold" />
                </div>
                <h3 className="font-serif text-dsr-gold tracking-wide">Brundavanam Concierge</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-dsr-base space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-sm text-sm font-light leading-relaxed shadow-sm ${msg.role === 'user'
                      ? 'bg-dsr-dark text-dsr-base rounded-tr-none'
                      : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                      }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-4 rounded-sm bg-white border border-gray-100 text-gray-500 text-sm font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-dsr-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-dsr-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-dsr-gold rounded-full animate-bounce" />
                    <span className="ml-2 font-mono text-xs">Concierge is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 shrink-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Brundavanam..."
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 focus:border-dsr-gold/50 focus:ring-1 focus:ring-dsr-gold/50 rounded-sm outline-none text-sm font-light transition-all text-dsr-dark placeholder:text-gray-400"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 p-1.5 text-dsr-dark/40 hover:text-dsr-gold disabled:opacity-50 transition-colors"
                  aria-label="Send Message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-dsr-dark/95 backdrop-blur-md flex items-center justify-center shadow-2xl border border-dsr-gold/30 hover:scale-105 transition-transform duration-300 relative group"
        aria-label="Toggle Concierge Chat"
      >
        {/* Subtle Pulse Animation */}
        <div className="absolute inset-0 rounded-full border border-dsr-gold/50 animate-ping opacity-30 group-hover:opacity-0 transition-opacity" />

        {isOpen ? (
          <X className="w-7 h-7 text-dsr-gold" />
        ) : (
          <MessageSquare className="w-7 h-7 text-dsr-gold" />
        )}
      </button>

    </div>
  );
}
