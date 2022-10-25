// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6fTQVyO005g4xnx7JCJu6DdrRuBUyeBg",
  authDomain: "oryzapp-f0fc0.firebaseapp.com",
  projectId: "oryzapp-f0fc0",
  storageBucket: "oryzapp-f0fc0.appspot.com",
  messagingSenderId: "262215532517",
  appId: "1:262215532517:web:bd92f092137650977c390c",
  measurementId: "G-FH3LVG8ZQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
const auth = getAuth()
const storage = getStorage()

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

export function logout() {
  return signOut(auth)
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub
  }, [])
  return currentUser

}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)

}

// Storage

export async function upload(file, currentUser, setLoading) {
  try {
    const fileRef = ref(storage, 'userimages/' + currentUser.uid + '.png')
    setLoading(true)
    const snapshot = await uploadBytes(fileRef, file)
    setLoading(false)
    alert('File Uploaded')

  } catch (error) {
    alert(error)
  }
}