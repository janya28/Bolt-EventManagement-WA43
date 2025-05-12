import React from 'react';
import { Calendar, PlusCircle } from 'lucide-react';

interface HeaderProps {
  onAddEventClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddEventClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-primary-500" />
            <h1 className="text-2xl font-bold text-gray-900">EventFlow</h1>
          </div>
          
          <button 
            onClick={onAddEventClick}
            className="btn btn-primary flex items-center space-x-2"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Add Event</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;