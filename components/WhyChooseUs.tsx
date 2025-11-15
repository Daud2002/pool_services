"use client";
"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  {
    number: '5K+',
    label: 'Happy Customers',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
  },
  {
    number: '25+',
    label: 'Years of Experience',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    number: '500+',
    label: 'Pools Serviced',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Side */}
          <div className="relative order-2 lg:order-1 max-w-lg mx-auto lg:mx-0 px-4 sm:px-6 md:px-0">
            <div className="relative w-full aspect-square">
              {/* Large Image - Left (Square) */}
              <div className="absolute top-0 left-0 w-[85%] sm:w-[90%] h-[85%] sm:h-[90%] rounded-2xl overflow-hidden shadow-xl group z-10">
                <Image
                  src="/assets/about_2.jpg"
                  alt="Pool Service"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002D57]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Shine Effect */}
                <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute inset-0 ring-2 sm:ring-4 ring-white rounded-2xl"></div>
              </div>

              {/* Small Image - Top Right */}
              <div className="absolute -top-8 sm:-top-12 md:-top-16 -right-4 sm:-right-6 md:-right-10 w-[42%] sm:w-[45%] h-[28%] sm:h-[32%] rounded-2xl overflow-hidden shadow-xl group z-20">
                <Image
                  src="/assets/about_1.jpg"
                  alt="Pool Construction"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002D57]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Shine Effect */}
                <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute inset-0 ring-2 ring-white rounded-2xl"></div>
              </div>

              {/* Small Image - Bottom Right */}
              <div className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 -right-4 sm:-right-6 md:-right-10 w-[42%] sm:w-[45%] h-[28%] sm:h-[32%] rounded-2xl overflow-hidden shadow-xl group z-20">
                <Image
                  src="/assets/landscape_service.jpeg"
                  alt="Landscaping"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002D57]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Shine Effect */}
                <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="absolute inset-0 ring-2 ring-white rounded-2xl"></div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -top-8 sm:-top-10 md:-top-14 -left-6 sm:-left-8 md:-left-12 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse z-40">
              <div className="text-center text-white">
                <div className="text-base sm:text-lg md:text-xl font-bold">25+</div>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold">Years</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            {/* Section Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-sky-600 uppercase tracking-wider">Why Choose Us</h2>
            </motion.div>

            {/* Headline */}
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002D57] mb-4 sm:mb-6 leading-tight"
            >
              Dubai&apos;s Most Trusted Pool Service Provider
            </motion.h3>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12"
            >
              With decades of expertise and thousands of satisfied customers, we&apos;ve established ourselves as the premier choice for pool services in Dubai. Our commitment to excellence, attention to detail, and customer satisfaction sets us apart in the industry.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200 transform hover:-translate-y-1 overflow-hidden"
                >
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Number Row */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-sky-50 border-2 border-sky-200 rounded-lg sm:rounded-xl text-sky-600 group-hover:bg-sky-100 group-hover:border-sky-300 group-hover:scale-110 transition-all duration-300">
                        {stat.icon}
                      </div>

                      {/* Number */}
                      <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-br from-[#002D57] to-sky-700 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                    </div>

                    {/* Label */}
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-sky-600 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-sky-100/40 to-blue-100/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;