
import { useState, useEffect } from 'react';
import { Check, Star } from 'lucide-react';

const PricingPlans = () => {
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

    const element = document.querySelector('#pricing');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Essentials",
      description: "Perfect for intimate gatherings and small celebrations",
      features: [
        "Event planning consultation",
        "Vendor coordination",
        "Timeline development",
        "Day-of coordination",
        "Basic decoration setup"
      ],
      isRecommended: false
    },
    {
      name: "Signature",
      description: "Our most popular package for weddings and private events",
      features: [
        "Full-service event planning",
        "Custom design concept",
        "Venue scouting & booking",
        "Vendor management & contracts",
        "Complete event coordination",
        "Luxury styling & décor",
        "Photography coordination"
      ],
      isRecommended: true
    },
    {
      name: "Prestige",
      description: "Ultimate luxury experience for enterprise clients and high-end events",
      features: [
        "Bespoke event experience",
        "Exclusive venue access",
        "Celebrity vendor network",
        "Custom entertainment booking",
        "Full media & PR coordination",
        "Concierge guest services",
        "International event capabilities",
        "24/7 event support team"
      ],
      isRecommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-purple-50/30 to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light gradient-text mb-4 tracking-tight">
              Investment Plans
            </h2>
            <p className="text-gray-600 font-light text-lg opacity-90 max-w-2xl mx-auto">
              Choose the perfect package for your celebration. Each plan is customized to your specific needs and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`glass-card p-8 relative ${
                  plan.isRecommended 
                    ? 'ring-2 ring-purple-400/50 scale-105' 
                    : ''
                } hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.isRecommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="glass-card px-4 py-1 rounded-full flex items-center gap-1 text-xs font-medium text-purple-600">
                      <Star size={12} className="fill-current" />
                      Recommended
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 font-light text-sm">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 glass-card rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-light text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 px-6 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 ${
                    plan.isRecommended
                      ? 'neumorphic-btn text-purple-700 hover:text-purple-800'
                      : 'glass-card text-gray-700 hover:text-purple-600'
                  }`}
                >
                  Get Custom Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
