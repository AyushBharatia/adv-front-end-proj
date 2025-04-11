'use client'

import { notFound } from 'next/navigation'
import { useTrip } from '@/context/TripContext'
import styles from './page.module.css'

export default function TripPage({ params }) {
  const { getTrip } = useTrip()
  const trip = getTrip(params.id)

  if (!trip) {
    notFound()
  }

  return (
    <div className={styles.tripPage}>
      <div className={styles.header}>
        <h1>{trip.title}</h1>
        <div className={styles.actions}>
          <button className="btn-secondary">Edit Trip</button>
          <button className="btn-primary">Add Activity</button>
        </div>
      </div>

      <div className={styles.tripInfo}>
        <div className={styles.imageContainer}>
          <img 
            src={trip.image} 
            alt={trip.destination} 
            className={styles.image}
          />
        </div>
        
        <div className={styles.details}>
          <h2>{trip.destination}</h2>
          <div className={styles.dates}>
            <span>{new Date(trip.startDate).toLocaleDateString()}</span>
            <span>→</span>
            <span>{new Date(trip.endDate).toLocaleDateString()}</span>
          </div>
          <p className={styles.description}>{trip.description}</p>
          <div className={styles.budget}>
            <h3>Budget</h3>
            <p>${trip.budget}</p>
          </div>
        </div>
      </div>

      <div className={styles.itinerary}>
        <h2>Itinerary</h2>
        <div className={styles.itineraryList}>
          {trip.itinerary.map((day, index) => (
            <div key={index} className={styles.dayCard}>
              <h3>Day {day.day}</h3>
              <ul>
                {day.activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 