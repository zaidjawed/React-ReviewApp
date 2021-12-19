import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// const app = firebase.initializeApp({
//    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//    appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

const app = firebase.initializeApp({
   apiKey: "AIzaSyB1icuVSmnluhEpnxu3D3pXNAccnaVPuA4",
   authDomain: "auth-dev-6f2be.firebaseapp.com",
   projectId: "auth-dev-6f2be",
   storageBucket: "auth-dev-6f2be.appspot.com",
   messagingSenderId: "317895799472",
   appId: "1:317895799472:web:dd262738bf6b675bfdc175"
});

export const auth = app.auth();

export default app;

