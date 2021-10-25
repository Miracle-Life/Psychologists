import React, {useState} from 'react';
import AdminPageForm from "./AdminPageForm";
import AdminPage from "./AdminPage";
import {Formik} from 'formik';
import {connect} from "react-redux";
import {updateUserInfo} from "../../store/authReducer";

// import {getStorage, ref} from "firebase/storage";
// import {firebaseApp} from "../../base";
// export const storage = getStorage(firebaseApp)
// export const storageRef = ref(storage);
// const imagesRef = ref(storageRef, 'images/new');
// uploadBytes(imagesRef, file).then((snapshot) => {
//     console.log('Uploaded a blob or file!');
// });
// export const imagesRef = ref(storageRef, 'img');
////


const AdminProfile = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [image, setImage] = useState()
    const onChangeAvatars = (event) => {
        setImage(event.currentTarget.files[0])
        // const reader = new FileReader();
        // reader.onload = event => setImage(event.target.result)
        // reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div>
            {!editMode ?

                <AdminPage
                    toEditMode={() => {
                        setEditMode(true)
                    }}
                />
                :
                <Formik
                    initialValues={props.profile}
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
                        debugger
                        console.log(values.photoURL)
                        // console.log(image)
                        props.updateUserInfo(
                            values.displayName,
                            // ref(storageRef, `img/${values.photoURL}`),
                            // values.photoURL
                            // image,
                            // 'https://img5.goodfon.ru/wallpaper/nbig/3/73/abstraktsiia-antisfera-vodovorot-krasok-kartinka-chernyi-fon.jpg',
                        )
                        setEditMode(false)
                    }}
                >
                    {({errors, touched}) => (
                        <AdminPageForm setEditMode={setEditMode}
                                       onChangeAvatars={onChangeAvatars}
                                       errors={errors}
                                       {...props}/>
                    )}

                </Formik>


            }

        </div>
    );
};

const mapStateToProps = (state) => ({

    profile: state.authUser.User,
})
export default connect(mapStateToProps, {updateUserInfo})(AdminProfile)

