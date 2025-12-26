export { 
  auth, 
  signUp, 
  signIn,   
  logout, 
  resetPassword,
  signInWithGoogle,
  updateUserProfile,
  updateUserEmail,
  updateUserPassword 
} from './auth';

export type { User } from 'firebase/auth';

// Add other Firebase services as you need them:
// export { db } from './firestore';
// export { storage } from './storage';