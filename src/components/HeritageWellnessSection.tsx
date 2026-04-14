"use client";

import { motion } from "framer-motion";

export default function HeritageWellnessSection() {
  return (
    <section className="py-24 bg-dsr-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-dsr-dark mb-4">Heritage & Wellness</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
            Embrace serenity and spiritual well-being. A community rooted in tradition and holistic health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-sm overflow-hidden luxury-shadow h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Yoga and Wellness" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6 px-6"
          >
            <div className="border-l-4 border-dsr-gold pl-6">
              <h3 className="text-3xl font-serif text-dsr-dark mb-3">Holistic Living</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Our ultra-luxury township features meticulously designed Yoga clearings nestled within the 100-acre preserved forest. Breathe pristine air while embarking on your journey of mindfulness.
              </p>
            </div>

            <div className="border-l-4 border-dsr-emerald pl-6">
              <h3 className="text-3xl font-serif text-dsr-dark mb-3">The Goshala Subculture</h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                Centuries of tradition converge in our elegantly maintained Goshala. Beyond providing organic provisions to the community, it serves as an educational and spiritual cornerstone for families to connect with heritage.
              </p>
            </div>
            
            <button className="self-start mt-4 px-8 py-4 border border-dsr-gold text-dsr-gold hover:bg-dsr-gold hover:text-white transition-colors duration-300 tracking-wider text-sm uppercase font-semibold">
              Discover Our Roots
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
