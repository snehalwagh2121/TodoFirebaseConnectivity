//FIREBASE CONNECTIVITY
var firebaseConfig = {
    apiKey: "AIzaSyCbzIzmIPz6FpS7OryWIsyemlY0iHqRnko",
    authDomain: "daily-todos-1aff5.firebaseapp.com",
    databaseURL: "https://daily-todos-1aff5.firebaseio.com",
    projectId: "daily-todos-1aff5",
    storageBucket: "daily-todos-1aff5.appspot.com",
    messagingSenderId: "874579949389",
    appId: "1:874579949389:web:fc5bc045e64bef145ea904",
    measurementId: "G-H1BZ4QGP37"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //auth and db variables assignment
  const auth=firebase.auth();
  const db=firebase.firestore();
