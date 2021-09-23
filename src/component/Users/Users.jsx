import React from "react";
import Card from "./Card";


const Users = (props) => {
    const user = Object.keys(props.users)
    const info = props.users
    const follow = props.follow
    const unfollow = props.unfollow
    const toggleInProgress = props.toggleInProgress
    const inProgress = props.favoriteInProgress

    return (
        <div className='container'>
            <h4>All Users</h4>
            <Card
                users={user}
                info={info}
                follow={follow}
                unfollow={unfollow}
                toggleInProgress={toggleInProgress}
                inProgress={inProgress}
            />
        </div>

    )
}

export default Users


