import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Event } from '../types/event';
import { sampleEvents } from '../data/sampleEvents';

interface EventContextType {
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
  searchEvents: (query: string) => Event[];
  filterEventsByCategory: (category: string | null) => Event[];
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(sampleEvents);

  const addEvent = (newEvent: Omit<Event, 'id'>) => {
    const event: Event = {
      ...newEvent,
      id: Date.now().toString(), // Simple ID generation
    };
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  const searchEvents = (query: string): Event[] => {
    if (!query.trim()) return events;
    
    const searchTerm = query.toLowerCase().trim();
    return events.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        event.location.toLowerCase().includes(searchTerm) ||
        event.organizer.toLowerCase().includes(searchTerm)
    );
  };

  const filterEventsByCategory = (category: string | null): Event[] => {
    if (!category) return events;
    return events.filter((event) => event.category === category);
  };

  return (
    <EventContext.Provider
      value={{ events, addEvent, searchEvents, filterEventsByCategory }}
    >
      {children}
    </EventContext.Provider>
  );
};