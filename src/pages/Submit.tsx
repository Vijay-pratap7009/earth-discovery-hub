
import { useState } from 'react';
import { Upload, Plus, X } from 'lucide-react';
import Header from '../components/Header';

const Submit = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    website: '',
    category: '',
    image: null as File | null
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const categories = [
    'Climate Tech',
    'Waste Solutions',
    'Fashion',
    'Food & Agriculture',
    'Energy',
    'Water',
    'Policy & Advocacy',
    'Tools for Individuals'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your submission! We\'ll review it soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit a Climate Solution</h1>
          <p className="text-gray-600">
            Share an innovative startup, tool, or organization making a positive impact on our planet
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8">
          {/* Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="Enter the name of the company or solution"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
              placeholder="Describe what makes this solution unique and impactful..."
            />
          </div>

          {/* Website */}
          <div className="mb-6">
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
              Website *
            </label>
            <input
              type="url"
              id="website"
              name="website"
              required
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="https://example.com"
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Logo/Image
            </label>
            
            {imagePreview ? (
              <div className="relative inline-block">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-10 h-10 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">
                    Click to upload an image or drag and drop
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    PNG, JPG up to 5MB
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-medium"
            >
              <Plus size={20} />
              Submit for Review
            </button>
          </div>
        </form>

        {/* Guidelines */}
        <div className="mt-8 bg-green-50 rounded-xl p-6">
          <h3 className="font-semibold text-green-900 mb-3">Submission Guidelines</h3>
          <ul className="text-sm text-green-800 space-y-2">
            <li>• Make sure the solution addresses a real climate challenge</li>
            <li>• Provide accurate and up-to-date information</li>
            <li>• Include a clear description of the impact or innovation</li>
            <li>• Submissions are reviewed within 48 hours</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Submit;
