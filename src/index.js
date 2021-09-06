import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBg5fBQCqkQdXUE87yNJoKwEIjbjaKd3Qo",
    authDomain: "shopping-cart-5e59b.firebaseapp.com",
    projectId: "shopping-cart-5e59b",
    storageBucket: "shopping-cart-5e59b.appspot.com",
    messagingSenderId: "943917775122",
    appId: "1:943917775122:web:3ee5c65c68a53408b21bcb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

