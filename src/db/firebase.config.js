import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhTThykXAr66qNDxD0Hu8u-kBOOvMY4N8",
  authDomain: "school-minder-e1894.firebaseapp.com",
  projectId: "school-minder-e1894",
  storageBucket: "school-minder-e1894.appspot.com",
  messagingSenderId: "1044657941340",
  appId: "1:1044657941340:web:6a53e147231bfb8a8def99",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase();
