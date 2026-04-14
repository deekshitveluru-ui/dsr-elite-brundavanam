"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function DeveloperPedigree() {
  return (
    <section className="py-20 bg-dsr-base border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full bg-dsr-stone/50 flex items-center justify-center mb-6 shadow-sm">
            <Building2 className="w-8 h-8 text-dsr-dark" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-dsr-dark mb-6">
            Developed by DSR Elite Infra Projects
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
            Committed to engineering excellence and sustainable luxury. Every square foot of Brundavanam is deeply rooted in 100% Vaastu-compliant architecture, designed exclusively to elevate the modern lifestyle for discerning families.
          </p>
          <div className="w-24 h-px bg-dsr-gold mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
