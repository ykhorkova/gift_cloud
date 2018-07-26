import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./views/Login.jsx";
import Home from './views/Home.jsx';
import AccountPage from './views/AccountPage.jsx';
//06/30 add view AddAcount
import EditAccount from './views/EditAccount.jsx';

import AddGift from './views/AddGift.jsx';
import FindFriends from './views/FindFriends.jsx';
import SignUp from "./views/SignUp.jsx";
import SignUpWithEmail from "./views/SignUpWithEmail.jsx";
import EditGift from "./views/EditGift.jsx";
import About from "./views/About.jsx";
import Profile from "./views/Profile.jsx";


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
                            <Route exact path="/about" component={About} />
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/signup" component={SignUp} />
                            <Route exact path="/signup/email" component={SignUpWithEmail} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/account" component={AccountPage} />
                            <Route exact path="/editaccount" component={EditAccount} />
                            <Route exact path="/findfriends" component={FindFriends} />
                            <Route exact path="/addgift" component={AddGift} />
                            <Route exact path="/editgift" component={EditGift} />
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
            
        );
    }
}
