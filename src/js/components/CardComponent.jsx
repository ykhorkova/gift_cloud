// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import MyActions from "../actions/MyActions.jsx";

export default class CardComponent extends React.Component{
    // constructor(){
    //     super();
        
    //     this.state = {
    //     gift: []
    //     };    
    // }
    
    // render(){
    //     const giftInHtml = this.state.gift.map((gift, i) => {
    //         key={i} 
    //         title={contact.gift_name}
    //         price={contact.gift_name}
    //     quantity: "",
    //     gift_details: "",
    //     store_name: "",
    //         id={contact.id}
    //         onDelete={(p) => {
    //             this.setState({
    //                 showModal: true,
    //                 contactDelete: contact
    //             })}
    //         )};    
        return(
        <div className="card-component">
            <div className="card-columns">
                <div className="card">
                    <div className="card-header">
                        <span className="gift-priority"><i className="fas fa-bookmark"></i></span> 
                        <img className="card-img-top" src="https://placeimg.com/900/500/tech"></img>
                        <p className="price"> {this.props.price}</p>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.gift_name}</h5>
                        <p className="store-name">STORE NAME</p>
                    </div>    
                    <div className="card-footer row">
                        <div className="column">
                            <p className="date-added">{this.props.published_date}</p>
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