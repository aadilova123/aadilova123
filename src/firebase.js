import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMh48tMm4oteMxTFz7hOjAZGDhaNLkNiI",
    authDomain: "clone-9d78e.firebaseapp.com",
    projectId: "clone-9d78e",
    storageBucket: "clone-9d78e.appspot.com",
    messagingSenderId: "729279548608",
    appId: "1:729279548608:web:9ac1015f18c014d3503125"
});

const db = firebase.firestore();
const auth = firebase.auth();

export{db,auth};   