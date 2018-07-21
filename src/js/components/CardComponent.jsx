// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import MyActions from "../actions/MyActions.jsx";
import logo2 from '../../img/logo2.png';
import PropTypes from 'prop-types';


export default class CardComponent extends React.Component{


    render(){
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
                    </div>    
                    <div className="card-footer row">
                        <div className="column">
                            <p className="date-added">{this.props.published_date}</p>
                            <span className="publicity"><i className="fas fa-globe"></i></span>
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
};


// CardComponent.defaultProps = {
//   onDelete: null,
//   name: '',
//   phone: '',
//   email: '',
//   address: '',
//   image: ''
  
// };
                        