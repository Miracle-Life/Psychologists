import React from "react";import {db} from "../base";import 'firebase/app-check';import CardUser from "./CardUser";export default class Users extends React.Component {    constructor(props) {        super(props);        this.state = {            psycologists: {},            sort_by: '',            psycologistsFavorite: [],        }    }    //выбираем категорию пользователя и записываем ее в state    onChange = (event) => {        this.setState({            sort_by: event.target.value        })    }    addToFavorites = (index) => {        const updatePsycologistsFavorite = [...this.state.psycologistsFavorite, index];        this.setState({            psycologistsFavorite: updatePsycologistsFavorite        })    }    removeFavorites = (index) => {        const updatePsycologistsFavorite = this.state.psycologistsFavorite.filter((item) => {                return item !== index            }        )        this.setState({            psycologistsFavorite: updatePsycologistsFavorite        })    }    //удаляем пользователя с най базы Firebase    deleteUser = (index) => {        setTimeout(() => {            console.log('Delete  -  ', index)            const ps = db.ref("psycologists");            ps.child(index).remove()        }, 1000)    }    componentDidMount() {        this.getUser()    }    componentDidUpdate(prevProps, prevState, snapshot) {        //обновляем список пользователей по категории        if (prevState.sort_by !== this.state.sort_by) {            this.getUser()        }        console.log(this.state.psycologistsFavorite)    }    //получаем пользователей с нашей базы Firebase    getUser = () => {        //если у нас в state есть категория то берем ее и показываем пользователей с выбраной категорией        //если категория в state пустая то получаем всех пользователей        const ref =            this.state.sort_by                ? db.ref("psycologists").orderByChild('type').equalTo(this.state.sort_by)                : db.ref("psycologists");        //получаем все поля нашей базы и записываем их в state        ref.on("value", (snapshot) => {            this.setState({                psycologists: snapshot.val(),            });        });    }    render() {        return (            <div className="container">                <div className="row">                    <div className="col-2">                        <React.Fragment>                            <div><h3>Users Category</h3></div>                            <div className="form-check form-switch">                                <input                                    className="form-check-input"                                    type="radio"                                    name='user'                                    id="Психолог"                                    value='Психолог'                                    onChange={this.onChange}                                />                                <label className="form-check-label" htmlFor="Психолог">                                    Психолог                                </label>                            </div>                            <div className="form-check form-switch">                                <input                                    className="form-check-input"                                    type="radio"                                    name='user'                                    id="Психиатр"                                    value='Психиатр'                                    onChange={this.onChange}                                />                                <label className="form-check-label" htmlFor="Психиатр">                                    Психиатр                                </label>                            </div>                            <div className="form-check form-switch">                                <input                                    className="form-check-input"                                    type="radio"                                    name='user'                                    id="Психотерапевт"                                    value='Психотерапевт'                                    onChange={this.onChange}                                />                                <label className="form-check-label" htmlFor="Психотерапевт">                                    Психотерапевт                                </label>                            </div>                        </React.Fragment>                    </div>                    <div className="col">                        <div className="row">                            {Object.keys(this.state.psycologists).map((key) => {                                return <CardUser                                    className="row-3"                                    key={key}                                    index={key}                                    removeFavorites={() => this.removeFavorites(key)}                                    addToFavorites={() => this.addToFavorites(key)}                                    deleteUser={() => this.deleteUser(key)}                                    details={this.state.psycologists[key]}                                />                            })}                        </div>                    </div>                    <div className="col-2">                        <h4>Favorite: {this.state.psycologistsFavorite.length} users</h4>                        <ul className="list-group">                            {this.state.psycologistsFavorite.map(key => (                                <li key={key} className="list-group-item">                                    <p>{key}</p>                                    {/*<p>{this.state.psycologists[key].email}</p>*/}                                    {/*<p>{this.state.psycologists[key].type}</p>*/}                                </li>                            ))}                        </ul>                    </div>                </div>            </div>        )    }}