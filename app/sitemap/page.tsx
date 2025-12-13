import Header from "../../components/header";
import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";
import Subheader from "../../components/subheader";
import styles from "./sitemap.module.css";

export default function Sitemap() {
  return (
    <div className={styles.page}>
      <Subheader />
      <Header currentPage="home" />
      
      <main className={styles.main}>
        Site map
      </main>
      
      <Footer />
      <Subfooter />
    </div>
  );
}