import React from "react";import {BrowserRouter, Route, Switch} from 'react-router-dom';import App from "./App";import Users from "./Users";import Favorite from "./Favorite";const Rout = () => {    return (        <BrowserRouter>            <Switch>                <Route exact path="/" component={App}/>                <Route path="/users" component={Users}/>                <Route path="/favorite" component={Favorite}/>            </Switch>        </BrowserRouter>    );}export default Rout