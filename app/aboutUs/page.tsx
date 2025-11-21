"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"

const aboutUs = () => {
    const teamMembers = [
        {
            name: "Ahmed Al Mansouri",
            role: "Founder & CEO",
            experience: "25+ years in pool services",
            specialty: "Pool construction & project management"
        },
        {
            name: "Fatima Hassan",
            role: "Head of Maintenance",
            experience: "18 years in pool maintenance",
            specialty: "Chemical balance & water quality"
        },
        {
            name: "Mohammed Khalil",
            role: "Senior Technician",
            experience: "15 years experience",
            specialty: "Leak detection & repairs"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[55vh] sm:h-[300px] md:h-[420px] lg:h-[520px] mx-4 md:mx-6 mt-6 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 rounded-lg sm:rounded-xl md:rounded-2xl">
                    <Navbar />
                </div>

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/about_2.jpg"
                        alt="About us hero"
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
                        About Best Pool Technical Services
                    </h1>

                    <p className="text-sky-300 font-medium text-sm sm:text-base tracking-widest mt-3">
                        /aboutUs
                    </p>

                    <p className="text-sky-200 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                        Your trusted partner for pristine pools, stunning landscapes, and complete outdoor excellence.
                    </p>
                </motion.div>
            </section>

            {/* Company Story Section */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-12 sm:mb-16"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <h2 className="text-sm sm:text-base font-bold text-sky-600 uppercase tracking-wider">Our Story</h2>
                        </div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                            25+ Years of Excellence in Pool & Landscape Services
                        </h3>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                            Founded in 1999, Best Pool Technical Services scapes Dubai has been the leading provider of comprehensive pool construction, maintenance, and landscape design services throughout Dubai. What started as a small family business has grown into a trusted name across the Emirates, serving thousands of satisfied residential and commercial clients.
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                            Our mission is simple: to create and maintain beautiful, healthy aquatic environments that enhance the lifestyle and property value of our clients. Whether it's building your dream pool, keeping it crystal clear, or transforming your outdoor space, we bring expertise, professionalism, and dedication to every project.
                        </p>
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            We combine cutting-edge technology, sustainable practices, and time-tested methodologies to deliver results that exceed expectations. Every member of our team is certified, experienced, and committed to your satisfaction.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 relative m-10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: "url('/assets/bg.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </div>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Why Choose BestPool Technical Services Dubai?
                        </h3>
                        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                            We stand out for our commitment to quality, reliability, and customer care
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "⭐",
                                title: "25+ Years Experience",
                                desc: "Quarter-century of proven expertise in pool and landscape services"
                            },
                            {
                                icon: "✅",
                                title: "Certified Professionals",
                                desc: "All team members are certified and continuously trained in latest techniques"
                            },
                            {
                                icon: "🛡️",
                                title: "Fully Insured",
                                desc: "Complete insurance coverage for your peace of mind and protection"
                            },
                            {
                                icon: "⚡",
                                title: "Quick Response",
                                desc: "Fast emergency response and flexible scheduling for your convenience"
                            },
                            {
                                icon: "💰",
                                title: "Transparent Pricing",
                                desc: "No hidden costs, competitive rates, and customizable service packages"
                            },
                            {
                                icon: "🏆",
                                title: "100% Satisfaction",
                                desc: "Guaranteed results with comprehensive warranty on all work"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 text-white"
                            >
                                {/* Soft floating glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                                <div className="flex flex-row items-center gap-3">
                                    <div className="relative text-xl opacity-90">
                                        {item.icon}
                                    </div>

                                    <h4 className="relative text-2xl font-bold">
                                        {item.title}
                                    </h4>
                                </div>

                                <p className="relative text-white/70 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>


                </div>
            </section>

            {/* Our Services Overview */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-sky-50 via-white to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-14"
                    >
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            Our Complete Service Range
                        </h3>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            From construction to maintenance, we manage every detail with precision.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "🏗️ Pool Construction",
                            "🔧 Pool Renovation",
                            "💧 Pool Cleaning",
                            "🚀 Pool Maintenance",
                            "🔍 Leak Detection",
                            "🎨 Tile & Grouting",
                            "💡 Lighting Installation",
                            "🌳 Demolition & Removal",
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.07 }}
                                className="
                        p-6 rounded-2xl border bg-white/60 backdrop-blur
                        border-sky-100 shadow-sm
                        hover:shadow-xl hover:bg-white/80
                        hover:border-sky-300 transition-all duration-300
                        hover:-translate-y-1 backdrop-blur-2xl
                    "
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-700/10 to-transparent pointer-events-none"></div>
                                <p className="text-xl font-semibold text-slate-800">
                                    {service}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default aboutUs
