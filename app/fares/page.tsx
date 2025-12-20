import styles from './FarePrices.module.css';
import Header from '../../components/header';
import Subheader from '../../components/subheader';
import Footer from '../../components/footer';
import Subfooter from '../../components/subfooter';

export default function FarePricesPage() {
  const fareData = [
    {
      ticketType: 'Day Pass',
      senior: '$2.00',
      adult: '$4.00',
      student: '$3.25',
      child: '$3.00',
    },
    {
      ticketType: 'Monthly Pass',
      senior: '$20',
      adult: '$40',
      student: '$30',
      child: '$20',
    },
  ];

  return (
    <div className={styles.page}>
      <Subheader />
      <Header currentPage="book" />

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Fare Prices</h1>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ticket Type</th>
                <th>Senior</th>
                <th>Adult</th>
                <th>Student</th>
                <th>Child</th>
              </tr>
            </thead>

            <tbody>
              {fareData.map((row, index) => (
                <tr
                  key={row.ticketType}
                  className={index % 2 === 0 ? styles.rowWhite : styles.rowYellow}
                >
                  <td>{row.ticketType}</td>
                  <td>{row.senior}</td>
                  <td>{row.adult}</td>
                  <td>{row.student}</td>
                  <td>{row.child}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
      <Subfooter />
    </div>
  );
}
