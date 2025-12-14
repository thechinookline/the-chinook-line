"use client";

import { useState, useMemo } from "react";
import styles from "./tripPlanner.module.css";

type FareType = "day" | "month";
type PassengerType = "adult" | "senior" | "student" | "child";
type Tab = "planner" | "next";

const PRICING: Record<FareType, Record<PassengerType, number>> = {
  day: { adult: 8, senior: 5, student: 6, child: 4 },
  month: { adult: 120, senior: 80, student: 95, child: 60 },
};

const STATIONS = ["Calgary Downtown", "Red Deer Central", "Edmonton Hub"];

export default function TripPlanner() {
  const [activeTab, setActiveTab] = useState<Tab>("planner");
  const [fareType, setFareType] = useState<FareType>("day");
  const [passengerType, setPassengerType] = useState<PassengerType>("adult");

  const [time, setTime] = useState("13:00");
  const [station, setStation] = useState(STATIONS[0]);

  const total = useMemo(
    () => PRICING[fareType][passengerType],
    [fareType, passengerType]
  );

  return (
    <div className={styles.planner}>
      {/* Hero text */}
      <div className={styles.bottomLeftText}>
        <h1 className={styles.welcome}>Welcome to The Chinook Line</h1>
        <p className={styles.slogan}>Connecting every community.</p>
      </div>

      {/* Card */}
      <div className={styles.tripPlanner}>
        <div className={styles.tabHeader}>
          <button
            type="button"
            aria-selected={activeTab === "planner"}
            className={`${styles.tab} ${
              activeTab === "planner" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("planner")}
          >
            Trip Planner
          </button>

          <button
            type="button"
            aria-selected={activeTab === "next"}
            className={`${styles.tab} ${
              activeTab === "next" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("next")}
          >
            Next Train
          </button>
        </div>

        {activeTab === "planner" && (
          <>
            <div className={styles.section}>
              <label className={styles.label}>Fare type</label>
              <div className={styles.optionGroup}>
                {(["day", "month"] as FareType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`${styles.option} ${
                      fareType === type ? styles.active : ""
                    }`}
                    onClick={() => setFareType(type)}
                  >
                    {type[0].toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <label className={styles.label}>Passenger Type</label>
              <div className={styles.optionGroup}>
                {(
                  ["adult", "senior", "student", "child"] as PassengerType[]
                ).map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`${styles.option} ${
                      passengerType === type ? styles.active : ""
                    }`}
                    onClick={() => setPassengerType(type)}
                  >
                    {type[0].toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.totalRow}>
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button type="button" className={styles.planBtn}>
              Plan my trip
            </button>
          </>
        )}

        {activeTab === "next" && (
          <>
            <div className={styles.section}>
              <label className={styles.label}>Departure Time</label>
              <input
                type="time"
                className={styles.input}
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className={styles.section}>
              <label className={styles.label}>Station</label>
              <select
                className={styles.select}
                value={station}
                onChange={(e) => setStation(e.target.value)}
              >
                {STATIONS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
