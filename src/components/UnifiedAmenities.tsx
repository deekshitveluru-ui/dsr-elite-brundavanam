"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const AmenitiesModal = dynamic(() => import("./AmenitiesModal"), { ssr: false });

const amenities = [
  { id: 1, title: 'Luxury Infinity Pool', src: 'https://images.unsplash.com/photo-1543489822-c49534f3271f?w=600&auto=format&fit=crop', colSpan: "col-span-1 md:col-span-2" },
  { id: 2, title: 'Premium Clubhouse', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop', colSpan: "col-span-1 md:col-span-2" },
  { id: 3, title: 'Wave Pool & Rain Dance', src: 'https://images.unsplash.com/photo-1695016744524-3431b9c9ffd6?w=600&auto=format&fit=crop', colSpan: "col-span-1" },
  { id: 4, title: 'Forest Zipline Adventure', src: 'https://images.unsplash.com/photo-1531204709756-1c7a41bf8936?w=600&auto=format&fit=crop', colSpan: "col-span-1" },
  { id: 5, title: 'Go-Karting Track', src: 'https://images.unsplash.com/photo-1640084347692-e8f6b84caa7c?q=80&w=1171&auto=format&fit=crop', colSpan: "col-span-1 md:col-span-2" }
];

export default function UnifiedAmenities() {
  const [failedImages, setFailedImages] = useState<number[]>([]);

  const handleImageError = (id: number) => {
    setFailedImages(prev => [...prev, id]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-dsr-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-dsr-base mb-4">Resort & <span className="text-dsr-gold">Township</span > Lifestyle</h2>
          <p className="text-dsr-base/80 text-lg max-w-2xl mx-auto font-light">
            Glimpse into the premium lifestyle awaiting you. Select from carefully curated world-class amenities designed for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {amenities.map((item, index) => {
            const hasFailed = failedImages.includes(item.id);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-sm overflow-hidden group cursor-pointer luxury-shadow ${item.colSpan}`}
              >
                {/* Fallback Color or Next Image with Auto-Scale Hover */}
                {hasFailed ? (
                  <div className="absolute inset-0 bg-dsr-dark border border-dsr-gold/20" />
                ) : (
                  <Image
                    src={item.src}
                    alt={`View of ${item.title} at DSR Elite Brundavanam`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError(item.id)}
                    className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />
                )}

                {/* Elegant Gradient Overlay with dsr-dark */}
                <div className="absolute inset-0 bg-gradient-to-t from-dsr-dark/95 via-dsr-dark/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-6 left-6 z-10">
                  <h3 className="text-2xl font-serif text-dsr-base mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-dsr-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trigger Button and Modal */}
        <AmenitiesModal />
      </div>
    </motion.section>
  );
}
