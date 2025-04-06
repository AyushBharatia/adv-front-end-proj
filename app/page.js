import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to TravelEase</h1>
          <p>Your all-in-one solution for stress-free travel planning</p>
          <div className={styles.cta}>
            <Link href="/trips" className={styles.ctaButton}>
              Start Planning
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2>How TravelEase Helps You</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Trip Management</h3>
            <p>Create and organize multiple trips in one place. Keep track of dates, destinations, and trip details.</p>
            <Link href="/trips">Manage Trips</Link>
          </div>
          
          <div className={styles.featureCard}>
            <h3>Itinerary Builder</h3>
            <p>Plan your daily activities with our easy-to-use itinerary builder. Organize by day and time.</p>
            <Link href="/itinerary">Build Itinerary</Link>
          </div>
          
          <div className={styles.featureCard}>
            <h3>Budget Tracking</h3>
            <p>Set travel budgets and track your expenses by category. Stay on top of your travel spending.</p>
            <Link href="/budget">Track Budget</Link>
          </div>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2>Getting Started is Easy</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Create a Trip</h3>
            <p>Start by creating a new trip with dates and destination details</p>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Plan Your Itinerary</h3>
            <p>Add daily activities, sights to see, and places to visit</p>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Set Your Budget</h3>
            <p>Establish a travel budget and track expenses as you go</p>
          </div>
        </div>
        <div className={styles.cta}>
          <Link href="/trips" className={styles.ctaButton}>
            Start Your Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
