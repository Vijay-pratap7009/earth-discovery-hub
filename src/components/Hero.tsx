
import { ArrowRight, Leaf, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2334d399" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Discover Climate 
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"> Solutions</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Your gateway to climate startups, educational content, and breaking news — 
            fast-tracking conversations that matter for our planet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Link 
              to="/explore" 
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all hover:scale-105 font-semibold flex items-center justify-center group"
            >
              Start Exploring
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link 
              to="/watch" 
              className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-xl hover:bg-green-50 transition-all hover:scale-105 font-semibold"
            >
              Watch Videos
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Leaf className="text-green-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">Climate Startups</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="text-blue-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900">Daily</div>
              <div className="text-gray-600">News Updates</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="text-emerald-600" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900">Global</div>
              <div className="text-gray-600">Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
