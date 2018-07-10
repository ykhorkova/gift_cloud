import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/Login.jsx";
import Home from './views/Home.jsx';
import AccountPage from './views/AccountPage.jsx';
//06/30 add view AddAcount
import AddAccount from './views/AddAccount.jsx';

import AddGift from './views/AddGift.jsx';
import FindFriends from './views/FindFriends.jsx';
import SignUp from "./views/SignUp.jsx";
import SignUpWithEmail from "./views/SignUpWithEmail.jsx";


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
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/signup/email" component={SignUpWithEmail} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/account" component={AccountPage} />
                            <Route exact path="/addaccount" component={AddAccount} />
                            <Route exact path="/findfriends" component={FindFriends} />
                            <Route exact path="/addgift" component={AddGift} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
            
        );
    }
}
