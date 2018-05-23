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
        return(
            <div className="container-fluid"> 
                <ul className="nav nav-pills justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">SING UP</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SING UP</a>
                    </li>
                </ul>
            </div>
    );
       
   }
    
    
}
