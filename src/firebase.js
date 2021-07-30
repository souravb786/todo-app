import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsmvKoTQHf8b2VnArXHBhpXef83pbycaY",
    authDomain: "todo-app-4f952.firebaseapp.com",
    databaseURL: "https://todo-app-4f952.firebaseio.com",
    projectId: "todo-app-4f952",
    storageBucket: "todo-app-4f952.appspot.com",
    messagingSenderId: "881748590001",
    appId: "1:881748590001:web:7ae9feef71f3ae6266d190",
    measurementId: "G-7TYSKJ5ZH1"
  });
  const db = firebaseApp.firestore();

  export default db ;