// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import CardComponent from '../components/CardComponent.jsx';
import Events from '../components/Events.jsx';

export default class AccountGiftBody extends React.Component{
    render(){
        return(<div className="account-gift-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <CardComponent />
                    </div>
                    <div className="col-4">
                        <div className="upcoming-events">
                            <Events />    
                        </div>
                        <span className="calendar">Calendar</span>
                    </div>
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