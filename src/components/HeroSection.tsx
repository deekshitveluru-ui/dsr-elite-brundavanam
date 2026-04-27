"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-dsr-stone">
      {/* High-Quality Static Hero Image with slow-motion pan */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop')",
        }}
        animate={{ scale: [1, 1.05] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      />

      {/* Elegant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20"
        style={{ y, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white tracking-[0.4em] uppercase text-sm mb-6 font-semibold"
        >
          Anantapur, NH-44
        </motion.p>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-serif text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block"
          >
            DSR Elite Brundavanam
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/90 text-xl font-light tracking-wide max-w-2xl mx-auto mb-12"
        >
          A sanctuary of pristine luxury. 100% Vaastu Compliant Premium Township integrated with 100 acres of preserved nature.
        </motion.p>

        {/* Brochure CTA Button (Functional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.a
            href="/Sreekaram_Brundhavanam.pdf"
            download="Sreekaram_Brundhavanam.pdf"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(197, 160, 89, 0.6)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-dsr-gold text-dsr-dark border border-transparent px-8 py-4 rounded-sm font-medium hover:bg-[#b08d4b] hover:text-white luxury-shadow"
          >
            <Download className="w-5 h-5" />
            <span>Download Brochure</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity }}
      >
        <span className="text-xs tracking-[0.2em] uppercase mb-2">Explore the Residency</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </div>
  );
}
