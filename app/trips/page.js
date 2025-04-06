'use client';

import { useState } from 'react';
import styles from '../page.module.css';

export default function TripsPage() {
  const [trips, setTrips] = useState([
    { id: 1, title: 'Paris Vacation', startDate: '2023-06-15', endDate: '2023-06-25', description: 'Exploring the city of love' },
    { id: 2, title: 'Tokyo Adventure', startDate: '2023-08-10', endDate: '2023-08-20', description: 'Experiencing Japanese culture' },
  ]);

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

  const addTrip = (e) => {
    e.preventDefault();
    if (!newTrip.title || !newTrip.startDate || !newTrip.endDate) {
      alert('Please fill in all required fields!');
      return;
    }
    
    const trip = {
      id: Date.now(),
      ...newTrip
    };
    
    setTrips([...trips, trip]);
    setNewTrip({
      title: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  const deleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  return (
    <main className={styles.main}>
      <h1>My Trips</h1>
      
      <div className={styles.tripForm}>
        <h2>Add New Trip</h2>
        <form onSubmit={addTrip}>
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
          trips.map(trip => (
            <div key={trip.id} className={styles.tripCard}>
              <h3>{trip.title}</h3>
              <p><strong>Dates:</strong> {trip.startDate} to {trip.endDate}</p>
              <p>{trip.description}</p>
              <button onClick={() => deleteTrip(trip.id)}>Delete Trip</button>
            </div>
          ))
        )}
      </div>
    </main>
  );
} 