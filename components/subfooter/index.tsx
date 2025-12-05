import styles from './subfooter.module.css';

export default function Subfooter() {
  return (
    <div className={styles.subfooter}>
      <div className={styles.subfooterContent}>
        {/* First line - Copyright */}
        <div className={styles.copyright}>
          © 2026 Alberta Planning. All rights reserved.
        </div>
        
        {/* Second line - Links */}
        <div className={styles.links}>
          <a href="/sitemap" className={styles.link}>Sitemap</a>
          <span className={styles.separator}>|</span>
          <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
          <span className={styles.separator}>|</span>
          <a href="/terms" className={styles.link}>Terms and Conditions</a>
        </div>
      </div>
    </div>
  );
}