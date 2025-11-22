import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#002D57] text-white overflow-hidden m-4 sm:m-6 lg:m-7 rounded-3xl shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/footer.jpg"
          alt="Footer Background"
          fill
          className="object-cover opacity-15"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002D57] via-[#002D57]/98 to-[#002D57]/95"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-white leading-tight tracking-tight">
                Best Pool <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400">
                  Technical Services
                </span>
              </h3>
            </div>
            <p className="text-sky-50/90 mb-8 leading-relaxed text-[15px] font-light">
              Your trusted partner for premium pool maintenance, installation,
              and repair services across Dubai. Excellence in every drop.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50 group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50 group"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50 group"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-tight">Quick Links</h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/landscaping"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Landscape
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutUs"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contactUs"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-tight">Our Services</h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/services/pool-construction"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Swimming Pool Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pool-renovation"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Swimming Pool Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pool-demolition"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Swimming Pool Demolition
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pool-cleaning"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Swimming Pool Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pool-maintenance"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Swimming Pool Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pool-leak"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Swimming Pool Leak Detection & Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pool-tile"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Pool Tile Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pool-lighting"
                  className="text-sky-50/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-3 group text-[15px] font-light"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-sky-400/50"></span>
                  Swimming Pool Lighting Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-tight">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400/20 to-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 border border-sky-400/10">
                  <svg
                    className="w-5 h-5 text-sky-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sky-50/90 text-[15px] leading-relaxed font-light">
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400/20 to-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 border border-sky-400/10">
                  <svg
                    className="w-5 h-5 text-sky-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <a
                    href={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.split(' ').join('')}
                    className="text-sky-50/90 hover:text-white transition-colors text-[15px] font-light"
                  >
                    {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400/20 to-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 border border-sky-400/10">
                  <svg
                    className="w-5 h-5 text-sky-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <a
                    href="mailto:bstpoolservice@gmail.com"
                    className="text-sky-50/90 hover:text-white transition-colors text-[15px] break-all font-light"
                  >
                    bstpoolservice@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400/20 to-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 border border-sky-400/10">
                  <svg
                    className="w-5 h-5 text-sky-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sky-50/90 text-[15px] font-light">
                    7:00 AM - 5:00 PM (Mon-Sat)
                  </p>
                  <p>
                    Sunday (Open for queries)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sky-50/80 text-[15px] text-center md:text-left font-light">
            © {new Date().getFullYear()} Best Pool Technical Services. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[15px] font-light">
            <Link
              href="/privacyPolicy"
              className="text-sky-50/80 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-sky-400 after:to-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termsOfUse"
              className="text-sky-50/80 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-sky-400 after:to-blue-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;