import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Formik, Field, Form} from 'formik';
import {getAuthUserData, loginEmailAndPassword, loginInWithGoogle, logout} from "../../store/authReducer";

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/users'}/>
    }

    const signInWithGoogle = () => {
        props.loginInWithGoogle()
    }


    return (
        <div>
            <h1>Login Page</h1>
            {props.isAuth ? "" :
                <Formik
                    initialValues={{}}
                    onSubmit={async (values) => {
                        // await new Promise((r) => setTimeout(r, 500));
                        props.loginEmailAndPassword(values.email, values.password)
                    }}
                >
                    <LoginForm {...props}/>
                </Formik>
            }

            {props.isAuth ?
                '' :
                <div className='col-4 m-auto mt-3'>
                    <h5>
                        Войти с помощью
                    </h5>
                    <button onClick={signInWithGoogle} className="btn btn-danger mt-3">Google</button>
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
})
export default connect(mapStateToProps, {loginEmailAndPassword, getAuthUserData, loginInWithGoogle, logout})(Login)

