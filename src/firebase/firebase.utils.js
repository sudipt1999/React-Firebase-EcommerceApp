import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBIeWFKcUzlp_wRGYKTt4QlIoa-FD2hJIk",
  authDomain: "clothing-ecommerce-30368.firebaseapp.com",
  databaseURL: "https://clothing-ecommerce-30368.firebaseio.com",
  projectId: "clothing-ecommerce-30368",
  storageBucket: "clothing-ecommerce-30368.appspot.com",
  messagingSenderId: "178912339949",
  appId: "1:178912339949:web:4d6020463625fb8e87a9e4",
  measurementId: "G-73KLQE4KF0"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
