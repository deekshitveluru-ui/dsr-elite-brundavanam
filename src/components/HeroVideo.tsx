"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Forced-Play Architecture to bypass restrictive browser auto-play policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error("Video auto-play was heavily blocked by the browser:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center bg-dsr-dark overflow-hidden">

      {/* Absolute Video Element Configuration */}
      <video
        ref={videoRef}
        src="/gemini_website.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Text Legibility Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dsr-dark/60 via-dsr-dark/40 to-dsr-dark/90 z-10" />

      {/* Hero Typography Payload */}
      <div className="relative z-20 px-6 text-center w-full max-w-[90vw]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-dsr-gold uppercase tracking-[0.2em] font-medium text-sm md:text-base">
            Stillness. Freedom. Connection.
          </span>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl text-dsr-base leading-tight drop-shadow-2xl max-w-5xl">
            Sreekaram Infra<br />Brundhavanam
          </h1>

          {/* Download Brochure CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 w-full md:w-fit"
          >
            <a
              href="/Sreekaram_Brundhavanam.pdf"
              download="Sreekaram-Infra-Brundhavanam.pdf"
              className="group relative inline-flex items-center justify-center gap-3 w-full md:w-fit px-8 py-4 bg-dsr-gold text-dsr-dark font-serif text-lg tracking-wide rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-100 luxury-shadow"
            >
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
              <span>Download Brochure</span>

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
