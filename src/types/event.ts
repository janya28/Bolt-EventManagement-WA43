export interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string; // ISO format
  endDate: string;   // ISO format
  imageUrl?: string;
  organizer: string;
  category: EventCategory;
  isFeatured?: boolean;
}

export type EventCategory = 
  | 'conference'
  | 'workshop'
  | 'seminar'
  | 'networking'
  | 'concert'
  | 'exhibition'
  | 'other';

export const eventCategories: EventCategory[] = [
  'conference',
  'workshop',
  'seminar',
  'networking',
  'concert',
  'exhibition',
  'other',
];

export const categoryColors: Record<EventCategory, string> = {
  conference: 'bg-blue-500',
  workshop: 'bg-green-500',
  seminar: 'bg-yellow-500',
  networking: 'bg-purple-500',
  concert: 'bg-pink-500',
  exhibition: 'bg-orange-500',
  other: 'bg-gray-500',
};

export const categoryLabels: Record<EventCategory, string> = {
  conference: 'Conference',
  workshop: 'Workshop',
  seminar: 'Seminar',
  networking: 'Networking',
  concert: 'Concert',
  exhibition: 'Exhibition',
  other: 'Other',
};