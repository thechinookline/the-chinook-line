// app/book/page.tsx
import styles from "./book.module.css";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";
import OperationHours from "../../components/operationhours";
import HeroSection from "@/components/herosection"; // Import HeroSection

export default function Book() {
  return (
    <>
      {/* Add HeroSection for Book page */}
      <HeroSection 
        gradient="linear-gradient(to bottom, rgba(30, 50, 70, 0.4), rgba(30, 50, 70, 0.6))"
        contentPosition="center"
        minHeight="50vh"
      >
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Book Tickets</h1>
          <p className={styles.heroSubtitle}>
            Reserve your seats and plan your journey with ease
          </p>
        </div>
      </HeroSection>
      
      {/* .page container for the rest */}
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.content}>
            {/* Add your booking form/content here */}
            <div className={styles.bookingForm}>
              <h2>Book Your Trip</h2>
              <p>Coming soon - Online booking system</p>
            </div>
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