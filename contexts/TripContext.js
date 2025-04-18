'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const TripContext = createContext();

// Default data
const defaultTrips = [
  { id: 1, title: 'Paris Vacation', startDate: '2023-06-15', endDate: '2023-06-25', description: 'Exploring the city of love' },
  { id: 2, title: 'Tokyo Adventure', startDate: '2023-08-10', endDate: '2023-08-20', description: 'Experiencing Japanese culture' },
];

// Provider component
export function TripProvider({ children }) {
  // Initialize state from localStorage if available (client-side only)
  const [trips, setTrips] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedTrips = localStorage.getItem('trips');
    if (storedTrips) {
      setTrips(JSON.parse(storedTrips));
    } else {
      setTrips(defaultTrips);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever trips change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('trips', JSON.stringify(trips));
    }
  }, [trips, isLoaded]);

  // Add a new trip
  const addTrip = (newTrip) => {
    const trip = {
      id: Date.now(),
      ...newTrip,
    };
    setTrips([...trips, trip]);
  };

  // Delete a trip
  const deleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  // Update a trip
  const updateTrip = (updatedTrip) => {
    setTrips(trips.map(trip => 
      trip.id === updatedTrip.id ? updatedTrip : trip
    ));
  };

  // Make the context values available
  const value = {
    trips,
    addTrip,
    deleteTrip,
    updateTrip,
  };

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
}

// Custom hook for using this context
export function useTrips() {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTrips must be used within a TripProvider');
  }
  return context;
} 