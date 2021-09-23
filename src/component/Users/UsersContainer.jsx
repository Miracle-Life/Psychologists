import React, {Component, useEffect} from 'react';
import {follow, setUsers, toggleInProgress, toggleIsFetching, unfollow} from "../../store/actions";
import {connect} from "react-redux";
import Users from "./Users";
import {analytics, db, dbFirestore} from "../../base";
import {ref, onValue} from "firebase/database";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";
import {getAnalytics} from "firebase/analytics";
import {doc, getDoc, collection, getDocs, setDoc} from "firebase/firestore";
import {getUsers} from "../Api/api";
import axios from "axios";


const UsersContainer = (props) => {

    // async componentDidMount() {
    //     const analytics = getAnalytics();
    //     console.log(analytics)
    //
    //     //получение данных с Firebase
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
                        <Users
                            users={props.users}
                            follow={props.follow}
                            unfollow={props.unfollow}
                            toggleInProgress={props.toggleInProgress}
                            favoriteInProgress={props.favoriteInProgress}
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
    follow, unfollow, setUsers, toggleIsFetching, toggleInProgress
})(UsersContainer);



