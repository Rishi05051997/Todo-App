import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC4h8DfZPdfvtnC2WQBL4vtJTniSWbjFHo",
    authDomain: "todoapp-3f009.firebaseapp.com",
    projectId: "todoapp-3f009",
    storageBucket: "todoapp-3f009.appspot.com",
    messagingSenderId: "517515776987",
    appId: "1:517515776987:web:1cd49d3512bf4e70954dfe"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
