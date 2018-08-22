// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link, withRouter } from "react-router-dom";
import MyActions from "../actions/MyActions.jsx";
import logo2 from '../../img/logo2.png';
import PropTypes from 'prop-types';
import MyStore from '../stores/MyStore.jsx';
import EditGiftOptions from '../components/EditGiftOptions.jsx';

let IMG = [
                    // 'https://images-na.ssl-images-amazon.com/images/I/51BB4lpUpwL._SL500_AC_SS350_.jpg',
                    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Zusammengelegte_Handt%C3%BCcher.jpg/1200px-Zusammengelegte_Handt%C3%BCcher.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/519-g8jMtlL._SL1001_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/71sm7sUVNrL._SL1200_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/51iOv8SfhVL._SL1000_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/4179pwpkpWL.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61rP4icFBhL._SL1350_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41vUjtmXxvL.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/71JMq%2BfNzhL._SL1500_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/81s7B%2BAls-L._AC_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61pnj4Go-4L._SL1001_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61GIwLWpzRL._SL1500_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/51dOi4Mr6wL.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/51fblBAcvEL._SL1001_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61v-eARuBoL._SL1500_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61S%2BzPQ-2%2BL._SL1000_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41uqdfJxVlL.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41oXAFR%2BwHL.jpg'
                ];

let IMGS = [];
const getRand = (ind=null)=> (ind) ? Math.floor(Math.random() * IMG.length) + 1 : ind;

for(let i =0; i < IMG.length; i++){
    IMGS.push(IMG[getRand()]);
}
    



class CardComponent extends Flux.Component {
    constructor() {
        super();
        this.state = {
            
            getRandomProductImage: (index=null) => {
                
                let images = [
                    // 'https://images-na.ssl-images-amazon.com/images/I/51BB4lpUpwL._SL500_AC_SS350_.jpg',
                    // 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Zusammengelegte_Handt%C3%BCcher.jpg/1200px-Zusammengelegte_Handt%C3%BCcher.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/519-g8jMtlL._SL1001_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/71sm7sUVNrL._SL1200_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/51iOv8SfhVL._SL1000_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/4179pwpkpWL.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61rP4icFBhL._SL1350_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41vUjtmXxvL.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/71JMq%2BfNzhL._SL1500_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/81s7B%2BAls-L._AC_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61pnj4Go-4L._SL1001_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61GIwLWpzRL._SL1500_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/51dOi4Mr6wL.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/51fblBAcvEL._SL1001_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61v-eARuBoL._SL1500_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/61S%2BzPQ-2%2BL._SL1000_.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41uqdfJxVlL.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/41oXAFR%2BwHL.jpg'
                ];
                
                if(index !== null) index = Math.floor(Math.random() * images.length) + 1;
                return images[index-1];
                //return images[index-1];
            }
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
                            <div 
                                style={{backgroundImage:"url("+IMG[this.props.imgIndex]+")"}}
                                className="card-img-top">  </div>
                            <p className="price"> {this.props.price} $</p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.gift_name}</h5>
                            <p className="store-name">{this.props.store_name}</p>
                            <p className="gift-details">{this.props.gift_details}</p>
                        </div>    
                        <div className="card-footer">
                            <span className="publicity">{giftPrivacy}</span>
                            <p className="date-added">{this.props.created_date}</p>
                            <span className="edit-gift-opt">
                                <EditGiftOptions onEdit={() => this.props.history.push('editgift/'+ this.props.id)}/>
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
    imgIndex: PropTypes.number,
    price: PropTypes.string,
    published_date: PropTypes.string,
    privacy: PropTypes.string,
    gift_details: PropTypes.string,
    created_date: PropTypes.string,
    store_name: PropTypes.string,
    history: PropTypes.object,
    // img_url: PropTypes.string,
    id: PropTypes.number
};


CardComponent.defaultProps = {
    gift_name: '',
    price: '',
    published_date: '',
    privacy: '',
    gift_details: '',
    created_date: '',
    store_name: '',
    id: ''
    // img_url: ''
};
export default  withRouter(CardComponent);