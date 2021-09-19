import React, {Component} from 'react';
import {follow, setUsers, toggleIsFetching, unfollow} from "../../store/actions";
import {connect} from "react-redux";
import Users from "./Users";
import {db} from "../../base";
import {ref, onValue} from "firebase/database";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        const starCountRef = ref(db, "psychologists");
        onValue(starCountRef, (res) => {
            const data = res.val();
            this.props.setUsers(data)
            this.props.toggleIsFetching(false)
        });
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



