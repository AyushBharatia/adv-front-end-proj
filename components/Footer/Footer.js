import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Travel Ease</h3>
          <p>Your travel planning companion</p>
        </div>
        
        <div className={styles.section}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/trips">My Trips</Link></li>
            <li><Link href="/itinerary">Itinerary</Link></li>
            <li><Link href="/budget">Budget</Link></li>
          </ul>
        </div>
        
        <div className={styles.section}>
          <h4>Contact</h4>
          <p>Email: support@travelease.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Travel Ease. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 