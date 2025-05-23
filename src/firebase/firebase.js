import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBGJESEC-HD8FStOba4TUACoL4LdNXlvUM",
  authDomain: "traveladvisor-fd7a5.firebaseapp.com",
  projectId: "traveladvisor-fd7a5",
  storageBucket: "traveladvisor-fd7a5.firebasestorage.app",
  messagingSenderId: "855807197823",
  appId: "1:855807197823:web:1b6279757c5e67aeacf54a",
  measurementId: "G-C60184DX6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth} ;