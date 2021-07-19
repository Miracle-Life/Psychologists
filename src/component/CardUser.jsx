import React from "react";import PropTypes from "prop-types";export default class CardUser extends React.Component {    constructor(props) {        super(props);        this.state = {            willFavorite: true        }    }    static propTypes = {        removeFavorites: PropTypes.func,        addToFavorites: PropTypes.func,        deleteUser: PropTypes.func,        details: PropTypes.shape({            type: PropTypes.string,            photo: PropTypes.string,            email: PropTypes.string,        }),        index: PropTypes.string,    }    render() {        const {index, deleteUser, addToFavorites, removeFavorites} = this.props;        const {type, photo, key, email} = this.props.details        return (            <div className="card " style={{width: "18rem"}} key={key}>                <img                    className="card-img-top"                    src={photo === "null" ? 'https://hsto.org/webt/-j/go/fx/-jgofxkmtexlfds_uh_c4eklqgu.jpeg' : photo}                    style={{width: "16,5rem", height: "13rem"}}                    alt=""                />                <div className="card-body">                    <h6 className="card-title">{index}</h6>                    <h6 className="card-title">                        {email}                    </h6>                    <h6 className="card-title">                        {type}                    </h6>                </div>                <div className="card-body">                    <div className="d-flex justify-content-between ">                        <button                            type="button"                            className={this.state.willFavorite ? "btn btn-success" : "btn btn-secondary"}                            onClick={() => {                                this.setState({                                    willFavorite: !this.state.willFavorite                                })                                {                                    this.state.willFavorite ? removeFavorites(key) : addToFavorites(key)                                }                            }}                        >                            Liked                        </button>                        <button                            className="btn btn-outline-danger"                            onClick={deleteUser}                        >Delete User                        </button>                    </div>                </div>            </div>        )    }}