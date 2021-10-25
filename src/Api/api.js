import {child, get, onValue, ref, set, update} from "firebase/database";
import {auth, currentUser, db, dbRef} from "../base";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    updateEmail,
    updatePassword,
    deleteUser, GoogleAuthProvider, signOut
} from "firebase/auth";


export const usersAPI = {
    getUsers() {

    },

    //Выбрать пользователя как follow
    setFollow(userId) {
        const r = ref(db, '/psychologists/' + userId)
        return update(r, {"followed": true})
    },

    //Выбрать пользователя как unfollow
    setUnfollow(userId) {
        const r = ref(db, '/psychologists/' + userId)
        return update(r, {"followed": false})
    },

    //Удалить карточку пользователя
    setDelete(userId) {
        return set(ref(db, '/psychologists/' + userId), null)
    },

    //Создать новую карточку пользователя в базе
    setUser(name, email, photo, type) {
        return set(ref(db, '/psychologists/' + name), {
            email: email,
            followed: false,
            id: Math.floor(Math.random() * 1000000),
            photo: photo === '' ? 'null' : photo,
            type: type
        });
    }
}

export const authApi = {

    //Создать нового пользователя с email и password
    createUserWithEmailAndPassword(email, password) {
        // return signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log('Create User Successfully', user)
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         console.log('createUserWithEmailAndPassword-errorCode', errorCode)
        //         const errorMessage = error.message;
        //         console.log('createUserWithEmailAndPassword-errorMessage', errorMessage)
        //     });
    },

    //Войти в аккаунт с использованием email и password если пользователь зарегистрирован
    signInWithEmailAndPassword(email, password) {
        // return signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log('Signed in', user)
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         console.log('signInWithEmailAndPassword-errorCode', errorCode)
        //         const errorMessage = error.message;
        //         console.log('signInWithEmailAndPassword-errorMessage', errorMessage)
        //     });
    },

    //Войти в аккаунт с помощью Google аккаунта.
    signInWithGoogle() {
        // const provider = new GoogleAuthProvider();
        // return signInWithPopup(auth, provider)
        //     .then((result) => {
        //         const credential = GoogleAuthProvider.credentialFromResult(result);
        //         console.log('signInWithGoogle-Credential', credential)
        //         const token = credential.accessToken;
        //         console.log('signInWithGoogle-Token', token)
        //         const user = result.user;
        //         console.log('signInWithGoogle-User', user)
        //     }).catch((error) => {
        //     const errorCode = error.code;
        //     console.log('signInWithGoogle-ErrorCode', errorCode)
        //     const errorMessage = error.message;
        //     console.log('signInWithGoogle-ErrorMessage', errorMessage)
        //     const email = error.email;
        //     console.log('signInWithGoogle-ErrorEmail', email)
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        //     console.log('signInWithGoogle-ErrorCredential', credential)
        // });
    },

    //Получить текущего пользователя, вошедшего в систему
    onAuthStateChanged() {
        return onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('User is signed in', currentUser)
            } else {
                console.log('User is signed out')
            }
        });
    },

    //Обновить профиль пользователя
    updateProfile(name, photo) {
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photo,
        }).then(() => {
            console.log('Profile updated!')
        }).catch((error) => {
            console.log('ERROR-updateProfile', error)
        });
    },

    //Обновить email пользователя
    updateEmail(email) {
        return updateEmail(currentUser, email).then(() => {
            console.log('Email updated!')
        }).catch((error) => {
            console.log('ERROR-updateEmail', error)
        });
    },

    //Обновить password пользователя
    updatePassword(newPassword) {
        return updatePassword(currentUser, newPassword).then(() => {
            console.log('Password updated successful')
        }).catch((error) => {
            console.log('ERROR-updatePassword', error)
        });
    },

    //Удалить учетную запись пользователя
    deleteUser() {
        return deleteUser(currentUser).then(() => {
            // console.log(`${user.displayName} deleted`)
            console.log('User deleted')
        }).catch((error) => {
            console.log('ERROR-User_Deleted', error)
        });
    },

    //Выход пользователя из системы
    signOut() {
        return signOut(auth).then(() => {
            console.log('Sign-out successful')
        }).catch((error) => {
            console.log('signOut-An error happened', error)
        });
    },


}


// export const getUsers = (toggleIsFetching,setUsers) => {
//     toggleIsFetching(true)
//     const starCountRef = ref(db, "psychologists");
//     onValue(starCountRef, (res) => {
//         const data = res.val();
//         setUsers(data)
//         toggleIsFetching(false)
//     });
// }


//получение данных с базы в компоненте
// setTimeout(() => {
//     this.props.toggleIsFetching(true)
//     const starCountRef = ref(db, "psychologists");
//     onValue(starCountRef, (res) => {
//         const data = res.val();
//         this.props.setUsers(data)
//         this.props.toggleIsFetching(false)
//     });
// }, 2500)
