import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgttIo-GjZx1iFib0lYJBLgvQSqZbbbWk",
    authDomain: "product-hunt-74662.firebaseapp.com",
    projectId: "product-hunt-74662",
    storageBucket: "product-hunt-74662.appspot.com",
    messagingSenderId: "944625391679",
    appId: "1:944625391679:web:b61bfed0204b48a23d808a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };