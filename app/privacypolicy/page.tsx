import Image from "next/image";
import styles from "./privacypolicy.module.css";
import Subheader from "../../components/subheader";
import Header from "../../components/header";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";

export default function PrivacyPolicy() {
    return (
         <div className={styles.page}>
      <Subheader/>
      <Header currentPage="points"/>
      <main className={styles.main}>
        Privacy policy
      </main>
      <Footer/>
      <Subfooter/>
    </div>
    );
}