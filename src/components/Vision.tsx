"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-24 bg-dsr-base relative overflow-hidden flex items-center justify-center border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Subtle Decorative Quotes */}
          <span className="absolute -top-12 -left-8 text-8xl text-dsr-gold/10 font-serif leading-none select-none">"</span>
          
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-dsr-dark leading-relaxed font-light italic">
            For decades, families from Rayalaseema have traveled to cities like Hyderabad, Bangalore, Chennai, and Mumbai in search of better lifestyles, modern infrastructure, and vibrant communities. But today, that journey comes full circle. It's time to bring those dreams home.
          </blockquote>
          
          <div className="mt-10 flex justify-center">
            <div className="w-16 h-0.5 bg-dsr-gold rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
