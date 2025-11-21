"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { redirect } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPoolServicesOpen, setIsPoolServicesOpen] = useState(false);
  const [isMobilePoolServicesOpen, setIsMobilePoolServicesOpen] = useState(false);

  const poolServices = [
    { href: "/services/pool-construction", label: "Swimming Pool Construction" },
    { href: "/services/pool-renovation", label: "Swimming Pool Renovation" },
    { href: "/services/pool-demolition", label: "Swimming Pool Demolition / Removal" },
    { href: "/services/pool-cleaning", label: "Swimming Pool Cleaning" },
    { href: "/services/pool-maintenance", label: "Swimming Pool Maintenance (Weekly / Monthly)" },
    { href: "/services/pool-leak", label: "Swimming Pool Leak Detection & Repair" },
    { href: "/services/pool-tile", label: "Pool Tile Repair & Re-Grouting" },
    { href: "/services/pool-lighting", label: "Swimming Pool Lighting Installation" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutUs", label: "About Us" },
    { href: "#services", label: "Pool Service", hasDropdown: true },
    { href: "/landscaping", label: "Landscaping" },
    { href: "/contactUs", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobilePoolServicesOpen(false);
  };

  return (
    <nav className="bg-transparent text-white py-8 sm:py-6 md:py-8 lg:py-12 z-50 border-b border-sky-400/30 backdrop-blur-sm relative rounded-tr-2xl rounded-tl-2xl">
      <div className="container mx-auto flex justify-center items-center relative px-4 sm:px-6">
        {/* logo on the left */}
        <div className="absolute left-4 sm:left-6 flex items-center z-50 cursor-pointer" onClick={()=>redirect("/")}>
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
            link.hasDropdown ? (
              <div 
                key={link.href} 
                className="relative group"
                onMouseEnter={() => setIsPoolServicesOpen(true)}
                onMouseLeave={() => setIsPoolServicesOpen(false)}
              >
                <a 
                  href={link.href} 
                  className="hover:text-sky-300 transition-colors duration-300 hover:scale-105 transform inline-flex items-center gap-1"
                >
                  {link.label}
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isPoolServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                
                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {isPoolServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-[#002D57]/98 backdrop-blur-xl rounded-xl shadow-2xl border border-sky-400/30 overflow-hidden z-50"
                    >
                      {poolServices.map((service, index) => (
                        <motion.a
                          key={service.href}
                          href={service.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.03 }}
                          className="block px-5 py-3 text-white hover:bg-sky-500/20 hover:text-sky-300 transition-all duration-200 text-sm border-b border-sky-400/10 last:border-0"
                        >
                          {service.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a 
                key={link.href} 
                href={link.href} 
                className="hover:text-sky-300 transition-colors duration-300 hover:scale-105 transform"
              >
                {link.label}
              </a>
            )
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

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#002D57]/98 backdrop-blur-xl border-b border-sky-400/30 shadow-2xl z-40 overflow-hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="container mx-auto px-4 sm:px-6 py-6"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  link.hasDropdown ? (
                    <div key={link.href}>
                      <motion.button
                        onClick={() => setIsMobilePoolServicesOpen(!isMobilePoolServicesOpen)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                        className="w-full text-left text-white hover:text-sky-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5 font-semibold text-base sm:text-lg border-b border-sky-400/10 flex items-center justify-between"
                      >
                        {link.label}
                        <svg className={`w-5 h-5 transition-transform duration-300 ${isMobilePoolServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.button>
                      
                      {/* Mobile Pool Services Submenu */}
                      <AnimatePresence>
                        {isMobilePoolServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-2 space-y-2">
                              {poolServices.map((service, idx) => (
                                <motion.a
                                  key={service.href}
                                  href={service.href}
                                  onClick={handleLinkClick}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                                  className="block text-sky-200 hover:text-sky-300 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5 text-sm"
                                >
                                  {service.label}
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      className="text-white hover:text-sky-300 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-white/5 font-semibold text-base sm:text-lg border-b border-sky-400/10 last:border-0"
                    >
                      {link.label}
                    </motion.a>
                  )
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
