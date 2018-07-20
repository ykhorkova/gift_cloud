import Flux from '@4geeksacademy/react-flux-dash';
import MyStore from '../stores/MyStore.jsx';

class UserActions extends Flux.Action{
    
    constructor(){
        super();
        this.host = 'https://phyton-giftcloud-yelic29.c9users.io';
    }
    
    createAccount(incomingAccount){
        fetch(this.host+'/profile/', {
                method: 'PUT',
                body: JSON.stringify(incomingAccount),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log('Add an account action!');
                    // let account = MyStore.getAccounts();
                    // account.push(response);
                    this.dispatch('MyStore.setAccountCreated',true);
                // return true;
            })
            .catch(error => {
                console.error('Error:', error);
                this.dispatch('MyStore.setAccountCreated',false);
            });
    }
   
    editAccount(idProfile){
        let accounts = MyStore.getAccounts();
        
        fetch(this.host+'/editprofile/'+idProfile, {
            method: 'POST'})
            .then(res => res.json())
            .then(response => {
                accounts = accounts.forEach((myaccount) => {
                    if (myaccount.id == idProfile.id) {
                        myaccount.name == idProfile.first_name;
                        myaccount.lastname == idProfile.last_name;
                        myaccount.birthdate == idProfile.birthdate;
                        myaccount.password == idProfile.password;
                        myaccount.email == idProfile.email;
                    }
                });
                this.dispatch('MyStore.setAccount',accounts);
            })
            .catch(error => console.error('Error:', error));
    }
    
    createGift(incomingGift){
        fetch(this.host+'/gift/', {
                method: 'PUT',
                body: JSON.stringify(incomingGift),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log('Add an gift action!');
                    this.dispatch('MyStore.setGiftCreated',true);
            })
            .catch(error => {
                console.error('Error:', error);
                this.dispatch('MyStore.setGiftCreated',false);
            });
    }
    
    editGift(idGift){
        let gifts = MyStore.getGifts();
        
        fetch(this.host+'/editgift/'+idGift, {
            method: 'POST'})
            .then(res => res.json())
            .then(response => {
                gifts = gifts.forEach((mygift) => {
                    if (mygift.id == idGift.id) {
                        mygift.store_name == idGift.store_name;
                        mygift.title == idGift.title;
                        mygift.price == idGift.price;
                        mygift.gift_choices == idGift.gift_choices;
                        mygift.priority_choices == idGift.priority_choices;
                    }
                });
                this.dispatch('MyStore.setGift',gifts);
            })
            .catch(error => console.error('Error:', error));
    }
}
    
export default new UserActions();
    