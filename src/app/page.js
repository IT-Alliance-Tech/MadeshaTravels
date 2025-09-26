import HeroSection from "../Components/Homepage/heroSectionn";
import EnquiryForm from "../Components/Homepage/enquiryFormm";
import ServicesSection from "../Components/Homepage/servicesSectionn";
import DestinationSection from "../Components/Homepage/destinationSection";
import TravelPoint from "../Components/Homepage/travelPointt"; // ✅ import
import FeatureSection from "../Components/Homepage/featureSectionn";
import GallerySection from "../Components/Homepage/gallerySection";
import Testimonials from "../Components/Homepage/testimoniali";


export default function Home() {
  return (
    <main style={
      {
        background:"#fff"
      }
    }>
      <HeroSection />
      <EnquiryForm />
      <ServicesSection />
      <DestinationSection />
      <TravelPoint />   {/* ✅ travel point section added */}

      
      <FeatureSection />
      <GallerySection />
      <Testimonials />
    </main>
  );
}
