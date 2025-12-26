// app/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProfileInfo from "../../components/profileinfo";
import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";
import styles from "./profile.module.css";
import MessageBanner from "../../components/message";
// Add type-only import for User
import type { User } from 'firebase/auth';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null); // Add type here
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import Firebase ONLY inside useEffect (runs in browser)
    const checkAuth = async () => {
      const { onAuthStateChanged } = await import("firebase/auth");
      const { auth } = await import("@services/firebase/auth");

      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        
        // Redirect to login if not authenticated
        if (!currentUser) {
          router.push('/login');
        }
      });

      return unsubscribe;
    };

    const unsubscribePromise = checkAuth();
    
    return () => {
      unsubscribePromise.then(unsubscribe => {
        if (unsubscribe) unsubscribe();
      });
    };
  }, [router]);

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className={styles.page}>
        <main className={styles.loading}>
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  // Don't render anything if not logged in (will redirect)
  if (!user) {
    return null;
  }

  return (
    <div className={styles.page}>
      <main>
        <ProfileInfo />
      </main>
      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}