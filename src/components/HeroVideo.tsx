"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-dsr-dark overflow-hidden">

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
      <div className="relative z-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-dsr-gold uppercase tracking-[0.3em] font-medium text-sm md:text-base">
            Stillness. Freedom. Connection.
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-dsr-base leading-tight drop-shadow-2xl max-w-5xl">
            DSR Elite Brundhavanam
          </h1>
        </motion.div>
      </div>

    </section>
  );
}
