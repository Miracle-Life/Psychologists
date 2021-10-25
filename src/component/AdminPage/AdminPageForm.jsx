import React from 'react';
import {Field, Form} from "formik";


const AdminPageForm = ({errors, setEditMode, onChangeAvatars, ...props}) => {

    const handleSubmit = () => {
        setEditMode(true)
    }

    return (
        <div className="mt-5">
            <Form className='col-4 m-auto'>
                <h3><b>Edit</b></h3>
                <label className="form-label mt-2 mx-4" htmlFor="name">Full name</label>
                <Field
                    className='form-control form-control-sm'
                    id="name"
                    name="displayName"
                    placeholder="You name"
                    type="text"
                />

                {/*<label className="form-label mt-2 mx-4">New photo profile</label>*/}
                {/*/!*<input id="file" name="photoURL" type="file" onChange={onChangeAvatars}/>*!/*/}

                {/*<Field*/}
                {/*    className='form-control form-control-sm'*/}
                {/*    id="file"*/}
                {/*    name="photoURL"*/}
                {/*    type="file"*/}
                {/*    onChange={onChangeAvatars}*/}
                {/*/>*/}

                <div className='d-flex justify-content-between mt-3'>
                    <button className="btn btn-secondary" onClick={handleSubmit}>Go Back</button>
                    <button type="submit" className="btn btn-success">Save</button>
                </div>

                {errors.myErrorFieldName &&
                <div className="form-control is-invalid mt-3">
                    {/*Email our Password is wrong*/}
                    {errors.myErrorFieldName}
                </div>
                }


            </Form>
        </div>
    );
};

export default AdminPageForm;
