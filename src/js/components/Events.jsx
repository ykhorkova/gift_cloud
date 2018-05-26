import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File
export default class Events extends React.Component{
    render(){
        return(<div className="events">
            <div className="row">
                <div className="col-3">
                    <img id="event-person-icon" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060"></img>
                </div>
                <div className="col-9">
                    <h2 className="name-of-person"> Dexter Morgan </h2>
                    <p className="event-name"> Birthday, 45 years! </p>
                    <span className="date-of-event"> June 12, 2018 </span>
                </div>
            </div>
        </div>
            
            
                    );
    }
}
