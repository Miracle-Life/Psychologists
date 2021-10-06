import React from 'react';
import AddUser from "./AddUser";
import {connect, useDispatch, useSelector} from "react-redux";
import {
    setUserThunkCreator,
    toggleInProgress,
} from "../../store/actions";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect.jsx";


const AddUserContainer = (props) => {
    return (
        <>
            <AddUser setUserThunkCreator={props.setUserThunkCreator}/>
        </>
    );
};
let mapStateToProps = (state) => ({
    isFetching: state.usersPage.isFetching,
    isAuth: state.authUser.isAuth,
})
export default compose(
    connect(mapStateToProps, {toggleInProgress, setUserThunkCreator}),
    withAuthRedirect,
)(AddUserContainer);

