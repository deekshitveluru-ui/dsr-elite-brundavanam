"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PlaneTakeoff } from "lucide-react";

export default function InvestmentBar() {
  return (
    <section className="bg-dsr-gold py-6 relative z-10 border-y border-[#b08d4b]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-dsr-dark"
          >
            <CheckCircle2 className="w-8 h-8 opacity-90" />
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest opacity-80">Certified & Secure</span>
              <span className="text-xl md:text-2xl font-serif font-bold">100% AHUDA Approved Township</span>
            </div>
          </motion.div>

          {/* Separator for desktop */}
          <div className="hidden md:block w-px h-12 bg-dsr-dark/20" />

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-dsr-dark"
          >
            <PlaneTakeoff className="w-8 h-8 opacity-90" />
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest opacity-80">Strategic Aviation Proximity</span>
              <span className="text-xl md:text-2xl font-serif font-bold">Proposed Brahmanapalli Airport (30 km)</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
