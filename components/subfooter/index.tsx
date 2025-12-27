import Link from 'next/link';
import styles from './subfooter.module.css';

export default function Subfooter() {
  return (
    <div className={styles.subfooter}>
      <div className={styles.subfooterContent}>
        {/* First line - Copyright */}
        <div className={styles.copyright}>
          © 2026 The Chinook Line. All rights reserved.
        </div>
        
        {/* Second line - Links */}
        <div className={styles.links}>
          <Link href="/sitemap" className={styles.link}>
            Sitemap
          </Link>
          <span className={styles.separator}>|</span>
          
          <Link href="/privacypolicy" className={styles.link}>
            Privacy Policy
          </Link>
          <span className={styles.separator}>|</span>
          
          <Link href="/termsandconditions" className={styles.link}>
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}