import React, {useEffect, useState} from 'react';
import {delUser, following, getUsersThunkCreator, toggleInProgress, unfollowing,} from "../../store/actions";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";
//import {useHistory, useLocation, withRouter} from "react-router-dom";


const UsersContainer = (props) => {

    // const {match, location, history} = props;
    // console.log('match', match)
    // console.log('location', location)
    // console.log('history', history)
    // const dispatch = useDispatch()
    // const users = useSelector(state => state.usersPage.users)

    const [filter, setFilter] = useState();

    useEffect(() => {
        //получаем пользователей с нашей базы Firebase и выводим их
        props.getUsersThunkCreator(filter)
        console.log('1')

    }, [filter])

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
                            setFilter={setFilter}
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



