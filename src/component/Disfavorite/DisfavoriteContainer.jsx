import React, {Component, useEffect} from "react";
import {connect} from "react-redux";
import Disfavoured from "./Disfavoured";
import {follow, setUsers, toggleIsFetching, unfollow} from "../../store/actions";
import {onValue, ref} from "firebase/database";
import {db} from "../../base";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";
import {getUsers} from "../Api/api";


const DisfavoredContainer = (props) => {

    // componentDidMount() {
    //     getUsers(this.props.toggleIsFetching, this.props.setUsers,)
    // }

    useEffect(() => {
        //получаем пользователей с нашей базы Firebase и выводим их
        getUsers(props.toggleIsFetching, props.setUsers,)

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
                        <Disfavoured
                            users={props.users}
                            follow={props.follow}
                            unfollow={props.unfollow}
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
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, toggleIsFetching
})(DisfavoredContainer);


