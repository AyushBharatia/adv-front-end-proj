import styles from './TripCard.module.css';

export default function TripCard({ trip, onDelete }) {
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
    <div className={styles.tripCard}>
      <div className={styles.tripHeader}>
        <h3>{trip.title}</h3>
        <button 
          className={styles.deleteButton} 
          onClick={() => onDelete(trip.id)}
          aria-label="Delete trip"
        >
          ✕
        </button>
      </div>
      
      <div className={styles.tripDates}>
        <div>
          <span className={styles.dateLabel}>From:</span>
          <span className={styles.date}>{formatDate(trip.startDate)}</span>
        </div>
        <div>
          <span className={styles.dateLabel}>To:</span>
          <span className={styles.date}>{formatDate(trip.endDate)}</span>
        </div>
      </div>
      
      <div className={styles.tripDuration}>
        <span>{getDuration(trip.startDate, trip.endDate)} days</span>
      </div>
      
      {trip.description && (
        <p className={styles.tripDescription}>{trip.description}</p>
      )}
    </div>
  );
} 