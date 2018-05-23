// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class HomeCollage extends React.Component{
    render(){
        return(<div>
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
                <button type="button" className="btn btn-danger grid__item grid__item--title">Get Started</button>
            </div>
        </div>
            );
    }
}