import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";


export default class EditAccount extends React.Component{
 
    render(){
             
            return(<div className="EditAccount">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-info-tab" data-toggle="pill" href="#v-pills-info" role="tab" aria-controls="v-pills-info" aria-selected="true">Account Info</a>
                                <a className="nav-link" id="v-pills-logins-tab" data-toggle="pill" href="#v-pills-logins" role="tab" aria-controls="v-pills-logins" aria-selected="false">My Logins</a>
                                <a className="nav-link" id="v-pills-password-tab" data-toggle="pill" href="#v-pills-password" role="tab" aria-controls="v-pills-password" aria-selected="false">Password</a>
                                <a className="nav-link" id="v-pills-notifications-tab" data-toggle="pill" href="#v-pills-notifications" role="tab" aria-controls="v-pills-notifications" aria-selected="false">Email Notifications</a>
                            </div>
                        </div>
                        
                        <div className="col-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade" id="v-pills-info" role="tabpanel" aria-labelledby="v-pills-info-tab">
                                    <div className="edit-profile">
                                        <h1 className="edit-profile__title">Edit Profile</h1>
                                        <h3 id="account_info">Account Info</h3>
                                        <form>
                                            <input className="input account-email" type="text" placeholder="Account Email" value="user@gmail.com"/>
                                        </form>
                                        <div className="control-group">
                                            <div className="field">
                                                <label htmlFor="exclude-from-search" className="form-label">Find Friends</label>
                                                <div className="select">
                                                    <select id="exclude-from-search" name="exclude_from_search">
                                                        <option value="0" selected="selected">Yes, include me in Find Friends</option>
                                                        <option value="1"> Don&apos;t include me in Find Friends</option>
                                                    </select>
                                                </div>
                                                <p className="help">Users can 
                                                    <a href="/findfriends"> search</a> for other users by username, email address, first or last name, or organization name.
                                                    <a href="/findfriends" target="_blank" rel="noopener noreferrer"> Learn More</a>
                                                </p>
                                            </div>
                                        </div>
                                        <fieldset className="fieldset">
                                            <button type="submit" className="button save-account-btn is-primary">Save Account Info</button>
                                        </fieldset>
                                        <section className="edit-profile__more">
                                            <h2 className="title">Close my Gift Cloud Account</h2>
                                            <p><a href="/deleteaccount">I would like to delete my Gift Cloud account</a></p>
                                        </section>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-logins" role="tabpanel" aria-labelledby="v-pills-logins-tab">
                                
                                    <div className="edit-profile">
                                        <h1 className="edit-profile__title">Edit Profile</h1>
                                        <div data-layout="module">
                                            <div data-layout="module__item" data-layout-width="one-whole">
                                                <section>
                                                    <h3 id="my_logins">My Logins</h3>
                                                    <div className="edit-profile__description">
                                                        <p>Connect your Facebook or Google account to log in to Gift Cloud with just a click.</p>
                                                    </div>
                                                    <form method="POST" acceptCharset="UTF-8">
                                                        <input name="_method" type="hidden" value="DELETE"></input>
                                                        <input name="_token" type="hidden" value="AdUyVKlHJ0sa5x8JrzjRfIQVm5tLXcirZmLgGiKO"></input>
                                                        <fieldset id="my-facebook-account" className="fieldset">
                                                            <div className="control-group">
                                                                <div className="form-control">
                                                                    <h4>Facebook</h4>
                                                                    <p><strong>Remove Facebook Account</strong></p>
                                                                    <button type="submit" className="btn-social btn-social--facebook">
                                                                        <span className="btn-social__text"><i className="fab fa-facebook-square fa-2x clearfix"></i>Remove Facebook Account</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </form>
                                                    <form method="POST"  acceptCharset="UTF-8">
                                                        <input name="_method" type="hidden" value="DELETE"></input>
                                                        <fieldset id="my-facebook-account" className="fieldset">
                                                            <div className="control-group">
                                                                <div className="form-control">
                                                                    <h4>Google</h4>
                                                                    <p><strong>Remove Google Account</strong></p>
                                                                    <button type="submit" className="btn-social btn-social--google">
                                                                        <span className="btn-social__text"> <i className="fab fa-google-plus-square fa-2x"></i> Remove Google Account</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade" id="v-pills-password" role="tabpanel" aria-labelledby="v-pills-password-tab">
                                    <div className="edit-profile">
                                        <h1 className="edit-profile__title">Edit Profile</h1>
                                        <div data-layout="module">
                                            <div data-layout="module__item" data-layout-width="one-whole">
                                                <h3 id="change_password">Change Password</h3>
                                                <form method="POST" acceptCharset="UTF-8">
                                                    <input name="_token" type="hidden"></input>
                                                    <section id="my-password">
                                                        <fieldset id="my-password" className="fieldset"></fieldset>
                                                        <fieldset className="fieldset">
                                                            <div className="field max-50">
                                                                <label htmlFor="new-password" className="form-label">New password</label>
                                                                <div className="control">
                                                                    <input required="required" minLength="8" autoComplete="new-password" name="new_password" type="password" value="" className="new-password-input"></input>
                                                                </div>
                                                            </div>
                                                            <div className="field max-50">
                                                                <label htmlFor="new-password-confirm" className="form-label">Enter your new password again</label>
                                                                <div className="control">
                                                                    <input required="required" minLength="8" name="new_password_confirmation" type="password" value="" className="password-input-confirm"></input>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <fieldset className="fieldset">
                                                            <button type="submit" className="button change-password-btn is-primary">Change Password</button>
                                                        </fieldset>
                                                    </section>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="tab-pane fade" id="v-pills-notifications" role="tabpanel" aria-labelledby="v-pills-notifications-tab">
                                    <div className="edit-profile">
                                        <h1 className="edit-profile__title">Edit Profile</h1>
                                        <div data-layout="module">
                                            <div data-layout="module__item" data-layout-width="one-whole">
                                                <h3 id="email_notifications">Email Notifications</h3>
                                                <form method="POST" acceptCharset="UTF-8">
                                                    <input name="_token" type="hidden"></input>
                                                    <section>
                                                        <fieldset id="my-email-notifications" className="fieldset">
                                                            <div className="form-control">
                                                                <label htmlFor="email_new_follower" className="form-control form-control--checkbox">
                                                                    <input id="email_new_follower" checked="checked" name="email_new_follower" type="checkbox" value="1"></input>
                                                                    <span className="form-control__checkbox-text">Email me when someone follows me</span>
                                                                    <span className="form-control__status"></span>
                                                                </label>
                                                            </div>
                                                            <div className="form-control">
                                                                <label htmlFor="email_birthdays" className="form-control form-control--checkbox">
                                                                    <input id="email_birthdays" checked="checked" name="email_birthdays" type="checkbox" value="1"></input>
                                                                    <span className="form-control__checkbox-text">Email me a reminder about upcoming birthdays</span>
                                                                    <span className="form-control__status"></span>
                                                                </label>
                                                            </div>
                                                            <div className="form-control">
                                                                <label htmlFor="email_events" className="form-control form-control--checkbox">
                                                                    <input id="email_events" checked="checked" name="email_events" type="checkbox" value="1"></input>
                                                                    <span className="form-control__checkbox-text">Email me a reminder about upcoming events</span>
                                                                    <span className="form-control__status"></span>
                                                                </label>
                                                            </div>
                                                            <div className="form-control">
                                                                <label htmlFor="email_marketing" className="form-control form-control--checkbox">
                                                                    <input id="email_marketing" checked="checked" name="email_marketing" type="checkbox" value="1"></input>
                                                                    <span className="form-control__checkbox-text">Subscribe to marketing emails</span>
                                                                    <span className="form-control__status"></span>
                                                                </label>
                                                            </div>
                                                        </fieldset>
                                                        <fieldset className="fieldset">
                                                            <button type="submit" className="button save-notifications-btn is-primary">Save Notifications</button>
                                                        </fieldset>
                                                    </section>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                                                                      
            </div>    
            );
    }
}
                  