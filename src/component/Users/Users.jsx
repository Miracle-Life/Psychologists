import React, {useState} from "react";
import Card from "./Card";


const Users = (props) => {
    const user = Object.keys(props.users)
    const info = props.users
    const toggleInProgress = props.toggleInProgress
    const inProgress = props.favoriteInProgress
    const following = props.following
    const unfollowing = props.unfollowing
    const delUser = props.delUser

    // const [opened, setOpened] = useState(false);
    // const toggleOpen = () => {
    //     setOpened(!opened)
    // }
    // const menuClass = `dropdown-menu${opened ? " show" : ""}`

    return (
        <div className='container'>
            <h4>All Users</h4>
            <div className='row'>
                <div className='col-3'>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Кнопка выпадающего списка
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Действие</a></li>
                            <li><a className="dropdown-item" href="#">Другое действие</a></li>
                            <li><a className="dropdown-item" href="#">Что-то еще здесь</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-9'>

                    <Card
                        isAuth={props.isAuth}
                        users={user}
                        info={info}
                        toggleInProgress={toggleInProgress}
                        inProgress={inProgress}
                        following={following}
                        unfollowing={unfollowing}
                        delUser={delUser}
                    />

                </div>


            </div>

        </div>

    )
}

export default Users


