// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import CardComponent from '../components/CardComponent.jsx';
import Events from '../components/Events.jsx';
import FilterComponent from '../components/FilterComponent.jsx';
import PagesCount from '../components/PagesCount.jsx';
import Calendar from '../components/Calendar.jsx';

export default class AccountGiftBody extends React.Component{
    render(){
        return(<div className="account-gift-body">
            <div className="container-fluid">
                <div className="row body-row">
                    <div className="col-8">
                        <div className="row smaller-row">
                            <div className="col-7">
                                <FilterComponent className="FilterComponent"/>
                            </div>
                            <div className="col-5">
                                <PagesCount className="PagesCount" />
                            </div>
                        </div>
                        <CardComponent />
                    </div>
                    <div className="col-4 sidebar-account-view">
                        <Events />
                    </div>
                </div>
            </div>
        </div>
            );
    }
}
                        // <div className="upcoming-events">
                        // </div>