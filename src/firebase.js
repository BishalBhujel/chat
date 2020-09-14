import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBPmNUIFx_TFQ-FeYDWWw6g6JUddtbK3mk",
    authDomain: "whats-app-clone-6d39a.firebaseapp.com",
    databaseURL: "https://whats-app-clone-6d39a.firebaseio.com",
    projectId: "whats-app-clone-6d39a",
    storageBucket: "whats-app-clone-6d39a.appspot.com",
    messagingSenderId: "818284055789",
    appId: "1:818284055789:web:75736a0bcfed35565090e4",
    measurementId: "G-L3EY3EPTTP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;