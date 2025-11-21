"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: '1',
    title: 'Book a Service',
    description: 'Schedule an appointment online in minutes.',
    image: '/assets/random.jpeg', // Replace with your image path
  },
  {
    icon: '2',
    title: 'Personalized Plan',
    description: 'We create a custom plan for your needs.',
    image: '/assets/about_2.jpg', // Replace with your image path
  },
  {
    icon: '3',
    title: 'Expert Execution',
    description: 'Our certified technicians get the job done.',
    image: '/assets/poolClean_service.jpeg', // Replace with your image path
  },
  {
    icon: '4',
    title: 'Ongoing Support',
    description: 'Enjoy peace of mind with our reliable support.',
    image: '/assets/testimonial.jpg', // Replace with your image path
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50/50 to-white"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `url('/assets/bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-5 sm:top-10 right-10 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-sky-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 left-10 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-300/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h2 className="text-sm sm:text-base font-bold text-sky-600 uppercase tracking-wider">How It Works</h2>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002D57] mb-3 sm:mb-4 px-4"
          >
            A Simple, Seamless Process
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Follow these four easy steps to get your pool looking pristine and beautiful
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col border-2 border-gray-100 hover:border-sky-300 transform hover:-translate-y-2">
                <div className="relative h-52 sm:h-56 md:h-64 overflow-hidden">
                  <Image 
                    src={step.image} 
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                  
                  {/* Number badge */}
                  <div className="absolute top-4 sm:top-5 left-4 sm:left-5 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl transition-all duration-300 group-hover:scale-110 ring-2 sm:ring-4 ring-white/50">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-blue-600">
                      {step.icon}
                    </span>
                  </div>
                  
                  {/* Step indicator */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-sky-500/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs sm:text-sm font-bold text-white">Step {step.icon}</span>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex-grow flex flex-col space-y-3 sm:space-y-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#002D57] group-hover:text-sky-600 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                  <div className="pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sky-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-xs sm:text-sm">Get Started</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
