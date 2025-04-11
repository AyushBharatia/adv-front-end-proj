import Link from 'next/link'
import styles from './TripCard.module.css'

const TripCard = ({ trip }) => {
  const { id, title, destination, startDate, endDate, image } = trip

  // Function to get the appropriate image based on destination
  const getTripImage = (destination) => {
    const destinationLower = destination.toLowerCase();
    if (destinationLower.includes('bali') || destinationLower.includes('indonesia')) {
      return '/images/trips/bali.jpg';
    } else if (destinationLower.includes('new york') || destinationLower.includes('nyc') || destinationLower.includes('usa')) {
      return '/images/trips/nyc.jpg';
    }
    // Default image if no specific match
    return '/images/trips/default-trip.jpg';
  };

  return (
    <Link href={`/trips/${id}`} className={styles.tripCard}>
      <div className={styles.imageContainer}>
        <img 
          src={getTripImage(destination)} 
          alt={destination} 
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.destination}>
          <span className={styles.icon}>📍</span> {destination}
        </p>
        <div className={styles.dates}>
          <span>{new Date(startDate).toLocaleDateString()}</span>
          <span>→</span>
          <span>{new Date(endDate).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  )
}

export default TripCard 