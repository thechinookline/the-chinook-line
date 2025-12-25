import Image from "next/image";
import styles from "./login.module.css";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";

export default function Login() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo/the_chinook_line_logo_calgary_to_edmonton_transit_line_with_white_background.png"
          alt="Next.js logo"
          width={50}
          height={50}
          priority
        />
        <div className={styles.intro}>
          Login
        </div>
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
            Login
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
        <a href="/profile">to ProfilePage</a>
      </main>
      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}
