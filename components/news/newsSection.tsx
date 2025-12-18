import styles from "./newsSection.module.css";
import newsData from "./news.json";

type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  image?: string;
};

export default function NewsSection() {
  const [featured, sideTop, sideBottom]: NewsItem[] = newsData.news;

  return (
    <section id="news" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>News &amp; Stories</h2>

        <div className={styles.grid}>
          <article className={styles.featuredCard}>
            <div
              className={styles.featuredMedia}
              style={{ backgroundImage: `url(${featured.image})` }}
            />
            <div className={styles.meta}>
              <span className={styles.title}>{featured.title}</span>
              <span className={styles.date}>{featured.date}</span>
            </div>
            <p className={styles.excerpt}>{featured.excerpt}</p>
          </article>

          <div className={styles.rightCol}>
            <article className={styles.sideCard}>
              <div
                className={styles.sideMediaWide}
                style={{ backgroundImage: `url(${sideTop.image})` }}
              />
              <div className={styles.sideBody}>
                <div className={styles.accent} />
                <div>
                  <div className={styles.meta}>
                    <span className={styles.title}>{sideTop.title}</span>
                    <span className={styles.date}>{sideTop.date}</span>
                  </div>
                  <p className={styles.excerpt}>{sideTop.excerpt}</p>
                </div>
              </div>
            </article>

            <article className={styles.sideCardCompact}>
              <div
                className={styles.sideMediaSmall}
                style={{ backgroundImage: `url(${sideBottom.image})` }}
              />
              <div className={styles.sideBody}>
                <div className={styles.accent} />
                <div className={styles.meta}>
                  <span className={styles.title}>{sideBottom.title}</span>
                  <span className={styles.date}>{sideBottom.date}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
