'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ItineraryPage() {
  const [itineraryItems, setItineraryItems] = useState([
    {
      id: 1,
      day: 1,
      time: '09:00',
      activity: 'Check-in at Hotel',
      location: 'Hilton Downtown'
    },
    {
      id: 2,
      day: 1,
      time: '14:00',
      activity: 'City Tour',
      location: 'City Center'
    },
    {
      id: 3,
      day: 2,
      time: '10:00',
      activity: 'Museum Visit',
      location: 'National Museum'
    }
  ]);

  const handleAddItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      id: Date.now(),
      day: parseInt(formData.get('day')),
      time: formData.get('time'),
      activity: formData.get('activity'),
      location: formData.get('location')
    };
    setItineraryItems([...itineraryItems, newItem]);
    e.target.reset();
  };

  const handleDeleteItem = (id) => {
    setItineraryItems(itineraryItems.filter(item => item.id !== id));
  };

  const groupedByDay = itineraryItems.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {});

  Object.values(groupedByDay).forEach(dayItems => {
    dayItems.sort((a, b) => a.time.localeCompare(b.time));
  });

  return (
    <div className={styles.itineraryPage}>
      <header className={styles.header}>
        <h1>Trip Itinerary</h1>
        <p>Plan your daily activities</p>
      </header>

      <div className={styles.addItem}>
        <h2>Add New Itinerary Item</h2>
        <form onSubmit={handleAddItem} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="day">Day *</label>
            <input
              type="number"
              id="day"
              name="day"
              min="1"
              required
              placeholder="Enter day number"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="time">Time *</label>
            <input
              type="time"
              id="time"
              name="time"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="activity">Activity *</label>
            <input
              type="text"
              id="activity"
              name="activity"
              required
              placeholder="Enter activity"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter location"
            />
          </div>
          <button type="submit" className={styles.submitButton}>Add to Itinerary</button>
        </form>
      </div>

      <div className={styles.itineraryList}>
        {Object.entries(groupedByDay).map(([day, items]) => (
          <div key={day} className={styles.daySection}>
            <div className={styles.dayHeader}>
              <h2>Day {day}</h2>
            </div>
            <div className={styles.timeline}>
              {items.map(item => (
                <div key={item.id} className={styles.timelineItem}>
                  <div className={styles.timelineContent}>
                    <div className={styles.activityInfo}>
                      <div className={styles.time}>{item.time}</div>
                      <div className={styles.activity}>{item.activity}</div>
                      {item.location && (
                        <div className={styles.location}>{item.location}</div>
                      )}
                    </div>
                    <div className={styles.actions}>
                      <button
                        onClick={() => handleDeleteItem(item.id)}
                        className={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 