'use client';

import { useState } from 'react';
import { useTrips } from '../../contexts/TripContext';
import TripCard from '../../components/TripCard/TripCard';
import styles from '../page.module.css';

export default function TripsPageClient() {
  const { trips, addTrip, deleteTrip } = useTrips();
  const [newTrip, setNewTrip] = useState({
    title: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTrip({
      ...newTrip,
      [name]: value
    });
  };

  const handleAddTrip = (e) => {
    e.preventDefault();
    if (!newTrip.title || !newTrip.startDate || !newTrip.endDate) {
      alert('Please fill in all required fields!');
      return;
    }
    
    addTrip(newTrip);
    setNewTrip({
      title: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  return (
    <main className={styles.main}>
      <h1>My Trips</h1>
      
      <div className={styles.tripForm}>
        <h2>Add New Trip</h2>
        <form onSubmit={handleAddTrip}>
          <div>
            <label htmlFor="title">Trip Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newTrip.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="startDate">Start Date *</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={newTrip.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="endDate">End Date *</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={newTrip.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newTrip.description}
              onChange={handleInputChange}
            />
          </div>
          
          <button type="submit">Add Trip</button>
        </form>
      </div>
      
      <div className={styles.tripList}>
        <h2>Your Trips</h2>
        {trips.length === 0 ? (
          <p>No trips found. Add a new trip to get started!</p>
        ) : (
          <div className={styles.tripGrid}>
            {trips.map(trip => (
              <TripCard key={trip.id} trip={trip} onDelete={deleteTrip} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 