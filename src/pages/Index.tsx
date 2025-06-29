
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturedIn from '../components/FeaturedIn';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import MissionStatement from '../components/MissionStatement';
import PricingPlans from '../components/PricingPlans';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedIn />
        <TestimonialsCarousel />
        <HowItWorks />
        <Features />
        <MissionStatement />
        <PricingPlans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
