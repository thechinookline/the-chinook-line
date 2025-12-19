import styles from "./map.module.css";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";
import OperationHours from "../../components/operationhours";

export default function Map() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>Map</div>
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
  );
}
