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
          <a className={styles.phone}>1.111.111.1111</a>
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
  );
}