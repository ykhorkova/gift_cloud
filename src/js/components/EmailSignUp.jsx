import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import MyActions from "../actions/MyActions.jsx";
import MyStore from "../stores/MyStore.jsx";

export default class EmailSignUp extends Flux.View {
    constructor(){
        super();
        
        this.state = {
            first_name: '',
            last_name: '',
            birthdate: '',
            email: '',
            password: '',
            accountCreated: false,
            buttonClicked: false
        };
        
        this.bindStore(MyStore, () => {
            console.log('the bind works!');
            this.setState({
                accountCreated: MyStore.getAccountCreated()
            });
        });
    }
    
    // componentDidMount(){
    //     const contacts = MyStore.getContacts();
    //     if (this.props.match.params.user_id){
    //         this.setState({
    //             edit: true
    //         });
    //     }
    //     contacts.forEach((item) => {
    //         if(item.id == this.props.match.params.user_id){
    //             this.setState({
    //                 full_name: item.full_name,
    //                 phone: item.phone,
    //                 email: item.email,
    //                 address: item.address,
    //                 id: item.id
    //             });
    //         }
    //     });
    // }
    
    render(){
        return(<div className="sign-up-with-email">
            <div className="container">
                {(!this.state.buttonClicked || (this.state.buttonClicked && !this.state.accountCreated)) ? 
                (
                    <div>
                        <div className="header">
                            <Link to="/login" className="login">Log In</Link> or 
                            <Link to="/signup"  className="signup">Sign Up</Link>
                        </div>
                        <form>
                            <input type="text" name="first-name" id="first-name" placeholder="First Name" onChange={(e) => this.setState({ first_name: e.target.value})} value={this.state.first_name} />
                            <input type="text" name="last-name" id="last-name" placeholder="Last Name" onChange={(e) => this.setState({ last_name: e.target.value})} value={this.state.last_name} />
                            <input type="date" name="birthdate" placeholder="yyyy-mm-dd" onChange={(e) => this.setState({ birthdate: e.target.value})} value={this.state.birthdate} />
                            <input type="email" name="email" id="email" placeholder="Your Email" onChange={(e) => this.setState({ email: e.target.value})} value={this.state.email} />
                            <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value})} value={this.state.password}/>
                            <div className="help-block">By creating an account you agree to our <a href="#">Terms/Privacy</a></div>
                            <input onClick={() => {
                                console.log(this.state.birthdate);
                                let createdAccount = {
                                    first_name: this.state.first_name,
                                    last_name: this.state.last_name,
                                    birthdate: this.state.birthdate,
                                    email: this.state.email,
                                    password: this.state.password
                                };
                                this.setState({ buttonClicked: true});
                                MyActions.createAccount(createdAccount);
                            }
                                }
                            type="button" className="create-account-btn" value="Create Account"/>
                        </form>
                    </div>    
                ): (
                    <div className="acount-created">
                        <h2 className="account-create-success"> Account was created successfully!</h2>
                        <Link to="/login" className="login">Log In</Link>
                    </div>    
                )
                    
                }
            </div>
        </div>
               );
   }
}