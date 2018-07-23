// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import MyActions from "../actions/MyActions.jsx";
import logo2 from '../../img/logo2.png';
import PropTypes from 'prop-types';
import MyStore from '../stores/MyStore.jsx';



export default class CardComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            // initialize your state
        };
    }


    render(){
        var publicPrivacy = "";
        if (this.props.privacy == "Public"){
            publicPrivacy = <div><i className="fas fa-globe"></i></div>;
        } else{
            publicPrivacy = <div><i className="fas fa-user-lock"></i></div>;
        }  
        return(<div className="card-component">
            <div className="card-columns">
                <div className="card">
                    <div className="card-header">
                        <img className="card-img-top" src={logo2}></img>
                        <p className="price"> {this.props.price}</p>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.gift_name}</h5>
                        <p className="store-name">STORE NAME</p>
                        <p className="gift-details">{this.props.gift_details}</p>
                    </div>    
                    <div className="card-footer row">
                        <div className="column">
                            <p className="date-added">{this.props.created_date}</p>
                            <span className="publicity">{publicPrivacy}</span>
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
                        // <span className="gift-priority"><i className="fas fa-bookmark"></i></span> 
                        
CardComponent.propTypes = {
    
    gift_name: PropTypes.string,
    price: PropTypes.string,
    published_date: PropTypes.string,
    privacy: PropTypes.string,
    gift_details: PropTypes.gift_details,
    created_date: PropTypes.created_date
};


// CardComponent.defaultProps = {
//   onDelete: null,
//   name: '',
//   phone: '',
//   email: '',
//   address: '',
//   image: ''
  
// };
                        