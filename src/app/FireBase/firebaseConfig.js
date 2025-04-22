

import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD23uX2Mgzi5QAFb1voAh0lmWZ2QyHxWKM",
    authDomain: "cyber-e19c5.firebaseapp.com",
    projectId: "cyber-e19c5",
    storageBucket: "cyber-e19c5.firebasestorage.app",
    messagingSenderId: "165764019393",
    appId: "1:165764019393:web:df11b89303b3c2bba8d040",
    measurementId: "G-C20MN75LY5"
  }



// Инициализация Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Настройка авторизации
const provider = new GoogleAuthProvider()

export const LogIn = () => signInWithPopup(auth, provider)
export const LogOut = () => signOut(auth)
export const onAuthChange = callback => onAuthStateChanged(auth, callback)
export { auth }