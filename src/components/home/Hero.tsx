import React from 'react';
import { Calendar, Search } from 'lucide-react';

interface HeroProps {
  onAddEventClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAddEventClick }) => {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6 text-primary-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Discover Amazing Events</h1>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            Find and create events that connect you with people and experiences that matter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onAddEventClick} className="btn bg-white hover:bg-gray-100 text-primary-700 font-medium text-base px-6 py-3">
              Create Event
            </button>
            <button className="btn bg-primary-700/50 hover:bg-primary-700/70 text-white font-medium text-base px-6 py-3 backdrop-blur-sm">
              <Search className="h-5 w-5 mr-2" />
              Browse Events
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 text-gray-50 fill-current">
          <path d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,56C1120,48,1280,32,1360,24L1440,16L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;