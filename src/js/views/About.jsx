import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import logo2 from '../../img/logo2.png';
import HeaderAccount from '../components/HeaderAccount.jsx';
import Footer from '../components/Footer.jsx';


export default class About extends React.Component{
   render(){
        return(<div>
            <HeaderAccount />
            <div className="about-page">
                <div className="container-wide stacked-children">
                    <header className="layout-about__intro">
                        <h1 className="title">The Best Wish List&nbsp;Ever</h1>
                        <h4 className="subtitle">Gift Cloud delivers a universal wish list that’s simple to navigate, aesthetically pleasing, and a re‑gifting&nbsp;squasher.</h4>
                    </header>
                    <section className="layout-about__explainer whitespace-top whitespace-bottom">
                        <figure data-aos="fade" className="visual">
                            <img className="card-img-top" src={logo2}></img>
                        </figure>
                        <div className="content first-content">
                            <h3 className="section-title">What is Gift Cloud?</h3>
                            <p>Sure, you’ve used wedding and baby registries. But what about all of life’s other gift-giving occasions? A Gift Cloud wish list is like a soft sell for birthdays, Mother’s Day, and even Christmas—all in one place. Your friends and family will thank&nbsp;you.</p>
                        </div>
                    </section>
                    <section className="layout-about__explainer layout-about__explainer--switch whitespace-bottom-large">
                        <div className="content">
                            <h3 className="section-title">Why a Universal Wish List?</h3>
                            <p>You’ve made your lists and checked them twice...and again...and again. Registering with multiple retailers isn’t just a pain for you to maintain but also a nuisance for your loved ones to decipher. With Gift Cloud, anytime you see something online that you need or want, you can add that item to a list just copying a link!</p>
                        </div>
                    </section>
                </div>
            
            
            
            
            
            
            
            </div>
            <Footer />
        </div>
        );
    }
}