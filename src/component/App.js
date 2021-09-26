import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddUser from "./AddUser/AddUser";
import Analytic from "./Analytic/Analytic";
import NavBar from "./NavBar/NavBar";

import DisfavoredContainer from "./Disfavorite/DisfavoriteContainer";
import FavoriteContainer from "./Favorite/FavoriteContainer";
import UsersContainer from "./Users/UsersContainer";


const App = () => {
    return (
        <Router>
            <NavBar/>
            <div className='container'>
                <Switch>
                    <Route exact path={"/"} component={AddUser}/>
                    <Route path={"/users"} component={UsersContainer}/>
                    <Route path={"/favorite"} component={FavoriteContainer}/>
                    <Route path={"/disfavoured"} component={DisfavoredContainer}/>
                    <Route path={"/analytic"} component={Analytic}/>
                    {/*<Route path={"*"} component={PageNotFound}/>*/}
                </Switch>
            </div>
        </Router>
    )
        ;
}
export default App
