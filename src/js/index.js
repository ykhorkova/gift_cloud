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


<<<<<<< HEAD

=======
>>>>>>> 29b0860d64d6ae477506d477a51e9cdf56f2d0cb
//render your react application
ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);