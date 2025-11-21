"use client"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

const TermsOfUse = () => {
    const sections = [
        {
            title: "1. Agreement to Terms",
            content: "By accessing and using the Best Pool Technical Service Dubai website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to update and change the terms and conditions of this agreement at any time without notice. Your continued use of this website will mean you accept those changes."
        },
        {
            title: "2. Use License",
            content: "Permission is granted to temporarily download one copy of the materials (information or software) on Best Pool Technical Service Dubai's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or \"mirror\" the materials on any other server\n• Use the materials for any illegal purpose or in violation of any applicable laws or regulations"
        },
        {
            title: "3. Disclaimer",
            content: "The materials on Best Pool Technical Service Dubai's website are provided on an 'as is' basis. Best Pool Technical Service Dubai makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.\n\nFurther, Best Pool Technical Service Dubai does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site."
        },
        {
            title: "4. Limitations",
            content: "In no event shall Best Pool Technical Service Dubai or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Best Pool Technical Service Dubai's website, even if Best Pool Technical Service Dubai or an authorized representative has been notified orally or in writing of the possibility of such damage.\n\nBecause some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
        },
        {
            title: "5. Accuracy of Materials",
            content: "The materials appearing on Best Pool Technical Service Dubai's website could include technical, typographical, or photographic errors. Best Pool Technical Service Dubai does not warrant that any of the materials on its website are accurate, complete, or current. Best Pool Technical Service Dubai may make changes to the materials contained on its website at any time without notice.\n\nBest Pool Technical Service Dubai does not, however, make any commitment to update the materials. We continuously improve and update our website content, but we do not guarantee that all information will be current or error-free."
        },
        {
            title: "6. Links",
            content: "Best Pool Technical Service Dubai has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Best Pool Technical Service Dubai of the site. Use of any such linked website is at the user's own risk.\n\nIf you discover that we have linked to offensive, inappropriate, or objectionable content, please notify us immediately so we can evaluate the link and take appropriate action."
        },
        {
            title: "7. Modifications",
            content: "Best Pool Technical Service Dubai may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.\n\nWe may add, remove, or modify any aspect of the website and its services at any time. Changes to this page will be noted with an updated 'Last Updated' date."
        },
        {
            title: "8. Governing Law",
            content: "These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts located in Dubai, UAE.\n\nAny disputes arising under or relating to these terms shall be resolved in accordance with UAE law and the regulations applicable in Dubai."
        },
        {
            title: "9. Service Terms",
            content: "When booking our pool and landscape services, the following terms apply:\n\n• Scheduling: Services must be scheduled at least 48 hours in advance unless otherwise agreed. Cancellations must be made 24 hours before the scheduled service time to avoid cancellation fees.\n\n• Pricing: Quotes are valid for 30 days. Final pricing may vary based on site conditions and specific requirements discovered during the service.\n\n• Payment: Payment is due upon completion of services unless alternative arrangements have been agreed in writing. We accept credit cards and bank transfers.\n\n• Liability: We are not liable for damage caused by factors beyond our control (natural disasters, extreme weather, unforeseen circumstances).\n\n• Customer Property: We are not responsible for damage to customer property during service delivery, except in cases of gross negligence."
        },
        {
            title: "10. Warranty and Guarantees",
            content: "We warrant that all work performed will be completed in a professional and workmanlike manner consistent with industry standards. Specific warranties are as follows:\n\n• Pool Construction: 5-year structural warranty on concrete pools, 3-year warranty on equipment installations.\n\n• Pool Maintenance: We guarantee water quality will meet industry standards or we will re-service at no charge.\n\n• Leak Detection: If a leak is identified, we will provide written documentation of the location and repair recommendations.\n\n• All Work: We stand behind all work with a satisfaction guarantee. If you're not satisfied, we will address your concerns within 7 days.\n\nWarranties do not cover damage from improper maintenance, chemical mishandling, or unauthorized modifications."
        },
        {
            title: "11. User Responsibilities",
            content: "Users of our services and website agree to:\n\n• Provide accurate information when requesting quotes or booking services.\n\n• Ensure property access for our service teams during scheduled appointments.\n\n• Maintain the property in safe condition for our technicians.\n\n• Follow all safety instructions provided by our team.\n\n• Inform us of any health or safety concerns before service begins.\n\n• Not interfere with service delivery or technician operations.\n\n• Maintain adequate insurance coverage on your pool and property.\n\nViolation of these responsibilities may result in service termination and applicable charges."
        },
        {
            title: "12. Intellectual Property Rights",
            content: "All content on the Best Pool Technical Service Dubai website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Best Pool Technical Service Dubai or its content suppliers and is protected by international copyright laws.\n\nYou may not reproduce, republish, distribute, or transmit any content from our website without explicit written permission. Unauthorized use may result in legal action and damages."
        },
        {
            title: "13. User Conduct",
            content: "You agree not to use our website or services for any unlawful purposes or in any way that violates these terms. Specifically, you agree not to:\n\n• Post offensive, abusive, defamatory, or discriminatory content.\n\n• Attempt to gain unauthorized access to our systems or services.\n\n• Interfere with or disrupt the website or our services.\n\n• Collect or track personal information of others without consent.\n\n• Spam or send unsolicited communications.\n\n• Engage in any fraudulent or deceptive activity.\n\nViolators may face legal consequences and permanent banning from our website and services."
        },
        {
            title: "14. Privacy and Data Protection",
            content: "Your use of our website and services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices. We collect and process personal data in accordance with UAE data protection laws and regulations.\n\nBy using our services, you consent to the collection and processing of your information as described in our Privacy Policy."
        },
        {
            title: "15. Limitation of Liability",
            content: "IN NO EVENT SHALL Best Pool Technical Service DUBAI, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES).\n\nOUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN QUESTION OR 1,000 AED, WHICHEVER IS GREATER."
        },
        {
            title: "16. Indemnification",
            content: "You agree to indemnify, defend, and hold harmless Best Pool Technical Service Dubai, its officers, directors, employees, agents, and suppliers from any claim, liability, loss, cost, or expense (including attorney's fees) arising out of your use of the website or services, violation of these terms, or infringement of any intellectual property or other right of any person or entity."
        },
        {
            title: "17. Severability",
            content: "If any provision of these terms is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these terms and shall not affect the validity and enforceability of any remaining provisions.\n\nWe reserve the right to amend or modify these terms to maintain their validity and enforceability in light of applicable laws."
        },
        {
            title: "18. Entire Agreement",
            content: "These terms of use constitute the entire agreement between you and Best Pool Technical Service Dubai regarding your use of the website and services, and supersede all prior and contemporaneous agreements, understandings, warranties, and conditions."
        },
        {
            title: "19. Contact Information",
            content: "For questions about these Terms of Use or any other matter, please contact us:\n\n📧 Email: bestpoolservice@gmail.com\n📞 Phone: +971502434772\n📍 Address: Dubai, United Arab Emirates\n\nWe will respond to your inquiry within 7 business days."
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
                        alt="Terms of Use"
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
                        Terms of Use
                    </h1>

                    <p className="text-sky-300 font-medium text-sm sm:text-base tracking-widest mt-3">
                        /termsOfUse
                    </p>

                    <p className="text-sky-200 mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                        Please read our terms and conditions carefully before using our services.
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

            {/* Terms Content */}
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

            {/* Important Notice */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-red-50 to-orange-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border-l-4 border-red-500"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="text-2xl">⚠️</span>
                            Important Notice
                        </h3>
                        <p className="text-gray-700 mb-4">
                            By using Best Pool Technical Service Dubai's website and services, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions outlined in this agreement.
                        </p>
                        <p className="text-gray-700">
                            If you do not agree with any part of these terms, you must discontinue use of our website and services immediately. We reserve the right to refuse service to anyone who violates these terms.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Acceptance Section */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                            Need Clarification?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you have questions about these Terms of Use or need clarification on any specific provision, our legal team is here to help. We're committed to ensuring you understand exactly what we expect and what you can expect from us.
                        </p>
                        <div className="bg-sky-50 p-6 rounded-xl border border-sky-200">
                            <p className="text-gray-700 mb-3">
                                <span className="font-semibold">Email:</span>bestpoolservice@gmail.com
                            </p>
                            <p className="text-gray-700 mb-3">
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

export default TermsOfUse
