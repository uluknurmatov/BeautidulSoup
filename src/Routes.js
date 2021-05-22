import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import AddMasters from "./components/AddMasters/AddMasters";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import MasterDetails from "./components/MasterDetails/MasterDetails";
import Use from "./components/Use/Use";
import MasterContextProvider from "./contexts/MasterContext";

const Routes = () => {
    return (
        <MasterContextProvider>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/add" component={AddMasters} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/use" component={Use} />
                    <Route exact path="/about" component={AboutUs} />
                    <Route
                        exact
                        path="/details/:id"
                        component={MasterDetails}
                    />
                </Switch>
                <Footer />
            </BrowserRouter>
        </MasterContextProvider>
    );
};

export default Routes;
