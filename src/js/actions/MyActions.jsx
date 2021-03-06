import Flux from '@4geeksacademy/react-flux-dash';
import MyStore from '../stores/MyStore.jsx';

class UserActions extends Flux.Action{
    
    constructor(){
        super();
        this.host = 'https://phyton-giftcloud-yelic29.c9users.io/';
        this.token = '';
        // this.giftUrl = "https://api.urlmeta.org/?url=";
    
        // this.userId = '';

    }
    
    // Account Actions
    
    createAccount(incomingAccount){
        fetch(this.host+'profile/', {
                method: 'PUT',
                body: JSON.stringify(incomingAccount),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log('Add an account action!');
                    this.token = 'token '+response.token;
                    this.userId = response.user_id;
                    this.dispatch('MyStore.setAccountCreated',true);
            })
            .catch(error => {
                console.error('Error:', error);
                this.dispatch('MyStore.setAccountCreated',false);
            });
    }
   
   
    loginAccount(loggedInAccount){
        fetch(this.host+'login/', {
                method: 'POST',
                body: JSON.stringify(loggedInAccount),
                credentials: 'same-origin',
                headers:{
                    // 'Authorization': 'Token afe2c0fbcd1955db8d62708dcef1b10e2c00bd9b',
                    'Content-Type': 'application/json'
                }

            }).then(res => {
                console.log("LOGIN",res);
                if (res.status != 200){
                    alert("WRONG PASSWORD OR USERNAME");
                    return;
                }
                return res.json();
                
            })
            .then(response => {
                // this.token = 'token '+response.token;
                console.log('Add an account action!');
                    this.dispatch('MyStore.setLoginAccount', response);
            })
            .catch(error => {
                console.error('Error:', error);
                this.dispatch('MyStore.setLoginAccount',false);
            });
    }
    

    editAccount(idProfile){
        let accounts = MyStore.getAccounts();
        
        fetch(this.host+'editprofile/'+idProfile, {
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

//   Gift Actions 

    getGifts(){
        console.log("GET-GIFTS", this.token);
        // console.log("GET-GIFTS2", MyStore.getToken());
       fetch(this.host+'gift/', {
                headers:{
                    // 'Authorization': this.token,
                    'Authorization': "Token " + MyStore.getToken(),
                    'Content-Type': 'application/json', 
                }
            }
       )
           .then((resp) => {
               if (resp.status != 200){
                console.error("GIFT", "you need to login");
               }
                else {
                    return resp.json();
                }
           })
           .then((badFormatedGifts) => {
               // distpatch to the store
               const wellFormatedGifts = badFormatedGifts.map((gift) => {
                   //console.log(gift.created_date);
                   
                   return gift;
               });
               this.dispatch('MyStore.setGifts',wellFormatedGifts);
           })
           .catch((error) => {
               console.log("There was an error ", error);
       });
   }
    

    createGift(incomingGift){
        fetch(this.host+'gift/', {
                method: 'PUT',
                body: JSON.stringify(incomingGift),
                headers:{
                    'Authorization': "Token " + MyStore.getToken(),
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log('Add an gift action!');
                
                const gifts = MyStore.getGifts();
                gifts.push(incomingGift);
                
                this.dispatch('MyStore.setGifts',gifts);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    
    // createGiftWithUrl(pasteUrl){
    //     fetch(this.giftUrl+ pasteUrl, {
    //             mode: "no-cors", // no-cors, cors, *same-origin
    //             //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //             // credentials: "same-origin", // include, same-origin, *omit
    //             headers:{
    //                 'Content-Type': 'application/json', 
    //             }
    //         }).then(res => res.json())
    //         .then(response => {
    //             console.log('Add an gift action!');
 
                
    //             this.dispatch('MyStore.setUrlGifts',pasteUrl);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
                
    // }


    editGift(gift){
        let gifts = MyStore.getGifts();
        
        fetch(this.host+'editgift/'+gift.id, {
            method: 'POST',
            body: JSON.stringify(gift),
            headers:{
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                }
                
        })
            .then(res => res.json())
            .then(response => {
                gifts = gifts.forEach((mygift) => {
                    if (mygift.id == gift.id) {
                        mygift.gift_name == gift.gift_name;
                        mygift.price == gift.price;
                        mygift.privacy == gift.privacy;
                        mygift.quantity == gift.quantity;
                        mygift.gift_details == gift.gift_details;
                    }
                });
                this.dispatch('MyStore.setGift',gifts);
            })
            .catch(error => console.error('Error:', error));
    }
    
    deleteGift(id){
        fetch(this.host+'editgift/'+id, {
            method: 'DELETE',
            headers:{
                    'Authorization': this.token,
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log('delete action!', id);
                let gifts = MyStore.getGifts();
                
                let updatedGifts = gifts.filter((element, index) => {
                    return element.id != id;
                });
                this.dispatch('MyStore.setGifts',updatedGifts);
                console.log('Success:', response);
                console.log(MyStore.updatedGifts);
            })
            .catch(error => console.error('Error:', error));
    }

}
    
export default new UserActions();
    