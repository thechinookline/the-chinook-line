import Link from 'next/link';
import styles from './GettingStarted.module.css'; 
export default function GettingStarted() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.rowContainer}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Get Started Earning Points
            </h2>
            <p className={styles.description}>
              Earn points while you buy tickets and shop at our stores at each stop. 
              Then use those points to redeem them for free day, week, or month passes.
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <Link 
              href="/learn-more" 
              className={styles.button}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}