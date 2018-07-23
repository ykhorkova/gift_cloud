import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import logo2 from '../../img/logo2.png';
import MyActions from "../actions/MyActions.jsx";
import MyStore from '../stores/MyStore.jsx';
import CardComponent from '../components/CardComponent.jsx';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";


 class AddGiftModal extends Flux.Component{
     constructor(){
        super();
        
        this.state = {
        addAGift: true,    
        createAGift: false,
        urlForm: false,
        gift_name: "",
        link_url: "",
        price: "",
        quantity: "",
        gift_details: "",
        store_name: "",
        privacy: ""
        };   
        
        this.bindStore(MyStore, () => {
           console.log('the bind works!');
            this.setState({});
           // this code gets executed everytime MyStore emits
           
        //   if (this.state.buttonClicked == true){
        //       console.log(this.props);
        //       this.props.history.push('/account');
        //       return;
        //   }
           //
       });
    }
    
    
    switchForms(){
        this.setState({ 
            addAGift: false,
            createAGift: true,
        });
    }
    
    switchUrlForms(){
            this.setState({ 
                addAGift: false,
                urlForm: true,
                // gift_name: data.title
            });
    }
    
    saveChoise(choice){
        console.log(choice);
        this.setState({
        privacy: choice
        });
    }
    
    
    goBack(){
        console.log(this.props);
        this.props.history.push('/account');
    }

    
        // scraper.init(this.state.link_url, function(data){
        //     console.log(data);
        // });

    
    render(){
        if(this.state.buttonClicked === true){
            return (<Redirect to="/account" />);
        }
        
        var firstForm = "";
        if (this.state.addAGift == true){
            firstForm =
                <div className="container first-form-container">
                    <div className="add-a-gift-header">
                        <h2 className="add-a-gift-header-title"> Add a Gift </h2>
                    </div>   
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link url-tab active" data-toggle="tab" href="#home" role="tab" aria-controls="url-tab" aria-selected="true">Copy/Paste URL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link create-gift-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="create-gift-tab" aria-selected="false">Create a Gift</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="url-tab">
                            <div className="url-tab-content">
                                <h3 className="add-a-url">Paste a Link from Anywhere on the Web <span className="required">Required</span></h3>
                                <input className="url-input" placeholder="https://"></input>
                                
                                <div className="privacy-form">
                                    <div className="privacy-title">
                                        <h2 className="input-label">Who Can See this Wish List?<span className="required">Required</span></h2>
                                    </div>
                                    <div className="public-btn-content">
                                        <button className="public-btn" onClick={(e) => this.saveChoise("Public")}><i className="fas fa-globe"></i>Public</button><span className="required"> Anyone online</span>
                                    </div>
                                    <div className="private-btn-content">
                                        <button className="private-btn" onClick={(e) => this.saveChoise("Private")}><i className="fas fa-user-lock"></i>Private</button><span className="required">Only those with a link to wish list</span>
                                    </div>
                                </div>
                               
                                <footer className="buttons-cancel-next">
                                    <button onClick={(e) => this.goBack()} type="button" className="cancel-btn">Cancel</button>
                                    <button id="next-btn" className="next-btn" onClick={(e) => this.switchUrlForms()}>Next</button>
                                </footer>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="create-gift-tab">
                            <div className="add-gift-tab-content">
                                <h3 className="add-gift-name">Give Your Gift a Name<span className="required">Required</span></h3>
                                <input className="gift-name-input" placeholder="Tickets to a Music Festival" onChange={(e) => this.setState({ gift_name: e.target.value})} value={this.state.gift_name}></input>
                                <div className="privacy-form">
                                    <div className="privacy-title">
                                        <h2 className="input-label">Who Can See this Wish List?<span className="required">Required</span></h2>
                                    </div>
                                    <div className="public-btn-content">
                                        <button className="public-btn" onClick={(e) => this.saveChoise("Public")}><i className="fas fa-globe"></i>Public</button><span className="required"> Anyone online</span>
                                    </div>
                                    <div className="private-btn-content">
                                        <button className="private-btn" onClick={(e) => this.saveChoise("Private")}><i className="fas fa-user-lock"></i>Private</button><span className="required">Only those with a link to wish list</span>
                                    </div>
                                </div>
                                <footer className="buttons-cancel-next">
                                    <button onClick={(e) => this.goBack()} type="button" className="cancel-btn">Cancel</button>
                                    <button id="next-btn" className={"next-btn" + this.state.gift_name.length > 3 ? '' : ' disabled'} disabled={this.state.gift_name.length > 3 ? undefined : 'disabled'} onClick={(e) => this.switchForms()}>Next</button>
                                </footer>
                            </div>    
                        </div>
                    </div>
                </div>;
        }
        var createAGiftForm = "";
        if (this.state.createAGift == true){
            createAGiftForm =
                <div className="container add-gift-form" id="add-gift-form">
                    <div className="header-add-gift-form">
                        <h2 className="header-add-gift-title">Please Confirm the Following Details</h2>
                    </div>
                    <div className="row">
                        <form className="column">
                            <label htmlFor="giftNameInput">Gift Name <span className="required">Required</span></label>
                            <input type="text" className="gift-name-input" id="giftNameInput" onChange={(e) => this.setState({ gift_name: e.target.value})} value={this.state.gift_name} placeholder="Tickets to a Music Festival"></input>
                            <label className="price" htmlFor="priceInput">Price <span className="required">Required</span></label>
                            <input type="text" className="price-input" placeholder="USD" id="priceInput" onChange={(e) => this.setState({ price: e.target.value})} value={this.state.price}></input>
                            <label className="qty" htmlFor="qtyInput">Qty <span className="required">Required</span></label>
                            <input type="number" className="qty-input" id="qtyInput" onChange={(e) => this.setState({ quantity: e.target.value})} value={this.state.quantity}></input>
                            <label className="gift-details" htmlFor="giftDetailsInput">Gift Details</label>
                            <input type="text" className="gift-details-input" id="giftDetailsInput" onChange={(e) => this.setState({ gift_details: e.target.value})} value={this.state.gift_details}></input>
                        </form>
                        <div className="content-media column">
                            <div className="content-media__image">
                                <img src={logo2} width="250" height="190"></img>
                                <button className="btn-link content-media__upload-button">Upload a Photo</button>
                            </div>
                        </div>
                    </div>
                    <footer className="buttons-cancel-next">
                        <button onClick={(e) => this.goBack()} type="button" className="cancel-btn">Cancel</button>
                        <button onClick={() => {
                            let createdGift = {
                                gift_name: this.state.gift_name,
                                link_url: this.state.link_url,
                                price: this.state.price,
                                quantity: this.state.quantity,
                                privacy: this.state.privacy,
                                gift_details: this.state.gift_details
                            };
                            
                            this.setState({ buttonClicked: true});
                            MyActions.createGift(createdGift);
                        }
                            }
                        className="save-btn" id="next-btn">Save</button>
                    </footer>
                </div>;
        }    
        
        var showUrlForm = "";
        if (this.state.urlForm == true){
            showUrlForm =
                <div className="container add-gift-form" id="add-gift-form">
                    <div className="header-add-gift-form">
                        <h2 className="header-add-gift-title">Please Confirm the Following Details</h2>
                    </div>
                    <div className="row">
                        <form className="column">
                            <label htmlFor="giftNameInput">Gift Name <span className="required">Required</span></label>
                            <input type="text" className="gift-name-input" id="giftNameInput" placeholder="Tickets to a Music Festival"></input>
                            <label className="price" htmlFor="priceInput">Price <span className="required">Required</span></label>
                            <input type="text" className="price-input" placeholder="USD" id="priceInput"></input>
                            <label className="qty" htmlFor="qtyInput">Qty <span className="required">Required</span></label>
                            <input type="number" className="qty-input" id="qtyInput"></input>
                            <label className="gift-details" htmlFor="giftDetailsInput">Gift Details</label>
                            <input type="text" className="gift-details-input" id="giftDetailsInput"></input>
                        </form>
                        <div className="content-media column">
                            <div className="content-media__image">
                                <img src={logo2} width="250" height="190"></img>
                                <button className="btn-link content-media__upload-button">Upload a Photo</button>
                            </div>
                        </div>
                    </div>
                    <footer className="buttons-cancel-next">
                        <button onClick={(e) => this.goBack()} type="button" className="cancel-btn">Cancel</button>
                        <button id="next-btn" className="next-btn">Save</button>
                    </footer>
                </div>;
        }    
        
        

        return(<div className="add-gift-modal">
            {firstForm}
            {createAGiftForm}
            {showUrlForm}
        </div>
                    );
   }
}

export default withRouter(AddGiftModal);

                            // <label htmlFor="linkInput">Link <span className="optional">Optional</span></label>
                            // <input type="url" className="link-input" id="linkInput" onChange={(e) => this.setState({ link_url: e.target.value})} value={this.state.link_url} placeholder="https://www.tickets.com"></input>