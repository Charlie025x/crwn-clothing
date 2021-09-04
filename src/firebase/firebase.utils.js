import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAcgjfZOQ3yC2yl6jQjfQgLNVlUuRRT0qQ",
    authDomain: "crwn-db-b9918.firebaseapp.com",
    projectId: "crwn-db-b9918",
    storageBucket: "crwn-db-b9918.appspot.com",
    messagingSenderId: "193418881250",
    appId: "1:193418881250:web:d01e2004e32716b43256bb",
    measurementId: "G-VFTBNY09T6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;