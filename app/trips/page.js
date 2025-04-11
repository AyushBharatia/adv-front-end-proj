'use client';

import TripCard from '@/components/TripCard/TripCard'
import { useTrip } from '@/context/TripContext'
import styles from './page.module.css'

export default function TripsPage() {
  const { trips } = useTrip()

  return (
    <div className={styles.tripsPage}>
      <div className={styles.header}>
        <h1>My Trips</h1>
        <button className="btn-primary">Create New Trip</button>
      </div>
      
      <div className={styles.tripsGrid}>
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
} 