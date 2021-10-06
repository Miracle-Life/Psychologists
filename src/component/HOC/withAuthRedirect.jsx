import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authUser.isAuth
})

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        //проверка на авторизацию и показ страницы
        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (<Component {...props}/>)

    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
