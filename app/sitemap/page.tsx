import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";
import styles from "./sitemap.module.css";
import MessageBanner from "../../components/message";

export default function Sitemap() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Site map</main>
      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}
