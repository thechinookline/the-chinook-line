// app/signup/page.tsx
'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './signup.module.css'; // You'll create this CSS module
import Subfooter from '../../components/subfooter';
import Footer from '../../components/footer';
import MessageBanner from '../../components/message';
import { signUp } from '@services/firebase/auth'; // Or your correct path
import { updateUserProfile } from '@services/firebase/auth';

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
    setError(''); // Clear error when user starts typing
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
      // 1. Create user with email/password
      const userCredential = await signUp(formData.email, formData.password);
      const user = userCredential.user;
      
      // 2. Update profile with display name (optional)
      if (formData.displayName.trim()) {
        await updateUserProfile(user, {
          displayName: formData.displayName.trim()
        });
      }

      console.log('User created successfully:', user.email);
      
      // 3. Redirect to profile or verification page
      // You might want to send email verification here
      router.push('/profile');
      
    } catch (error: any) {
      // Firebase error handling
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

  // Optional: Email verification function
  const sendEmailVerification = async () => {
    // You'll need to import sendEmailVerification from firebase/auth
    // and call it on the user object after sign-up
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.intro}>
            <h1 className={styles.title}>Create Account</h1>
            <p className={styles.subtitle}>Join us today! Fill in your details below.</p>
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
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
                disabled={loading}
              />
            </div>

            <div className={styles.terms}>
              <input
                type="checkbox"
                id="terms"
                required
                className={styles.checkbox}
                disabled={loading}
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
              disabled={loading}
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
                  {/* Same SVG as above */}
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </button>

          <div className={styles.divider}>
            <span>or sign up with email</span>
          </div>
        </div>
        </div>
      </main>
      <Footer />
      <MessageBanner />
      <Subfooter />
    </div>
  );
}