// app/map/page.tsx
import styles from "./map.module.css";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";
import OperationHours from "../../components/operationhours";
import HeroSection from "@/components/herosection"; // Import HeroSection

export default function Map() {
  return (
    <>
      {/* Add HeroSection for Map page */}
      <HeroSection 
        gradient="linear-gradient(to bottom, rgba(20, 40, 60, 0.4), rgba(20, 40, 60, 0.6))"
        contentPosition="center"
        minHeight="50vh" // Shorter hero for map page
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Interactive Map</h1>
          <p className={styles.heroSubtitle}>
            Explore stations, routes, and real-time information
          </p>
        </div>
      </HeroSection>
      
      {/* .page container for the rest */}
      <div className={styles.page}>
        <main className={styles.main}>
          <div style={{ width: "100%", height: "80vh" }}>
            <iframe
              src="https://the-chinook-line-map-v2.vercel.app/"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Interactive Map"
            />
          </div>
          <OperationHours />
        </main>
        <Footer />
        <MessageBanner />
        <Subfooter />
      </div>
    </>
  );
}