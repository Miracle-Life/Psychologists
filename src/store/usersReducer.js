import {
    ADD_FAVORITE_USERS,
    REMOVE_FAVORITE_USERS, REMOVE_USER,
    SET_USERS,
    TOGGLE_IS_FAVORING_PROGRESS,
    TOGGLE_IS_FETCHING
} from "./actionsType";

let initialState = {
    users: [],
    isFetching: true,
    favoriteInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_USERS:
            return {
                ...state,
                users: {...state.users, [action.user]: {...state.users[action.user], followed: true}}
                // Object.keys(state.users).map((user) => {
                //         if (state.users[user].id === action.id) {
                //             return {...state.users[user], followed: true}
                //         }
                //         return state.users[user]
                //     }
                // )
            }
        case REMOVE_FAVORITE_USERS:
            return {
                ...state,
                users: {...state.users, [action.user]: {...state.users[action.user], followed: false}}
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case REMOVE_USER: {
            return {}

        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FAVORING_PROGRESS: {
            return {
                ...state,
                favoriteInProgress: action.isFetching
                    ? [...state.favoriteInProgress, action.userId]
                    : state.favoriteInProgress.filter(id => id !== action.userId)

            }
        }
        default:
            return state
    }
}

export default usersReducer;
