import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  updateEmail,
  updatePassword,
  User,
  GoogleAuthProvider, 
  signInWithPopup,    
  signInWithRedirect  
} from "firebase/auth";
import app from "./config";

export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signUp = (email: string, password: string) => 
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email: string, password: string) => 
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const resetPassword = (email: string) => 
  sendPasswordResetEmail(auth, email);

export const signInWithGoogle = () => 
  signInWithPopup(auth, googleProvider);

export const updateUserProfile = (
  user: User, 
  profile: { displayName?: string; photoURL?: string }
) => updateProfile(user, profile);

export const updateUserEmail = (user: User, newEmail: string) =>
  updateEmail(user, newEmail);

export const updateUserPassword = (user: User, newPassword: string) =>
  updatePassword(user, newPassword);