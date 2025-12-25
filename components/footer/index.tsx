import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* First Column - Logo */}
        <div className={styles.column}>
          <div className={styles.logoSection}>
            Logo
            <p className={styles.logoText}>Connect every community.</p>
          </div>
        </div>

        {/* Second Column - Getting Around */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Getting Around</h4>
          <ul className={styles.linkList}>
            <li><a href="/transit-fares" className={styles.footerLink}>Points</a></li>
            <li><a href="/schedules" className={styles.footerLink}>Map</a></li>
            <li><a href="/amenities" className={styles.footerLink}>Book</a></li>
            <li><a href="/amenities" className={styles.footerLink}>More</a></li>
          </ul>
        </div>

        {/* Third Column - Resources */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Resources</h4>
          <ul className={styles.linkList}>
            <li><a href="/contact" className={styles.footerLink}>Contact Us</a></li>
            <li><a href="/careers" className={styles.footerLink}>Careers</a></li>
            <li><a href="/accessibility" className={styles.footerLink}>Accessibility</a></li>
          </ul>
        </div>

        {/* Fourth Column - Contact Info */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <div className={styles.contactInfo}>
            <p className={styles.contactText}>test@test.com</p>
            
            <div className={styles.socialIcons}>
              <a 
                href="https://www.facebook.com/profile.php?id=61584851337306" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/images/icons/facebook_the_chinook_line_calgary_to_edmonton.png"
                  alt="Facebook"
                  width={30} 
                  height={30}
                />
              </a>
              <a 
                href="https://www.instagram.com/chinookline/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/images/icons/instagram_the_chinook_line_calgary_to_edmonton.png"
                  alt="Instagram"
                  width={30} 
                  height={30}
                />
              </a>
              <a 
                href="https://www.linkedin.com/company/the-chinook-line/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/images/icons/linkedin_the_chinook_line_calgary_to_edmonton.png"
                  alt="LinkedIn"
                  width={30} 
                  height={30}
                />
              </a>
              <a 
                href="https://x.com/thechinookline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/images/icons/twitter_the_chinook_line_calgary_to_edmonton.png"
                  alt="X"
                  width={30} 
                  height={30}
                />
              </a>
              <a 
                href="https://www.youtube.com/@TheChinookLine" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/images/icons/youtube_the_chinook_line_calgary_to_edmonton.png"
                  alt="YouTube"
                  width={30} 
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}