import React from 'react';
import {Formik} from 'formik';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {createUser} from "../../store/authReducer";
import SignUpForm from "./SignUpForm";

const SignUp = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/users'}/>
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
                        props.createUser(values.email, values.password, setFieldError)
                    }}
                >
                    {({errors, touched}) => (
                        < SignUpForm errors={errors} {...props}/>
                    )}

                </Formik>
            }


        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
})
export default connect(mapStateToProps, {createUser})(SignUp)
