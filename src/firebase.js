import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAP28AL3A5kAtqANwJoo91ER1WnUGxwENs",
  authDomain: "chatapp-a0c7f.firebaseapp.com",
  projectId: "chatapp-a0c7f",
  storageBucket: "chatapp-a0c7f.appspot.com",
  messagingSenderId: "439117276331",
  appId: "1:439117276331:web:1048594d994a1851da03ee",
  measurementId: "G-VHCTXEHRNS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

