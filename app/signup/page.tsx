'use client';

import { useState, FormEvent, useEffect } from 'react'; 
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './signup.module.css';
import Subfooter from '../../components/subfooter';
import Footer from '../../components/footer';
import MessageBanner from '../../components/message';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
}

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [googleLoading, setGoogleLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  });

  // Add useEffect to check if user is already logged in
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

  const handleGoogleSignIn = async () => {
    setError('');
    setGoogleLoading(true);
    
    try {
      const { signInWithGoogle } = await import('@services/firebase');
      const result = await signInWithGoogle();
      console.log('Google user:', result.user);
      router.push('/profile');
    } catch (error: any) {
      console.error('Google sign-in error:', error);
      
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Sign-in popup was closed. Please try again.');
      } else if (error.code === 'auth/popup-blocked') {
        setError('Popup was blocked by browser. Please allow popups for this site.');
      } else {
        setError('Google sign-in failed. Please try again.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // LAZY LOAD signUp function
      const { signUp } = await import('@services/firebase/auth');
      const userCredential = await signUp(formData.email, formData.password);
      const user = userCredential.user;
      
      // LAZY LOAD updateUserProfile function
      if (formData.displayName.trim()) {
        const { updateUserProfile } = await import('@services/firebase/auth');
        await updateUserProfile(user, {
          displayName: formData.displayName.trim()
        });
      }

      console.log('User created successfully:', user.email);
      router.push('/profile');
      
    } catch (error: any) {
      let errorMessage = 'Sign-up failed. Please try again.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address format.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/password sign-up is not enabled. Check Firebase console.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Try again later.';
          break;
      }
      
      setError(errorMessage);
      console.error('Sign-up error:', error.code, error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.intro}>
            <h1 className={styles.title}>Create Account</h1>
            <p className={styles.subtitle}>Join us today! Fill in your details below.</p>
          </div>

          {/* Google Button Section */}
          <div className={styles.socialAuth}>
            <button
              onClick={handleGoogleSignIn}
              className={styles.googleButton}
              disabled={googleLoading || loading}
            >
              {googleLoading ? (
                <span>Signing up with Google...</span>
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
              <span>or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.authForm}>
            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="displayName" className={styles.label}>
                Display Name (Optional)
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                placeholder="Your name"
                className={styles.input}
                disabled={loading || googleLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={styles.input}
                disabled={loading || googleLoading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                required
                minLength={6}
                className={styles.input}
                disabled={loading || googleLoading}
              />
              <p className={styles.helperText}>Minimum 6 characters</p>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password *
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                required
                minLength={6}
                className={styles.input}
                disabled={loading || googleLoading}
              />
            </div>

            <div className={styles.terms}>
              <input
                type="checkbox"
                id="terms"
                required
                className={styles.checkbox}
                disabled={loading || googleLoading}
              />
              <label htmlFor="terms" className={styles.termsLabel}>
                I agree to the{' '}
                <Link href="/terms" className={styles.link}>
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className={styles.primaryButton}
              disabled={loading || googleLoading}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <div className={styles.authLinks}>
            <p className={styles.authText}>
              Already have an account?{' '}
              <Link href="/login" className={styles.link}>
                Log In
              </Link>
            </p>
            <p className={styles.authText}>
              By signing up, you agree to our{' '}
              <Link href="/privacy" className={styles.link}>
                Privacy Policy
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