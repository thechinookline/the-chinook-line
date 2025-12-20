"use client";

import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {/* Left side - Logo */}
          <div className={styles.leftSection}>
            <div className={styles.logo}>Logo</div>
          </div>

          {/* Hamburger menu button (mobile only) */}
          <button
            className={styles.menuButton}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Right side - Navigation links */}
          <nav className={`${styles.navigation} ${open ? styles.open : ""}`}>
            {[
              ["/", "Home"],
              ["/fares", "Fares"],
              ["/points", "Points"],
              ["/map", "Map"],
              ["/book", "Book"],
              ["/login", "Login"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`${styles.navLink} ${
                  isActive(href) ? styles.active : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Welcome section below header */}
      <div className={styles.bottomLeftText}>
        <div>
          <div className={styles.welcome}>Welcome to The Chinook Line</div>
          <div className={styles.slogan}>Connecting every community.</div>
        </div>
      </div>
    </>
  );
}
