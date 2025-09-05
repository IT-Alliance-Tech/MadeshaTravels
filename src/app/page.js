import HeroSection from "../components/homepage/HeroSection";
import EnquiryForm from "../components/homepage/EnquiryForm";
import ServicesSection from "../components/homepage/ServicesSection";
import DestinationSection from "../components/homepage/DestinationSection";
import TravelPoint from "../components/homepage/TravelPoint"; // ✅ import
import Header from "@/components/homepage/Header";
import FeatureSection from "@/components/homepage/FeatureSection";
import GallerySection from "@/components/homepage/GallerySection";
import Testimonials from "@/components/homepage/Testimonial";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <main style={
      {
        background:"#fff"
      }
    }>
      {/* <Header /> */}
      <HeroSection />
      <EnquiryForm />
      <ServicesSection />
      <DestinationSection />
      <TravelPoint />   {/* ✅ travel point section added */}

      
      <FeatureSection />
      <GallerySection />
      <Testimonials />
      {/* <Footer /> */}
    </main>
  );
}
