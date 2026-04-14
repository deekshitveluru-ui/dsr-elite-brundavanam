"use client";

import { MessageSquare } from "lucide-react";

export default function ConciergeWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
      <button 
        className="relative flex items-center gap-3 backdrop-blur-md bg-dsr-dark/80 text-dsr-base border border-dsr-gold/30 px-6 py-4 rounded-full shadow-2xl hover:bg-dsr-dark hover:border-dsr-gold transition-all duration-300 group"
      >
        {/* Subtle pulsating border ring */}
        <div className="absolute inset-0 border border-dsr-gold rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40 group-hover:hidden" />
        
        <MessageSquare className="w-5 h-5 text-dsr-gold" />
        <span className="font-serif font-medium tracking-wide">Schedule a Viewing</span>
      </button>
    </div>
  );
}
