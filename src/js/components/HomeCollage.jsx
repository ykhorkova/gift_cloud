// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class HomeCollage extends React.Component{
    render(){
        return(<div className="home-collage">
            <div className="grid">
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <div className="grid__item"></div>
                <Link className="btn btn-danger grid__item grid__item--title" to='/login'>Get Started</Link>
            </div>
        </div>
            );
    }
}
