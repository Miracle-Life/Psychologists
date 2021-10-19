import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../store/authReducer";


function NavBar({email, login, photo, getAuthUserData, logout}) {

    useEffect(() => {
        getAuthUserData()
    }, [])

    const LoginOrEmail = login ? login : email

    return (
        <div className='container'>
            <nav className="navbar fixed-top between navbar-expand navbar-dark bg-dark">
                <div className="container-fluid ">
                    <NavLink className="navbar-brand" to="/">Psychologists</NavLink>
                    <div className="collapse justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                        <nav className="navbar-nav justify-content-center">
                            <NavLink className="nav-link" exact to="/">Add users</NavLink>
                            <NavLink className="nav-link" to="/users">All users</NavLink>
                            <NavLink className="nav-link" to="/favorite">Favorite</NavLink>
                            <NavLink className="nav-link" to="/disfavoured">Disfavored</NavLink>
                            <NavLink className="nav-link" to="/analytic">Analytic</NavLink>
                        </nav>

                    </div>
                    {LoginOrEmail ?
                        <div>
                            {photo === null ?
                                <>
                                    <label style={{color: 'white'}} className="form-label">{`${LoginOrEmail}`}</label>
                                    <button onClick={logout} className="btn mx-2 btn-warning">Logout</button>
                                </>

                                :
                                <>
                                    <label style={{color: 'white'}}
                                           className="form-label">{LoginOrEmail}</label>
                                    <img src={photo} className="mx-2" style={{width: '3rem', borderRadius: '50%'}}
                                         alt=""/>
                                    <button onClick={logout} className="btn mx-2 btn-warning">Logout</button>
                                </>
                            }
                        </div>
                        :
                        <NavLink to={'/login'} className="d-flex btn btn-outline-success">Login</NavLink>}
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
    email: state.authUser.email,
    login: state.authUser.login,
    photo: state.authUser.photo

})
export default connect(mapStateToProps, {getAuthUserData, logout})(NavBar)


