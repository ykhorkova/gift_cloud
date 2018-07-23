import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import MyActions from '../actions/MyActions.jsx';

export default class EditGiftOptions extends Flux.Component{
    constructor(){
    super();
    
    }
    
    deleteGift(id){
        console.log("id", id);
       MyActions.deleteGift(id);
       this.setState({
          giftDelete: null
       });
    }
    
    componentDidMount(){
        console.log("test2", this.props);
    }
    
    render(){
        return(<div className="edit-gift-options">
            <div className="btn-group dropright">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</button>
                <div className="dropdown-menu">
                    <div className="popover__options">
                        <button className="popover__option strip-btn">
                            <span className="icon"></span> 
                            <span className="label"><i className="fas fa-pencil-alt"></i>Edit</span>
                        </button>
                        <hr className="popover__option--divider"></hr>
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
        </div>
        );
   }
  
}    