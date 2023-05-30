import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FirebaseConfig = {
    apiKey: "AIzaSyCPz-tybiknNfvQ6R7QGMEy2dbotqcFNac",
    authDomain: "olx-clone-12eb4.firebaseapp.com",
    projectId: "olx-clone-12eb4",
    storageBucket: "olx-clone-12eb4.appspot.com",
    messagingSenderId: "637765705506",
    appId: "1:637765705506:web:837df760275973f3f88f7b",
    measurementId: "G-MGRF3VV8FB"
  };

 export default firebase.initializeApp(FirebaseConfig)