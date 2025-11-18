"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CallButton from '@/components/CallButton';
import Link from 'next/link';

// Image Carousel Component with Navigation
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl group">
        <Image
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent pointer-events-none"></div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#002D57] p-3 rounded-full shadow-lg transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#002D57] p-3 rounded-full shadow-lg transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${index === currentIndex
              ? 'border-sky-500 shadow-lg scale-105'
              : 'border-gray-300 hover:border-sky-400'
              }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

const Landscaping = () => {
  const dummyImages = [
    '/assets/landscape/land_1.jpeg',
    '/assets/landscape/land_2.jpeg',
    '/assets/landscape/land_3.jpeg',
    '/assets/landscape/land_4.jpeg',
    '/assets/landscape/land_5.jpeg',
    '/assets/landscape/land_6.jpeg',
    '/assets/landscape/land_7.jpeg'
  ];

  const hardScapeImages = [
    "/assets/hard/hard_1.jpeg",
    "/assets/hard/hard_2.jpeg",
    "/assets/hard/hard_3.jpeg",
    "/assets/hard/hard_4.jpeg"
  ];

  const irrigationImages = [
    "/assets/irrigation/irrigation_4.jpeg",
    "/assets/irrigation/irrigation_1.jpeg",
    "/assets/irrigation/irrigation_3.jpeg",
    "/assets/irrigation/irrigation_2.jpeg"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[300px] md:h-[400px] lg:h-[500px] mx-3 sm:mx-4 md:mx-6 m-7 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl">
        <div className="absolute top-0 left-0 right-0 rounded-lg sm:rounded-xl md:rounded-2xl z-50">
          <Navbar />
        </div>

        <Image
          src='/assets/landscape/land_1.jpeg'
          alt="Hero image"
          fill
          className="object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl" />

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col justify-center items-start p-3 sm:p-4 md:p-6 lg:p-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-2 sm:mb-4 leading-tight">
            Landscape Design & Installation
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-sky-300 font-semibold mb-1 sm:mb-2 tracking-wider">
            /landscape
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl text-sky-200 max-w-2xl line-clamp-2 md:line-clamp-none">
            Expert landscaping services tailored for Dubai's unique environment
          </p>
        </motion.div>
      </section>

      {/* Section 1: General Landscaping Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Part 1: Image Carousel */}
            <div>
              <ImageCarousel images={dummyImages} title="Landscaping" />
            </div>

            {/* Part 2: Details and Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002D57] mb-4">
                  Professional Landscaping Services
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Aquascapes Dubai, we specialize in creating stunning outdoor environments that perfectly
                  blend beauty, functionality, and sustainability. Our expert team brings over 20 years of
                  experience in transforming ordinary spaces into extraordinary landscapes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We understand Dubai's unique climate challenges and design landscapes that not only look
                  beautiful but thrive in the desert environment with minimal water consumption and maintenance.
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-[#002D57] mb-6">Why Choose Our Landscaping Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🌿",
                      title: "Eco-Friendly Solutions",
                    },
                    {
                      icon: "💎",
                      title: "Premium Quality",
                    },
                    {
                      icon: "🎨",
                      title: "Custom Design",
                    },
                    {
                      icon: "🛡️",
                      title: "Guaranteed work",
                    }
                  ].map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-[#0f1f33f1] rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl opacity-50 px-3 py-2 rounded-2xl">{benefit.icon}</span>
                        <h4 className="font-bold text-white text-base">
                          {benefit.title}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Section - Dark Blue Background */}
      <section className="relative h-[40vh] bg-[#002D57] flex items-center justify-center overflow-hidden m-7 rounded-2xl">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/assets/services_hero.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 container mx-auto px-4 pl-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-lg md:text-xl text-sky-200 mb-8 max-w-3xl">
            Let our expert team create the outdoor oasis you've always dreamed of.
            From design to installation, we handle everything with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <CallButton />
          </div>
        </motion.div>
      </section>

      {/* Section 3: Hard Landscape */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                Hard Landscape
              </span>
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D57]">
              Structural & Architectural Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Details and Benefits (Left Side) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:order-1"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#002D57] mb-4">What is Hard Landscaping?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hard landscaping encompasses all the non-living, structural elements that provide the framework
                  and functionality of your outdoor space. This includes pathways, patios, walls, pergolas,
                  decking, and other architectural features.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We use premium materials and expert construction techniques to create durable structures that
                  withstand Dubai's harsh climate while adding significant aesthetic and monetary value to your
                  property.
                </p>
              </div>

              {/* Services List */}
              <div className="py-6">
                <h4 className="text-lg font-bold text-[#002D57] mb-5">Our Hard Landscape Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Paving & Pathways" },
                    { title: "Patio Construction" },
                    { title: "Retaining Walls" },
                    { title: "Pergolas & Gazebos" },
                    { title: "Outdoor Kitchens" },
                    { title: "Fencing & Screens" },
                    { title: "Water Features" },
                    { title: "Outdoor Lighting" }
                  ].map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-start gap-3 bg-[#0f1f33f1] text-white rounded-lg p-3 hover:shadow-sm transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="text-sm font-semibold block">{service.title}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Carousel (Right Side) */}
            <div className="lg:order-2">
              <ImageCarousel images={hardScapeImages} title="Hard Landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Irrigation Work */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">
                Irrigation Work
              </span>
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D57]">
              Smart Watering Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Carousel */}
            <div>
              <ImageCarousel images={irrigationImages} title="Irrigation System" />
            </div>

            {/* Details and Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#002D57] mb-4">What is Irrigation Work?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Professional irrigation work involves designing, installing, and maintaining automated watering
                  systems that efficiently deliver water to your landscape. Modern systems use smart technology to
                  optimize water usage while ensuring optimal plant health.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our irrigation solutions are specifically engineered for Dubai's climate, incorporating water-saving
                  technologies, smart controllers, and zone-based watering to reduce consumption by up to 50% while
                  keeping your landscape thriving.
                </p>
              </div>

              {/* Services List */}
              <div className="py-6">
                <h4 className="text-lg font-bold text-[#002D57] mb-5">Our Irrigation Services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "System Design & Planning" },
                    { title: "Drip Irrigation" },
                    { title: "Sprinkler Systems" },
                    { title: "Smart Controllers" },
                    { title: "Zone Configuration" },
                    { title: "Pressure Optimization" },
                    { title: "Maintenance & Repairs" },
                    { title: "System Upgrades" }
                  ].map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="flex items-start gap-3 bg-[#0f1f33f1] text-white rounded-lg p-3 hover:shadow-sm transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <span className="text-sm font-semibold block">{service.title}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landscaping;