
import { useState, useEffect } from 'react';

const MissionStatement = () => {
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

    const element = document.querySelector('#mission');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <div className="glass-card p-12 md:p-16 text-center">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto glass-card rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light gradient-text mb-6 tracking-tight">
                Our Mission
              </h2>
            </div>
            
            <blockquote className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed italic mb-8">
              "At Velvet Touch, we believe every celebration should be as unique as your story. 
              We craft unforgettable moments through meticulous planning, exquisite design, 
              and flawless execution—tailored to each client with glamour, precision, and heart."
            </blockquote>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-light text-gray-600 tracking-wide">
              <span className="glass-card px-4 py-2 rounded-full">Tailored Excellence</span>
              <span className="glass-card px-4 py-2 rounded-full">Glamorous Precision</span>
              <span className="glass-card px-4 py-2 rounded-full">Unforgettable Moments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
