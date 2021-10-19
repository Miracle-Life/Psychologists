import React from 'react';
import {child, update, push, ref, set, get} from "firebase/database";
import NewUserForm from "./NewUserForm";


const AddUser = () => {

    return (
        <>
            <NewUserForm/>
        </>

    )
};

export default AddUser;
