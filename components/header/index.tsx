import styles from './header.module.css';
import Image from 'next/image';

interface HeaderProps {
  currentPage: 'home' | 'points' | 'map' | 'book' | 'login';
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        {/* Left side - Logo */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <Image
              src="/logo.png" // Update with your logo path
              alt="Logo"
              width={120}
              height={40}
              priority
            />
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
    </div>
  );
}