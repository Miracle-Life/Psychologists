import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../store/authReducer";


function NavBar({email, login, photo, getAuthUserData, logout}) {

    useEffect(async () => {
        await getAuthUserData()
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
                                    <NavLink to={'/admin_page'} style={{color: 'white', textDecoration: 'none'}}
                                             className="form-label-outline">{LoginOrEmail}</NavLink>
                                    {/*<label style={{color: 'white'}} className="form-label">{`${LoginOrEmail}`}</label>*/}
                                    <button onClick={logout} className="btn mx-2 btn-warning">Logout</button>
                                </>

                                :
                                <div className='flex'>
                                    <NavLink to={'/admin_page'} style={{color: 'white', textDecoration: 'none'}}
                                             className="form-label-outline">{LoginOrEmail}</NavLink>
                                    {/*<label style={{color: 'white'}} className="form-label">{LoginOrEmail}</label>*/}
                                    <img src={photo} className="mx-2" style={{width: '3rem', borderRadius: '50%'}}
                                         alt=""/>
                                    <button onClick={logout} className="btn mx-2 btn-warning">Logout</button>
                                </div>
                            }
                        </div>
                        :
                        <div className="d-flex">
                            <NavLink to={'/signin'} className="d-flex btn btn-outline-success mx-2">Sign In</NavLink>
                            <NavLink to={'/signup'} className="d-flex btn btn-outline-success mx-2">Sign Up</NavLink>
                        </div>}
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
    email: state.authUser.User.email,
    login: state.authUser.User.displayName,
    photo: state.authUser.User.photoURL

})
export default connect(mapStateToProps, {getAuthUserData, logout})(NavBar)


