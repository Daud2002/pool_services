"use client";
import React from 'react';

const benefits = [
  {
    title: 'Reliable, On-Time Service',
    description: 'We value your time — our team arrives as scheduled and gets the job done efficiently, leaving your pool and yard spotless every time.',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Professional Care & Expertise',
    description: 'With skilled technicians and high-quality equipment, we ensure your pool stays crystal clear and your landscape always looks its best.',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Affordable & Transparent Pricing',
    description: 'No hidden costs, no surprises — just honest rates for premium cleaning and maintenance services that fit your budget.',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Complete Outdoor Maintenance',
    description: 'From routine pool cleaning to lawn care and landscaping, we handle everything so you can relax and enjoy your outdoor space stress-free.',
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const OurBenefits = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden m-5 rounded-3xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#00182f]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url('/assets/bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h2 className="text-sm sm:text-base font-bold text-sky-400 uppercase tracking-wider">Our Benefits</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight px-4">
            Effortless Pool Care, Superior Benefits For You
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-sky-100/80 max-w-3xl mx-auto px-4">
            Experience the difference with our comprehensive outdoor maintenance solutions
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-[#003a6e]/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-sky-500/20 hover:border-sky-400/40 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 text-sky-400">
                {benefit.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                {benefit.title}
              </h4>

              {/* Description */}
              <p className="text-sm sm:text-base text-sky-100/70 leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;