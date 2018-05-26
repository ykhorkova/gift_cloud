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
                <div className="conteiner-fuid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Regular link</a>
                                <a className="dropdown-item active" href="#">Active link</a>
                                <a className="dropdown-item" href="#">Another link</a>
                            </div>
                        </div>
                        <div className="col-md-6">B</div>
                    </div>
                </div>
                <Footer />
            </div>
        );
   }
}