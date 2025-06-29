
import { useState, useEffect } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#how-it-works');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Share Your Vision",
      description: "Tell us about your dream event. We listen to every detail, understanding your style, preferences, and aspirations.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💭"
    },
    {
      title: "Design the Experience",
      description: "Our creative team crafts a bespoke concept, selecting venues, themes, and every luxurious detail to bring your vision to life.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "✨"
    },
    {
      title: "Celebrate in Style",
      description: "Relax and enjoy your perfect event while our team ensures flawless execution, managing every moment with precision and elegance.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🥂"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light gradient-text mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-gray-600 font-light text-lg opacity-90 max-w-2xl mx-auto">
              From initial consultation to final celebration, we guide you through every step of creating your perfect event.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-800 mb-4 mt-6">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed opacity-90">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
