
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

    const element = document.querySelector('#testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "Velvet Touch transformed our wedding into a fairy tale. Every detail was perfectly executed, from the Tuscan vineyard venue to the sunset ceremony.",
      result: "Unforgettable wedding in Tuscany",
      client: "Isabella & Marco",
      event: "Destination Wedding"
    },
    {
      quote: "Our brand launch exceeded every expectation. 300 guests, flawless execution, and coverage in major publications. Pure perfection.",
      result: "Brand launch with 300 guests, flawless execution",
      client: "Sophia Chen",
      event: "Corporate Launch"
    },
    {
      quote: "The attention to detail and luxury experience created for our anniversary celebration was beyond our wildest dreams.",
      result: "Intimate luxury celebration, 50 guests",
      client: "Victoria & James",
      event: "Anniversary Gala"
    },
    {
      quote: "From concept to execution, Velvet Touch delivered an award-winning charity gala that raised over $2M.",
      result: "Award-winning charity gala, $2M raised",
      client: "The Sterling Foundation",
      event: "Charity Gala"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-amber-50/50">
      <div className="max-w-6xl mx-auto">
        <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light gradient-text mb-4 tracking-tight">
              Client Experiences
            </h2>
            <p className="text-gray-600 font-light text-lg opacity-90">
              Stories of unforgettable moments
            </p>
          </div>

          <div className="relative">
            <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-amber-400 mb-6">
                  <ArrowUp size={32} className="mx-auto transform rotate-45" />
                </div>
                
                <blockquote className="text-xl md:text-2xl font-light text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="glass-card px-6 py-3 inline-block mb-6">
                  <p className="text-purple-600 font-medium text-sm tracking-wide">
                    {testimonials[currentIndex].result}
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-800 mb-1">
                    {testimonials[currentIndex].client}
                  </p>
                  <p className="text-gray-500 font-light text-sm">
                    {testimonials[currentIndex].event}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-purple-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
