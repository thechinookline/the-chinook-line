import Link from 'next/link';
import styles from './emailupdates.module.css';

export default function EmailUpdates() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get Updates On The Transit System In Alberta</h2>
        
        <div className={styles.emailSection}>
          <label htmlFor="email" className={styles.label}>Email address:</label>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              placeholder="Your Email Address"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </div>
        </div>
        
        <p className={styles.privacyNotice}>
          We will process the personal data you have supplied in accordance with our{' '}
          <Link href="/privacypolicy" className={styles.privacyLink}>
            privacy policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}