import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {ref, set} from "firebase/database";
import {db} from "../../base";

const NewUserForm = () => {
    const [image, setImage] = useState('')
    const defaultValues = {
        name: "",
        email: "",
        type: "Психотерапевт"
    };


    const {
        register,
        handleSubmit,
        setValue,
        reset,
        watch,
        onTouched,
        formState: {errors, isDirty, isSubmitting, touched, submitCount, isSubmitSuccessful}
    } = useForm({defaultValues});

    const onSubmit = (data, e) => {
        const name = !data.name ? `New User ${Math.floor(Math.random() * 1000000)}` : data.name
        set(ref(db, '/psychologists/' + name), {
            email: data.email,
            followed: false,
            id: Math.floor(Math.random() * 1000000),
            photo: image === '' ? 'null' : image,
            type: data.type
        })
        e.target.reset()
    }

    const onChangeAvatars = (event) => {
        const reader = new FileReader();
        reader.onload = event => setImage(event.target.result)
        reader.readAsDataURL(event.target.files[0]);
    }


    return (

        <form className='col-6 m-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label className="form-label mb-3" htmlFor="name"><b>Name and Surname</b></label>
                <input
                    {...register('name', {
                            required: true,
                            maxLength: 20,
                            minLength: 5
                        }
                    )}
                    className={`form-control ${errors?.name?.type ? 'is-invalid' : 'is-valid '}`}
                    placeholder='Фамилия и Имя пользователя'
                    id="name"
                    type="text"/>
                {errors?.name?.type === "required" && <span className='invalid-feedback'>This field is required</span>}
                {errors?.name?.type === "maxLength" && (
                    <span className='invalid-feedback'>Name cannot exceed 20 characters</span>)}
                {errors?.name?.type === "minLength" && (
                    <span className='invalid-feedback'>The name cannot be less than 5 characters.</span>)}
            </div>
            <div className="mb-3">
                <label className="form-label mb-3" htmlFor="email"><b>Email address</b></label>
                <input
                    {...register('email',
                        {
                            required: true,
                            maxLength: 30,
                            minLength: 5
                        }
                    )}
                    className={`form-control ${errors?.email?.type ? 'is-invalid' : 'is-valid '}`}
                    placeholder='Email пользователя'
                    id="email"
                    type="text"/>
                {errors?.email?.type === "required" && <span className='invalid-feedback'>This field is required</span>}
                {errors?.email?.type === "maxLength" && (
                    <span className='invalid-feedback'>Email cannot exceed 30 characters</span>)}
                {errors?.email?.type === "minLength" && (
                    <span className='invalid-feedback'>The email cannot be less than 5 characters.</span>)}
            </div>
            <div className="mb-3">
                <label className="form-label mb-3" htmlFor="name"><b>Type user</b></label>
                <select
                    className="form-select"
                    id="type"
                    {...register('type')}
                >
                    <option key="Психолог" value={'Психолог'}>Психолог</option>
                    <option key="Психотерапевт" value={'Психотерапевт'}>Психотерапевт</option>
                    <option key="Психиатр" value={'Психиатр'}>Психиатр</option>

                </select>
            </div>
            <div className="mb-3">
                <label className="form-label mb-3" htmlFor="photo"><b>Photo user</b></label>
                <input
                    {...register('file')}
                    className="form-control"
                    placeholder='Ссылка на фото пользователя'
                    onChange={onChangeAvatars}
                    type="file"/>

            </div>
            <div className='d-flex justify-content-between'>
                <button type="button" className="btn btn-warning mt-3" onClick={() => reset({
                    name: "",
                    email: "",
                    type: "Психотерапевт",
                    file: null
                })}>Reset
                </button>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div>

        </form>



        // <Form className='col-4 m-auto'>
        //     <label className="form-label mt-2 mx-4" htmlFor="name">Name and Surname </label>
        //     <Field
        //         className='form-control form-control-sm'
        //         id="name"
        //         name="name"
        //         placeholder='Фамилия и Имя пользователя'
        //         type="text"
        //     />
        //
        //     <label className="form-label mt-2 mx-4" htmlFor="email">Email address</label>
        //     <Field
        //         className='form-control form-control-sm'
        //         id="email"
        //         name="email"
        //         placeholder='Email пользователя'
        //         type="email"
        //     />
        //
        //     <label className="form-label mt-2 mx-4" htmlFor="type">Type user</label>
        //     <Field as="select"
        //            className="form-select"
        //            id="type"
        //            name="type">
        //         <option value="red">Психиатр</option>
        //         <option value="green">Психотерапевт</option>
        //         <option value="blue">Психолог</option>
        //     </Field>
        //
        //
        //     <label className="form-label mt-2 mx-4" htmlFor="photo">Photo user</label>
        //     <Input
        //         type="file"
        //         name="file"
        //         onChange={(event) => {
        //             setFieldValue("photo1", event.target.files[0]);
        //         }}
        //     />
        //     <Field
        //         className='form-control form-control-sm'
        //         id="photo"
        //         name="photo"
        //         placeholder='Ссылка на фото пользователя'
        //         type="email"
        //     />
        //
        //     <button type="submit" className="btn btn-primary mt-3">Submit</button>
        //
        //     {errors.myErrorFieldName &&
        //     <div className="form-control is-invalid mt-3">
        //         {/*Email our Password is wrong*/}
        //         {errors.myErrorFieldName}
        //     </div>
        //     }
        // </Form>
    )
};

export default NewUserForm;


