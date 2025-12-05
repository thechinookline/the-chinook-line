import styles from './subheader.module.css';

export default function Subheader() {
  return (
    <div className={styles.subheader}>
      <div className={styles.subheaderContent}>
        {/* Left side - Email */}
        <div className={styles.leftSection}>
          <a href="mailto:contact@example.com" className={styles.email}>
            contact@example.com
          </a>
        </div>

        {/* Language selector */}
          <div className={styles.languageSelector}>
            <select className={styles.languageDropdown}>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

        {/* Right side - Social media icons and language selector */}
        <div className={styles.rightSection}>
          {/* Social media icons */}
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              {/* Replace with your Twitter icon */}
              <span className={styles.icon}>🐦</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              {/* Replace with your Facebook icon */}
              <span className={styles.icon}>📘</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              {/* Replace with your Instagram icon */}
              <span className={styles.icon}>📷</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              {/* Replace with your LinkedIn icon */}
              <span className={styles.icon}>💼</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}