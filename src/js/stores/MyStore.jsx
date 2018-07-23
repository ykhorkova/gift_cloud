import React from 'react';
import Flux from '@4geeksacademy/react-flux-dash';

class MyStore extends Flux.Store{
    
    constructor(){
        super();
        this.state = {
            accountCreated: false,
<<<<<<< HEAD
            cookie: ""
=======
            gifts:[],
            LoginAccount: false
>>>>>>> 5a5f1d38e2753cec344f518bb091d0ebce1267ee
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
    
    
    getLoginAccount(){
        return this.state.login;
    }

    _setLoginAccount(login){
        console.log('setAccounts on the store',login);
        
        this.setStoreState({
            login: login
        }).emit();
    }
    
    
    // Gift
    
    _setGifts(gifts){
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