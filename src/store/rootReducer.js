import {combineReducers} from "redux";
import usersReducer from "./usersReducer";


export const rootReducer = combineReducers({
    usersPage: usersReducer,
})
