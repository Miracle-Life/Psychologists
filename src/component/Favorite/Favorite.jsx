import React from "react";
import Card from "../Users/Card";

const Favorite = (props) => {
    const users = Object.keys(props.users).filter((user) => props.users[user].followed === true)
    const info = props.users
    return (
        <div className='container'>
            <h4>Favorite Users </h4>
            <Card
                users={users}
                info={info}
            />
        </div>
    )
}
export default Favorite
