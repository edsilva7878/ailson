import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from './home/index'
import About from './about/index'
import Services from './services/index'
export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { About }  path="/about" exact />
            <Route component = { Services }  path="/services" exact />
        </BrowserRouter>
    )
}