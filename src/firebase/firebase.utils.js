import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkzoXHP3u_HtgC7RC-Rr2_bqndB7Zec6g",
    authDomain: "crwn-clothing-1d158.firebaseapp.com",
    databaseURL: "https://crwn-clothing-1d158.firebaseio.com",
    projectId: "crwn-clothing-1d158",
    storageBucket: "crwn-clothing-1d158.appspot.com",
    messagingSenderId: "806220471276",
    appId: "1:806220471276:web:ea36e14e613c26d8c13ec9",
    measurementId: "G-2G7ZMXWHWZ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const createdAt = new Date();

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("Error creating user" , error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;