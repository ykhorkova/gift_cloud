import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link, withRouter } from "react-router-dom";
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
    
    editGift(idGift){
        MyActions.editGift(idGift);
    }
    
    

    componentDidMount(){
        MyActions.getGifts();
        // const gifts = MyStore.getGifts();
        // if (this.props.match.params.user_id){
        //     this.setState({
        //         edit: true
        //     });
        // }
        // gifts.forEach((item) => {
        //     if(item.id == this.props.match.params.user_id){
        //         this.setState({
        //             full_name: item.full_name,
        //             phone: item.phone,
        //             email: item.email,
        //             address: item.address,
        //             id: item.id
        //         });
        //     }
        // });
    }
    
    render(){
        // if(this.state.buttonClicked === true){
        //     return (<Redirect to="/editgift" />);
        // }
        return(<div className="edit-gift-options">
            <div className="btn-group ">
                <button type="button" className="btn btn-secondary" data-toggle="dropdown">
                    <i className="fas fa-ellipsis-h"></i>
                </button>
                <div className="dropdown-menu">
                    <div className="popover__options">
                        <button onClick={(e) => this.editGift(this.props.id)} className="popover__option strip-btn">
                            <span className="icon"></span> 
                            <span className="label"><i className="fas fa-pencil-alt"></i>Edit</span>
                        </button>
                        <hr className="popover__option--divider"></hr>
                        <button className="popover__option strip-btn">
                            <span className="icon"></span>
                            <span className="label"><i className="fas fa-share-square"></i>Share Gift</span>
                        </button>
                        <hr className="popover__option--divider"></hr>
                        <button onClick={(e) => this.deleteGift(this.props.id)} className="popover__option strip-btn">
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