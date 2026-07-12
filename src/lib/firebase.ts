// Firebase client setup (ported from the Next.js utils/firebase.ts).
// Configure via PUBLIC_-prefixed variables in a .env file, e.g.:
//   PUBLIC_FIREBASE_API_KEY=...
// Only import this module from client-side code (Svelte components or
// <script> tags) — messaging/analytics require a browser environment.
import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging } from 'firebase/messaging';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID, // Optional
};

const hasFirebaseConfig = [
  firebaseConfig.apiKey,
  firebaseConfig.authDomain,
  firebaseConfig.projectId,
  firebaseConfig.storageBucket,
  firebaseConfig.messagingSenderId,
  firebaseConfig.appId,
].every(Boolean);

let firebaseApp: FirebaseApp | null;

if (getApps().length) {
  firebaseApp = getApps()[0];
} else if (hasFirebaseConfig) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = null;
}

const isBrowser = typeof window !== 'undefined';

export default firebaseApp;
export const auth = firebaseApp ? getAuth(firebaseApp) : null;
export const firestore = firebaseApp ? getFirestore(firebaseApp) : null;
export const storage = firebaseApp ? getStorage(firebaseApp) : null;
export const messaging = firebaseApp && isBrowser ? getMessaging(firebaseApp) : null;
export const analytics = firebaseApp && isBrowser ? getAnalytics(firebaseApp) : null;
