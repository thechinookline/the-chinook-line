// app/points/page.tsx
import Image from "next/image";
import styles from "./points.module.css";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";
import OperationHours from "../../components/operationhours";
import HeroSection from "@/components/herosection";
import PointsTable from "@/components/pointstable";

export default function Points() {
  return (
    <>
      {/* HeroSection OUTSIDE the .page container */}
      <HeroSection 
        backgroundImage="/hero-bg.jpg" // Points page specific image
        gradient="linear-gradient(to bottom, rgba(10, 30, 50, 0.4), rgba(10, 30, 50, 0.6))"
        contentPosition="center"
        minHeight="60vh" // Optional: different height
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Points & Rewards</h1>
          <p className={styles.heroSubtitle}>
            Earn points with every ride and redeem for exclusive benefits
          </p>
        </div>
      </HeroSection>
      
      {/* .page container starts here */}
      <div className={styles.page}>
        <main className={styles.main}>
          <h2 className={styles.paragraph}>Get Started Earning Points</h2>
          <p className={styles.paragraph}>Earn points while you buy tickets and shop at our stores at each stop. Then use those points to redeem it for free day, week, or month passes.</p>
          <section className={styles.section}>
            <div className={styles.container}>
              <PointsTable />
            </div>
            <p className={styles.paragraph}>If you want to see what current promotions are available please download the app.</p>
          </section>
          <OperationHours/>
        </main>
        <Footer />
        <MessageBanner />
        <Subfooter />
      </div>
    </>
  );
}