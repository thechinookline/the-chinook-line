import styles from './OperationHours.module.css';

interface OperationHoursProps {
  phone?: string;
  operatingHours?: string;
  email?: string;
}

export default function OperationHours({
  phone = '111.111.1111',
  operatingHours = '5am to 1am',
  email = 'info@test.com',
}: OperationHoursProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.column}>
            <h3 className={styles.title}>Phone</h3>
            <a href={`tel:${phone}`} className={styles.content}>
              {phone}
            </a>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Operating Hours</h3>
            <p className={styles.content}>
              {operatingHours}
            </p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Email</h3>
            <a href={`mailto:${email}`} className={styles.content}>
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}