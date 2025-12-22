"use client";

import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.leftSection}>
          <Image
                    className={styles.logo}
                    src="/logo/the_chinook_line_logo_calgary_to_edmonton_transit_line_mountains_wind_white_text.png"
                    alt="Next.js logo"
                    width={210}
                    height={70}
                    priority
                  />
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`${styles.navigation} ${open ? styles.open : ""}`}>
          {[
            ["/", "Home"],
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
  );
}
