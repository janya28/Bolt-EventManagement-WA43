import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Event } from '../../types/event';
import EventCard from '../events/EventCard';

interface FeaturedEventsProps {
  events: Event[];
}

const FeaturedEvents: React.FC<FeaturedEventsProps> = ({ events }) => {
  const featuredEvents = events.filter(event => event.isFeatured).slice(0, 3);
  
  if (featuredEvents.length === 0) {
    return null;
  }
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Events</h2>
          <a href="#" className="text-primary-500 hover:text-primary-600 transition-colors flex items-center text-sm font-medium">
            View all events
            <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;