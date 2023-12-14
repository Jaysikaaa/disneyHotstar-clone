// import {initializeApp} from 'firebase/app'
// import {getAuth, GoogleAuthProvider} from  'firebase/auth'
// import {getStorage} from  'firebase/storage'
// import {getFirestore} from  'firebase/firestore'

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAwccCOdN0LXCO6VGCUHRdJv87oH105v9U",
    authDomain: "disneyplus-clone-a6c21.firebaseapp.com",
    projectId: "disneyplus-clone-a6c21",
    storageBucket: "disneyplus-clone-a6c21.appspot.com",
    messagingSenderId: "248407928890",
    appId: "1:248407928890:web:ac91a54d8a65ac9d224503"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export {auth, provider, storage}
  export default db;