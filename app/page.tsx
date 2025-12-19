import Image from "next/image";
import styles from "./page.module.css";
import Subheader from "../components/subheader";
import Header from "../components/header";
import Subfooter from "../components/subfooter";
import Footer from "../components/footer";
import GettingStarted from "../components/gettingstarted";
import MessageBanner from "../components/message";
import EmailUpdates from "../components/emailupdates";
import NewsSection from "../components/news/newsSection";
import SixBoxes from "../components/sixboxes"

export default function Home() {
  return (
    <div className={styles.page}>
      <Subheader/>
      <Header currentPage="home"/>
      <main className={styles.main}>
        <GettingStarted/>
        <SixBoxes />
        <EmailUpdates/>
      </main>
      <NewsSection/>
      <Footer/>
      <MessageBanner/>
      <Subfooter/>
    </div>
  );
}