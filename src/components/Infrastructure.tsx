"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, Droplets } from "lucide-react";

type CategoryData = {
  id: string;
  icon: any;
  title: string;
  items: string[];
};

const infrastructureData: CategoryData[] = [
  {
    id: "security",
    icon: ShieldCheck,
    title: "Security Framework",
    items: [
      "24x7 High-Definition CCTV surveillance across all zones",
      "Automated Boom Barrier entry systems at all gates",
      "Advanced Intercom connectivity bridging all residences to security",
    ],
  },
  {
    id: "utilities",
    icon: Zap,
    title: "Hidden Utilities",
    items: [
      "Concealed underground electrical cabling ensuring pristine aesthetics",
      "Dedicated high-capacity transformers for uninterrupted power",
      "Subsurface layout-wide master drainage network",
      "Integrated EV Fast-Charging stations for modern commute",
    ],
  },
  {
    id: "sustainability",
    icon: Droplets,
    title: "Sustainability & Eco-Systems",
    items: [
      "Dual Water Provisioning: Deep Borewell & Municipal Tap",
      "100% Comprehensive Power Backup for all common areas",
      "High-efficiency on-site Sewage Treatment Plant (STP)",
      "Solar-powered avenue lighting cutting down ambient grid reliance",
    ],
  },
];

export default function Infrastructure() {
  const [activeTab, setActiveTab] = useState(infrastructureData[0].id);

  return (
    <section className="py-24 bg-dsr-dark relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-dsr-base mb-4">Foundation & Infrastructure</h2>
          <p className="text-dsr-base/80 text-lg max-w-2xl mx-auto font-light">
            Engineered meticulously below the surface to guarantee a life of seamless, invisible luxury above it.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Tab Navigation Menu */}
          <div className="lg:w-1/3 flex flex-col space-y-4">
            {infrastructureData.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-4 p-5 rounded-sm transition-all duration-500 luxury-shadow text-left border-l-4 ${
                    isActive 
                      ? "bg-dsr-stone/10 border-dsr-gold" 
                      : "bg-transparent border-transparent hover:bg-dsr-stone/5 hover:border-dsr-gold/30"
                  }`}
                >
                  <div className={`p-2 rounded-sm ${isActive ? "bg-dsr-gold/20" : "bg-transparent"}`}>
                    <Icon className={`w-6 h-6 transition-colors ${isActive ? "text-dsr-gold" : "text-dsr-base/60"}`} />
                  </div>
                  <div>
                    <span className={`text-xl font-serif transition-colors duration-500 ${isActive ? "text-dsr-gold" : "text-dsr-base"}`}>
                      {category.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Content Display */}
          <div className="lg:w-2/3 bg-dsr-stone/5 border border-dsr-base/10 rounded-sm p-8 lg:p-12 min-h-[400px] flex items-center luxury-shadow relative overflow-hidden">
            <AnimatePresence mode="wait">
              {infrastructureData.map((category) => {
                if (category.id !== activeTab) return null;
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <h3 className="text-3xl font-serif text-dsr-base mb-8 pb-4 border-b border-dsr-gold/20 flex items-center gap-3">
                      <category.icon className="w-8 h-8 text-dsr-gold" />
                      {category.title}
                    </h3>
                    
                    <ul className="space-y-6">
                      {category.items.map((item, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.15 }}
                          className="flex items-start gap-4 text-dsr-base/90 text-lg font-light leading-relaxed"
                        >
                          <span className="w-2 h-2 rounded-full bg-dsr-gold mt-2.5 shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
