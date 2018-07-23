import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import logo2 from '../../img/logo2.png';
import Footer from '../components/Footer.jsx';
import HeaderAccount from '../components/HeaderAccount.jsx';
import EditGiftOptions from '../components/EditGiftOptions.jsx';


export default class EditGift extends React.Component{
   render(){
        return(<div>
            <HeaderAccount />
            <div className="edit-gift">
                <div className="all-gift-details container">
                    <div className="row">
                        <div className="gift-image column">
                            <img className="card-img-top" src={logo2}></img>
                            <p className="change-image">Change Image</p>
                        </div>
                        <div className="gift-details column">
                            <h3 className="gift-title">Title</h3>
                            <p className="added-date">Added on June 2018</p>
                            <p className="qty-requested"><span>1</span> requested</p>
                            <p className="gift-price"><span>$23</span> USD</p>
                            <p className="gift-details">Some details about gift</p>
                        </div>
                    </div>
                    <footer>
                        <div className="btn-group dropright">
                            <button type="button" className="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</button>
                            <div className="dropdown-menu">
                                <div className="popover__options">
                                    <button className="popover__option strip-btn">
                                        <span className="icon"></span>
                                        <span className="label"><i className="fas fa-share-square"></i>Share Gift</span>
                                    </button>
                                    <hr className="popover__option--divider"></hr>
                                    <button className="popover__option strip-btn">
                                        <span className="icon"></span>
                                        <span className="label"><i className="fas fa-trash-alt"></i>Delete Item</span>
                                    </button>
                                </div>
                            </div>
                        </div>    
                    </footer>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}