'use client'

import { createContext, useContext, useState } from 'react'

const TripContext = createContext()

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([
    {
      id: 1,
      title: 'Summer Vacation 2024',
      destination: 'Bali, Indonesia',
      startDate: '2024-07-01',
      endDate: '2024-07-15',
      description: 'A relaxing vacation in Bali with family',
      image: '/images/bali.jpg',
      budget: 5000,
      itinerary: [
        {
          day: 1,
          activities: ['Arrival', 'Check-in at hotel', 'Beach time']
        }
      ]
    },
    {
      id: 2,
      title: 'Business Trip',
      destination: 'New York, USA',
      startDate: '2024-05-10',
      endDate: '2024-05-15',
      description: 'Business meetings and networking',
      image: '/images/new-york.jpg',
      budget: 3000,
      itinerary: [
        {
          day: 1,
          activities: ['Flight to NYC', 'Check-in at hotel', 'Team dinner']
        }
      ]
    }
  ])

  const addTrip = (newTrip) => {
    const tripWithId = {
      ...newTrip,
      id: trips.length + 1
    }
    setTrips([...trips, tripWithId])
  }

  const updateTrip = (updatedTrip) => {
    setTrips(trips.map(trip => 
      trip.id === updatedTrip.id ? updatedTrip : trip
    ))
  }

  const deleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id))
  }

  const getTrip = (id) => {
    return trips.find(trip => trip.id === parseInt(id))
  }

  const value = {
    trips,
    addTrip,
    updateTrip,
    deleteTrip,
    getTrip
  }

  return (
    <TripContext.Provider value={value}>
      {children}
    </TripContext.Provider>
  )
}

export const useTrip = () => {
  const context = useContext(TripContext)
  if (context === undefined) {
    throw new Error('useTrip must be used within a TripProvider')
  }
  return context
} 