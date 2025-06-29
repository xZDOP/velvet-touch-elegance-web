
import { useEffect, useState } from 'react';

const FeaturedIn = () => {
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

    const element = document.querySelector('#featured-in');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const publications = [
    { name: 'Vogue Weddings', logo: 'V' },
    { name: 'Harper\'s Bazaar', logo: 'HB' },
    { name: 'Town & Country', logo: 'T&C' },
    { name: 'Martha Stewart', logo: 'MS' },
    { name: 'The Knot', logo: 'TK' },
  ];

  return (
    <section id="featured-in" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <div className="text-center mb-12">
            <p className="text-gray-500 font-light text-sm tracking-widest uppercase mb-4">
              Featured In
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {publications.map((pub, index) => (
              <div
                key={pub.name}
                className="glass-card px-8 py-6 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl font-light text-gray-600 tracking-widest">
                  {pub.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
