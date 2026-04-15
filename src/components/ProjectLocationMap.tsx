"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function ProjectLocationMap() {
  return (
    <section className="py-24 md:py-32 bg-dsr-dark relative z-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Full-width Map Container */}
        <div className="relative w-full h-[600px] bg-[#1a1a1a] rounded-sm border border-white/5 overflow-hidden luxury-shadow group">

          {/* Simulated Premium Mapbox Dark v11 Terrain Layer */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale contrast-150 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-dsr-dark via-transparent to-dsr-dark/40" />

          {/* Glowing Project Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
            <div className="relative flex justify-center items-center">
              <div className="absolute w-24 h-24 bg-dsr-gold/20 rounded-full animate-ping blur-sm" />
              <div className="absolute w-12 h-12 bg-dsr-gold/30 rounded-full animate-pulse blur-sm" />
              <div className="relative w-10 h-10 bg-dsr-dark border-2 border-dsr-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.5)] z-10">
                <MapPin className="w-5 h-5 text-dsr-gold ml-0.5" />
              </div>
            </div>
            <div className="mt-4 px-4 py-2 bg-dsr-dark/80 backdrop-blur-md border border-dsr-gold/30 rounded-sm">
              <span className="text-dsr-gold text-sm tracking-widest uppercase font-bold">Sreekaram Infra Brundavanam</span>
            </div>
          </div>

          {/* Glassmorphic Interaction Overlay UI */}
          <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-sm shadow-2xl flex flex-col items-start"
            >
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-serif text-dsr-base mb-2">Project Location</h3>
              <p className="text-dsr-base/80 font-light leading-relaxed mb-8">
                Located along NH-44
                Bengaluru-Hyderabad
                Highway
                <br />
                Ananthapuramu - 515001<br />
                Andhra Pradesh, India
              </p>

              <a
                href="https://maps.app.goo.gl/M9e2KtkdCozYapvX7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-dsr-gold text-dsr-dark border border-transparent px-6 py-4 rounded-sm font-medium hover:bg-[#b08d4b] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:shadow-[0_0_25px_rgba(197,160,89,0.6)] group"
              >
                <Navigation className="w-5 h-5 group-hover:animate-bounce" />
                <span>Open in Google Maps</span>
              </a>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
