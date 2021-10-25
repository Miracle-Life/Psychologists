import React from 'react';
import {Field, Form} from "formik";

const SignUpForm = ({errors}) => {
    return (
        <Form className='col-4 m-auto'>
            <h3><b>Sign up</b></h3>
            <label className="form-label mt-2 mx-4" htmlFor="email">Email our Login</label>
            <Field
                className='form-control form-control-sm'
                id="email"
                name="email"
                placeholder="You email our login"
                type="email"
            />

            <label className="form-label mt-2 mx-4" htmlFor="password">Password</label>
            <Field
                className='form-control form-control-sm'
                id="password"
                name="password"
                placeholder="You password"
                type="password"
            />

            {/*<label className="form-label mt-2 mx-4" htmlFor="password"> Repeat Password</label>*/}
            {/*<Field*/}
            {/*    className='form-control form-control-sm'*/}
            {/*    id="password"*/}
            {/*    name="password"*/}
            {/*    placeholder="You password"*/}
            {/*    type="password"*/}
            {/*/>*/}
            <button type="submit" className="btn btn-success mt-3">Register</button>
            {errors.myErrorFieldName &&
            <div className="form-control is-invalid mt-3">
                {/*Email our Password is wrong*/}
                {errors.myErrorFieldName}
            </div>
            }
        </Form>
    );
};

export default SignUpForm;
