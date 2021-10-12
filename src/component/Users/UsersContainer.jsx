import React, {useEffect} from 'react';
import {delUser, following, getUsersThunkCreator, toggleInProgress, unfollowing,} from "../../store/actions";
import {connect, useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";
import {useHistory, useLocation, withRouter} from "react-router-dom";


const UsersContainer = (props) => {

    // const {match, location, history} = props;
    // console.log('match', match)
    // console.log('location', location)
    // console.log('history', history)
    // const dispatch = useDispatch()
    // const users = useSelector(state => state.usersPage.users)

    useEffect(() => {
        //получаем пользователей с нашей базы Firebase и выводим их
        props.getUsersThunkCreator()

    }, [])

    return (
        <>
            {/*<button className='btn btn-secondary' onClick={() => {*/}
            {/*    history.goBack()*/}
            {/*}}>Back*/}
            {/*</button>*/}
            {!props.users ?
                <Alert/>
                :
                <>
                    {props.isFetching ?
                        <Preloader/>
                        :
                        <Users
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

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    favoriteInProgress: state.usersPage.favoriteInProgress,
    isAuth: state.authUser.isAuth,

})

// export default withRouter(connect(mapStateToProps, {
//     toggleInProgress, getUsersThunkCreator, following, unfollowing, delUser
// })(UsersContainer));

export default connect(mapStateToProps, {
    toggleInProgress, getUsersThunkCreator, following, unfollowing, delUser
})(UsersContainer);



