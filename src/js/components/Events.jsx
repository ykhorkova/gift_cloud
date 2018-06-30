import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File
export default class Events extends React.Component{
    render(){
        return(<div className="events">
            <div className="row">
                <div className="col">
                    <img id="event-person-icon" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1480481060"></img>
                </div>
                <div className="col-6">
                    <h2 className="name-of-person"> Dexter Morgan </h2>
                    <p className="event-name"> Birthday, 45 years! </p>
                </div>
                <div className="col">
                    <span className="date-of-event"> June 12, 2018 </span>
                </div>
            </div>
            <div className="row"> 
                <div className="col">
                    <img id="event-person-icon" src="http://cdn.shopify.com/s/files/1/1061/1924/products/Face_With_Rolling_Eyes_Emoji_grande.png?v=1481523400"></img>
                </div>
                <div className="col-6">
                    <h2 className="name-of-person"> Paul Smith </h2>
                    <p className="event-name"> Birthday, 25 years! </p>
                </div>
                <div className="col">
                    <span className="date-of-event"> June 15, 2018 </span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img id="event-person-icon" src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/unamused-face.png"></img>
                </div>
                <div className="col-6">
                    <h2 className="name-of-person"> Debra Morgan </h2>
                    <p className="event-name"> Birthday, 37 years! </p>
                </div>
                <div className="col">
                    <span className="date-of-event"> June 17, 2018 </span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img id="event-person-icon" src="https://i.pinimg.com/originals/2f/ab/1b/2fab1be7f595a58815389c0ff90ca1fb.png"></img>
                </div>
                <div className="col-6">
                    <h2 className="name-of-person"> Megan Fox </h2>
                    <p className="event-name"> Birthday, 21 years! </p>
                </div>
                <div className="col">
                    <span className="date-of-event"> June 29, 2018 </span>
                </div>
            </div>
        </div>
            
            
                    );
    }
}
