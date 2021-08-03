import React, {useEffect, useState} from "react";
import {db} from "../base";
import 'firebase/app-check';
import CardUser from "./CardUser";

function Users() {
    const [psychologists, setPsychologists] = useState({});
    const [sort_by, setSort_by] = useState('');
    const [psychologistsFavorite, setPsychologistsFavorite] = useState([]);
    const resetPsychologists = () => {
        setSort_by(
            ''
        )
    }

    //выбираем категорию пользователя и записываем ее в state
    const onChange = (event) => {
        setSort_by(event.target.value)
    }

    const addToFavorites = (index) => {
        const updatePsychologistsFavorite = [index];
        setPsychologistsFavorite(
            [...psychologistsFavorite, ...updatePsychologistsFavorite]
        )
    }

    const removeFavorites = (index) => {
        const updatePsychologistsFavorite = psychologistsFavorite.filter(item => item !== index)
        setPsychologistsFavorite(
            [...updatePsychologistsFavorite]
        )
    }

    //удаляем пользователя с нашей базы Firebase
    const deleteUser = (index) => {
        setTimeout(() => {
            console.log(`Пользователь ${index} удален`)
            const ps = db.ref("psycologists");
            ps.child(index).remove()
        }, 1000)
    }

    useEffect(() => {
        getUser()
    }, [sort_by])

    //получаем пользователей с нашей базы Firebase
    const getUser = () => {
        //если у нас в state есть категория то берем ее и показываем пользователей с выбраной категорией
        //если категория в state пустая то получаем всех пользователей
        const ref =
            sort_by
                ? db.ref("psycologists").orderByChild('type').equalTo(sort_by)
                : db.ref("psycologists");
        //получаем все поля нашей базы и записываем их в state
        ref.on("value", (snapshot) => {
            setPsychologists(
                snapshot.val()
            );
            // console.log(psychologists)
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <React.Fragment>
                        <div><h3>Users Category</h3></div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="radio"
                                name='user'
                                id="Психолог"
                                value='Психолог'
                                onChange={onChange}
                            />
                            <label className="form-check-label" htmlFor="Психолог">
                                Психолог
                            </label>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="radio"
                                name='user'
                                id="Психиатр"
                                value='Психиатр'
                                onChange={onChange}
                            />
                            <label className="form-check-label" htmlFor="Психиатр">
                                Психиатр
                            </label>
                        </div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="radio"
                                name='user'
                                id="Психотерапевт"
                                value='Психотерапевт'
                                onChange={onChange}
                            />
                            <label className="form-check-label" htmlFor="Психотерапевт">
                                Психотерапевт
                            </label>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-outline-dark mb-2"
                                onClick={resetPsychologists}
                            >
                                Сбросить фильтр
                            </button>
                        </div>
                    </React.Fragment>
                </div>
                <div className="col">
                    <div className="row">
                        {Object.keys(psychologists).map((key) => {
                            return <CardUser
                                className="row-3"
                                key={key}
                                index={key}
                                removeFavorites={() => removeFavorites(key)}
                                addToFavorites={() => addToFavorites(key)}
                                deleteUser={() => deleteUser(key)}
                                details={psychologists[key]}
                                isFavorite={psychologistsFavorite.includes(key)}
                            />
                        })}

                    </div>
                </div>
                <div className="col-2">
                    <h4>Favorite: {psychologistsFavorite.length} users</h4>
                    <ul className="list-group">
                        {psychologistsFavorite.map(key => (
                            <li
                                key={key}
                                className="list-group-item"

                            >
                                <p>{key}</p>
                                {/*<p>{this.state.psycologists[key].email}</p>*/}
                                {/*<p>{this.state.psycologists[key].type}</p>*/}
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    )

}

export default Users

