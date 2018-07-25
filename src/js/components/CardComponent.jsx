// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import MyActions from "../actions/MyActions.jsx";
import logo2 from '../../img/logo2.png';
import PropTypes from 'prop-types';
import MyStore from '../stores/MyStore.jsx';
import EditGiftOptions from '../components/EditGiftOptions.jsx';


export default class CardComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            // initialize your state
        };
    }


    render() {
        var giftPrivacy = "";
        console.log("privacy", this.props);
        if (this.props.privacy == "Public") {
            giftPrivacy = <div><i className="fas fa-globe"></i></div>;
        }
        else {
            giftPrivacy = <div><i className="fas fa-user-lock"></i></div>;
        }
        console.log("test", this.props);
        return (
            <div className="gift-item">
                <div className="card-component">
                    <div className="card">
                        <div className="card-header">
                            <img className="card-img-top" src={logo2}></img>
                            <p className="price"> {this.props.price} $</p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.gift_name}</h5>
                            <p className="store-name">{this.props.store_name}</p>
                            <p className="gift-details">{this.props.gift_details}</p>
                        </div>    
                        <div className="card-footer">
                            <span className="publicity">{giftPrivacy}</span>
                            <p className="date-added">June 2018</p>
                            <span className="edit-gift-opt">
                                <EditGiftOptions id={this.props.id}/>
                            </span>    
                        </div>
                    </div>    
                </div>    
            </div>
        );
    }
}
// <span className="gift-priority"><i className="fas fa-bookmark"></i></span> 

CardComponent.propTypes = {
    
    gift_name: PropTypes.string,
    price: PropTypes.string,
    published_date: PropTypes.string,
    privacy: PropTypes.string,
    gift_details: PropTypes.string,
    created_date: PropTypes.string,
    store_name: PropTypes.string,
    history: PropTypes.object,
    id: PropTypes.number
};


CardComponent.defaultProps = {
    gift_name: '',
    price: '',
    published_date: '',
    privacy: '',
    gift_details: '',
    created_date: '',
    store_name: ''

};