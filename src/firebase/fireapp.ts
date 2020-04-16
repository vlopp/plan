import app from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

export const fireapp = app.initializeApp({
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  appId: process.env.REACT_APP_FIREBASE_WEB_CLIENT_ID,
});
