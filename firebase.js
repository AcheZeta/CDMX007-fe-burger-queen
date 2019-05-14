import firebase from 'firebase'
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyCh5d6OkZZbZo_eRst1-mUAZOQCefCf6B0",
    authDomain: "burgerqueen-2058b.firebaseapp.com",
    databaseURL: "https://burgerqueen-2058b.firebaseio.com",
    projectId: "burgerqueen-2058b",
    storageBucket: "burgerqueen-2058b.appspot.com",
    messagingSenderId: "379310096711",
    appId: "1:379310096711:web:a3439649d75f7282"
};

// Initialize Cloud Firebase through Firebase
const fb = firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

export {fb, db}