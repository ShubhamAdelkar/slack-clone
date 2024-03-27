// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU3Fx5fCyB0vlk-svtWLtmYFIuzupB3So",
  authDomain: "slack-clone-shubham.firebaseapp.com",
  projectId: "slack-clone-shubham",
  storageBucket: "slack-clone-shubham.appspot.com",
  messagingSenderId: "36882456485",
  appId: "1:36882456485:web:bdf4dc8fae73265df3d24c",
  measurementId: "G-26SG8ZWRY1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
