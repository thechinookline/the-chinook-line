"use client";

import { useState, useMemo, useEffect } from "react";
import styles from "./topStations.module.css";
import StationCard from "./StationCard";
import { STATIONS, Zone, ZONES } from "../../lib/stations/stationList";

const PAGE_SIZE = 3;

export default function TopStations() {
  const [activeZone, setActiveZone] = useState<Zone>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Reset when zone changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeZone]);

  const orderedStations = useMemo(() => {
    const base =
      activeZone === "All"
        ? STATIONS
        : STATIONS.filter((s) => s.zone === activeZone);

    const featured = [...base]
      .filter((s) => s.featuredRank !== undefined)
      .sort((a, b) => a.featuredRank! - b.featuredRank!);

    const remaining = [...base]
      .filter((s) => s.featuredRank === undefined)
      .sort((a, b) => b.importanceScore - a.importanceScore);

    return [...featured, ...remaining];
  }, [activeZone]);

  const visibleStations = useMemo(
    () => orderedStations.slice(0, visibleCount),
    [orderedStations, visibleCount]
  );

  const hasMore = visibleCount < orderedStations.length;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Top Stations</h2>

        {/* Filters */}
        <div className={styles.filters}>
          {ZONES.map((zone) => (
            <button
              key={zone}
              className={`${styles.filterBtn} ${
                activeZone === zone ? styles.active : ""
              }`}
              onClick={() => setActiveZone(zone)}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {visibleStations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <button
            className={styles.loadMore}
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          >
            Load More Stations
          </button>
        )}
      </div>
    </section>
  );
}
