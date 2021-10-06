import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Analytic from "./Analytic/Analytic";
import NavBar from "./NavBar/NavBar";

import DisfavoredContainer from "./Disfavorite/DisfavoriteContainer";
import FavoriteContainer from "./Favorite/FavoriteContainer";
import UsersContainer from "./Users/UsersContainer";
import AddUserContainer from "./AddUser/AddUserContainer";
import Login from "./Login/Login";


const App = () => {
    return (
        <Router>
            <NavBar/>
            <div className='container'>
                <Switch>
                    <Route exact path={"/"} component={AddUserContainer}/>
                    <Route path={"/users"} component={UsersContainer}/>
                    <Route path={"/favorite"} component={FavoriteContainer}/>
                    <Route path={"/disfavoured"} component={DisfavoredContainer}/>
                    <Route path={"/analytic"} component={Analytic}/>
                    <Route path={"/login"} component={Login}/>
                    {/*<Route path={"*"} component={PageNotFound}/>*/}
                </Switch>
            </div>
        </Router>
    )
        ;
}
export default App
