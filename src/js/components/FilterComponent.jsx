// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class FilterComponent extends React.Component{
    render(){
        return(<div className="filter-component">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light">By Price</button>
                <button type="button" className="btn btn-light">By Priority</button>
            </div>
        </div>
            
                        );
    }
}