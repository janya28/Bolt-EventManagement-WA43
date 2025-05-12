import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import EventCard from './EventCard';
import { Event, eventCategories, categoryLabels } from '../../types/event';

interface EventListProps {
  events: Event[];
  onSearch: (query: string) => Event[];
  onFilter: (category: string | null) => Event[];
}

const EventList: React.FC<EventListProps> = ({ events, onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (selectedCategory) {
      // Apply both search and category filter
      const searchResults = onSearch(query);
      setFilteredEvents(onFilter(selectedCategory).filter(event => 
        searchResults.some(searchEvent => searchEvent.id === event.id)
      ));
    } else {
      // Apply only search
      setFilteredEvents(onSearch(query));
    }
  };

  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
    
    if (searchQuery) {
      // Apply both search and category filter
      const filterResults = onFilter(category);
      setFilteredEvents(onSearch(searchQuery).filter(event => 
        filterResults.some(filterEvent => filterEvent.id === event.id)
      ));
    } else {
      // Apply only category filter
      setFilteredEvents(category ? onFilter(category) : events);
    }
  };

  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search events..."
              className="input pl-10"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          
          <div className="md:w-64">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                className="input pl-10 appearance-none"
                value={selectedCategory || ''}
                onChange={(e) => handleCategoryFilter(e.target.value || null)}
              >
                <option value="">All Categories</option>
                {eventCategories.map((category) => (
                  <option key={category} value={category}>
                    {categoryLabels[category]}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-500 mb-2">No events found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;