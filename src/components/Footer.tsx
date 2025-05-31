
import { useState } from 'react';
import { Mail, Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated on Climate Solutions
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Get weekly insights on the latest climate innovations, startups, and breaking news delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button
                type="submit"
                className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌍</span>
              </div>
              <span className="text-xl font-bold">More to Earth</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Discovering and fast-tracking climate conversations — from startups to news, 
              educational videos, and more. Building a better future for our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/explore" className="hover:text-white transition-colors">Climate Startups</a></li>
              <li><a href="/watch" className="hover:text-white transition-colors">Educational Videos</a></li>
              <li><a href="/news" className="hover:text-white transition-colors">Latest News</a></li>
              <li><a href="/submit" className="hover:text-white transition-colors">Submit Solution</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center">
                  Newsletter Archive
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 More to Earth. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0">
            Made with 💚 for our planet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
