// app/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@services/firebase/auth';
import ProfileInfo from "../../components/profileinfo";
import Footer from "../../components/footer";
import Subfooter from "../../components/subfooter";
import styles from "./profile.module.css";
import MessageBanner from "../../components/message";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      
      // Redirect to login if not authenticated
      if (!currentUser) {
        router.push('/login');
      }
    });

    return () => unsubscribe();
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