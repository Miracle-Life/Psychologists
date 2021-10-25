import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../store/authReducer";
import {Redirect} from "react-router-dom";
import image from "../../img/img1.jpg";

const AdminPage = ({isAuth, email, login, photo, emailVerified, toEditMode, phoneNumber}) => {
    // debugger
    if (!isAuth) {
        return <Redirect to={'/users'}/>
    }
    return (
        <div className='container '>
            <div className="row pt-3">
                <div className="col-3">
                    <div className="card ">
                        <img src={photo || image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"> {login}</h5>
                        </div>
                    </div>
                </div>

                <div className="col-7">
                    <div>
                        <button className="btn btn-warning " onClick={toEditMode}>Edit</button>
                    </div>
                    <div className='m-3'>
                        <div className="card-text">
                            <b>Full Name:</b> {login}
                        </div>
                        <div className="card-text">
                            <b>emailVerified:</b> {!emailVerified ? 'No' : 'Yes'}
                        </div>
                        <div className="card-text">
                            <b>Email:</b> {email}
                        </div>
                        <div className="card-text">
                            <b>Phone number:</b> {phoneNumber}
                        </div>
                    </div>


                </div>
            </div>


        </div>
    );
};

const mapStateToProps = (state) => ({
    email: state.authUser.User.email,
    login: state.authUser.User.displayName,
    photo: state.authUser.User.photoURL,
    isAuth: state.authUser.isAuth,
    emailVerified: state.authUser.User.emailVerified,
    phoneNumber: state.authUser.User.phoneNumber,

})
export default connect(mapStateToProps, {logout})(AdminPage)
