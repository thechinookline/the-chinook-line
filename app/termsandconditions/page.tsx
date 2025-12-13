import Header from "../../components/header";
import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";
import Subheader from "../../components/subheader";
import styles from "./termsandconditions.module.css";
import MessageBanner from "../../components/message";

export default function TermsAndConditions() {
  return (
    <div className={styles.page}>
      <Subheader />
      <Header currentPage="home" />
      
      <main className={styles.main}>
        Terms and conditions
      </main>
      
      <Footer />
      <MessageBanner/>
      <Subfooter />
    </div>
  );
}