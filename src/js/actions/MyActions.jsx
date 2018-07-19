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
        let url = 'https://phyton-giftcloud-yelic29.c9users.io/sprofile/'+idProfile;
        let account = MyStore.getAccount();
        
        fetch(url, {
            method: 'POST'})
            .then(res => res.json())
            .then(response => {
                account = account.forEach((myaccount) => {
                    if (myaccount.id == idProfile.id) {
                        myaccount.name == idProfile.full_name;
                        myaccount.email == idProfile.email;
                        myaccount.phone == idProfile.phone;
                        myaccount.address == idProfile.address;
                    }
                });
                this.dispatch('MyStore.setAccount',account);
            })
            .catch(error => console.error('Error:', error));
    }
    
    
    // deleteContact(id){
    //     fetch(this.host+'/contact/'+id, {
    //         method: 'DELETE'
    //         }).then(res => res.json())
    //         .then(response => {
    //             console.log('delete action!', id);
    //             let contacts = MyStore.getContacts();
                
    //             let updatedContacts = contacts.filter((element, index) => {
    //                 return element.id != id;
    //             });
    //             this.dispatch('MyStore.setContacts',updatedContacts);
    //             console.log('Success:', response);
    //             console.log(MyStore.updatedContacts);
    //         })
    //         .catch(error => console.error('Error:', error));
    // }
    
    //  editContact(updatedContact){
    //     console.log(updatedContact);
    //     fetch(this.host+'/contact/'+updatedContact.id, {
    //             method: 'POST',
    //             body: JSON.stringify(updatedContact),
    //             headers:{ 
    //             'Accept':  'application/json',
    //             'Content-Type': 'application/json'
    //             }
    //         }).then(res => {
    //             return res.json();
    //         })
    //         .then(response => {
    //             console.log('edit action!', updatedContact.id);
    //             let contacts = MyStore.getContacts();

    //             contacts.forEach((element) => {
    //                 if (element.id === updatedContact.id) {
    //                     element.email = updatedContact.email,
    //                     element.full_name = updatedContact.full_name;
    //                     element.phone = updatedContact.phone;
    //                     element.address = updatedContact.address;
    //                 }
    //             });
                        
    //             this.dispatch('MyStore.setContacts',contacts);
    //             console.log('Success:', response);
    //             console.log(MyStore.updatedContacts);
    //         })
    //         .catch(error => console.error('Error:', error));
    // }
}
    
export default new UserActions();
    