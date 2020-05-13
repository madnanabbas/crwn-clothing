import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBh7tH3EbM5tnblzMLUIa_mc40EODFfwDg",
  authDomain: "crown-db-e0b20.firebaseapp.com",
  databaseURL: "https://crown-db-e0b20.firebaseio.com",
  projectId: "crown-db-e0b20",
  storageBucket: "crown-db-e0b20.appspot.com",
  messagingSenderId: "232825789359",
  appId: "1:232825789359:web:3fb7218ead918d6d8bed5a",
  measurementId: "G-5Z8V70LTD2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
