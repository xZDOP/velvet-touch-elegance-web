
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light gradient-text mb-4">
              Velvet Touch
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">
              Crafting unforgettable moments with glamour, precision, and heart. 
              Your luxury event planning partner in creating extraordinary experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 font-light text-sm">
              <li>Wedding Planning</li>
              <li>Corporate Events</li>
              <li>Private Celebrations</li>
              <li>Destination Events</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="text-gray-300 font-light text-sm space-y-2">
              <p>hello@velvettouch.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Beverly Hills, CA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 font-light text-sm">
            © 2024 Velvet Touch Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
