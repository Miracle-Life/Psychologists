
import firebase from "firebase/app";

import {getDatabase, ref, child, get, update} from "firebase/database";
import {initializeApp} from 'firebase/app';

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDO7bNm5bKX05O2sCTkyMcmjx3Uq18ltss",
    authDomain: "denys-app-psychologists.firebaseapp.com",
    databaseURL: "https://denys-app-psychologists-default-rtdb.firebaseio.com",
    projectId: "denys-app-psychologists",
    storageBucket: "denys-app-psychologists.appspot.com",
    messagingSenderId: "551840717626",
    appId: "1:551840717626:web:4d9acae625995d96880e03"
})
export const db = getDatabase()
export const dbRef = ref(getDatabase());



// get(child(dbRef, `psychologists/${user}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });


// const r = ref(db, '/psychologists/' + user)
// update(r, {"followed": true})
