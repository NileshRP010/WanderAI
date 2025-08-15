import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUDEDA1kezrsUtHyIWHimfODPiwmGmwC0",
  authDomain: "wanderwise-yupbq.firebaseapp.com",
  projectId: "wanderwise-yupbq",
  storageBucket: "wanderwise-yupbq.firebasestorage.app",
  messagingSenderId: "592943697940",
  appId: "1:592943697940:web:b7f555d3b7afe37dec5701"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;