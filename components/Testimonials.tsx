"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ahmed Al Maktoum',
    role: 'Villa Owner, Palm Jumeirah',
    content: 'Aquascapes Dubai has been maintaining our pool for over two years now. Their attention to detail and professionalism is outstanding. The water is always crystal clear, and they never miss a scheduled visit.',
    rating: 5,
    image: '/assets/about_1.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Homeowner, Arabian Ranches',
    content: 'The best pool service in Dubai! Their team is incredibly reliable and knowledgeable. They transformed our backyard into a beautiful oasis. Highly recommend their landscaping services as well!',
    rating: 5,
    image: '/assets/about_2.jpg',
  },
  {
    name: 'Mohammed Hassan',
    role: 'Property Manager, Downtown',
    content: 'We manage multiple properties and Aquascapes handles all our pool maintenance. Their transparent pricing and consistent quality make them our go-to choice. The team is always punctual and professional.',
    rating: 5,
    image: '/assets/about_3.jpg',
  },
  {
    name: 'Lisa Thompson',
    role: 'Homeowner, Dubai Marina',
    content: 'Exceptional service from start to finish! They built our dream pool and continue to maintain it perfectly. The team is friendly, efficient, and truly cares about their work. Worth every dirham!',
    rating: 5,
    image: '/assets/service_1.jpg',
  },
  {
    name: 'Khalid Al Nahyan',
    role: 'Resort Manager, JBR',
    content: 'We have been working with Aquascapes for our resort pools for three years. Their expertise in commercial pool maintenance is unmatched. They handle everything efficiently and our guests always compliment the pristine pool conditions.',
    rating: 5,
    image: '/assets/about_1.jpg',
  },
  {
    name: 'Emily Roberts',
    role: 'Homeowner, Jumeirah',
    content: 'From installation to ongoing maintenance, Aquascapes has exceeded all expectations. Their eco-friendly approach and use of quality products ensure our pool is safe for our children. Highly professional team!',
    rating: 5,
    image: '/assets/about_2.jpg',
  },
  {
    name: 'Omar Al Farsi',
    role: 'Villa Owner, Emirates Hills',
    content: 'Outstanding service! They transformed our outdated pool into a modern masterpiece. The renovation was completed on time and within budget. Their maintenance service keeps it looking brand new every single day.',
    rating: 5,
    image: '/assets/about_3.jpg',
  },
  {
    name: 'Jennifer Williams',
    role: 'Homeowner, The Springs',
    content: 'I cannot recommend Aquascapes enough! Their team is always professional, courteous, and thorough. They take pride in their work and it shows. Our pool has never looked better since we started using their services.',
    rating: 5,
    image: '/assets/service_1.jpg',
  },
  {
    name: 'Abdullah Rahman',
    role: 'Property Developer, Business Bay',
    content: 'As a developer, I need reliable partners. Aquascapes Dubai has been our exclusive pool contractor for multiple projects. Their quality workmanship and timely delivery make them stand out in the industry.',
    rating: 5,
    image: '/assets/about_1.jpg',
  },
  {
    name: 'Maria Garcia',
    role: 'Homeowner, Dubai Hills',
    content: 'Excellent service from a truly dedicated team! They are responsive, knowledgeable, and always go the extra mile. Our pool maintenance has been hassle-free since switching to Aquascapes. Best decision we made!',
    rating: 5,
    image: '/assets/about_2.jpg',
  },
  {
    name: 'Rashid Al Mansoori',
    role: 'Villa Owner, Arabian Ranches',
    content: 'Five-star service all the way! Aquascapes maintains our pool to perfection. Their technicians are experts who provide valuable advice on pool care. The water quality is consistently excellent and the service is reliable.',
    rating: 5,
    image: '/assets/about_3.jpg',
  },
  {
    name: 'Sophie Chen',
    role: 'Homeowner, Motor City',
    content: 'Professional, efficient, and trustworthy! Aquascapes has been taking care of our pool for over a year now. They arrive on schedule, complete the work quickly, and leave everything spotless. Highly satisfied with their service!',
    rating: 5,
    image: '/assets/service_1.jpg',
  },
];

const stats = [
  {
    number: '99%',
    label: 'Committed to delivering excellence satisfaction.',
  },
  {
    number: '10K+',
    label: 'Our customers inspire our sustainable mission.',
  },
  {
    number: '50K+',
    label: 'Our customers inspire our sustainable vision.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPairs = Math.ceil(testimonials.length / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 when reaching the end
        return nextIndex >= totalPairs ? 0 : nextIndex;
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [totalPairs]);

  // Get current pair of testimonials
  const currentTestimonials = testimonials.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-sky-50/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h2 className="text-sm sm:text-base font-bold text-sky-600 uppercase tracking-wider">Testimonials</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002D57] mb-4 sm:mb-6 leading-tight">
            What Our Clients Say
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why hundreds of Dubai residents trust us with their pool and outdoor maintenance
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Reviews Section - 70% */}
          <div className="w-full lg:w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[550px] md:min-h-[450px]">
              {currentTestimonials.map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="bg-gradient-to-br from-white via-white to-sky-50/40 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-sky-100/50 hover:border-sky-300 flex flex-col relative overflow-hidden group animate-fadeIn"
                >
                  {/* Decorative Elements */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-sky-200/30 to-blue-200/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-amber-200/20 to-orange-200/10 rounded-full blur-2xl"></div>
                  
                  {/* Header with Avatar and Info */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden ring-4 ring-sky-100/50 shrink-0 group-hover:ring-sky-300 group-hover:scale-105 transition-all duration-300 shadow-lg">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      {/* Shine Effect on Profile Image */}
                      <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#002D57] text-lg md:text-xl mb-1 group-hover:text-sky-600 transition-colors truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-400 drop-shadow-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Icon Background */}
                  <svg className="absolute top-6 right-6 w-20 h-20 md:w-24 md:h-24 text-sky-100/40 z-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Content */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed grow relative z-10 font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Image Section - 30% */}
          <div className="w-full lg:w-[30%] relative rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-auto group">
            <Image
              src="/assets/testimonial.jpg"
              alt="Happy Customers"
              fill
              className="object-cover"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#002D57]/95 via-[#002D57]/70 to-transparent"></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent"></div>

            {/* Stats Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              <div className="space-y-6 sm:space-y-8">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
                      {stat.label}
                    </p>
                    {index < stats.length - 1 && (
                      <div className="mt-6 sm:mt-8 h-px bg-sky-400/30"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPairs }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-sky-600 w-8 h-2 rounded-full'
                  : 'bg-gray-300 hover:bg-gray-400 w-2 h-2 rounded-full'
              }`}
              aria-label={`Go to review pair ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;