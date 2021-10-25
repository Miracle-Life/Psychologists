import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authUser.isAuth,
    admin: state.authUser.User.email
})

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        //проверка на авторизацию и показ страницы

        if (!props.isAuth) {
            return <Redirect to={'/signin'}/>
        }
        // только админ
        // if (props.admin !== 'belovdenys@gmail.com') {
        //     return <Redirect to={'/signin'}/>
        // }

        return (<Component {...props}/>)

    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
