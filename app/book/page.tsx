import styles from "./book.module.css";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";

export default function Book() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Book Page</main>
      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}
