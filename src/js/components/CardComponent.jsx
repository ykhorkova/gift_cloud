// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class CardComponent extends React.Component{
    render(){
        return(
            <div className="card-component">
                <img className="card-img-top" src="https://placeimg.com/900/500/animals"></img>
                <div className="card-body">
                    <h5 className="card-title">$65</h5>
                    <div id="button-click">
                        <button type="button" id="button-click" className="btn btn-danger">Get It</button>
                    </div> 
                </div>    
            </div>
                    );
    }
}
        