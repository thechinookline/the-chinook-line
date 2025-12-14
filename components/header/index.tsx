"use client";

import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Left side - Logo */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>Logo</div>
        </div>

        {/* Navigation */}
        <nav className={styles.navigation}>
          <Link
            href="/"
            className={`${styles.navLink} ${
              isActive("/") ? styles.active : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/points"
            className={`${styles.navLink} ${
              isActive("/points") ? styles.active : ""
            }`}
          >
            Points
          </Link>

          <Link
            href="/map"
            className={`${styles.navLink} ${
              isActive("/map") ? styles.active : ""
            }`}
          >
            Map
          </Link>

          <Link
            href="/book"
            className={`${styles.navLink} ${
              isActive("/book") ? styles.active : ""
            }`}
          >
            Book
          </Link>

          <Link
            href="/login"
            className={`${styles.navLink} ${
              isActive("/login") ? styles.active : ""
            }`}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
