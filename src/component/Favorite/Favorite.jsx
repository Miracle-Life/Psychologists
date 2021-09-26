import React from "react";
import Card from "../Users/Card";

const Favorite = (props) => {
    const users = Object.keys(props.users).filter((user) => props.users[user].followed === true)
    const info = props.users
    const toggleInProgress = props.toggleInProgress
    const inProgress = props.favoriteInProgress
    const following = props.following
    const unfollowing = props.unfollowing
    const delUser = props.delUser
    return (
        <div className='container'>
            <h4>Favorite Users </h4>
            <Card
                users={users}
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
export default Favorite
