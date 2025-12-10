import styles from './subheader.module.css';

export default function Subheader() {
  return (
    <div className={styles.subheader}>
      <div className={styles.subheaderContent}>
        {/* Left side - Email */}
        <div className={styles.leftSection}>
          <a href="mailto:comingsoon@thechinookline.ca" className={styles.email}>
            comingsoon@thechinookline.ca
          </a>
          <span> | </span> 
          <a>1.111.111.1111</a>
        </div>

        {/* Language selector */}
          <div className={styles.languageSelector}>
            <select className={styles.languageDropdown}>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
        
        {/* Right side - Social media icons and language selector */}
        <div className={styles.rightSection}>
          {/* Social media icons */}
          <div className={styles.socialIcons}>
            <a href="https://x.com/thechinookline" target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}>🐦</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584525463582" target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}>📘</span>
            </a>
            <a href="https://www.instagram.com/thechinookline/" target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}>📷</span>
            </a>
            <a href="https://www.linkedin.com/company/the-chinook-line/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}>📋</span>
            </a>
            <a href="https://www.youtube.com/@TheChinookLine" target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}>💼</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}