import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import blogs from "../../data/data"
import { useNavigate } from 'react-router-dom';

export default function BlogSection() {
  // Use the imported blogs from the pasted file
 
  
  const [activeTab, setActiveTab] = useState('all');
  const navigate=useNavigate();
  
  // Get unique categories from blogs for dynamic tabs
  const categories = ['all', ...new Set(blogs.map(blog => blog.category))];
  
  // Filter blogs based on active tab
  const filteredBlogs = activeTab === 'all'
    ? blogs
    : blogs.filter(blog => blog.category === activeTab);
  
  // Format category name for display
  const formatCategoryName = (category) => {
    if (category === 'all') return 'All';
    return category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
  };
  
  // Get color based on category for card accents
  const getCategoryColor = (category) => {
    const colors = {
      anxiety: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      mindfulness: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      stress: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
      relationships: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      depression: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
      resilience: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      'seasonal-affective-disorder': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
      wellness: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200'
    };
    
    return colors[category] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-section opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Mental Health Resources</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our collection of articles written by mental health professionals to support your well-being.
          </p>
        </div>
        
        {/* Filter tabs - scrollable on mobile */}
        <div className="mb-12 overflow-x-auto pb-2 fade-in-section opacity-0">
          <div className="flex space-x-2 min-w-max px-4">
            {categories.slice(0, 8).map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                  activeTab === category 
                    ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200'
                }`}
              >
                {formatCategoryName(category)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(0, 4).map(blog => (
            <div 
              key={blog.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 overflow-hidden fade-in-section opacity-0"
            >
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(blog.category)}`}>
                  {formatCategoryName(blog.category)}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {blog.date}
                  </span>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredBlogs.length > 6 && (
          <div className="text-center mt-12">
            <button onClick={() => navigate('/all-articles')} className="bg-white hover:bg-gray-50 text-indigo-600 font-medium px-6 py-3 rounded-full shadow-sm border border-gray-200 inline-flex items-center transition-colors">
              Browse all articles
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
        
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No articles found in this category.</p>
          </div>  
        )}
      </div>
    </section>
  );
}
