"use client";

import ContactFormComponent from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-200">
            {/* Hero Section */}
            <section className="relative h-[55vh] sm:h-[300px] md:h-[420px] lg:h-[520px] mx-4 md:mx-6 mt-6 rounded-2xl shadow-2xl overflow-hidden">

                <div className="absolute top-0 left-0 right-0 rounded-lg sm:rounded-xl md:rounded-2xl">
                    <Navbar />
                </div>

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1485770958101-9dd7e4ea6d93?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Contact hero"
                        className="w-full h-full object-cover scale-105"
                    />
                </div>

                {/* Premium dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/70 to-transparent" />

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 flex flex-col justify-center px-6 lg:px-14"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
                        Get in Touch with Us
                    </h1>

                    <p className="text-sky-300 font-medium text-sm sm:text-base tracking-widest mt-3">
                        /contactUs
                    </p>

                    <p className="text-sky-200 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
                        We’re here to answer your questions and help you every step of the way.
                    </p>
                </motion.div>
            </section>

            {/* Content */}
            <div className="mx-4 md:mx-6 my-16">
                <div className="grid lg:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactFormComponent />
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="backdrop-blur-xl bg-white/70 border border-white/30 shadow-2xl rounded-3xl p-8"
                        >
                            <h2 className="text-3xl font-bold text-slate-800 mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-sky-100 p-3 rounded-xl shadow">
                                        <Mail className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                                        <p className="text-slate-600">
                                            bstpoolservice@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-sky-100 p-3 rounded-xl shadow">
                                        <Phone className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                                        <p className="text-slate-600">
                                            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                                        </p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-sky-100 p-3 rounded-xl shadow">
                                        <MapPin className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                                        <p className="text-slate-600">
                                            Dubai, United Arab Emirates
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-sky-100 p-3 rounded-xl shadow">
                                        <Clock className="w-6 h-6 text-sky-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 mb-1">
                                            Business Hours
                                        </h3>
                                        <p className="text-[15px] text-slate-600">
                                            7:00 AM – 5:00 PM (Mon–Sat)
                                        </p>
                                        <p className="text-slate-600">Sunday (Open for queries)</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Blue Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 p-8 shadow-2xl text-white"
                        >
                            <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>

                            <ul className="space-y-3 text-lg">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-sky-200">•</span>
                                    <span>We respond within 24 hours</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-sky-200">•</span>
                                    <span>Dedicated expert support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-sky-200">•</span>
                                    <span>Tailored solutions for your needs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 text-sky-200">•</span>
                                    <span>Multiple ways to reach us anytime</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
