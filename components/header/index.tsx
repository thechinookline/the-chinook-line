import styles from './header.module.css';
import Image from 'next/image';

interface HeaderProps {
  currentPage: 'home' | 'fares' | 'points' | 'map' | 'book' | 'login';
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        {/* Left side - Logo */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            Logo
          </div>
        </div>

        {/* Right side - Navigation links */}
        <div className={styles.rightSection}>
          <nav className={styles.navigation}>
             <a 
              href="/" 
              className={`${styles.navLink} ${currentPage === 'home' ? styles.active : ''}`}
            >
              Home
            </a>
            <a
              href="/fares"
              className={`${styles.navLink} ${currentPage === 'fares' ? styles.active : ''}`}
            >
              Fares
            </a>
            <a 
              href="/points" 
              className={`${styles.navLink} ${currentPage === 'points' ? styles.active : ''}`}
            >
              Points
            </a>
            <a 
              href="/map" 
              className={`${styles.navLink} ${currentPage === 'map' ? styles.active : ''}`}
            >
              Map
            </a>
            <a 
              href="/book" 
              className={`${styles.navLink} ${currentPage === 'book' ? styles.active : ''}`}
            >
              Book
            </a>
            <a 
              href="/login" 
              className={`${styles.navLink} ${currentPage === 'login' ? styles.active : ''}`}
            >
              Login
            </a>
          </nav>
        </div>
      </div>
      <div className={styles.bottomLeftText}>
        <div>
          <div className={styles.welcome}>Welcome to The Chinook Line</div>
          <div className={styles.slogan}>Connecting every community.</div>
        </div>
      </div>
    </div>
  );
}