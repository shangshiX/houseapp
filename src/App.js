import React, { Component } from 'react'
// import {Button} from "antd-mobile"
import { HashRouter, Switch, Route } from "react-router-dom"
import Nav from "./views/nav/Nav"
import Login from "./views/login/Login"
import Reg from "./views/reg/Reg"
import ForGetPwd from "./views/forgetpwd/ForGetPwd"
import Service from "./views/reg/Service"
import Privacy from "./views/reg/Privacy"
import Area from "./views/area/Area"
import Map from "./views/map/Map"


export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Nav}></Route>
                    <Route exact path="/nav" component={Nav}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/reg" component={Reg}></Route>
                    <Route path="/forgetpwd" component={ForGetPwd}></Route>
                    <Route path="/service" component={Service}></Route>
                    <Route path="/privacy" component={Privacy}></Route>
                    <Route path="/area" component={Area}></Route>
                    <Route path="/map" component={Map}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
