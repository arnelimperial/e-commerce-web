import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXxFzc1t40aDVY-_ZnwhcSEjz1EqraMQ8",
    authDomain: "e-commerce-db-72c57.firebaseapp.com",
    databaseURL: "https://e-commerce-db-72c57.firebaseio.com",
    projectId: "e-commerce-db-72c57",
    storageBucket: "e-commerce-db-72c57.appspot.com",
    messagingSenderId: "163101663405",
    appId: "1:163101663405:web:459d5148dd8e37ba86e624"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    //exit from function
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })

        }catch(error){
            console.log('error creating user', error.message)

        }
    }

    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


