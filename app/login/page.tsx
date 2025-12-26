// app/login/page.tsx - Updated with Firebase lazy loading
'use client';

import styles from "./login.module.css";
import Subfooter from "../../components/subfooter";
import Footer from "../../components/footer";
import MessageBanner from "../../components/message";
import { FormEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// REMOVE all Firebase imports from here:
// import { signIn, signInWithGoogle } from '@services/firebase';
// import { auth } from '@services/firebase/auth';
// import { onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  // Check if user is already logged in - WITH LAZY LOADING
  useEffect(() => {
    const checkAuth = async () => {
      const { onAuthStateChanged } = await import("firebase/auth");
      const { auth } = await import("@services/firebase/auth");
      
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/profile');
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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Dynamically import signIn when needed
      const { signIn } = await import('@services/firebase');
      const userCredential = await signIn(email, password);
      console.log('Logged in user:', userCredential.user.email);
      router.push('/profile');
    } catch (error: any) {
      let errorMessage = 'Login failed. Please try again.';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'This account has been disabled.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many failed attempts. Try again later.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Check your connection.';
          break;
      }
      
      setError(errorMessage);
      console.error('Login error:', error.code, error.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In Handler - WITH LAZY LOADING
  const handleGoogleSignIn = async () => {
    setError('');
    setGoogleLoading(true);
    
    try {
      // Dynamically import signInWithGoogle when needed
      const { signInWithGoogle } = await import('@services/firebase');
      const result = await signInWithGoogle();
      console.log('Google user:', result.user);
      router.push('/profile');
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      
      // Handle specific Google errors
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Sign-in popup was closed. Please try again.');
      } else if (error.code === 'auth/popup-blocked') {
        setError('Popup was blocked by browser. Please allow popups for this site.');
      } else if (error.code === 'auth/unauthorized-domain') {
        setError('This domain is not authorized. Please contact support.');
      } else {
        setError('Google sign-in failed. Please try again.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email to reset password.');
      return;
    }

    try {
      // Dynamically import resetPassword
      const { resetPassword } = await import('@services/firebase/auth');
      await resetPassword(email);
      alert(`Password reset email sent to ${email}`);
    } catch (error: any) {
      setError('Failed to send reset email: ' + error.message);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.intro}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.subtitle}>Welcome back! Please sign in to continue.</p>
          </div>

          {/* Google Sign-In Button */}
          <div className={styles.socialAuth}>
            <button
              onClick={handleGoogleSignIn}
              className={styles.googleButton}
              disabled={googleLoading || loading}
            >
              {googleLoading ? (
                <span>Signing in with Google...</span>
              ) : (
                <>
                  <svg className={styles.googleIcon} viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </button>

            <div className={styles.divider}>
              <span>or</span>
            </div>
          </div>

          <form onSubmit={handleLogin} className={styles.authForm}>
            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className={styles.input}
                disabled={loading || googleLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className={styles.input}
                disabled={loading || googleLoading}
                minLength={6}
              />
            </div>

            <div className={styles.formOptions}>
              <button
                type="button"
                onClick={handleResetPassword}
                className={styles.resetLink}
                disabled={loading || googleLoading}
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className={styles.primaryButton}
              disabled={loading || googleLoading}
            >
              {loading ? 'Logging in...' : 'Login with Email'}
            </button>
          </form>

          <div className={styles.authLinks}>
            <p className={styles.authText}>
              Don't have an account?{' '}
              <Link href="/signup" className={styles.link}>
                Sign up
              </Link>
            </p>
            <p className={styles.authText}>
              <Link href="/" className={styles.link}>
                Continue as guest
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}