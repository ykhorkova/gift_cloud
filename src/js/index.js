//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your index.scss file into the bundle
import '../styles/index.scss';


//import your own components
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';
import HomeComponent from './HomeComponent.jsx';
import GiftComponents from './GiftComponents.jsx';
//render your react application
ReactDOM.render(
    // <Home />,
    <GiftComponents />,
    document.querySelector('#app')
);