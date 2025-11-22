import { motion } from "framer-motion"
import { useState } from "react";

const ContactFormComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // WhatsApp number (replace with your actual WhatsApp business number)
        const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

        // Compile message
        const message = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
${formData.phone ? `*Phone:* ${formData.phone}` : ''}

*Message:*
${formData.message}
    `.trim();

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber?.split(" ").join("")}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, '_blank');

        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="order-2 lg:order-1"
            >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border-2 border-sky-200/50 hover:border-sky-300/70 transition-all duration-500 hover:shadow-sky-200/50 group relative overflow-hidden">
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-sky-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-sky-500/30 rotate-3 group-hover:rotate-6 transition-transform">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#002D57]">
                                Send Us a Message
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="group/input">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-[#002D57] mb-2"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 outline-none transition-all bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md text-gray-800 placeholder:text-gray-400"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="group/input">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-[#002D57] mb-2"
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 outline-none transition-all bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md text-gray-800 placeholder:text-gray-400"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="group/input">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-semibold text-[#002D57] mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 outline-none transition-all bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md text-gray-800 placeholder:text-gray-400"
                                    placeholder="+971 XX XXX XXXX"
                                />
                            </div>

                            <div className="group/input">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-[#002D57] mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 outline-none transition-all resize-none bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md text-gray-800 placeholder:text-gray-400"
                                    placeholder="Tell us about your pool service needs..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-sky-500 via-blue-500 to-sky-600 text-white font-bold py-4 px-6 rounded-xl hover:from-sky-600 hover:via-blue-600 hover:to-sky-700 transition-all duration-300 shadow-xl shadow-sky-500/30 hover:shadow-2xl hover:shadow-sky-600/40 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group/btn"
                            >
                                <span>Send Message</span>
                                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
export default ContactFormComponent