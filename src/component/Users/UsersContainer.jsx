import React, {useEffect} from 'react';
import {delUser, following, getUsersThunkCreator, toggleInProgress, unfollowing,} from "../../store/actions";
import {connect, useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";


const UsersContainer = (props) => {

    // const dispatch = useDispatch()
    // const users = useSelector(state => state.usersPage.users)

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
                        <Users
                            users={props.users}
                            toggleInProgress={props.toggleInProgress}
                            favoriteInProgress={props.favoriteInProgress}
                            following={props.following}
                            unfollowing={props.unfollowing}
                            delUser={props.delUser}
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
        favoriteInProgress: state.usersPage.favoriteInProgress
    }
}

export default connect(mapStateToProps, {
    toggleInProgress, getUsersThunkCreator, following, unfollowing, delUser
})(UsersContainer);



