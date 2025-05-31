
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">🌍</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              More to Earth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/explore" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Explore
            </Link>
            <Link to="/watch" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Watch
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              News
            </Link>
            <Link to="/submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Submit
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link to="/explore" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Explore
              </Link>
              <Link to="/watch" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Watch
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                News
              </Link>
              <Link to="/submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-center">
                Submit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
