// app/page.tsx
import Image from "next/image";
import styles from "./page.module.css";
import Subfooter from "../components/subfooter";
import Footer from "../components/footer";
import GettingStarted from "../components/gettingstarted";
import MessageBanner from "../components/message";
import EmailUpdates from "../components/emailupdates";
import SixBoxes from "../components/sixboxes";
import OperationHours from "../components/operationhours";
import TripPlanner from "../components/tripPlanner";
import TopStations from "../components/topStations";
import HeroSection from "@/components/herosection";

export default function Home() {
  return (
    <>
      {/* HeroSection - full width */}
      <HeroSection>
        <TripPlanner />
      </HeroSection>
      
      {/* Separate container for the rest */}
      <div className={styles.contentWrapper}>
        <TopStations />
        
        <main className={styles.main}>
          <div className={styles.fullWidthContainer}>
            <GettingStarted />
          </div>
          
          <div className={styles.contentContainer}>
            <SixBoxes />
          </div>
          
          <div className={styles.fullWidthContainer}>
            <EmailUpdates />
          </div>
          
          <div className={styles.contentContainer}>
            <OperationHours />
          </div>
        </main>
        <Footer/>
        <MessageBanner/>
        <Subfooter/>
      </div>
    </>
  );
}