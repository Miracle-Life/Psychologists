import React, {Suspense, lazy} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Analytic from "./component/Analytic/Analytic";
import NavBar from "./component/NavBar/NavBar";

//import DisfavoredContainer from "./component/Disfavorite/DisfavoriteContainer";
//import FavoriteContainer from "./component/Favorite/FavoriteContainer";
//import UsersContainer from "./component/Users/UsersContainer";
//import AddUserContainer from "./component/AddUser/AddUserContainer";
import Login from "./component/Login/Login";
import Preloader from "./component/common/Preloader/Preloader";

const AddUserContainer = lazy(() => import('./component/AddUser/AddUserContainer'));
const FavoriteContainer = lazy(() => import('./component/Favorite/FavoriteContainer'));
const DisfavoredContainer = lazy(() => import('./component/Disfavorite/DisfavoriteContainer'));
const UsersContainer = lazy(() => import('./component/Users/UsersContainer'));


const App = () => {
    return (
        <>
            <NavBar/>
            <div className='container'>
                <Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Route exact path={"/"} component={AddUserContainer}/>
                        <Route path={"/users"} component={UsersContainer}/>
                        <Route path={"/favorite"} component={FavoriteContainer}/>
                        <Route path={"/disfavoured"} component={DisfavoredContainer}/>
                        <Route path={"/analytic"} component={Analytic}/>
                        <Route path={"/login"} component={Login}/>
                        {/*<Route path={"*"} component={PageNotFound}/>*/}
                    </Switch>
                </Suspense>
            </div>
        </>
    )
        ;
}
export default App
