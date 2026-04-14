"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const engineeringPoints = [
  "3-Star Facilities",
  "100% Vastu-compliant layout",
  "40-feet & 30-feet wide internal roads (as per AHUDA norms)",
  "Grand entrance arch with secure gated access",
  "LED street lighting and avenue plantation",
  "Underground drainage system",
  "Overhead water tank with borewell connectivity",
  "Underground electrical cabling with dedicated transformer",
  "Power backup for common areas",
  "Individual tap connections for each plot",
  "100 acres of preserved natural forest nearby"
];

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function ProjectHighlights() {
  return (
    <section className="py-24 bg-dsr-base relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-serif text-dsr-dark mb-4"
          >
            Engineered for <span className="text-dsr-gold">Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto font-light"
          >
            A definitive manifestation of uncompromised quality and visionary planning. Discover the foundation of ultra-luxury living.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10"
        >
          {engineeringPoints.map((point, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-sm luxury-shadow group hover:border-dsr-gold/30 transition-all duration-500"
            >
              <div className="mt-1 p-1 bg-dsr-gold/10 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Check className="w-4 h-4 text-dsr-gold" />
              </div>
              <p className="text-dsr-dark/80 font-medium leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
