"use client";

import { motion } from "framer-motion";

export default function VideoTour() {
  return (
    <section className="py-24 bg-dsr-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-dsr-base mb-4">Immersive Virtual Tour</h2>
          <p className="text-dsr-gold text-lg max-w-2xl mx-auto font-light tracking-wide">
            Experience Brundavanam through our complete 3D architectural walkthrough
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-5xl mx-auto pb-[56.25%] sm:pb-[56.25%] rounded-xl shadow-2xl overflow-hidden border border-dsr-gold/30"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/PrLe5u159eQ?si=mXs3LqUB3sa9PlvT" 
            title="DSR Elite Brundavanam Walkthrough" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="absolute top-0 left-0 w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
