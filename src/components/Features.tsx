
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Palette, Users } from 'lucide-react';

const Features = () => {
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

    const element = document.querySelector('#features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Calendar,
      title: "Full-Service Planning",
      description: "From concept to cleanup, we handle every aspect of your event with meticulous attention to detail and luxury standards."
    },
    {
      icon: MapPin,
      title: "Venue Scouting",
      description: "Access to exclusive venues and hidden gems. We find the perfect location that matches your vision and guest experience."
    },
    {
      icon: Palette,
      title: "Concept & Design",
      description: "Bespoke design concepts that reflect your style. Custom themes, color palettes, and artistic elements crafted just for you."
    },
    {
      icon: Users,
      title: "On-site Event Management",
      description: "Professional coordination on your special day. Our team ensures seamless execution while you enjoy every moment."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-amber-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light gradient-text mb-4 tracking-tight">
              Our Expertise
            </h2>
            <p className="text-gray-600 font-light text-lg opacity-90 max-w-2xl mx-auto">
              Comprehensive event planning services designed to exceed your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 glass-card rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-purple-600" />
                </div>
                
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 font-light text-sm leading-relaxed opacity-90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
