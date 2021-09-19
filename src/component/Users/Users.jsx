import React from "react";
import image from './../../img/post.jpeg'
import {db, dbRef} from "../../base";
import {child, update, push, ref, set, get} from "firebase/database";
import Card from "./Card";


const Users = (props) => {
    const user = Object.keys(props.users)
    const info = props.users
    const follow = props.follow
    const unfollow = props.unfollow
    return (
        <div className='container'>
            <h4>All Users</h4>
            <Card
                users={user}
                info={info}
                follow={follow}
                unfollow={unfollow}
            />
        </div>

    )
}

export default Users


