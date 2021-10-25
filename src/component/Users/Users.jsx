import React from "react";
import Card from "./Card";
import {useForm} from "react-hook-form";


const Users = (props) => {
    const user = Object.keys(props.users)
    const info = props.users
    const toggleInProgress = props.toggleInProgress
    const inProgress = props.favoriteInProgress
    const following = props.following
    const unfollowing = props.unfollowing
    const delUser = props.delUser

    const defaultValues = {
        type: ""
    }

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
        console.log('data', data.type)
        props.setFilter(data.type)
    }

    return (
        <div className='container'>
            <h4>All Users</h4>
            <div className='row'>
                <div className='col-3'>
                    <form className='col m-auto' onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-label mb-3" htmlFor="name"><b>Type user</b></label>
                        <select
                            className="form-select"
                            id="type"
                            {...register('type')}
                            name="type"
                        >
                            <option key="Категория" value={''}>Выбрать категорию</option>
                            <option key="Психолог" value={'Психолог'}>Психолог</option>
                            <option key="Психотерапевт" value={'Психотерапевт'}>Психотерапевт</option>
                            <option key="Психиатр" value={'Психиатр'}>Психиатр</option>

                        </select>
                        <div className='d-flex justify-content-between'>
                            <button type="button" className="btn btn-warning mt-3" onClick={() => reset({
                                    type: "",
                                },
                                props.setFilter(null)
                            )}>Reset
                            </button>
                            <button type="submit" className="btn btn-primary mt-3">Search</button>
                        </div>
                    </form>
                </div>
                <div className='col-9'>
                    <Card
                        isAuth={props.isAuth}
                        users={user}
                        info={info}
                        toggleInProgress={toggleInProgress}
                        inProgress={inProgress}
                        following={following}
                        unfollowing={unfollowing}
                        delUser={delUser}
                    />
                </div>
            </div>
        </div>
    )
}

export default Users


