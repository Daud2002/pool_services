"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Pool Cleaning',
    description: 'Comprehensive cleaning services to keep your pool sparkling and healthy.',
    image: '/assets/poolClean_service.jpeg',
    href: '/services/pool-cleaning',
  },
  {
    title: 'Pool Construction',
    description: 'Custom pool design and construction to build the oasis of your dreams.',
    image: '/assets/poolConstruction_service.jpeg',
    href: '/services/pool-construction',
  },
  {
    title: 'Landscaping',
    description: 'Stunning landscape design to complement your pool and outdoor living space.',
    image: '/assets/landscape_service.jpeg',
    href: '/services/landscaping',
  },
];

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const ServiceCard = ({ title, description, image, href }: ServiceCardProps) => (
  <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group ring-2 ring-gray-100 hover:ring-sky-200 transition-all duration-500">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transform transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-linear-to-t from-[#001D3D]/95 via-[#001D3D]/70 to-transparent" />
    
    {/* Hover overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-sky-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Shine Effect */}
    <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent" />
    
    <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white transform transition-transform duration-500">
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-sky-500/20 backdrop-blur-sm flex items-center justify-center border border-sky-400/30">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-sky-200 uppercase tracking-wider">Our Service</span>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 leading-tight drop-shadow-lg">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">{description}</p>
        <Link href={href} className="inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-linear-to-r from-sky-500 to-blue-600 text-white shadow-xl transition-all duration-300 hover:shadow-2xl group-hover:w-36 sm:group-hover:w-44 overflow-hidden mt-4 sm:mt-6">
          <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <span className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 font-semibold text-sm sm:text-base">
            Learn More
          </span>
        </Link>
      </div>
    </div>
  </div>
);

const OurServices = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-linear-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-sky-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='flex flex-row items-center gap-2 sm:gap-3 mb-3 sm:mb-4'
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <img src="/assets/star.png" alt="" className='w-5 h-5 sm:w-6 sm:h-6'/>
            </div>
            <h2 className="text-sm sm:text-base font-bold text-sky-600 uppercase tracking-wider">Our Services</h2>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002D57] mb-3 sm:mb-4 text-center"
          >
            What We Offer
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl text-center px-4"
          >
            Comprehensive pool and landscape solutions tailored to your needs
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
