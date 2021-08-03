import React from "react";
import {db} from "../base";

function App() {
    let User
    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const typeRef = React.createRef();
    const photoRef = React.createRef();

    const onChangeAvatars = (event) => {
        const reader = new FileReader();
        reader.onload = event => {
            User = event.target.result
        };
        reader.readAsDataURL(event.target.files[0]);
    }
    //отменяем перезагрузку страницы при клике на button
    const createUser = event => {
        event.preventDefault();
        //проверка что мы получаем из нашей формы name
        // console.log(this.nameRef.current.value);
        //обьект что принимает все значения из нашей формы
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            type: typeRef.current.value,
            photo: User || 'null'
        };
        //проверка - что мы получаем из полей в нашей форме
        // console.log(user);
        const adaRef = db.ref('psycologists');
        adaRef.child(user.name).child('email').set(user.email)
        adaRef.child(user.name).child('type').set(user.type)
        adaRef.child(user.name).child('photo').set(user.photo === '' ? 'null' : user.photo)
        event.currentTarget.reset();
        console.log(`Пользователь   ${user.name}   добавлен в базу`)
    }
    return (
        <div id='aaa' className='container w-50 dark'>
            <form onSubmit={createUser}>
                <div className="mb-4">
                    <label htmlFor="userInputName" className="form-label">Name user</label>
                    <input
                        ref={nameRef}
                        type="text"
                        className="form-control"
                        id="userInputName"
                        aria-describedby="nameHelp"
                        placeholder='Фамилия и Имя пользователя'
                        required
                    />
                    <div id="nameHelp" className="form-text">We'll never share your Name with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userInputEmail" className="form-label">Email address</label>
                    <input
                        ref={emailRef}
                        type="email"
                        className="form-control"
                        id="userInputEmail"
                        aria-describedby="emailHelp"
                        placeholder='Email пользователя'
                        required
                    />
                    <div id="emailHelp" className="form-text">We'll never share your Email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userInputType" className="form-label">Type user</label>
                    <select
                        className="form-select"
                        id="userInputType"
                        ref={typeRef}
                        aria-describedby="typeHelp"
                    >
                        <option>Психолог</option>
                        <option>Психотерапевт</option>
                        <option defaultValue>Психиатр</option>
                    </select>

                    <div id="typeHelp" className="form-text">We'll never share your Type with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userInputPhoto" className="form-label">Photo user</label>
                    <input
                        ref={photoRef}
                        // type="text"
                        type="file"
                        className="form-control"
                        id="userInputPhoto"
                        aria-describedby="photoHelp"
                        placeholder='Ссылка на фото пользователя'
                        onChange={onChangeAvatars}
                    />
                    <div id="photoHelp" className="form-text">We'll never share your Photo with anyone else.
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

export default App


