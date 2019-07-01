import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyAqpa0RnCnlq9W5FuMYl0W29KAzeR5E238",
    authDomain: "desafioeveris064.firebaseapp.com",
    databaseURL: "https://desafioeveris064.firebaseio.com",
    projectId: "desafioeveris064",
    storageBucket: "",
    messagingSenderId: "438896946557",
    appId: "1:438896946557:web:649d09104e0b0c8c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;