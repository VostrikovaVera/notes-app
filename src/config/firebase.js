import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBx7uk2qF1mBqZdU5jOWPdufoDO17BuuJg",
    authDomain: "notes-app-ed0f3.firebaseapp.com",
    databaseURL: "https://notes-app-ed0f3.firebaseio.com",
    projectId: "notes-app-ed0f3",
    storageBucket: "notes-app-ed0f3.appspot.com",
    messagingSenderId: "12791614260",
    appId: "1:12791614260:web:f8a2e8817bab83f100f361"
};

firebase.initializeApp(firebaseConfig);

firebase
    .auth()
    .signInAnonymously()
    .catch(function(error) {
        console.log("Auth error:", error);
    });

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export default firebase;