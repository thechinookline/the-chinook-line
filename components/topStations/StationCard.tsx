import Image from "next/image";
import styles from "./topStations.module.css";

type Station = {
  name: string;
  tagline: string;
  image: string;
};

export default function StationCard({ station }: { station: Station }) {
  return (
    <div className={styles.card} tabIndex={0}>
      <div className={styles.imageWrap}>
        <Image
          src={station.image}
          alt={station.name}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h3 className={styles.cardTitle}>{station.name}</h3>
      <p className={styles.cardTag}>{station.tagline}</p>
    </div>
  );
}
