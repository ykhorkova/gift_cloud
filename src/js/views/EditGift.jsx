import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

import logo2 from '../../img/logo2.png';
import Footer from '../components/Footer.jsx';
import HeaderAccount from '../components/HeaderAccount.jsx';
import EditGiftOptions from '../components/EditGiftOptions.jsx';
import PropTypes from 'prop-types';
import CardComponent from '../components/CardComponent.jsx';
import MyStore from '../stores/MyStore.jsx';
import MyActions from '../actions/MyActions.jsx';


export default class EditGift extends Flux.View{
    constructor() {
        super();
        this.state = {
              gift_name: '',
              price: '',
              privacy: '',
              gift_details: '',
              quantity: ''
        };
    }    
    
    componentDidMount(){
        console.log(this.props.match.params.id);
        // if (this.props.match.params.id){
        //   this.setState({
        //       edit: true
        // });
          let gifts = MyStore.getGifts();
          gifts.forEach((item) => {
              if(item.id == this.props.match.params.id){
                  this.setState({
                      gift_name: item.gift_name,
                      price: item.price,
                      gift_details: item.gift_details,
                      privacy: item.privacy,
                      created_date: item.created_date,
                      quantity: item.quantity
                      
                  });
              }
          });
          this.bindStore(MyStore, ()=>{
              let gifts = MyStore.getGifts();
              gifts.forEach((item) => {
                  if(item.id == this.props.match.params.id){
                      this.setState({
                          gift_name: item.gift_name,
                          price: item.price,
                          gift_details: item.gift_details,
                          privacy: item.privacy,
                          created_date: item.created_date,
                          quantity: item.quantity
                          
                      });
                  }
              });    
          });    
  }
    
    // componentDidMount(){
        
    //     console.log(this.props.match.params.id);
    // }
    
    
   render(){
       if(this.state.buttonClicked === true){
            return (<Redirect to="/account" />);
        }
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
                            <input className="gift-title" onChange={(e) => this.setState({ gift_name: e.target.value})} value={this.state.gift_name} />
                            <p className="added-date">Added on <span value={this.props.created_date}></span> </p>
                            <input className="qty-requested" onChange={(e) => this.setState({ quantity: e.target.value})} value={this.state.quantity} /><p>requested</p>
                            <p className="gift-price"><input onChange={(e) => this.setState({ price: e.target.value})} value={this.state.price} /> $ USD</p>
                            <input className="gift-details" onChange={(e) => this.setState({ gift_details: e.target.value})} value={this.state.gift_details} />
                            <select value={this.state.privacy}>
                                <option onChange={(e) => this.setState({ gift_details: e.target.value})} value="Private">Private</option>
                                <option onChange={(e) => this.setState({ gift_details: e.target.value})} value="Public">Public</option>
                            </select>
                        </div>
                    </div>
                    <footer>
                        <button onClick={() => {
                            let updatedGift = {
                                id: this.props.match.params.id,
                                gift_name: this.state.gift_name,
                                price: this.state.price,
                                quantity: this.state.quantity,
                                privacy: this.state.privacy,
                                gift_details: this.state.gift_details
                            };
                            
                            this.setState({ buttonClicked: true});
                            MyActions.editGift(updatedGift);
                        }
                        }
                        
                        
                        className="save-btn" id="next-btn">Save</button>
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


// EditGift.propTypes = {
    
//     gift_name: PropTypes.string,
//     imgIndex: PropTypes.number,
//     price: PropTypes.string,
//     published_date: PropTypes.string,
//     privacy: PropTypes.string,
//     gift_details: PropTypes.string,
//     created_date: PropTypes.string,
//     store_name: PropTypes.string,
//     history: PropTypes.object,
//     quantity: PropTypes.quantity,
//     // img_url: PropTypes.string,
//     id: PropTypes.number
// };


// EditGift.defaultProps = {
//     gift_name: '',
//     price: '',
//     published_date: '',
//     privacy: '',
//     gift_details: '',
//     created_date: '',
//     store_name: '',
//     id: '',
//     quantity: ''
//     // img_url: ''
// };