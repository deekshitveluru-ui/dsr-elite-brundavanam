"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

// Representative clean luxury dataset
const ameniityCategories = [
  {
    category: "Recreation & Leisure",
    items: ["Infinity Swimming Pool", "Open Air Theater", "Luxury Clubhouse", "Multilevel Function Hall", "Botanical Garden", "Go-Karting Track"]
  },
  {
    category: "Wellness & Nature",
    items: ["Miyawaki Forest Trails", "Digital Goshala", "Outdoor Yoga Clearings", "Meditation Pavilions", "Ayurvedic Spa Center"]
  },
  {
    category: "Sports & Fitness",
    items: ["Wave Pool & Rain Dance", "Trekking Routes", "Zipline Adventure", "Premium Tennis Courts", "State-of-the-Art Gymnasium"]
  },
  {
    category: "Community & Events",
    items: ["Courtyard Houses", "Outdoor Wedding Avenue", "Central Plaza", "Children's Play Area", "Cafes & Dining Spaces"]
  }
];

export default function AmenitiesModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div className="mt-16 flex justify-center">
        <button 
          onClick={() => setIsOpen(true)}
          className="px-8 py-4 border border-dsr-gold text-dsr-gold bg-transparent hover:bg-dsr-gold hover:text-dsr-dark transition-all duration-300 font-medium tracking-wider text-sm uppercase rounded-sm luxury-shadow"
        >
          View Full Amenities Directory
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 backdrop-blur-md bg-dsr-dark/90 z-[100]"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-[110] w-full max-w-5xl bg-dsr-base rounded-sm shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 md:p-8 border-b border-dsr-dark/10 bg-white shrink-0">
                <div>
                  <h3 className="text-3xl font-serif text-dsr-dark">Master Directory</h3>
                  <p className="text-gray-500 font-light mt-1">49+ Curated Lifestyle Features</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-sm transition-colors group"
                >
                  <X className="w-8 h-8 text-dsr-dark/50 group-hover:text-dsr-dark" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {ameniityCategories.map((sect, idx) => (
                    <div key={idx} className="space-y-6">
                      <h4 className="text-2xl font-serif text-dsr-dark border-b border-dsr-gold/30 pb-3 inline-block">
                        {sect.category}
                      </h4>
                      <ul className="space-y-4">
                        {sect.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-600 font-light text-lg">
                            <span className="p-1 rounded-sm bg-dsr-gold/10 shrink-0">
                              <Check className="w-4 h-4 text-dsr-gold" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
