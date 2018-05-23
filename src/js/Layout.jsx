import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import GiftComponents from "./GiftComponents.jsx";
import HomeComponent from "./HomeComponent.jsx";


=======

import Home from './views/Home.jsx';
import AccountPage from './views/AccountPage.jsx';
>>>>>>> 29b0860d64d6ae477506d477a51e9cdf56f2d0cb

export default class Layout extends Flux.View {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path="/index.html" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
<<<<<<< HEAD
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/homeComponent" component={HomeComponent} />
                            <Route exact path="/giftcomponents" component={GiftComponents} />
=======
                            <Route exact path="/account" component={AccountPage} />
>>>>>>> 29b0860d64d6ae477506d477a51e9cdf56f2d0cb
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
