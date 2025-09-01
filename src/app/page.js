import HeroSection from "../components/homepage/HeroSection";
import EnquiryForm from "../components/homepage/EnquiryForm";
import ServicesSection from "../components/homepage/ServicesSection";
import DestinationSection from "../components/homepage/DestinationSection";
import TravelPoint from "../components/homepage/TravelPoint"; // ✅ import

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EnquiryForm />
      <ServicesSection />
      <DestinationSection />
      <TravelPoint />   {/* ✅ travel point section added */}
    </main>
  );
}
