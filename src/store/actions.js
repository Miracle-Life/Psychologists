import {
    ADD_FAVORITE_USERS,
    SET_USERS,
    REMOVE_FAVORITE_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FAVORING_PROGRESS
} from "./actionsType";


export const follow = (id) => ({type: ADD_FAVORITE_USERS, id})
export const unfollow = (userId) => ({type: REMOVE_FAVORITE_USERS, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FAVORING_PROGRESS, isFetching, userId})
