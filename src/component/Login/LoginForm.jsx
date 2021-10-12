import React from 'react';
import {Formik, Field, Form} from 'formik';

const LoginForm = (props) => {

    return (
        <Form className='col-4 m-auto'>
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

            <button type="submit" className="btn btn-secondary mt-3">Login</button>
        </Form>

        // <div>
        //     {LoginOrEmail ?
        //         <div className='col-4 m-auto'>
        //             {photo === null ?
        //                 <label className="form-label">{`Привет- ${LoginOrEmail}`}</label>
        //                 :
        //                 <>
        //                     <img src={photo} style={{width: '3rem', borderRadius: '50%'}} alt=""/>
        //                     <label className="form-label">{`Привет ${LoginOrEmail}`}</label>
        //                 </>
        //             }
        //         </div>
        //         :
        //         <form className='col-4 m-auto'>
        //
        //             <div className="mb-3">
        //                 <label className="form-label">Email address</label>
        //                 <input
        //                     className='form-control form-control-sm'
        //                     placeholder="email"
        //                     type="text"
        //                     name={'email'}
        //                     ref={emailRef}
        //                 />
        //                 <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        //             </div>
        //             <div>
        //                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        //                 <input
        //                     className='form-control form-control-sm'
        //                     placeholder="password"
        //                     type="password"
        //                     name={'password'}
        //                     ref={passwordlRef}
        //                 />
        //                 <div id="emailHelp" className="form-text">We'll never share your password with anyone else.
        //                 </div>
        //             </div>
        //         </form>
        //
        //     }
        //
        //     <div className='col-4 m-auto'>
        //         {LoginOrEmail ?
        //             <button onClick={signOut} className="btn btn-warning mt-3">Logout</button>
        //             :
        //             <button onClick={handleSubmit} className="btn btn-secondary mt-3">Login</button>
        //         }
        //     </div>
        //     {LoginOrEmail ?
        //         '' :
        //         <div className='col-4 m-auto mt-3'>
        //             <h5>
        //                 Войти с помощью
        //             </h5>
        //             <button onClick={signInWithGoogle} className="btn btn-danger mt-3">Google</button>
        //         </div>
        //     }
        //
        // </div>

    );
};


export default LoginForm;
