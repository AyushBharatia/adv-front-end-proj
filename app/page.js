'use client';

import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Plan Your Perfect Journey</h1>
          <p>Your all-in-one travel companion for seamless trip planning and organization</p>
          <Link href="/trips" className={styles.ctaButton}>
            Start Planning
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <h2>Why Choose TravelEase?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>✈️</div>
            <h3>Trip Management</h3>
            <p>Organize multiple trips with ease. Keep track of dates, destinations, and all your travel details in one place.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📅</div>
            <h3>Smart Itinerary</h3>
            <p>Build detailed day-by-day itineraries. Plan activities, set times, and manage your schedule effortlessly.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>
            <h3>Budget Tracking</h3>
            <p>Stay on top of your travel expenses. Track spending by category and never go over budget.</p>
          </div>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <h2>Getting Started is Easy</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Create Your Trip</h3>
              <p>Set up your trip with basic details like dates and destination</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Plan Your Days</h3>
              <p>Add activities and organize your daily schedule</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Manage Budget</h3>
              <p>Set your budget and track expenses as you go</p>
            </div>
          </div>
        </div>
        <Link href="/trips" className={styles.secondaryButton}>
          Create Your First Trip
        </Link>
      </section>

      <section className={styles.highlights}>
        <div className={styles.highlightGrid}>
          <div className={styles.highlightCard}>
            <h3>Organize Better</h3>
            <p>Keep all your travel plans organized and accessible in one place</p>
          </div>
          <div className={styles.highlightCard}>
            <h3>Travel Smarter</h3>
            <p>Make informed decisions with our budget tracking features</p>
          </div>
          <div className={styles.highlightCard}>
            <h3>Stress Less</h3>
            <p>Focus on enjoying your trip while we handle the planning details</p>
          </div>
          <div className={styles.highlightCard}>
            <h3>Share Easily</h3>
            <p>Collaborate with travel companions and share your plans effortlessly</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of travelers who plan better trips with TravelEase</p>
        <Link href="/trips" className={styles.ctaButton}>
          Get Started Now
        </Link>
      </section>
    </div>
  );
}
