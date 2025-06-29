
import { useState, useEffect } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
      {children}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection delay={200}>
          <h1 className="text-5xl md:text-7xl font-light gradient-text mb-6 tracking-tight leading-tight">
            Crafting Unforgettable
            <br />
            <span className="font-normal">Moments</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Where luxury meets precision. We transform your vision into extraordinary experiences that leave lasting impressions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="neumorphic-btn px-12 py-4 text-purple-700 font-medium text-lg tracking-wide mb-16 inline-flex items-center gap-2 hover:text-purple-800"
          >
            Start Planning
            <span className="text-amber-500">✨</span>
          </button>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={800}>
        <div className="w-full max-w-6xl mx-auto">
          <div className="glass-card p-2 rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Elegant event setup with golden lighting and luxurious decor"
              className="w-full h-96 md:h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;
