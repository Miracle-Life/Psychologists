import React from 'react';
import image from "../../img/img1.jpg";
import {child, update, push, ref, set, get} from "firebase/database";
import {db} from "../../base";

const Card = (props) => {

    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {props.users.map((user) => (
                    <div key={props.info[user].id} className="col">
                        <div className="card h-100">
                            <img src={props.info[user].photo === "null" ? image : props.info[user].photo}
                                 className="card-img-top"
                                 style={{height: "17rem", objectFit: "cover"}}
                                 alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title mb-4">{user}</h4>
                                <p className="card-text text-muted">
                                    Специальность: {props.info[user].type}
                                </p>
                                <p className="card-text text-muted">
                                    Email: {props.info[user].email}
                                </p>
                                <p className="card-text text-muted">
                                    Id: {props.info[user].id}
                                </p>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">

                                {/*{props.info[user].followed*/}
                                {/*    ?*/}
                                {/*    <button disabled={props.inProgress.some(id => id === props.info[user].id)}*/}
                                {/*            className='btn btn-secondary' onClick={() => {*/}
                                {/*        props.toggleInProgress(true, props.info[user].id)*/}
                                {/*        setTimeout(() => {*/}
                                {/*            const r = ref(db, '/psychologists/' + user)*/}
                                {/*            update(r, {"followed": false})*/}
                                {/*            props.toggleInProgress(false, props.info[user].id)*/}
                                {/*        }, 500)*/}
                                {/*        // props.unfollow(props.info[user].id)*/}
                                {/*    }}>Unfollow</button>*/}
                                {/*    :*/}
                                {/*    <button disabled={props.inProgress.some(id => id === props.info[user].id)}*/}
                                {/*            className='btn btn-success' onClick={() => {*/}
                                {/*        props.toggleInProgress(true, props.info[user].id)*/}
                                {/*        setTimeout(() => {*/}
                                {/*            const r = ref(db, '/psychologists/' + user)*/}
                                {/*            update(r, {"followed": true})*/}
                                {/*            props.toggleInProgress(false, props.info[user].id)*/}
                                {/*        }, 500)*/}

                                {/*        // props.follow(props.info[user].id)*/}
                                {/*    }}>Follow</button>}*/}


                                <button
                                    className={` ${props.info[user].followed ? 'btn btn-secondary' : 'btn btn-success'}`}
                                    onClick={() => {
                                        const r = ref(db, '/psychologists/' + user)
                                        props.info[user].followed ?
                                            update(r, {"followed": false})
                                            // props.unfollow(props.info[user].id)
                                            :
                                            update(r, {"followed": true})
                                        // props.follow(props.info[user].id)

                                    }}
                                >
                                    {props.info[user].followed ? 'Unfollow' : "Follow"}
                                </button>
                                <button className='btn btn-danger' onClick={() => {
                                    set(ref(db, '/psychologists/' + user), null)
                                }}>Delete
                                </button>


                            </div>
                        </div>
                    </div>
                ))}


            </div>

            {/*<div className='container'>*/}
            {/*    {props.users.map((user) => (*/}
            {/*        <div key={props.info[user].id} className='container'>*/}
            {/*            <div className="card border-dark m-3" style={{maxWidth: "560px"}}>*/}
            {/*                <div className="row g-4">*/}
            {/*                    <div className="col-md-4">*/}
            {/*                        <img src={props.info[user].photo === "null" ? image : props.info[user].photo}*/}
            {/*                             className="img-fluid rounded-start"*/}
            {/*                             alt="..."/>*/}
            {/*                    </div>*/}
            {/*                    <div className="col-md-8 mb-2">*/}
            {/*                        <div className="card-body ">*/}
            {/*                            <h5 className="card-title">{user}</h5>*/}
            {/*                            <p className="card-text">*/}
            {/*                                {props.info[user].type}*/}
            {/*                            </p>*/}
            {/*                            <p className="card-text"><small className="text-muted">*/}
            {/*                                Email: {props.info[user].email}*/}
            {/*                            </small></p>*/}
            {/*                            <p className="card-text"><small className="text-muted">*/}
            {/*                                Id: {props.info[user].id}*/}
            {/*                            </small></p>*/}
            {/*                        </div>*/}
            {/*                        <div className='card-text justify-content-center'>*/}
            {/*                            <button*/}
            {/*                                className={` ${props.info[user].followed ? 'btn btn-secondary' : 'btn btn-success'}`}*/}
            {/*                                onClick={() => {*/}
            {/*                                    const r = ref(db, '/psychologists/' + user)*/}
            {/*                                    props.info[user].followed ?*/}
            {/*                                        update(r, {"followed": false})*/}
            {/*                                        // props.unfollow(props.info[user].id)*/}
            {/*                                        :*/}
            {/*                                        update(r, {"followed": true})*/}
            {/*                                    // props.follow(props.info[user].id)*/}
            {/*                                }}*/}
            {/*                            >*/}
            {/*                                {props.info[user].followed ? 'Unfollow' : "Follow"}*/}
            {/*                            </button>*/}

            {/*                            /!*{props.info[user].followed*!/*/}
            {/*                            /!*    ?*!/*/}
            {/*                            /!*    <button className='btn btn-secondary' onClick={() => {*!/*/}
            {/*                            /!*        const r = ref(db, '/psychologists/' + user)*!/*/}
            {/*                            /!*        update(r, {"followed": false})*!/*/}
            {/*                            /!*        // props.unfollow(props.info[user].id)*!/*/}
            {/*                            /!*    }}>Unfollow</button>*!/*/}
            {/*                            /!*    :*!/*/}
            {/*                            /!*    <button className='btn btn-success' onClick={() => {*!/*/}
            {/*                            /!*        const r = ref(db, '/psychologists/' + user)*!/*/}
            {/*                            /!*        update(r, {"followed": true})*!/*/}
            {/*                            /!*        // props.follow(props.info[user].id)*!/*/}
            {/*                            /!*    }}>Follow</button>}*!/*/}

            {/*                            <button className='btn btn-danger' onClick={() => {*/}
            {/*                                set(ref(db, '/psychologists/' + user), null)*/}
            {/*                            }}>Delete</button>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}


        </div>
    );
};

export default Card;
