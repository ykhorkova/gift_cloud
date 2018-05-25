// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import CardComponent from '../components/CardComponent.jsx';

export default class AccountGiftPage extends React.Component{
    render(){
        return(<div className="gift-cards">
            <div className="card-columns">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
            <div className="sidecolumn">
                <div className="upcoming-events">
                </div>
                <div className="calendar">
                </div>
            </div>
        </div>
            );
    }
}
           
    

            // <div className="card-columns">
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/500/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div> 
            //         </div>    
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/600/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>   
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/300/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>   
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/400/animals"></img>
            //         <div className="card-body">    
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>   
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/300/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>   
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/400/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>   
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/900/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>   
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/800/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>   
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/600/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>  
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/600/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>  
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="https://placeimg.com/900/400/animals"></img>
            //         <div className="card-body">
            //             <h5 className="card-title">$65</h5>
            //             <div id="button-click">
            //                 <button type="button" id="button-click" className="btn btn-danger">Get It</button>
            //             </div>
            //         </div>  
            //     </div>