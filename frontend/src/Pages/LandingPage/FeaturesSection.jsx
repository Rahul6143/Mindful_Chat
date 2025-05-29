import { MessageCircle, Shield, Clock, BookOpen, Heart, ArrowRight, History } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose MindfulChat?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience compassionate support and evidence-based techniques for your mental well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 fade-in-section opacity-0">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full inline-block mb-4">
              <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">24/7 Availability</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access support whenever you need it, day or night.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 fade-in-section opacity-0">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full inline-block mb-4">
              <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Safe & Private</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your conversations are confidential and secure.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 fade-in-section opacity-0">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full inline-block mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Evidence-Based</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access proven strategies from cognitive behavioral therapy and mindfulness.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 fade-in-section opacity-0">
            <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full inline-block mb-4">
              <Heart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Personalized Experience</h3>
            <p className="text-gray-600 dark:text-gray-300">
              The more you interact, the better MindfulChat adapts to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
