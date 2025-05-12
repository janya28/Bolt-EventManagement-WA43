import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Event, eventCategories, categoryLabels } from '../../types/event';

interface EventFormProps {
  onSubmit: (event: Omit<Event, 'id'>) => void;
  onCancel: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Omit<Event, 'id'>>({
    title: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    imageUrl: '',
    organizer: '',
    category: 'conference',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }
    
    if (!formData.endDate) {
      newErrors.endDate = 'End date is required';
    } else if (formData.startDate && new Date(formData.endDate) < new Date(formData.startDate)) {
      newErrors.endDate = 'End date must be after start date';
    }
    
    if (!formData.organizer.trim()) {
      newErrors.organizer = 'Organizer is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Format dates properly for ISO string
      const formattedStartDate = new Date(formData.startDate).toISOString();
      const formattedEndDate = new Date(formData.endDate).toISOString();
      
      onSubmit({
        ...formData,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Add New Event</h2>
        <button 
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`input ${errors.title ? 'border-error focus:border-error focus:ring-error' : ''}`}
            />
            {errors.title && <p className="mt-1 text-sm text-error">{errors.title}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className={`input ${errors.description ? 'border-error focus:border-error focus:ring-error' : ''}`}
            />
            {errors.description && <p className="mt-1 text-sm text-error">{errors.description}</p>}
          </div>
          
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
              Start Date & Time
            </label>
            <input
              type="datetime-local"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={`input ${errors.startDate ? 'border-error focus:border-error focus:ring-error' : ''}`}
            />
            {errors.startDate && <p className="mt-1 text-sm text-error">{errors.startDate}</p>}
          </div>
          
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
              End Date & Time
            </label>
            <input
              type="datetime-local"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className={`input ${errors.endDate ? 'border-error focus:border-error focus:ring-error' : ''}`}
            />
            {errors.endDate && <p className="mt-1 text-sm text-error">{errors.endDate}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`input ${errors.location ? 'border-error focus:border-error focus:ring-error' : ''}`}
            />
            {errors.location && <p className="mt-1 text-sm text-error">{errors.location}</p>}
          </div>
          
          <div>
            <label htmlFor="organizer" className="block text-sm font-medium text-gray-700 mb-1">
              Organizer
            </label>
            <input
              type="text"
              id="organizer"
              name="organizer"
              value={formData.organizer}
              onChange={handleChange}
              className={`input ${errors.organizer ? 'border-error focus:border-error focus:ring-error' : ''}`}
            />
            {errors.organizer && <p className="mt-1 text-sm text-error">{errors.organizer}</p>}
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input"
            >
              {eventCategories.map((category) => (
                <option key={category} value={category}>
                  {categoryLabels[category]}
                </option>
              ))}
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL (optional)
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="input"
            />
            <p className="mt-1 text-xs text-gray-500">
              Provide a URL to an image for your event. Leave blank to use a default image.
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;