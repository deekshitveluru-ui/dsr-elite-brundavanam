"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  const contactDetails = [
    { icon: MapPin, text: "DSR Elite Infra Projects, #1-1347, Sri Nagar Colony, Ananthapuramu-515001." },
    { icon: Phone, text: "+91 9112230234 / +91 9182501331" },
    { icon: Mail, text: "info.dsrelite@gmail.com" },
  ];

  return (
    <section className="py-24 bg-dsr-dark relative border-t border-dsr-dark">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-dsr-base p-8 md:p-12 rounded-sm luxury-shadow border border-dsr-base">
              <h2 className="text-3xl font-serif font-bold text-dsr-dark mb-2">Inquire Now</h2>
              <p className="text-gray-600 mb-8 font-light">Schedule a site visit and secure your premium lifestyle.</p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-dsr-dark placeholder-gray-400 focus:outline-none focus:border-dsr-gold focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-dsr-dark placeholder-gray-400 focus:outline-none focus:border-dsr-gold focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-dsr-dark placeholder-gray-400 focus:outline-none focus:border-dsr-gold focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message..." 
                    rows={4}
                    className="w-full bg-white border border-gray-200 rounded-sm px-4 py-3 text-dsr-dark placeholder-gray-400 focus:outline-none focus:border-dsr-gold focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-dsr-gold py-4 rounded-sm flex items-center justify-center gap-2 text-white hover:bg-[#b08d4b] transition-all duration-300 font-bold uppercase tracking-wider text-sm group"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Contact Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-dsr-base mb-8"
            >
              Get in Touch with Us
            </motion.h2>

            <div className="space-y-8">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-sm bg-dsr-base border border-dsr-base flex items-center justify-center shrink-0 luxury-shadow group-hover:border-dsr-gold transition-colors">
                      <Icon className="w-5 h-5 text-dsr-gold" />
                    </div>
                    <p className="text-dsr-base text-lg leading-relaxed pt-2 group-hover:text-dsr-gold transition-colors font-light">
                      {detail.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
