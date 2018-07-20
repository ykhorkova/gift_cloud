import Flux from '@4geeksacademy/react-flux-dash';
import MyStore from '../stores/MyStore.jsx';

class UserActions extends Flux.Action{
    
    constructor(){
        super();
        this.host = 'https://phyton-giftcloud-yelic29.c9users.io';
    }
    
    createAccount(incomingAccount){
        fetch('https://phyton-giftcloud-yelic29.c9users.io/profile/', {
                method: 'PUT',
                body: JSON.stringify(incomingAccount),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log('Add an account action!');
                    this.dispatch('MyStore.setAccountCreated',true);
            })
            .catch(error => {
                console.error('Error:', error);
                this.dispatch('MyStore.setAccountCreated',false);
            });
    }
   
    // editAccount(idProfile){
    //     fetch('https://phyton-giftcloud-yelic29.c9users.io/editprofile/'+idProfile, {
    //         method: 'POST'})
    //         .then(res => res.json())
    //         .then(response => {
    //             account = account.forEach((myaccount) => {
    //                 if (myaccount.id == idProfile.id) {
    //                     myaccount.name == idProfile.first_name;
    //                     myaccount.lastname == idProfile.last_name;
    //                     myaccount.birthdate == idProfile.birthdate;
    //                     myaccount.password == idProfile.password;
    //                     myaccount.email == idProfile.email;
    //                 }
    //             });
    //             this.dispatch('MyStore.setAccount',account);
    //         })
    //         .catch(error => console.error('Error:', error));
    // }
    getGifts(){
       fetch('https://phyton-giftcloud-yelic29.c9users.io/gifts/')
           .then((resp) => {
               return resp.json();
           })
           .then((gifts) => {
               // distpatch to the store
               this.dispatch('MyStore.setGifts',gifts);
           })
           .catch((error) => {
               console.log("There was an error ", error);
       });
   }
    
    
    
    
    
    createGift(incomingGift){
        fetch('https://phyton-giftcloud-yelic29.c9users.io/gift/', {
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
    
    // editGift(idGift){
    //     fetch('https://phyton-giftcloud-yelic29.c9users.io/editgift/'+idGift, {
    //         method: 'POST'})
    //         .then(res => res.json())
    //         .then(response => {
    //             giftcloud = giftcloud.forEach((mygift) => {
    //                 if (mygift.id == idGift.id) {
    //                     mygift.store_name == idGift.store_name;
    //                     mygift.title == idGift.title;
    //                     mygift.price == idGift.price;
    //                     mygift.gift_choices == idGift.gift_choices;
    //                     mygift.priority_choices == idGift.priority_choices;
    //                 }
    //             });
    //             this.dispatch('MyStore.setGift',giftcloud);
    //         })
    //         .catch(error => console.error('Error:', error));
    // }
}
    
export default new UserActions();
    