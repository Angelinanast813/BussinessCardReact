import React, {Component} from 'react'
import '../componentStyles/ToolBar.css'
import 'bootstrap/dist/css/bootstrap.css'
import Bio from './Bio'
import Test from './Test'
import Description from "./Description";
import $ from 'jquery'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class ToolBar extends Component{


    render() {

        function myFunction() {
            var x = document.getElementById("myTopnav");
            console.log("Hello");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }

        return (

            <div className="topnav" id="myTopnav"  onClick={myFunction}>
                <ul className="menu ">
                <li className="active"><img className="menuimg" src={process.env.PUBLIC_URL + '/menu5.png'} alt="menu" /></li>

                <li className=""><Link to={'/'}>HOME</Link></li>
                    <li className="extra">|</li>
                <li className="limarg"><a href="#aboutme"><Link to={'/'} >ABOUT ME</Link></a></li>
                    <li className="extra">|</li>
                <li className="limarg"><Link to={'/portfolio'}>PORTFOLIO</Link></li>
                    <li className="extra">|</li>
                <li className="limarg"><a href="#contacts">CONTACT</a></li>
                <li href="javascript:void(0);" className="icon" onClick="myFunction()">
                    <i className="fa fa-bars"></i>
                </li>
                </ul>
            </div>

            /*
            <div className="topnav" id="myTopnav" onClick={myFunction}>
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="javascript:void(0);" className="icon" onClick="myFunction()">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
*/
        );


/*
        return (

            <div className="back">
            <ul className="menu">
                <li><Link to={'/'}>HOME</Link></li>
                <li>|</li>
                <li><a href="#aboutme"><Link to={'/'} >ABOUT ME</Link></a></li>
                <li>|</li>
                <li><Link to={'/portfolio'}>PORTFOLIO</Link></li>
                <li>|</li>
                <li><a href="#contacts">CONTACT</a></li>
            </ul>

            </div>

        );

 */
    }
}

export default ToolBar