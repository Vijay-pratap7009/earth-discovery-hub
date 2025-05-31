
import { useState } from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';
import Header from '../components/Header';

interface NewsArticle {
  id: number;
  headline: string;
  source: string;
  publishedDate: string;
  excerpt: string;
  url: string;
  category: string;
  image: string;
}

const newsCategories = ['All', 'Policy', 'Innovation', 'Disasters', 'Solutions', 'Science'];

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    headline: "Breakthrough in Carbon Capture Technology Could Transform Industrial Emissions",
    source: "Carbon Brief",
    publishedDate: "2024-01-15",
    excerpt: "Scientists at MIT have developed a new method for capturing carbon dioxide directly from industrial smokestacks with 95% efficiency, potentially revolutionizing how we handle emissions from heavy industry.",
    url: "https://carbonbrief.org",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop"
  },
  {
    id: 2,
    headline: "EU Unveils Ambitious 2030 Climate Package with New Forest Protection Laws",
    source: "DW Planet",
    publishedDate: "2024-01-14",
    excerpt: "The European Union announced comprehensive climate legislation aimed at protecting old-growth forests while accelerating the transition to renewable energy across member states.",
    url: "https://dw.com",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=225&fit=crop"
  },
  {
    id: 3,
    headline: "Ocean Temperature Records Broken Again as Marine Heatwaves Intensify",
    source: "BBC Climate",
    publishedDate: "2024-01-13",
    excerpt: "New data shows ocean temperatures reached unprecedented levels in 2023, with marine heatwaves lasting longer and affecting larger areas than ever recorded.",
    url: "https://bbc.com",
    category: "Science",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop"
  },
  {
    id: 4,
    headline: "Solar Energy Costs Drop Below Coal in Major Asian Markets",
    source: "Grist",
    publishedDate: "2024-01-12",
    excerpt: "Renewable energy prices continue their historic decline, with solar power now cheaper than coal-fired electricity in countries representing 60% of global energy demand.",
    url: "https://grist.org",
    category: "Solutions",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=225&fit=crop"
  },
  {
    id: 5,
    headline: "Extreme Weather Events Cost Global Economy $100 Billion in 2023",
    source: "The Guardian",
    publishedDate: "2024-01-11",
    excerpt: "A new report details how climate-related disasters from floods to hurricanes caused unprecedented economic damage across six continents last year.",
    url: "https://theguardian.com",
    category: "Disasters",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=225&fit=crop"
  }
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Policy': 'bg-blue-100 text-blue-700',
      'Innovation': 'bg-green-100 text-green-700',
      'Disasters': 'bg-red-100 text-red-700',
      'Solutions': 'bg-emerald-100 text-emerald-700',
      'Science': 'bg-purple-100 text-purple-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Climate News</h1>
          <p className="text-gray-600">Stay updated with the latest climate developments from trusted sources</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {newsCategories.map(category => (
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

        {/* News Articles */}
        <div className="space-y-6">
          {filteredNews.map(article => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-80 lg:flex-shrink-0">
                  <div className="h-48 lg:h-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.headline}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${getCategoryColor(article.category)}`}>
                      <Tag size={14} className="mr-1" />
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(article.publishedDate)}
                    </div>
                    <span className="text-sm text-gray-500">• {article.source}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {article.headline}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group/link"
                  >
                    Read Full Article
                    <ExternalLink size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
