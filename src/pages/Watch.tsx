
import { useState } from 'react';
import { ChevronDown, Play } from 'lucide-react';
import Header from '../components/Header';

interface Video {
  id: string;
  title: string;
  channel: string;
  duration: string;
  category: string;
  thumbnail: string;
}

const videoCategories = [
  {
    id: 'climate-101',
    name: '🌍 Climate 101',
    description: 'Essential climate science and concepts',
    videos: [
      {
        id: 'dQw4w9WgXcQ',
        title: 'Climate Change 101: What You Need to Know',
        channel: 'NASA Climate',
        duration: '12:34',
        category: 'Climate 101',
        thumbnail: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=225&fit=crop'
      },
      {
        id: 'dQw4w9WgXcQ',
        title: 'The Greenhouse Effect Explained',
        channel: 'TED-Ed',
        duration: '8:15',
        category: 'Climate 101',
        thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=225&fit=crop'
      }
    ]
  },
  {
    id: 'documentaries',
    name: '🎥 Documentaries',
    description: 'In-depth climate documentaries',
    videos: [
      {
        id: 'dQw4w9WgXcQ',
        title: 'Our Planet: The Climate Crisis',
        channel: 'Netflix',
        duration: '47:22',
        category: 'Documentaries',
        thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=225&fit=crop'
      },
      {
        id: 'dQw4w9WgXcQ',
        title: 'Before the Flood',
        channel: 'National Geographic',
        duration: '95:30',
        category: 'Documentaries',
        thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop'
      }
    ]
  },
  {
    id: 'innovators',
    name: '🔬 Innovators',
    description: 'Meet the people solving climate challenges',
    videos: [
      {
        id: 'dQw4w9WgXcQ',
        title: 'Elon Musk on Sustainable Energy',
        channel: 'Tesla',
        duration: '25:18',
        category: 'Innovators',
        thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop'
      }
    ]
  }
];

const Watch = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('climate-101');

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Watch Climate Content</h1>
          <p className="text-gray-600">Curated videos to expand your climate knowledge</p>
        </div>

        {/* Video Categories */}
        <div className="space-y-6">
          {videoCategories.map(category => (
            <div key={category.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
                  <span className="text-gray-500">({category.videos.length} videos)</span>
                </div>
                <ChevronDown 
                  className={`transform transition-transform ${
                    expandedCategory === category.id ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>

              {/* Category Description */}
              <div className="px-6 pb-2">
                <p className="text-gray-600">{category.description}</p>
              </div>

              {/* Videos Grid */}
              {expandedCategory === category.id && (
                <div className="p-6 pt-4 border-t border-gray-100 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.videos.map(video => (
                      <div
                        key={video.id}
                        className="group cursor-pointer bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all hover:scale-105"
                      >
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Play className="text-green-600 ml-1" size={20} />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>

                        {/* Video Info */}
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-green-600 transition-colors">
                            {video.title}
                          </h3>
                          <p className="text-sm text-gray-600">{video.channel}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
