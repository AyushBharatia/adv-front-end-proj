'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Travel Ease</Link>
      </div>
      
      <ul className={styles.navLinks}>
        <li>
          <Link 
            href="/trips" 
            className={isActive('/trips') ? styles.active : ''}
          >
            My Trips
          </Link>
        </li>
        <li>
          <Link 
            href="/itinerary" 
            className={isActive('/itinerary') ? styles.active : ''}
          >
            Itinerary
          </Link>
        </li>
        <li>
          <Link 
            href="/budget" 
            className={isActive('/budget') ? styles.active : ''}
          >
            Budget
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 