// JavaScript File
import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import CardComponent from '../components/CardComponent.jsx';
import Events from '../components/Events.jsx';
import FilterComponent from '../components/FilterComponent.jsx';
import PagesCount from '../components/PagesCount.jsx';
import AddGiftCompBtn from '../components/AddGiftCompBtn.jsx';
import MyStore from '../stores/MyStore.jsx';
import MyActions from '../actions/MyActions.jsx';

export default class AccountGiftBody extends Flux.Component{
    constructor(){
        super();
        
        this.state = {
            gifts:[]
        };
        this.bindStore(MyStore, () => {
            // this code gets executed everytime MyStore emits
            console.log('the bind works!');
                        // this.props.history.push('/account');
        });
    }
    
    componentDidMount(){
        MyActions.getGifts();
        const gifts = MyStore.getGifts();
        this.setState({ gifts });
        this.bindStore(MyStore,()=>{
            const gifts = MyStore.getGifts();
            this.setState({ gifts });
        });
        // call the action that fetcchs the gifts
    }
    
    
    render(){
        console.log("render",this.state.gifts);
        const giftsInHtml = this.state.gifts.map((gift,i) => {
                return <CardComponent
                            key={i} 
                            gift_name={gift.gift_name}
                            price={gift.price}
                            date={gift.created_date}
                            store={gift.store_name}
                            id={gift.id}
                            privacy={gift.privacy}
                            gift_details={gift.gift_details}
                            // onSave={(p) => {
                                
                            // }
                                
                            // }
                        />;    
                });     
                        
        return(<div className="gift-body-container">
            <div className="filter-component">
                <FilterComponent className="FilterComponent"/>
            </div>
            <div className="account-gift-body">
                <div className="gift-item">
                    <div className="add-gift-btn-plus">
                        <div className="btn-round">
                            <Link to="/addgift" className="btn-plus-icon"> +
                            </Link>
                        </div>
                        <div className="add-a-gift-action">
                            <h2 className="add-a-gift"> Add a new gift </h2>
                        </div>
                    </div>
                </div>
                {giftsInHtml}
            </div>
        </div>
            );
    }
}
                  
                  
              
                  
                  
                    
                    // <AddGiftCompBtn className="add-gifts-button"/>
                    
                    
                    // <div className="column sidebar-account-view">
                    //     <Events />
                    // </div>
                            // <div className="col-5">
                            //     <PagesCount className="PagesCount" />
                            // </div>
                            
                            
                        // <div className="upcoming-events">
                        // </div>