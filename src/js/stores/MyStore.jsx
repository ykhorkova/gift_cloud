import React from 'react';
import Flux from '@4geeksacademy/react-flux-dash';

class MyStore extends Flux.Store{
    
    constructor(){
        super();
        this.state = {
            accountCreated: false
        };
    }
    
    // Account
    
    _setAccountCreated(status){
        console.log('setAccounts on the store',status);
        
        this.setStoreState({
            accountCreated: status
        }).emit();
    }
    
    getAccountCreated(){
        return this.state.accountCreated;
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
    
    // Gift
    
    _setGifts(gifts){
       console.log('setGifts on the store',gifts);
       
       this.setStoreState({
           gifts: gifts
       }).emit();
    }
    
    _setGiftCreated(gifts){
       console.log('setGifts on the store',gifts);
       
       this.setStoreState({
           gifts: gifts
       }).emit();
    }
    
    getGifts(){
       return this.state.gifts;
    }
    

    
 }
export default new MyStore();