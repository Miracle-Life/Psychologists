import React from "react";
import Card from "./Card";


const Users = (props) => {
    const user = Object.keys(props.users)
    const info = props.users
    const toggleInProgress = props.toggleInProgress
    const inProgress = props.favoriteInProgress
    const following = props.following
    const unfollowing = props.unfollowing
    const delUser = props.delUser


    return (
        <div className='container'>
            <h4>All Users</h4>
            <Card
                users={user}
                info={info}
                toggleInProgress={toggleInProgress}
                inProgress={inProgress}
                following={following}
                unfollowing={unfollowing}
                delUser={delUser}
            />
        </div>

    )
}

export default Users


