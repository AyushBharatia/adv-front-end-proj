'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ItineraryContext = createContext();

// Default data
const defaultItineraryItems = [
  { id: 1, day: 1, time: '09:00', activity: 'Museum Visit', location: 'Louvre Museum' },
  { id: 2, day: 1, time: '13:00', activity: 'Lunch', location: 'Café de Paris' },
  { id: 3, day: 2, time: '10:00', activity: 'City Tour', location: 'Eiffel Tower' },
];

// Provider component
export function ItineraryProvider({ children }) {
  // Initialize state from localStorage if available (client-side only)
  const [itineraryItems, setItineraryItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedItems = localStorage.getItem('itineraryItems');
    if (storedItems) {
      setItineraryItems(JSON.parse(storedItems));
    } else {
      setItineraryItems(defaultItineraryItems);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever itinerary items change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('itineraryItems', JSON.stringify(itineraryItems));
    }
  }, [itineraryItems, isLoaded]);

  // Group items by day
  const groupedByDay = itineraryItems.reduce((acc, item) => {
    const day = item.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);
    return acc;
  }, {});

  // Add a new itinerary item
  const addItineraryItem = (newItem) => {
    const item = {
      id: Date.now(),
      ...newItem,
    };
    setItineraryItems([...itineraryItems, item]);
  };

  // Delete an itinerary item
  const deleteItineraryItem = (id) => {
    setItineraryItems(itineraryItems.filter(item => item.id !== id));
  };

  // Update an itinerary item
  const updateItineraryItem = (updatedItem) => {
    setItineraryItems(itineraryItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
  };

  // Make the context values available
  const value = {
    itineraryItems,
    groupedByDay,
    addItineraryItem,
    deleteItineraryItem,
    updateItineraryItem,
  };

  return <ItineraryContext.Provider value={value}>{children}</ItineraryContext.Provider>;
}

// Custom hook for using this context
export function useItinerary() {
  const context = useContext(ItineraryContext);
  if (context === undefined) {
    throw new Error('useItinerary must be used within an ItineraryProvider');
  }
  return context;
} 