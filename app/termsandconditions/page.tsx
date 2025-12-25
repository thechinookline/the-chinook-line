import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";
import styles from "./termsandconditions.module.css";
import MessageBanner from "../../components/message";

export default function TermsAndConditions() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Terms and conditions</main>

      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}
