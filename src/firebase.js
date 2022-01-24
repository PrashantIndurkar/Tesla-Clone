import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCcAJJw5Jjo5yXfPkf2anOvgNiQ4FemoMk",
    authDomain: "tesla-clone-66d4b.firebaseapp.com",
    projectId: "tesla-clone-66d4b",
    storageBucket: "tesla-clone-66d4b.appspot.com",
    messagingSenderId: "463322411900",
    appId: "1:463322411900:web:0a61331eb302341890eaf9"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()


export { auth };