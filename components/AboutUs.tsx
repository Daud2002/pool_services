import React from 'react';
import Image from 'next/image';
import CallButton from './CallButton';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-linear-to-br from-slate-50 via-white to-sky-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="relative h-[350px] xs:h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] order-2 md:order-1">
            {/* Main image */}
            <div className="absolute top-0 left-0 w-[75%] sm:w-[80%] h-[80%] sm:h-[85%] md:h-[90%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group ring-2 ring-white/50">
              <Image
                src="/assets/about_2.jpg"
                alt="Pool maintenance professional"
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-sky-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shine Effect */}
              <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* Smaller image */}
            <div className="absolute bottom-0 right-0 w-[50%] sm:w-[55%] h-[40%] sm:h-[45%] md:h-[50%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white group ring-2 ring-sky-100">
              <Image
                src="/assets/about_1.jpg"
                alt="Pristine swimming pool"
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shine Effect */}
              <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* 25+ Years block */}
            <div className="absolute top-[12%] xs:top-[15%] sm:top-[20%] right-0 w-[40%] xs:w-[42%] sm:w-[45%] h-auto bg-linear-to-br from-sky-500 via-blue-500 to-blue-600 text-white p-3 xs:p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300 ring-2 sm:ring-4 ring-white/50">
              <h3 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-1 sm:mb-2 drop-shadow-lg">25+</h3>
              <p className="text-xs xs:text-sm sm:text-base md:text-xl font-bold leading-tight tracking-wide">Years of Excellence</p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 order-1 md:order-2">
            <div className='flex flex-row items-center gap-2 sm:gap-3'>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <img src="/assets/star.png" alt="" className='w-5 h-5 sm:w-6 sm:h-6' />
              </div>
              <h2 className="text-sm sm:text-base font-bold text-sky-600 uppercase tracking-wider">About Us</h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002D57] leading-tight">Your Trusted Partner for <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-600 to-blue-600">Pristine Pools</span></h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              For over two decades, we've combined expert pool maintenance, cutting-edge filtration solutions, and beautiful landscape design to create outdoor spaces that are safe, healthy, and stunning. Our certified and insured team is committed to quality workmanship on every job.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-2 sm:mt-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-semibold">Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base text-gray-700 font-semibold">Fully Insured</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <CallButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
