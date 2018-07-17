// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";


export default class AddGiftCompBtn extends React.Component{
     render(){
        return(<div className="add-gift-comp-btn">
            <div className="add-gift-btn-plus">
                <div className="btn-round">
                    <Link to="/addgift" className="btn-plus-icon"> +
                    </Link>
                </div>
                <div className="add-a-gift-action">
                    <h2 className="add-a-gift"> Add a new gift </h2>
                </div>
            </div>
            
        </div>
        );
   }
}