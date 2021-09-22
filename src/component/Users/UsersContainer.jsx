import React, {Component} from 'react';
import {follow, setUsers, toggleIsFetching, unfollow} from "../../store/actions";
import {connect} from "react-redux";
import Users from "./Users";
import {analytics, db, dbFirestore} from "../../base";
import {ref, onValue} from "firebase/database";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";
import {getAnalytics} from "firebase/analytics";
import {doc, getDoc, collection, getDocs, setDoc} from "firebase/firestore";
import {getUsers} from "../Api/api";


class UsersContainer extends Component {

    async componentDidMount() {
        const analytics = getAnalytics();
        console.log(analytics)


        // const querySnapshot = await getDocs(collection(dbFirestore, "psychologists"));
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        // });

        // const docRef = doc(dbFirestore, "psychologists", "Darya Skakun");
        // const docSnap = await getDoc(docRef);
        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }

        // await setDoc(doc(dbFirestore, "psychologists", "Darya Skakun"), {
        //     "email": "darya@gmail.com",
        //     "followed": true,
        //     "id": 1,
        //     "photo": "null",
        //     "type": "Психотерапевт"
        // });

        // const querySnapshot = await getDocs(collection(dbFirestore, "psychologists"))
        // querySnapshot.forEach((doc) => {
        //     console.dir(`${doc.id} => ${doc.data()}`);
        // });

        //получение данных с Firebase
        getUsers(this.props.toggleIsFetching, this.props.setUsers,)

        // setTimeout(() => {
        //     this.props.toggleIsFetching(true)
        //     const starCountRef = ref(db, "psychologists");
        //     onValue(starCountRef, (res) => {
        //         const data = res.val();
        //         this.props.setUsers(data)
        //         this.props.toggleIsFetching(false)
        //     });
        // }, 2500)

    }

    render() {
        return (
            <>
                {!this.props.users ?
                    <Alert/>
                    :
                    <>
                        {this.props.isFetching ?
                            <Preloader/>
                            :
                            <Users
                                users={this.props.users}
                                follow={this.props.follow}
                                unfollow={this.props.unfollow}
                            />
                        }
                    </>
                }
            </>

        );
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, toggleIsFetching
})(UsersContainer);



