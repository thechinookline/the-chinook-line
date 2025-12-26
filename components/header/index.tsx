// components/Header.tsx
"use client";

import styles from "./header.module.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
// REMOVE these Firebase imports from the top level

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<import("firebase/auth").User | null>(null); // Add type here
  const [loading, setLoading] = useState(true);

  // Track authentication state - NOW WITH LAZY LOADING
  useEffect(() => {
    // Dynamically import Firebase ONLY in the browser
    const initializeAuth = async () => {
      const { onAuthStateChanged } = await import("firebase/auth");
      const { auth } = await import("@services/firebase/auth");
      
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

      return unsubscribe;
    };

    const unsubscribePromise = initializeAuth();
    
    return () => {
      unsubscribePromise.then(unsubscribe => {
        if (unsubscribe) unsubscribe();
      });
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  const handleSignOut = async () => {
    try {
      // Dynamically import logout when needed
      const { logout } = await import("@services/firebase/auth");
      const { auth } = await import("@services/firebase/auth");
      
      await logout();
      setOpen(false);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Navigation items - dynamic based on auth state
  const navItems = [
    ["/", "Home"],
    ["/points", "Points"],
    ["/map", "Map"],
    ["/book", "Book"],
  ];

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
          {navItems.map(([href, label]) => (
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

          {/* Dynamic Auth Link/Button */}
          {loading ? (
            // Show loading state briefly
            <div className={styles.authLink}>...</div>
          ) : user ? (
            // Show "Sign Out" button when logged in
            <button
              onClick={handleSignOut}
              className={styles.signOutButton}
              aria-label="Sign out"
            >
              Sign Out
            </button>
          ) : (
            // Show "Login" link when not logged in
            <Link
              href="/login"
              className={`${styles.navLink} ${
                isActive("/login") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}