import Flux from '@4geeksacademy/react-flux-dash';
import MyStore from '../stores/MyStore.js';

class UserActions extends Flux.Action{
    
    constructor(){
        super();
        this.host = 'https://phyton-giftcloud-yelic29.c9users.io';
    }
    
    createAccount(incomingAccount){
    // incomingUser.agenda_slug="Yuliia";
    fetch(this.host+'/profile/', {
        method: 'PUT',
        body: JSON.stringify(incomingAccount),
        headers:{ 
            'Accept':  'application/json',
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .then(response => {
            console.log('Add an account action!');
                let account = MyStore.getAccounts();
                account.push(response);
                this.dispatch('MyStore.setAccounts',account);
                console.log('Success:', response);
                console.log(MyStore.getAccounts());
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
    