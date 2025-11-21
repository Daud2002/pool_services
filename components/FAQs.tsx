"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from 'framer-motion';
import ContactFormComponent from "./ContactForm";

const faqs = [
  {
    question: "What pool maintenance services do you offer?",
    answer:
      "We provide comprehensive pool maintenance services including water testing and balancing, cleaning and skimming, equipment inspection, filter cleaning, chemical treatment, and regular maintenance visits. Our packages are customizable to meet your specific needs.",
  },
  {
    question: "How often should I have my pool serviced?",
    answer:
      "We recommend weekly maintenance for residential pools and 2-3 times per week for commercial pools. However, the frequency depends on factors like pool usage, weather conditions, and your specific requirements. Our team can assess your pool and recommend the ideal maintenance schedule.",
  },
  {
    question: "Do you provide emergency pool repair services?",
    answer:
      "Yes, we offer 24/7 emergency pool repair services across Dubai. Whether it's a equipment malfunction, leak, or water quality issue, our experienced technicians can respond quickly to resolve any urgent pool problems.",
  },
  {
    question: "What areas in Dubai do you service?",
    answer:
      "We service all areas across Dubai including Palm Jumeirah, Dubai Marina, Downtown Dubai, Arabian Ranches, Emirates Hills, JBR, Jumeirah, Dubai Hills, Business Bay, and many more locations. Contact us to confirm service availability in your area.",
  },
  {
    question: "How much does pool maintenance cost?",
    answer:
      "Pool maintenance costs vary based on pool size, service frequency, and specific requirements. We offer competitive transparent pricing with no hidden fees. Contact us for a free quote tailored to your pool's needs. We have flexible packages starting from affordable monthly rates.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[url('/assets/bg.png')] bg-cover bg-center relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/95 via-white/90 to-blue-50/95"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-sky-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-300/25 to-sky-400/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-200/10 to-blue-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-lg text-sky-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 border border-sky-200/50"
          >
            <div className="w-2.5 h-2.5 bg-sky-500 rounded-full animate-pulse shadow-lg shadow-sky-500/50"></div>
            Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#002D57] mb-6 leading-tight"
          >
            Contact Us & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600">FAQs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Have questions? We're here to help. Send us a message or check our
            frequently asked questions below.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <ContactFormComponent />

          {/* FAQs Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 -rotate-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#002D57]">
                Frequently Asked Questions
              </h3>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-transparent hover:border-sky-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sky-200/30 group"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-sky-50/80 hover:to-blue-50/80 transition-all duration-300 group"
                  >
                    <span className="font-bold text-[#002D57] pr-4 group-hover:text-sky-600 transition-colors">
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center transition-all duration-300 ${
                      openIndex === index ? "bg-sky-500 rotate-180" : "group-hover:bg-sky-200"
                    }`}>
                      <ChevronDown
                        className={`w-5 h-5 transition-colors ${
                          openIndex === index ? "text-white" : "text-sky-600"
                        }`}
                      />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed border-t border-sky-100/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;