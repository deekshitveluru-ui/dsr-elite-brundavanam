"use client";

import { motion } from "framer-motion";
import { Factory, Briefcase, Plane, MapPin } from "lucide-react";
import { CONNECTIVITY_DATA } from "@/data/connectivity";

const iconMap: Record<string, any> = {
  'kia': Factory,
  'hindupur': Briefcase,
  'blr': Plane,
};

export default function Connectivity() {
  return (
    <section className="py-24 bg-dsr-base relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-dsr-dark mb-4">Strategic Connectivity</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Positioned flawlessly on NH-44. Discover the geographical leverage placing you at the center of economic and transit corridors.
          </p>
        </div>

        <div className="relative border-l border-dsr-gold/30 ml-6 md:ml-12 space-y-16">
          {CONNECTIVITY_DATA.map((item, index) => {
            const Icon = iconMap[item.id] || MapPin;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-12"
              >
                {/* Timeline Node */}
                <div className="absolute -left-5 top-1 w-10 h-10 bg-dsr-base border-2 border-dsr-gold rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                  <div className="w-3 h-3 bg-dsr-gold rounded-full" />
                </div>

                <div className="bg-white p-8 rounded-sm luxury-shadow border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-dsr-gold/40 transition-colors duration-500">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-dsr-stone/30 rounded-full text-dsr-dark group-hover:text-dsr-gold group-hover:bg-dsr-gold/10 transition-colors duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-dsr-dark mb-2">{item.name}</h3>
                      <p className="text-gray-500 font-light leading-relaxed max-w-md">Verified Distance: {item.distance}</p>
                    </div>
                  </div>
                  
                  <div className="md:text-right shrink-0">
                    <span className="block text-sm uppercase tracking-widest text-gray-400 mb-1">Transit Time</span>
                    <span className="text-2xl font-serif text-dsr-gold font-bold">{item.time}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
