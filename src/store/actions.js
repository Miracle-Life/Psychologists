import {
    ADD_FAVORITE_USERS, REMOVE_FAVORITE_USERS, TOGGLE_IS_FETCHING, TOGGLE_IS_FAVORING_PROGRESS, REMOVE_USER, GET_USERS
} from "./actionsType";
import {onValue, ref, query, orderByChild, equalTo} from "firebase/database";
import {db} from "../base";
import {usersAPI} from "../Api/api";


export const acceptFollow = (userId, user) => ({type: ADD_FAVORITE_USERS, userId, user})
export const acceptUnfollow = (userId, user) => ({type: REMOVE_FAVORITE_USERS, userId, user})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FAVORING_PROGRESS, isFetching, userId})
export const getUsers = (users) => ({type: GET_USERS, users})
export const deleteUser = (userId, user) => ({type: REMOVE_USER, userId, user})


export const setUserThunkCreator = (name, email, photo, type) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        await usersAPI.setUser(name, email, photo, type)
        dispatch(toggleIsFetching(false))
    }
}

export const getUsersThunkCreator = (optionFilter) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        const mostViewedSort = query(ref(db, 'psychologists'), orderByChild('type'), equalTo(`${optionFilter}`))
        const starCountRef = optionFilter ? mostViewedSort : ref(db, "psychologists");
        onValue(starCountRef, (res) => {
            const users = res.val();
            dispatch(getUsers(users))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const following = (userId, user) => {
    return async (dispatch) => {
        dispatch(toggleInProgress(true, userId))
        await usersAPI.setFollow(user)
        dispatch(acceptFollow(userId, user))
        dispatch(toggleInProgress(false, userId))

    }
}


export const unfollowing = (userId, user) => {
    return async (dispatch) => {
        dispatch(toggleInProgress(true, userId))
        await usersAPI.setUnfollow(user)
        dispatch(acceptUnfollow(userId, user))
        dispatch(toggleInProgress(false, userId))

    }
}

export const delUser = (userId, user) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        await usersAPI.setDelete(user)
        // dispatch(deleteUser(user))
        dispatch(toggleInProgress(false, userId))

    }
}
