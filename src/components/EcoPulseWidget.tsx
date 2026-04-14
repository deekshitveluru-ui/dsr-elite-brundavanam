"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Wind, Leaf, Droplets, Eye, EyeOff } from "lucide-react";

const mockData = [
  { time: '08:00', aqi: 120 },
  { time: '10:00', aqi: 85 },
  { time: '12:00', aqi: 65 },
  { time: '14:00', aqi: 50 },
  { time: '16:00', aqi: 45 },
  { time: '18:00', aqi: 40 },
];

export default function EcoPulseWidget() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-10 right-5 z-50 w-12 h-12 bg-white rounded-full luxury-shadow flex items-center justify-center text-dsr-charcoal hover:bg-dsr-stone hover:scale-105 transition-all border border-gray-100"
        title="Toggle Eco-Pulse Dashboard"
      >
        {isVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-72 bg-white rounded-sm luxury-shadow p-5 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-3">
              <h4 className="text-dsr-charcoal font-serif font-bold tracking-wide">Eco-Pulse Live</h4>
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-dsr-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-dsr-emerald"></span>
              </span>
            </div>

            <div className="space-y-5">
              {/* Metric 1: Air Quality */}
              <div className="bg-dsr-stone rounded-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Wind className="w-4 h-4" />
                    <span className="text-xs uppercase font-bold tracking-wider">AQI</span>
                  </div>
                  <span className="text-dsr-emerald font-bold text-sm">40 (Excellent)</span>
                </div>
                <div className="h-10 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockData}>
                      <Area type="monotone" dataKey="aqi" stroke="#059669" fill="#059669" fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Metric 2: Solar Offset */}
              <div className="bg-dsr-stone rounded-sm p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <Leaf className="w-4 h-4" />
                  <span className="text-xs uppercase font-bold tracking-wider">Carbon Offset</span>
                </div>
                <div className="text-dsr-gold font-bold text-sm">240 kg</div>
              </div>

              {/* Metric 3: Water Harvest */}
              <div className="bg-dsr-stone rounded-sm p-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <Droplets className="w-4 h-4 text-blue-500" />
                  <span className="text-xs uppercase font-bold tracking-wider">Water Harvest</span>
                </div>
                <div className="text-blue-500 font-bold text-sm">85% Full</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
