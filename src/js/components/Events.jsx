import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
// JavaScript File
export default class Events extends React.Component{
    render(){
        return(<div className="events">
            <div className="event-calendar">
                <p className="upcoming-events-title">Upcoming Events</p>
                <div className="spacer"></div>
                <div className="event-list">
                    <a className="event">
                        <div className="event-container">
                            <span className="date-container">
                                <span className="date">08 
                                    <span className="month">JUL</span>
                                </span>
                            </span>
                            <span className="detail-container">
                                <span className="title">John Smith</span>
                                <span className="description">27th Birthday!</span>
                            </span>
                        </div>
                    </a>
                </div>
                
                <div className="spacer"></div>
                <div className="event-list">
                    <a className="event">
                        <div className="event-container">
                            <span className="date-container">
                                <span className="date">11 
                                    <span className="month">AUG</span>
                                </span>
                            </span>
                            <span className="detail-container">
                                <span className="title">Anna Simons</span>
                                <span className="description">21st Birthday!</span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
            
            
                    );
    }
}
