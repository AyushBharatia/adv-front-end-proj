import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>TravelEase</h3>
          <p>Plan your trip with ease and enjoy stress-free travel.</p>
        </div>
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/trips">My Trips</a></li>
            <li><a href="/itinerary">Itinerary</a></li>
            <li><a href="/budget">Budget</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Contact</h3>
          <p>Email: info@travelease.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} TravelEase. All rights reserved. | CPAN144 Group Project</p>
      </div>
    </footer>
  );
} 