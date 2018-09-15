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
                <div className="find-friends">
                    <div className="container">
                        <h2 className="find-friends-header">Find Friends</h2>
                        <p className="find-friends-p">Search for someone by name, email address, username, or organization.</p>
                        <form>
                            <input className="input ff-input" type="text" name="search" placeholder="Search.." />
                        </form>
                        <p>Not seeing who you’re looking for? 
                            <a href="#" className="invite">Invite them!</a>
                        </p>
                    </div>
                </div>    
                <Footer />
            </div>
        );
   }
}