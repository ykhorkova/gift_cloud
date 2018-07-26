import React from 'react';
import Flux from '@4geeksacademy/react-flux-dash';

class MyStore extends Flux.Store{
    
    constructor(){
        super();
        const token = localStorage.getItem("token");
        this.state = {
            accountCreated: false,
            gifts:[],
            LoginAccount: false,
            login:{
                token:token
            }
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
            login: login,
        }).emit();
        localStorage.setItem("token", login.token);
    }
    
    getToken(){
        console.log("STORE:getToken");
        return this.state.login.token;
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