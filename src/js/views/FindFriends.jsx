import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome.jsx";
import Footer from "../components/Footer.jsx";

export default class FindFriends extends React.Component{
    render(){
        return(
            <div>
                <HeaderHome />
                <div className="conteiner">
                    <div className="row">
                        <div className="col-3 conteinerleft">
                            
                        </div>
                        <div className="col-8 conteinercenter">
                            <h2>Find Friends</h2>
                            <p>Search for someone by name, email address, username, or organization.</p>
                            <form>
                                <input className="input" type="text" name="search" placeholder="Search.." />
                            </form>
                            <div className="">
                                <title>icon-hint</title>
                                <div className="content">
                                    <p>Not seeing who you’re looking for? 
                                        <a href="#">Invite them!</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
   }
}