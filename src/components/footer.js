import React, { Component } from 'react'
import '../assets/styles/index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Footer extends Component{

    render(){
    return(
    <footer className="footer">
        <a className="playnow-btn-link"><Link to="/login"><button className="footer-btn">Play now</button></Link></a>
        <a className="download-btn-link" href="https://play.google.com/store/apps/details?id=com.app.vava&amp;hl=en"><button className="footer-btn">Download now</button></a>
    </footer> 
    )
    }
}

export default Footer;