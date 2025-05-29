import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import chat from '../../assets/chat.png';

function HeroSection() {
  const navigate = useNavigate();
  
  return (
    <section className="bg-gradient-to-br from-indigo-100 via-blue-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-24 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left fade-in-section opacity-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              A Friend in Every Moment
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              <span className="text-indigo-700 dark:text-indigo-400 font-medium">MindfulChat</span> supports you 24/7 with empathy, insights, and coping tools. It's okay to not be okay—start your journey toward healing now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => navigate("/login")} className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105">
                Start Chatting
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="md:w-1/2 fade-in-section opacity-0">
            <img 
              src={chat} 
              alt="Mental Health Support" 
              className="w-full h-auto rounded-lg shadow-xl dark:shadow-gray-800/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
