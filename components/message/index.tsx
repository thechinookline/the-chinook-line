// components/MessageBanner.jsx
import styles from './messagebanner.module.css';

export default function MessageBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.text}>
          Alberta Transit Hub acknowledges the proposed Chinook Line route crosses 
          the unceded territories of many First Nations. This is a draft statement 
          pending formal review and approval from these Nations and government partners.
        </p>
      </div>
    </div>
  );
}