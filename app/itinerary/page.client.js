'use client';

import { useState } from 'react';
import { useItinerary } from '../../contexts/ItineraryContext';
import styles from '../page.module.css';

export default function ItineraryPageClient() {
  const { 
    itineraryItems, 
    groupedByDay, 
    addItineraryItem, 
    deleteItineraryItem 
  } = useItinerary();

  const [newItem, setNewItem] = useState({
    day: '',
    time: '',
    activity: '',
    location: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.day || !newItem.time || !newItem.activity) {
      alert('Please fill in all required fields!');
      return;
    }
    
    addItineraryItem(newItem);
    setNewItem({
      day: '',
      time: '',
      activity: '',
      location: ''
    });
  };

  return (
    <main className={styles.main}>
      <h1>Trip Itinerary</h1>
      
      <div className={styles.itineraryForm}>
        <h2>Add New Itinerary Item</h2>
        <form onSubmit={handleAddItem}>
          <div>
            <label htmlFor="day">Day *</label>
            <input
              type="number"
              id="day"
              name="day"
              min="1"
              value={newItem.day}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="time">Time *</label>
            <input
              type="time"
              id="time"
              name="time"
              value={newItem.time}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="activity">Activity *</label>
            <input
              type="text"
              id="activity"
              name="activity"
              value={newItem.activity}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={newItem.location}
              onChange={handleInputChange}
            />
          </div>
          
          <button type="submit">Add to Itinerary</button>
        </form>
      </div>
      
      <div className={styles.itineraryList}>
        <h2>Your Itinerary</h2>
        {Object.keys(groupedByDay).length === 0 ? (
          <p>No itinerary items found. Start planning your days!</p>
        ) : (
          Object.keys(groupedByDay).sort((a, b) => a - b).map(day => (
            <div key={day} className={styles.dayGroup}>
              <h3>Day {day}</h3>
              {groupedByDay[day]
                .sort((a, b) => a.time.localeCompare(b.time))
                .map(item => (
                  <div key={item.id} className={styles.itineraryItem}>
                    <div>
                      <strong>{item.time}</strong> - {item.activity}
                      {item.location && <span> @ {item.location}</span>}
                    </div>
                    <button onClick={() => deleteItineraryItem(item.id)}>Remove</button>
                  </div>
                ))
              }
            </div>
          ))
        )}
      </div>
    </main>
  );
} 