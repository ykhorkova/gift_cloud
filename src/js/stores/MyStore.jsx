import React from 'react';
import Flux from '@4geeksacademy/react-flux-dash';

class MyStore extends Flux.Store{
    
    constructor(){
        super();
        this.state = {
            accountCreated: false
        };
    }
    
    _setAccountCreated(status){
        console.log('setAccounts on the store',status);
        
        this.setStoreState({
            accountCreated: status
        }).emit();
    }
    
    getAccountCreated(){
        return this.state.accountCreated;
    }

    
    _setGifts(gifts){
       console.log('setGifts on the store',gifts);
       
       this.setStoreState({
           gifts: gifts
       }).emit();
    }
   
    getGifts(){
       return this.state.gifts;
    }
    

    _setAccounts(accounts){
        console.log('setAccounts on the store',accounts);
        
        this.setStoreState({
            accounts: accounts
        }).emit();
    }
    
    getAccounts(){
        return this.state.accounts;
    }
    
 }
export default new MyStore();