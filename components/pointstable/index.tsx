import styles from './PointsTable.module.css';

type Plan = 'Bronze' | 'Silver' | 'Gold';

interface Benefit {
  name: string;
  points: {
    Bronze: number | string;
    Silver: number | string;
    Gold: number | string;
  };
  redeem: number | string;
}

export default function PointsTable() {
  const benefits: Benefit[] = [
    { name: 'Single Pass', points: { Bronze: 1, Silver: 2, Gold: 3 }, redeem: '-20' },
    { name: 'Month Pass', points: { Bronze: 2, Silver: 4, Gold: 6 }, redeem: '-60' },
    { name: 'Year Pass', points: { Bronze: 3, Silver: 6, Gold: 8 }, redeem: '-120' },
    { name: 'Bakery', points: { Bronze: 1, Silver: 2, Gold: 4 }, redeem: '-' },
    { name: 'Restaurant', points: { Bronze: 1, Silver: 2, Gold: 4 }, redeem: '-' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.tableContainer}>
          <table className={styles.pointsTable}>
            <thead>
              <tr>
                <th className={styles.headerCell}>Benefits</th>
                <th className={styles.headerCell}>Bronze</th>
                <th className={styles.headerCell}>Silver</th>
                <th className={styles.headerCell}>Gold</th>
                <th className={styles.headerCell}>Redeem</th>
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit, index) => (
                <tr 
                  key={benefit.name} 
                  className={index % 2 === 0 ? styles.evenRow : styles.oddRow}
                >
                  <td className={styles.benefitCell}>{benefit.name}</td>
                  <td className={styles.pointsCell}>{benefit.points.Bronze}</td>
                  <td className={styles.pointsCell}>{benefit.points.Silver}</td>
                  <td className={styles.pointsCell}>{benefit.points.Gold}</td>
                  <td className={styles.redeemCell}>{benefit.redeem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}