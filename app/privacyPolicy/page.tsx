"use client"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

const PrivacyPolicy = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: "Best Pool Technical Services Dubai (\"we\", \"our\", or \"us\") operates the website and provides pool and landscape services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services."
        },
        {
            title: "2. Information We Collect",
            content: "We collect information in various ways:\n\n• Personal Information: When you contact us, request a quote, or book our services, we collect your name, email address, phone number, and property address.\n\n• Service Information: Details about the services you request, including pool specifications, maintenance requirements, and special requests.\n\n• Payment Information: Credit card and billing information when processing payments (processed securely through third-party payment processors).\n\n• Usage Data: Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.\n\n• Cookies: We use cookies to enhance your experience and track website analytics."
        },
        {
            title: "3. How We Use Your Information",
            content: "We use the collected information for the following purposes:\n\n• Service Delivery: To provide you with pool maintenance, construction, and landscaping services.\n\n• Communication: To respond to your inquiries, send service updates, and provide customer support.\n\n• Billing: To process payments and manage your account.\n\n• Marketing: To send promotional information about our services (you can opt-out anytime).\n\n• Improvement: To analyze website performance and improve our services.\n\n• Legal Compliance: To comply with legal obligations and resolve disputes."
        },
        {
            title: "4. Data Sharing and Disclosure",
            content: "We do not sell, trade, or rent your personal information to third parties. However, we may share your information in these circumstances:\n\n• Service Providers: With contractors and vendors who assist in delivering our services (under confidentiality agreements).\n\n• Legal Requirements: When required by law or to protect our rights and safety.\n\n• Business Transfers: In case of merger, acquisition, or sale of assets.\n\n• Your Consent: When you explicitly authorize us to share your information."
        },
        {
            title: "5. Data Security",
            content: "We implement comprehensive security measures to protect your personal information, including:\n\n• SSL Encryption: Secure transmission of data on our website.\n\n• Access Controls: Restricted access to personal information.\n\n• Regular Backups: Protection against data loss.\n\n• Employee Training: Staff trained on data protection practices.\n\nHowever, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security."
        },
        {
            title: "6. Your Privacy Rights",
            content: "You have the following rights regarding your personal information:\n\n• Access: Request access to the personal information we hold about you.\n\n• Correction: Request correction of inaccurate or incomplete information.\n\n• Deletion: Request deletion of your personal information (subject to legal requirements).\n\n• Opt-Out: Opt-out of marketing communications at any time.\n\nTo exercise these rights, please contact us using the details provided in the Contact Us section."
        },
        {
            title: "7. Cookies and Tracking Technologies",
            content: "We use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us:\n\n• Remember your preferences.\n\n• Understand how you use our website.\n\n• Provide personalized content.\n\n• Analyze website traffic.\n\nYou can control cookie settings in your browser. However, disabling cookies may limit some website functionality."
        },
        {
            title: "8. Third-Party Links",
            content: "Our website may contain links to third-party websites and services. This Privacy Policy does not apply to external websites. We are not responsible for their privacy practices. We recommend reviewing their privacy policies before providing any personal information."
        },
        {
            title: "9. Children's Privacy",
            content: "Our services and website are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete such information promptly and terminate the child's account."
        },
        {
            title: "10. International Data Transfers",
            content: "If you are located outside the United Arab Emirates, please note that your information may be transferred to, stored in, and processed in the UAE. By using our services, you consent to such transfers."
        },
        {
            title: "11. Data Retention",
            content: "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When information is no longer needed, we securely delete or anonymize it. However, we may retain certain information to comply with legal obligations."
        },
        {
            title: "12. Changes to This Privacy Policy",
            content: "We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of significant changes by posting the updated Privacy Policy on our website with an updated \"Last Updated\" date. Your continued use of our services constitutes your acceptance of the revised Privacy Policy."
        },
        {
            title: "13. Contact Us",
            content: "If you have questions about this Privacy Policy or our privacy practices, please contact us:\n\n📧 Email: bestpoolservice@gmail.com\n📞 Phone: +971502434772\n�� Address: Dubai, United Arab Emirates\n\nWe will respond to your inquiry within 7 business days."
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
                        src="/assets/services_hero.jpg"
                        alt="Privacy Policy"
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
                        Privacy Policy
                    </h1>

                    <p className="text-sky-300 font-medium text-sm sm:text-base tracking-widest mt-3">
                        /privacyPolicy
                    </p>

                    <p className="text-sky-200 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                        Your privacy is important to us. Learn how we protect your personal information.
                    </p>
                </motion.div>
            </section>

            {/* Last Updated */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 bg-sky-50">
                <div className="max-w-4xl mx-auto">
                    <p className="text-gray-600 text-center">
                        <span className="font-semibold">Last Updated:</span> November 22, 2025
                    </p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 sm:mb-16"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                {section.title}
                            </h2>
                            <div className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                                {section.content}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Additional Information Box */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-sky-50 to-blue-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border-l-4 border-sky-500"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Questions About Our Privacy Practices?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            We are committed to maintaining your trust and ensuring your personal information is handled with care. If you have any concerns or questions about how we collect, use, or protect your data, please don't hesitate to reach out.
                        </p>
                        <div className="space-y-3">
                            <p className="text-gray-700">
                                <span className="font-semibold">Email:</span> bestpoolservice@gmail.com
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Phone:</span> {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default PrivacyPolicy
