
import { useState } from 'react';
import { ExternalLink, Filter, Grid, List } from 'lucide-react';
import Header from '../components/Header';

interface Startup {
  id: number;
  name: string;
  description: string;
  category: string;
  website: string;
  image: string;
  upvotes: number;
}

const categories = [
  'All',
  'Climate Tech',
  'Waste Solutions', 
  'Fashion',
  'Food & Agriculture',
  'Energy',
  'Water',
  'Policy & Advocacy',
  'Tools for Individuals'
];

const startups: Startup[] = [
  {
    id: 1,
    name: "EcoFlow Energy",
    description: "Portable power stations using renewable energy sources for off-grid living and emergency backup.",
    category: "Energy",
    website: "https://ecoflow.com",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    upvotes: 142
  },
  {
    id: 2,
    name: "Ocean Cleanup",
    description: "Developing advanced technologies to rid the oceans of plastic pollution.",
    category: "Waste Solutions",
    website: "https://theoceancleanup.com",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
    upvotes: 298
  },
  {
    id: 3,
    name: "Patagonia Action",
    description: "Sustainable outdoor clothing company leading environmental activism and regenerative practices.",
    category: "Fashion",
    website: "https://patagonia.com",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop",
    upvotes: 186
  },
  {
    id: 4,
    name: "Perfect Day",
    description: "Creating animal-free dairy proteins through fermentation technology.",
    category: "Food & Agriculture",
    website: "https://perfectday.com",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    upvotes: 94
  },
  {
    id: 5,
    name: "Watershed",
    description: "Enterprise platform for measuring, reducing, and reporting carbon emissions.",
    category: "Climate Tech",
    website: "https://watershed.com",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
    upvotes: 127
  },
  {
    id: 6,
    name: "Water.org",
    description: "Global nonprofit providing access to safe water and sanitation solutions.",
    category: "Water",
    website: "https://water.org",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    upvotes: 203
  }
];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredStartups = selectedCategory === 'All' 
    ? startups 
    : startups.filter(startup => startup.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Climate Solutions</h1>
          <p className="text-gray-600">Discover innovative startups and organizations tackling climate challenges</p>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter size={16} />
              Filters
            </button>
            
            <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-wrap gap-2`}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-green-100 text-green-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
        }`}>
          {filteredStartups.map(startup => (
            <div
              key={startup.id}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105 overflow-hidden group ${
                viewMode === 'list' ? 'flex items-center' : ''
              }`}
            >
              <div className={`${viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-video'} overflow-hidden`}>
                <img
                  src={startup.image}
                  alt={startup.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    {startup.category}
                  </span>
                  <span className="text-sm text-gray-500">↑ {startup.upvotes}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{startup.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{startup.description}</p>
                
                <a
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group/link"
                >
                  Visit Website
                  <ExternalLink size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
