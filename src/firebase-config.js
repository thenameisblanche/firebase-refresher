// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "firebase/firestore";
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
const analytics = getAnalytics(app);
export default getFirestore();