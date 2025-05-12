import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import EventList from './components/events/EventList';
import EventForm from './components/events/EventForm';
import Modal from './components/modals/Modal';
import Hero from './components/home/Hero';
import FeaturedEvents from './components/home/FeaturedEvents';
import { EventProvider, useEvents } from './context/EventContext';

const EventApp: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { events, addEvent, searchEvents, filterEventsByCategory } = useEvents();

  const handleAddEvent = (newEvent: any) => {
    addEvent(newEvent);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onAddEventClick={() => setIsModalOpen(true)} />
      
      <main className="flex-grow">
        <Hero onAddEventClick={() => setIsModalOpen(true)} />
        
        <FeaturedEvents events={events} />
        
        <section className="py-12">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
            <EventList
              events={events}
              onSearch={searchEvents}
              onFilter={filterEventsByCategory}
            />
          </div>
        </section>
      </main>
      
      <Footer />
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EventForm onSubmit={handleAddEvent} onCancel={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
};

function App() {
  return (
    <EventProvider>
      <EventApp />
    </EventProvider>
  );
}

export default App;