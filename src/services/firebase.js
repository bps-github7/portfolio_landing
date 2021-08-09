import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
	// apiKey: process.env.REACT_APP_FIREBASE_KEY, 
	// authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
	// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	// appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID
	apiKey: "process.env.REACT_APP_FIREBASE_KEY", 
	authDomain: "process.env.REACT_APP_FIREBASE_DOMAIN",
	projectId: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
	storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
	messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
	appId: "process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID"

};

export const testing = () => {console.log(firebaseConfig);}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;



