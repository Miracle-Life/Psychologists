import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Formik} from 'formik';
import {loginEmailAndPassword, loginInWithGoogle, logout} from "../../store/authReducer";

const SignIn = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/users'}/>
    }

    const signInWithGoogle = () => {
        props.loginInWithGoogle()
    }


    return (
        <div className=" justify-content-center pt-3">
            {props.isAuth ? "" :
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    // render={props => {
                    //     return < LoginForm {...props}/>
                    // }}
                    onSubmit={(values, {
                        authError,
                        setError,
                        setErrors,
                        setSubmitting,
                        resetForm,
                        setFieldError
                    }) => {
                        // resetForm()
                        props.loginEmailAndPassword(values.email, values.password, setFieldError)
                    }}
                >
                    {({errors, touched}) => (
                        < LoginForm errors={errors} {...props}/>
                    )}

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
export default connect(mapStateToProps, {loginEmailAndPassword, loginInWithGoogle, logout})(SignIn)

