import {SET_USER_DATA} from "./actionsType";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import {auth} from "../base";


let initialState = {
    id: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
export default authReducer

export const setAuthUserData = (email, id, login, photo, isAuth) => ({
    type: SET_USER_DATA,
    payload: {email, id, login, photo, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
    onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        if (currentUser) {
            dispatch(setAuthUserData(
                currentUser.email,
                currentUser.uid,
                currentUser.displayName,
                currentUser.photoURL,
                true
            ))
            console.log('User is signed in')
        } else {
            console.log('User is signed out')
        }
    })
}

export const loginEmailAndPassword = (email, password, setFieldError) => (dispatch) => {

    signInWithEmailAndPassword(auth, email, password, setFieldError)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user !== null) {
                dispatch(getAuthUserData())
                console.log('dispatch-User is sign in')
            } else {
                console.log('dispatch-User error')
            }
            console.log('Signed in', user)
        })
        .catch((error) => {

            const errorCode = error.code;
            console.log('signInWithEmailAndPassword-errorCode', errorCode)
            const errorMessage = error.message;
            console.log('signInWithEmailAndPassword-errorMessage', errorMessage)

            setFieldError("myErrorFieldName", errorCode)

        });
}

export const loginInWithGoogle = () => (dispatch) => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            if (user !== null) {
                dispatch(getAuthUserData())
            } else {
            }
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });

}


export const logout = () => (dispatch) => {
    signOut(auth).then(() => {
        dispatch(setAuthUserData(
            null,
            null,
            null,
            false))
    }).catch((error) => {
    });

}
