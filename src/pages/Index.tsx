
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Globe, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Index = () => {
  const featuredStartups = [
    {
      name: "EcoFlow Energy",
      description: "Portable power stations using renewable energy sources",
      category: "Energy",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    },
    {
      name: "Ocean Cleanup",
      description: "Advanced technologies to rid oceans of plastic",
      category: "Waste Solutions",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop"
    },
    {
      name: "Perfect Day",
      description: "Animal-free dairy proteins through fermentation",
      category: "Food & Agriculture",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop"
    }
  ];

  const recentNews = [
    {
      headline: "Breakthrough in Carbon Capture Technology",
      source: "Carbon Brief",
      date: "Jan 15, 2024"
    },
    {
      headline: "EU Unveils Ambitious 2030 Climate Package",
      source: "DW Planet",
      date: "Jan 14, 2024"
    },
    {
      headline: "Solar Energy Costs Drop Below Coal",
      source: "Grist",
      date: "Jan 12, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Featured Startups Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Climate Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative startups and organizations making a real impact on our planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredStartups.map((startup, index) => (
              <div
                key={startup.name}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-105 overflow-hidden group border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={startup.image}
                    alt={startup.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full mb-3">
                    {startup.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{startup.name}</h3>
                  <p className="text-gray-600 mb-4">{startup.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/explore" 
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium group"
            >
              Explore All Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <div className="text-gray-600">Climate Solutions</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-emerald-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-purple-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900">Daily</div>
              <div className="text-gray-600">Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Climate News</h2>
              <p className="text-xl text-gray-600">Stay informed with breaking developments</p>
            </div>
            <Link 
              to="/news" 
              className="hidden sm:inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
            >
              View All News
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>

          <div className="space-y-4 mb-8">
            {recentNews.map((article, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{article.headline}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{article.source}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center sm:hidden">
            <Link 
              to="/news" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
            >
              View All News
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
