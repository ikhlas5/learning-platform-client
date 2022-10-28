// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBunSBvSQN4wdgxEwzrRqQpJVpeP5aZc0s",
  authDomain: "learning-platform-38ab0.firebaseapp.com",
  projectId: "learning-platform-38ab0",
  storageBucket: "learning-platform-38ab0.appspot.com",
  messagingSenderId: "877214574147",
  appId: "1:877214574147:web:89045c20854fdb796116f6",
  measurementId: "G-DZF5DXYGL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;