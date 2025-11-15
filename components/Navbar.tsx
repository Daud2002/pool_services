"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Pool Service" },
    { href: "#landscaping", label: "Landscaping" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-transparent text-white py-4 sm:py-6 md:py-8 lg:py-12 z-50 border-b border-sky-400/30 backdrop-blur-sm relative">
      <div className="container mx-auto flex justify-center items-center relative px-4 sm:px-6">
        {/* logo on the left */}
        <div className="absolute left-4 sm:left-6 flex items-center z-50">
          <Image 
            src="/assets/logo.png" 
            alt="Logo" 
            width={50} 
            height={50} 
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] xl:w-[84px] xl:h-[84px]" 
          />
        </div>

        {/* centered nav links - desktop */}
        <div className="hidden lg:flex space-x-6 xl:space-x-10 text-sm xl:text-base font-semibold tracking-wide text-white">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-sky-300 transition-colors duration-300 hover:scale-105 transform"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* mobile menu button on the right */}
        <button 
          className="lg:hidden absolute right-4 sm:right-6 z-50 p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#002D57]/98 backdrop-blur-xl border-b border-sky-400/30 transition-all duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-white hover:text-sky-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5 font-semibold text-base sm:text-lg border-b border-sky-400/10 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
