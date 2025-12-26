// app/points/page.tsx
import Image from "next/image";
import styles from "./points.module.css";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";
import OperationHours from "../../components/operationhours";
import HeroSection from "@/components/herosection";

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
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className={styles.secondary}
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <OperationHours/>
        </main>
        <Footer />
        <MessageBanner />
        <Subfooter />
      </div>
    </>
  );
}