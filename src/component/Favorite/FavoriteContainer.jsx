import React, {Component} from 'react';
import {connect} from "react-redux";
import {follow, setUsers, toggleIsFetching, unfollow,} from "../../store/actions";
import Favorite from "./Favorite";
import {ref, child, onValue, get} from "firebase/database";
import {db} from "../../base";
import Preloader from "../common/Preloader/Preloader";
import Alert from "../common/Alert/Alert";
import {getUsers} from "../Api/api";


class FavoriteContainer extends Component {

    componentDidMount() {
        getUsers(this.props.toggleIsFetching, this.props.setUsers,)
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
                            <Favorite
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
})(FavoriteContainer);
