import Link from 'next/link'
import styles from './TripCard.module.css'

const TripCard = ({ trip, onDelete }) => {
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

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
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
        <div className={styles.tripHeader}>
          <h3>{title}</h3>
          <button 
            className={styles.deleteButton} 
            onClick={() => onDelete(id)}
            aria-label="Delete trip"
          >
            ✕
          </button>
        </div>
        <p className={styles.destination}>
          <span className={styles.icon}>📍</span> {destination}
        </p>
        <div className={styles.tripDates}>
          <div>
            <span className={styles.dateLabel}>From:</span>
            <span className={styles.date}>{formatDate(startDate)}</span>
          </div>
          <div>
            <span className={styles.dateLabel}>To:</span>
            <span className={styles.date}>{formatDate(endDate)}</span>
          </div>
        </div>
        <div className={styles.tripDuration}>
          <span>{getDuration(startDate, endDate)} days</span>
        </div>
      </div>
    </Link>
  )
}

export default TripCard 