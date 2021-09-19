import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className='container'>
            <nav className="navbar fixed-top between navbar-expand navbar-dark bg-dark">
                <div className="container-fluid ">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <div className="collapse justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                        <nav className="navbar-nav justify-content-center">
                            <NavLink className="nav-link" exact to="/">Add users</NavLink>
                            <NavLink className="nav-link" to="/users">All users</NavLink>
                            <NavLink className="nav-link" to="/favorite">Favorite</NavLink>
                            <NavLink className="nav-link" to="/disfavoured">Disfavored</NavLink>
                            <NavLink className="nav-link" to="/analytic">Analytic</NavLink>
                        </nav>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavBar
