import about from '../../assets/about.jpg';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About MindfulChat</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make mental health support accessible to everyone, anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section opacity-0">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              MindfulChat was born from a simple idea: everyone deserves access to compassionate mental health support. 
              We combine cutting-edge AI technology with evidence-based therapeutic approaches to create a safe, 
              supportive space for your mental well-being journey.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our team of mental health professionals and AI experts work together to ensure that every interaction 
              with MindfulChat is helpful, empathetic, and grounded in best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 fade-in-section opacity-0">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">98%</p>
              <p className="text-gray-600 dark:text-gray-300">User satisfaction</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">250k+</p>
              <p className="text-gray-600 dark:text-gray-300">Active users</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">12+</p>
              <p className="text-gray-600 dark:text-gray-300">Mental health experts</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow text-center">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">24/7</p>
              <p className="text-gray-600 dark:text-gray-300">Support availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
