import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// Config goes here
const firebaseConfig = {
    apiKey: "AIzaSyDJt4tXxpK0PsrhS-YajDnQsZIU0VvNs8w",
    authDomain: "fir-bbefe.firebaseapp.com",
    projectId: "fir-bbefe",
    storageBucket: "fir-bbefe.appspot.com",
    messagingSenderId: "231493995708",
    appId: "1:231493995708:web:c09ba1c787775830ad54b9",
    measurementId: "G-CBCVTX6F7W"
  };
export default firebase.initializeApp(firebaseConfig)

