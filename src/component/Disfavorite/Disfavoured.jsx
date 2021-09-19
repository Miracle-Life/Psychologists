import React from "react";
import Card from "../Users/Card";

const Disfavoured = (props) => {
    const users = Object.keys(props.users).filter((user) => props.users[user].followed === false)
    const info = props.users
    return (
        <div className='container'>
            <h4>Disfavored Users</h4>
            <Card
                users={users}
                info={info}
            />
        </div>
    )
}

export default Disfavoured
