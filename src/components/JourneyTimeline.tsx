"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Plane, Car, Building } from "lucide-react";

const STAGES = [
  {
    title: "Bengaluru / Hyderabad / Chennai",
    description: "Start your journey from the bustling city.",
    icon: Building,
  },
  {
    title: "Bengaluru Airport",
    description: "Smooth 60-minute drive on NH-44.",
    icon: Plane,
  },
  {
    title: "KIA Motors",
    description: "Passing the industrial hub, just minutes away.",
    icon: Car,
  },
  {
    title: "DSR Elite Brundavanam Gates",
    description: "Arrive at stillness. Your digital twin awaits.",
    icon: MapPin,
  },
];

export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-dsr-charcoal mb-4">The Journey Home</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">Seamlessly connected via NH-44.</p>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full" />
          
          {/* Active Animated Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-dsr-emerald -translate-x-1/2 rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center mb-24 last:mb-0 ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row`}
              >
                {/* Node Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-dsr-emerald flex items-center justify-center z-10">
                  <Icon className="w-5 h-5 text-dsr-emerald" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                  <div className={`bg-dsr-stone p-6 rounded-sm luxury-shadow border border-gray-100 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="text-2xl font-bold text-dsr-charcoal mb-2">{stage.title}</h3>
                    <p className="text-gray-600">{stage.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
