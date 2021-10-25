import {SET_USER_DATA} from "./actionsType";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut, updateProfile
} from "firebase/auth";
import {auth} from "../base";


let initialState = {
    User: {},
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

export const setAuthUserData = (currentUser, isAuth) => ({
    type: SET_USER_DATA,
    payload: {User: currentUser, isAuth}
})

export const getAuthUserData = () => (dispatch) => {

    onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        if (currentUser) {
            dispatch(setAuthUserData(
                currentUser,
                // currentUser.email,
                // currentUser.uid,
                // currentUser.displayName,
                // currentUser.photoURL,
                // currentUser.emailVerified,
                // currentUser.phoneNumber,
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
                // dispatch(getAuthUserData())
                console.log('dispatch-User is sign in')
            } else {
                console.log('dispatch-User error')
            }
            console.log('Signed in', user)
        })
        .catch((error) => {
            if (error.code === 'auth/user-not-found') {
                setFieldError("myErrorFieldName", 'No user found for that email.')
            } else if (error.code === 'auth/wrong-password') {
                setFieldError("myErrorFieldName", 'Wrong password provided for that user.')
            }
            const errorCode = error.code;
            // console.log('signInWithEmailAndPassword-errorCode', errorCode)
            const errorMessage = error.message;
            // console.log('signInWithEmailAndPassword-errorMessage', errorMessage)
            // setFieldError("myErrorFieldName", errorCode)

        });
}

export const loginInWithGoogle = () => async (dispatch) => {

    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
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

export const createUser = (email, password, setFieldError) => (dispatch) => {

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            // if (user !== null) {
            //     dispatch(getAuthUserData())
            //     console.log('Create User Successfully', user)
            // } else {
            //     console.log('dispatch-User error')
            // }
            // if (auth != null && !auth.emailVerified) {
            //     await auth.sendEmailVerification();
            // }
            console.log('Signed in Create User Successfully', user)
        })
        .catch((error) => {
            if (error.code === 'auth/weak-password') {
                setFieldError("myErrorFieldName", 'The password provided is too weak.')
            } else if (error.code === 'auth/email-already-in-use') {
                setFieldError("myErrorFieldName", 'The account already exists for that email.')
            }
            const errorCode = error.code;
            console.log('createUserWithEmailAndPassword-errorCode', errorCode)
            const errorMessage = error.message;
            console.log('createUserWithEmailAndPassword-errorMessage', errorMessage)
            // setFieldError("myErrorFieldName", errorCode)
        });

}


export const logout = () => (dispatch) => {
    signOut(auth).then(() => {
        dispatch(setAuthUserData(
            {},
            false))
    }).catch((error) => {
    });
}

export const updateUserInfo = (name, photoURL) => async (dispatch) => {
    const token = await auth.currentUser;

    updateProfile(token, {
        displayName: name,
        photoURL: photoURL === null ? null : photoURL,
    }).then(() => {
        console.log('Profile updated!')
        dispatch(getAuthUserData())
    }).catch((error) => {
        console.log('ERROR-updateProfile', error)
    });
}
