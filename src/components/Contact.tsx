
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Here you would typically send the email to your newsletter service
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+15551234567'; // Replace with your actual WhatsApp business number
    const message = encodeURIComponent('Hello! I would like to inquire about your event planning services.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-amber-50/50">
      <div className="max-w-6xl mx-auto">
        <div className={`animate-on-scroll ${isVisible ? 'in-view' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light gradient-text mb-4 tracking-tight">
              Let's Create Magic Together
            </h2>
            <p className="text-gray-600 font-light text-lg opacity-90 max-w-2xl mx-auto">
              Ready to plan your unforgettable event? Get in touch and let's start crafting your perfect celebration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
                      <Mail size={18} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600 font-light">hello@velvettouch.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
                      <Phone size={18} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                    >
                      <MessageCircle size={18} className="text-green-600" />
                    </button>
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp</p>
                      <p className="text-gray-600 font-light">Click to message us</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
                      <MapPin size={18} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600 font-light">Beverly Hills, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-6">
                  Follow Our Journey
                </h3>
                
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Instagram size={18} className="text-purple-600" />
                  </a>
                  <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Facebook size={18} className="text-purple-600" />
                  </a>
                  <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Youtube size={18} className="text-purple-600" />
                  </a>
                  <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <Linkedin size={18} className="text-purple-600" />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-medium text-gray-800 mb-6">
                Stay Inspired
              </h3>
              
              <p className="text-gray-600 font-light mb-6">
                Subscribe to our newsletter for exclusive event inspiration, luxury venue spotlights, and planning tips from our expert team.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 glass-card rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-400/50 font-light"
                  required
                />
                
                <button
                  type="submit"
                  className="w-full neumorphic-btn py-3 px-6 text-purple-700 font-medium tracking-wide hover:text-purple-800"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              
              <p className="text-xs text-gray-500 font-light mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
