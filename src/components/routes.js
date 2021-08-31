import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from './home'
import Services from './services'
import About from './about'
import Contact from './contact'
import Partners from './partners'
export default function Routes(){
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { Services }  path="/services" />
            <Route component = { About }  path="/about" />
            <Route component = { Contact }  path="/contact" />
            <Route component = { Partners }  path="/partners" />
        </BrowserRouter>
    )
}