import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAJajXZcYbpZNmbpUIQObBWFdVg8Vg_Gwk',
  authDomain: 'todo-list-mcstanley.firebaseapp.com',
  projectId: 'todo-list-mcstanley',
  storageBucket: 'todo-list-mcstanley.appspot.com',
  messagingSenderId: '391910732691',
  appId: '1:391910732691:web:2387c493847a74b582ae66',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const handleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

export const handleLogout = () => {
  signOut(auth);
};
