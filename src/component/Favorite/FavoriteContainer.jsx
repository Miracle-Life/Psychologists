import React, {Component, useEffect} from 'react';
import {connect} from "react-redux";
import {
    acceptUnfollow,
    delUser,
    following,
    getUsersThunkCreator,
    toggleInProgress,
    unfollowing,
} from "../../store/actions";
import Favorite from "./Favorite";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";


const FavoriteContainer = (props) => {

    useEffect(() => {
        //получаем пользователей с нашей базы Firebase и выводим их
        props.getUsersThunkCreator()

    }, [])

    return (
        <>
            {!props.users ?
                <Alert/>
                :
                <>
                    {props.isFetching ?
                        <Preloader/>
                        :
                        <Favorite
                            {...props}
                            // isAuth={props.isAuth}
                            // users={props.users}
                            // toggleInProgress={props.toggleInProgress}
                            // favoriteInProgress={props.favoriteInProgress}
                            // following={props.following}
                            // unfollowing={props.unfollowing}
                            // delUser={props.delUser}
                        />
                    }
                </>
            }
        </>
    );

}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        favoriteInProgress: state.usersPage.favoriteInProgress,
        isAuth: state.authUser.isAuth,
    }
}

export default connect(mapStateToProps, {
    toggleInProgress, getUsersThunkCreator, following, unfollowing, delUser
})(FavoriteContainer);
