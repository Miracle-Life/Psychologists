import {getDatabase, ref, child, get, update} from "firebase/database";
import {initializeApp} from 'firebase/app';
import {getAnalytics, logEvent} from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDO7bNm5bKX05O2sCTkyMcmjx3Uq18ltss",
    authDomain: "denys-app-psychologists.firebaseapp.com",
    databaseURL: "https://denys-app-psychologists-default-rtdb.firebaseio.com",
    projectId: "denys-app-psychologists",
    storageBucket: "denys-app-psychologists.appspot.com",
    messagingSenderId: "551840717626",
    appId: "1:551840717626:web:4d9acae625995d96880e03",
    measurementId: "G-NM9S1ZRB10"
})
export const db = getDatabase()
export const dbRef = ref(getDatabase());

export const dbFirestore = getFirestore()

// export const analytics = getAnalytics();
// logEvent(analytics, 'notification_received');

//Прочитать данные пользователя с базы Firebase
// get(child(dbRef, `psychologists/${user}`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });

//Обновить данные пользователя в базе Firebase
// const r = ref(db, '/psychologists/' + user)
// update(r, {"followed": true})


//Прочитать все данные с базы Firestore
// const querySnapshot = await getDocs(collection(dbFirestore, "psychologists"));
// querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
// });

//Прочитать все данные для одного пользователя с базы Firestore
// const docRef = doc(dbFirestore, "psychologists", "Darya Skakun");
// const docSnap = await getDoc(docRef);
// if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
// } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
// }

//установить значение в базу Firestore
// await setDoc(doc(dbFirestore, "psychologists", "Darya Skakun"), {
//     "email": "darya@gmail.com",
//     "followed": true,
//     "id": 1,
//     "photo": "null",
//     "type": "Психотерапевт"
// });
