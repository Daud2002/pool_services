"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ServiceData, getAllServices } from '@/data/servicesData';
import Navbar from './Navbar';
import service_hero from '/assets/services_hero.jpg';
import Footer from './Footer';

interface ServicePageProps {
  service: ServiceData | null;
}

// Image Carousel Component
function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* Main Image */}
      <div className="relative h-96 sm:h-[450px] rounded-2xl overflow-hidden shadow-xl bg-gray-200 group">
        <Image
          src={images[currentIndex]}
          alt={`Service image ${currentIndex + 1}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Shine Effect */}
        <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent rounded-2xl pointer-events-none"></div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#002D57] p-3 rounded-full shadow-lg transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#002D57] p-3 rounded-full shadow-lg transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all group/thumb ${index === currentIndex
                ? 'border-sky-600 shadow-lg'
                : 'border-gray-300 hover:border-sky-400'
              }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover group-hover/thumb:scale-110 transition-transform duration-700"
            />
            {/* Shine Effect */}
            <div className="absolute inset-0 transform -translate-x-full group-hover/thumb:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent rounded-lg pointer-events-none"></div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicePage({ service }: ServicePageProps) {
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#002D57] mb-4">Service Not Found</h1>
          <p className="text-gray-600 text-lg">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[300px] md:h-[400px] lg:h-[500px] mx-3 sm:mx-4 md:mx-6 m-7 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl">
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 rounded-lg sm:rounded-xl md:rounded-2xl">
          <Navbar />
        </div>

        <Image
          src={service.titleImage || "/assets/services_hero.jpg"}
          alt={service.title}
          fill
          className="object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col justify-center items-start p-3 sm:p-4 md:p-6 lg:p-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-2 sm:mb-4 leading-tight">
            {service.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-sky-300 font-semibold mb-1 sm:mb-2 tracking-wider flex flex-row items-center gap-1">
            services<span>/{service.slug}</span>
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl text-sky-200 max-w-2xl line-clamp-2 md:line-clamp-none">
            {service.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Service Details Section with Carousel */}
      {service.detailedSection && (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 sm:mb-20 md:mb-24"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#002D57] mb-3 sm:mb-4">
                Service Overview
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Detailed insights and comprehensive benefits of our {service.title} service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Image Carousel */}
              <ImageCarousel images={service.detailedSection.galleryImages} />

              {/* Right Side - Service Details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Description */}
                <div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {service.detailedSection.description}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002D57] mb-6">
                    Key Benefits
                  </h3>
                  <div className="space-y-4">
                    {service.detailedSection.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl border-l-4 border-sky-600 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Service Specific Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 sm:p-8 border-2 border-sky-200"
                >
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#002D57] mb-4">
                    {service.detailedSection.specificHeading}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.detailedSection.specificDetail}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Description */}
          {service.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-16 lg:mb-20"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}

          {/* Features Grid */}
          {service.features.length > 0 && (
            <div className="mb-10 sm:mb-14 md:mb-16 lg:mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#002D57] mb-8 sm:mb-10 md:mb-12 text-center"
              >
                Key Features
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#002D57] mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {service.benefits.length > 0 && (
            <div className="mb-16 sm:mb-20 md:mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002D57] mb-12 text-center"
              >
                Benefits
              </motion.h2>
              <div className="max-w-3xl mx-auto">
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Process Section */}
          {service.process.length > 0 && (
            <div className="mb-16 sm:mb-20 md:mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002D57] mb-12 text-center"
              >
                Our Process
              </motion.h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl border-2 border-sky-200 p-6 sm:p-8 hover:border-sky-400 transition-colors"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#002D57] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Section */}
          {service.gallery.length > 0 && (
            <div className="mb-16 sm:mb-20 md:mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002D57] mb-12 text-center"
              >
                Gallery
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative h-64 rounded-2xl overflow-hidden shadow-lg group"
                  >
                    <Image
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Shine Effect */}
                    <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent rounded-2xl pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={service.titleImage || "/assets/services_hero.jpg"}
                alt="Service background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-8 sm:p-12 md:p-20 lg:p-24">
              <div>
                {/* Left Side - Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="text-white space-y-6"
                >
                  <div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                      {service.cta.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-sky-100 leading-relaxed">
                      {service.cta.description}
                    </p>
                  </div>
                  <div className='flex flex-row gap-3'>
                    <a
                      href="/contact"
                      className="inline-block bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 sm:px-12 rounded-xl hover:bg-white/30 transition-all duration-300 text-lg transform hover:scale-105 shadow-l"
                    >
                      {service.cta.buttonText}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-widest">
                More Services
              </span>
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#002D57] mb-3 sm:mb-4">
              Our Complete Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our full range of professional pool services
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          >
            {getAllServices().map((svc, index) => (
              <Link key={svc.id} href={`/services/${svc.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative h-full rounded-2xl border-2 overflow-hidden transition-all duration-300 cursor-pointer group ${service.slug === svc.slug
                      ? 'bg-gradient-to-br from-sky-500 via-blue-500 to-blue-600 border-sky-600 shadow-xl shadow-sky-500/30'
                      : 'bg-white border-gray-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-200/40 hover:-translate-y-1'
                    }`}
                >
                  {/* Background decorative element */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 transition-all duration-500 ${service.slug === svc.slug ? 'bg-white' : 'bg-sky-500 group-hover:scale-150'
                    }`}></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                    {/* Icon Box */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${service.slug === svc.slug
                        ? 'bg-white/20 shadow-lg'
                        : 'bg-sky-100 group-hover:bg-sky-200 group-hover:scale-110'
                      }`}>
                      <svg className={`w-8 h-8 transition-colors duration-300 ${service.slug === svc.slug ? 'text-white' : 'text-sky-600'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg sm:text-xl font-bold mb-3 transition-colors duration-300 ${service.slug === svc.slug ? 'text-white' : 'text-[#002D57] group-hover:text-sky-600'
                      }`}>
                      {svc.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm sm:text-base mb-6 flex-grow transition-colors duration-300 ${service.slug === svc.slug ? 'text-blue-50' : 'text-gray-600 group-hover:text-gray-700'
                      }`}>
                      Professional {svc.title.toLowerCase()} services tailored to your needs
                    </p>

                    {/* Arrow Footer */}
                    <div className="flex items-center gap-2 transition-all duration-300">
                      <span className={`text-sm font-semibold transition-colors duration-300 ${service.slug === svc.slug ? 'text-white' : 'text-sky-600 group-hover:text-sky-700'
                        }`}>
                        Learn More
                      </span>
                      <svg className={`w-5 h-5 transition-all duration-300 ${service.slug === svc.slug
                          ? 'text-white translate-x-1'
                          : 'text-sky-600 group-hover:translate-x-2'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-widest">
                Questions
              </span>
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#002D57] mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about {service.title}
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-2 sm:space-y-3 md:space-y-4"
          >
            {service.faqs && service.faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// FAQ Item Component with Accordion
function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-5 sm:p-6 flex items-center justify-between rounded-2xl border-2 transition-all duration-300 ${isOpen
            ? 'bg-gradient-to-r from-sky-50 to-blue-50 border-sky-300 shadow-lg shadow-sky-200/30'
            : 'bg-white border-gray-200 hover:border-sky-300 hover:shadow-md'
          }`}
      >
        <h3 className={`text-base sm:text-lg font-bold text-left pr-4 leading-snug transition-colors duration-300 ${isOpen ? 'text-sky-700' : 'text-[#002D57] group-hover:text-sky-600'
          }`}>
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
              ? 'bg-sky-500 text-white'
              : 'bg-sky-100 text-sky-600 group-hover:bg-sky-200'
            }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 sm:px-6 py-4 sm:py-5 bg-gradient-to-br from-sky-50/80 to-blue-50/80 rounded-b-2xl border-b-2 border-l-2 border-r-2 border-sky-200">
          <p className="text-gray-700 leading-relaxed text-base">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
