"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Car, AlertTriangle } from "lucide-react";
import { CONNECTIVITY_DATA } from "@/data/connectivity";

export default function ConnectivityHUD() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeData = CONNECTIVITY_DATA[activeIndex];

  // Calculate percentage fill based on absolute max routing distance (190km)
  const numericDistance = parseInt(activeData.distance.replace(/\D/g, "")) || 0;
  const maxDistance = 190;
  const progressPercent = Math.max(10, Math.min(100, (numericDistance / maxDistance) * 100));

  return (
    <section className="py-24 bg-dsr-base relative overflow-hidden" id="connectivity-hud">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-serif text-dsr-dark mb-4"
          >
            Strategic <span className="text-dsr-gold">Connectivity</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto font-light"
          >
            Real-time transit metrics tracking absolute verified distances. Seamless routing via the critical expansion corridors.
          </motion.p>
        </div>

        {/* Outer Glassmorphic Container Structure */}
        <div className="flex flex-col lg:flex-row bg-dsr-dark rounded-sm luxury-shadow border border-dsr-gold/20 overflow-hidden shadow-2xl relative min-h-[500px]">
          
          {/* Left Panel: Selector */}
          <div className="lg:w-1/3 bg-dsr-stone/5 border-r border-white/5 flex flex-col p-4 md:p-6 space-y-2">
            <h3 className="text-dsr-base/50 text-sm tracking-widest uppercase font-bold mb-4 ml-4">Terminal Nodes</h3>
            {CONNECTIVITY_DATA.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex items-center justify-between p-5 rounded-sm transition-all duration-300 ${
                    isActive 
                      ? "bg-white/10 border-l-4 border-dsr-gold" 
                      : "bg-transparent border-l-4 border-transparent hover:bg-white/5 text-gray-500"
                  }`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <MapPin className={`w-5 h-5 shrink-0 transition-colors ${isActive ? "text-dsr-gold" : "text-gray-400"}`} />
                    <span className={`text-lg transition-colors font-medium leading-tight ${isActive ? "text-dsr-base" : "text-gray-400"}`}>
                      {item.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Telemetry & Map HUD */}
          <div className="lg:w-2/3 p-8 md:p-14 relative flex flex-col justify-center">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-dsr-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.98, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-full"
              >
                
                {/* Header Metrics */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                  <div>
                    <span className="text-dsr-gold uppercase tracking-[0.3em] text-xs font-bold mb-3 flex items-center gap-2">
                      <Navigation className="w-3 h-3" /> {activeData.status}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-dsr-base leading-tight max-w-lg shadow-sm">
                      {activeData.name}
                    </h3>
                  </div>
                  
                  {/* Traffic Badge */}
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full shrink-0 h-fit">
                    <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${activeData.status === 'Proposed' ? 'bg-orange-400' : 'bg-green-500'}`} />
                    <span className="text-dsr-base/80 text-sm font-medium tracking-wide">
                      {activeData.status === 'Proposed' ? 'Traffic: Pending' : 'Traffic: Optimal'}
                    </span>
                  </div>
                </div>

                {/* Primary Telemetry Data */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <span className="text-dsr-base/50 text-sm uppercase tracking-widest block mb-2 font-light">Distance</span>
                    <span className="text-5xl font-mono text-dsr-gold font-light tracking-tight">
                      {activeData.distance}
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-dsr-base/50 text-sm uppercase tracking-widest block mb-2 font-light">Transit Time</span>
                    <span className="text-4xl font-serif text-dsr-gold font-light tracking-wide flex items-center gap-3">
                      {activeData.time}
                    </span>
                  </div>
                </div>

                {/* The Map Animation Track */}
                <div className="relative pt-6 border-t border-white/10 mt-auto">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-dsr-base/60 text-xs tracking-widest uppercase">Origin</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-dsr-gold/80 text-xs tracking-wider border border-dsr-gold/20">{activeData.route}</span>
                    <span className="text-dsr-base/60 text-xs tracking-widest uppercase truncate max-w-[120px]">Destination</span>
                  </div>
                  
                  {/* Linear Progress Background Track */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative shadow-inner">
                    {/* Dynamic Golden Progress Fill */}
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                      className="absolute top-0 left-0 h-full bg-dsr-gold shadow-[0_0_10px_rgba(197,160,89,1)]"
                    />
                  </div>
                  
                  {/* Floating Marker Icon matching distance */}
                  <div className="relative w-full h-6 mt-1">
                    <motion.div
                      initial={{ left: "0%" }}
                      animate={{ left: `calc(${progressPercent}% - 12px)` }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                      className="absolute top-0 text-dsr-gold"
                    >
                      <Car className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
