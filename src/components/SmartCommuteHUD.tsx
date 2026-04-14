"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function SmartCommuteHUD() {
  const [selectedOrigin, setSelectedOrigin] = useState<"KIA" | "BLR" | null>(null);

  const routeData = {
    KIA: { time: "1 Hour", distance: "70 km", energy: "Minimal" },
    BLR: { time: "3 Hours", distance: "190 km", energy: "Optimal" },
  };

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-900 mb-4">Smart Connectivity HUD</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto font-light">AI-simulated transit routes to DSR Elite.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center bg-white p-8 rounded-sm shadow-sm border border-stone-100">
          {/* Controls */}
          <div className="w-full lg:w-1/3 space-y-4">
            <button
              onClick={() => setSelectedOrigin("KIA")}
              className={`w-full p-4 rounded-sm text-left transition-all border ${selectedOrigin === "KIA"
                ? "bg-emerald-50 border-emerald-600"
                : "bg-white border-stone-200 hover:border-stone-300"
                }`}
            >
              <h4 className="text-stone-900 font-bold text-lg mb-1">KIA Motors, Penukonda</h4>
              <p className="text-stone-500 text-sm">Industrial Hub</p>
            </button>
            <button
              onClick={() => setSelectedOrigin("BLR")}
              className={`w-full p-4 rounded-sm text-left transition-all border ${selectedOrigin === "BLR"
                ? "bg-emerald-50 border-emerald-600"
                : "bg-white border-stone-200 hover:border-stone-300"
                }`}
            >
              <h4 className="text-stone-900 font-bold text-lg mb-1">Bengaluru Int. Airport</h4>
              <p className="text-stone-500 text-sm">Global Connectivity</p>
            </button>
          </div>

          {/* Visual Display */}
          <div className="w-full lg:w-2/3 h-80 bg-stone-100 rounded-sm relative overflow-hidden border border-stone-200 flex flex-col justify-center items-center">

            <AnimatePresence mode="wait">
              {selectedOrigin ? (
                <motion.div
                  key={selectedOrigin}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center z-10 w-full px-12"
                >
                  <div className="w-full flex items-center justify-between mb-8 relative">
                    {/* Route Line */}
                    <div className="absolute left-6 right-6 h-1 bg-stone-300 -z-10 top-1/2 -translate-y-1/2" />

                    {/* Animated Path */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="absolute left-6 h-1 bg-dsr-gold -z-10 top-1/2 -translate-y-1/2 origin-left"
                    />

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-2 luxury-shadow">
                        <MapPin className="w-5 h-5 text-gray-400" />
                      </div>
                      <span className="text-gray-600 font-mono text-sm">{selectedOrigin}</span>
                    </div>

                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                    >
                      <Navigation className="w-6 h-6 text-dsr-emerald rotate-90" />
                    </motion.div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-dsr-stone border border-dsr-emerald flex items-center justify-center mb-2 luxury-shadow">
                        <MapPin className="w-5 h-5 text-dsr-emerald" />
                      </div>
                      <span className="text-dsr-emerald font-mono text-sm font-bold">DSR ELITE</span>
                    </div>
                  </div>

                  <div className="flex gap-8">
                    <div className="bg-white luxury-shadow border border-gray-100 px-6 py-2 rounded-sm flex items-center gap-2">
                      <Clock className="w-4 h-4 text-dsr-charcoal text-opacity-50" />
                      <span className="text-dsr-charcoal font-bold">{routeData[selectedOrigin].time}</span>
                    </div>
                    <div className="bg-white luxury-shadow border border-gray-100 px-6 py-2 rounded-sm flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-dsr-charcoal text-opacity-50" />
                      <span className="text-dsr-charcoal font-bold">{routeData[selectedOrigin].distance}</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-400 text-lg font-mono flex items-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Select an origin to simulate route
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
