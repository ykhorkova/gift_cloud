import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class EditGiftOptions extends React.Component{
    render(){
        return(<div className="edit-gift-options">
            <div className="popover__options">
                <button className="popover__option strip-btn">
                    <span className="icon"></span> 
                    <span className="label">Move to Wish List</span>
                </button>
                <hr className="popover__option--divider"></hr>
                <button className="popover__option strip-btn">
                    <span className="icon"></span> 
                    <span className="label">Move to New Wish List</span>
                </button>
                <hr className="popover__option--divider"></hr>
                <button className="popover__option strip-btn">
                    <span className="icon"></span>
                    <span className="label">Share Gift</span>
                </button>
                <hr className="popover__option--divider"></hr>
                <button className="popover__option strip-btn">
                    <span className="icon"></span>
                    <span className="label">Delete Item</span>
                </button>
            </div>
        </div>
        );
   }
  
}    