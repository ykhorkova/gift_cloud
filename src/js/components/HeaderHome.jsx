import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class HeaderHome extends React.Component{
//   constructor(){
//       super();
//       this.state = { 
//           options: [{ label: "Home", url: "/home" },
//                     { label: "Sing up", url: "/contact-us" }]
//         };
//     }
  
      
  
   render(){
        return(<div className="header-home">
            <nav className="navbar navbar-expand-md navbar-light bg-light"> 
                <div className="collapse navbar-collapse" id="main-page-header">
                    <h1> Gift Cloud</h1>
                    <ul className="navbar-nav ml-auto" id="header-buttons">
                        <li className="nav-item" id="login-header-button">
                            <Link className="nav-link active" to="/login">LOG IN</Link>
                        </li>
                        <li className="nav-item" id="signup-header-button">
                            <a className="nav-link" href="#">SING UP</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            
    );
       
   }
    
    
}
