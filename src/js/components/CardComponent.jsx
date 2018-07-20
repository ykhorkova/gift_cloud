// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import MyActions from "../actions/MyActions.jsx";

export default class CardComponent extends React.Component{
    // {this.props.price}
    // {this.props.gift_name}
    // {this.props.published_date}
    render(){
        return(<div className="card-component">
            <div className="card-columns">
                <div className="card">
                    <div className="card-header">
                        <span className="gift-priority"><i className="fas fa-bookmark"></i></span> 
                        <img className="card-img-top" src="https://placeimg.com/900/500/tech"></img>
                        <p className="price"> 27$</p>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Gift Name</h5>
                        <p className="store-name">STORE NAME</p>
                    </div>    
                    <div className="card-footer row">
                        <div className="column">
                            <p className="date-added">June 2018</p>
                        </div>
                        <div className="column">
                            <button type="button" className="more">...</button>
                        </div>    
                    </div>
                </div>    
            </div>
        </div>
        );
    }
}