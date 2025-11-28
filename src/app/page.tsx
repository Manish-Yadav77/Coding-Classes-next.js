import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Insturctors from "@/components/Insturctors";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialsCards/>
      <UpcomingWebinars/>
      <Insturctors/>
      <Footer/>
    </main>
  );
}
