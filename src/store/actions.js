import {
    ADD_FAVORITE_USERS,
    SET_USERS,
    REMOVE_FAVORITE_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FAVORING_PROGRESS, REMOVE_USER
} from "./actionsType";
import {onValue, ref, set, update} from "firebase/database";
import {db, dbFirestore} from "../base";
import {usersAPI} from "../component/Api/api";


export const acceptFollow = (userId, user) => ({type: ADD_FAVORITE_USERS, userId, user})
export const acceptUnfollow = (userId, user) => ({type: REMOVE_FAVORITE_USERS, userId, user})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FAVORING_PROGRESS, isFetching, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const deleteUser = (userId, user) => ({type: REMOVE_USER, userId, user})


export const getUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        const starCountRef = ref(db, "psychologists");
        onValue(starCountRef, (res) => {
            const users = res.val();
            dispatch(setUsers(users))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const following = (userId, user) => {
    return (dispatch) => {
        dispatch(toggleInProgress(true, userId))
        usersAPI.setFollow(user).then(() => {
            // console.log('success')
            dispatch(acceptFollow(userId, user))
            dispatch(toggleInProgress(false, userId))
        })
    }
}


export const unfollowing = (userId, user) => {
    return (dispatch) => {
        dispatch(toggleInProgress(true, userId))
        usersAPI.setUnfollow(user)
            .then(() => {
                dispatch(acceptUnfollow(userId, user))
                dispatch(toggleInProgress(false, userId))
            })
    }
}

export const delUser = (userId, user) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.setDelete(user)
            .then(() => {
                // dispatch(deleteUser(user))
                dispatch(toggleInProgress(false, userId))
            })
    }
}
