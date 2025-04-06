'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <span className={styles.logo}>TravelEase</span>
        </Link>
      </div>
      
      <div className={styles.menuButton} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href="/">
            Home
          </Link>
        </li>
        <li className={pathname === '/trips' ? styles.active : ''}>
          <Link href="/trips">
            My Trips
          </Link>
        </li>
        <li className={pathname === '/itinerary' ? styles.active : ''}>
          <Link href="/itinerary">
            Itinerary
          </Link>
        </li>
        <li className={pathname === '/budget' ? styles.active : ''}>
          <Link href="/budget">
            Budget
          </Link>
        </li>
      </ul>
    </nav>
  );
} 