
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

    const element = document.querySelector('#faq');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "How far in advance should I book your services?",
      answer: "We recommend booking 6-12 months in advance for weddings and major celebrations, though we can accommodate shorter timelines depending on availability. For corporate events, 3-6 months is typically sufficient."
    },
    {
      question: "Do you handle destination events?",
      answer: "Absolutely! We specialize in destination events worldwide. Our team has extensive experience coordinating luxury celebrations in Europe, the Caribbean, and other exotic locations."
    },
    {
      question: "What's included in your full-service planning?",
      answer: "Full-service planning includes venue selection, vendor coordination, design concept development, timeline management, budget oversight, and complete day-of coordination. We handle every detail from start to finish."
    },
    {
      question: "Can you work within my budget?",
      answer: "We work with various budgets and will create a custom proposal that maximizes your investment. During our consultation, we'll discuss your priorities and allocate resources accordingly."
    },
    {
      question: "Do you provide event insurance recommendations?",
      answer: "Yes, we strongly recommend event insurance and can connect you with trusted providers. We'll help you understand what coverage is appropriate for your specific event type and venue."
    },
    {
      question: "How do you handle changes to the event plan?",
      answer: "We understand that plans evolve. We maintain open communication throughout the planning process and can accommodate changes. Any adjustments to timeline, budget, or scope will be discussed and approved before implementation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light gradient-text mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-light text-lg opacity-90">
              Everything you need to know about working with Velvet Touch
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/20 transition-colors duration-200"
                >
                  <h3 className="font-medium text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <ArrowUp
                    size={20}
                    className={`text-purple-600 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
