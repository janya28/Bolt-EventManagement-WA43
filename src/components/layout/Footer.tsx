import React from 'react';
import { Calendar, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Calendar className="h-6 w-6 text-primary-400" />
            <span className="text-xl font-semibold">EventFlow</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p className="flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 text-accent-500 mx-1" /> in 2025
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">About</h4>
            <p className="text-gray-400 text-sm">
              EventFlow is a modern event management platform designed to help you discover and organize events effortlessly.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Browse Events</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Create Event</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Email: info@eventflow.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Event St, San Francisco, CA 94103</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2025 EventFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;