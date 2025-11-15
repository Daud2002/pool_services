import AboutUs from "@/components/AboutUs";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import OurBenefits from "@/components/OurBenefits";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutUs />
      <OurServices />
      <HowItWorks />
      <WhyChooseUs />
      <OurBenefits />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}
