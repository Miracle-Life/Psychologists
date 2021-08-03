import React, {useState} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from "./App";
import Users from "./Users";
import Favorite from "./Favorite";
import Nav from "./Nav";
import Disfavoured from "./Disfavoured";
import Analytic from "./Analytic";

const Rout = () => {
    // const [user] = useState('Users Denis');
    // const WrappedUsers=(props)=>{
    //     return (<Favorite {...props} user={user} />);
    // }
    return (
        <BrowserRouter>
            <Nav/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/users" component={Users}/>
                <Route path="/favorite" component={Favorite}/>
                <Route path="/disfavoured" component={Disfavoured}/>
                <Route path="/analytic" component={Analytic}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Rout
