import Image from "next/image";
import styles from "./points.module.css";
import Subheader from "../../components/subheader";
import Header from "../../components/header";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";
import OperationHours from "../../components/operationhours";

export default function Points() {
    return (
         <div className={styles.page}>
      <Subheader/>
      <Header currentPage="points"/>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Points</h1>
          <p>
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learning
            </a>{" "}
            center.
          </p>
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
      <Footer/>
      <MessageBanner/>
      <Subfooter/>
    </div>
    );
}