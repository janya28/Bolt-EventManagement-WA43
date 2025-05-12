import React from 'react';
import { format } from 'date-fns';
import { MapPin, Calendar as CalendarIcon, Clock, User } from 'lucide-react';
import { Event, categoryColors, categoryLabels } from '../../types/event';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formattedStartDate = format(new Date(event.startDate), 'MMM d, yyyy');
  const formattedStartTime = format(new Date(event.startDate), 'h:mm a');
  const formattedEndTime = format(new Date(event.endDate), 'h:mm a');
  
  return (
    <div className="card overflow-hidden group animate-fade-in">
      <div className="relative h-48 overflow-hidden">
        {event.imageUrl ? (
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <CalendarIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}
        
        <div className="absolute top-4 right-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full text-white ${categoryColors[event.category]}`}>
            {categoryLabels[event.category]}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-1">{event.title}</h3>
        
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{formattedStartDate}</span>
          <Clock className="h-4 w-4 mx-1 ml-3" />
          <span>{formattedStartTime} - {formattedEndTime}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="truncate">{event.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="flex items-center text-gray-500 text-sm">
            <User className="h-4 w-4 mr-1" />
            <span>{event.organizer}</span>
          </div>
          
          <button className="text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;