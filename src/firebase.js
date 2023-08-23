// import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBmMREq758KT1sp49Odd-Mtpjl9JtqRqig",
    authDomain: "disneyplus-8e73f.firebaseapp.com",
    projectId: "disneyplus-8e73f",
    storageBucket: "disneyplus-8e73f.appspot.com",
    messagingSenderId: "134073184247",
    appId: "1:134073184247:web:f479e4cf0e9e8373d348f2",
    measurementId: "G-63MGPD1N6M"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// const provider = new firebase.auth.GoogleAuthProvider();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
