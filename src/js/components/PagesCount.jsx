// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class PagesCount extends React.Component{
    render(){
        return(<div className="pages-component"> 
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <button type="button" className="btn btn-light">1</button>
                    <button type="button" className="btn btn-light">2</button>
                    <button type="button" className="btn btn-light">3</button>
                    <button type="button" className="btn btn-light">4</button>
                </div>
                <div className="btn-group mr-2" role="group" aria-label="Second group">
                    <button type="button" className="btn btn-light">.</button>
                    <button type="button" className="btn btn-light">.</button>
                    <button type="button" className="btn btn-light">.</button>
                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" className="btn btn-light">8</button>
                </div>
            </div>
        </div>
            
                        );
    }
}