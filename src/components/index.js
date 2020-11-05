import React, { Component } from 'react';
import '../assets/styles/index.css';
import banner from '../assets/images/one.jpeg'

class Index extends Component{
    render(){
    return(
    
        <div className="index-container-one">
            <div className="banner">
                <img className="banner-img" src={banner}/>
            </div>
            <div className="contents">
                
                <p className="p1">Welcome To VaVa</p>
                <p className="p2">INDIA'S FIRST LEGAL </p>
                <p className="p3">INTERNATIONAL LOTTERY GAME</p>
                <p className="p4">
                    
                    Trusted Money Transaction , Nearly 100% Winning Accuracy , Easy Money Transfer ,
                    Available Repurchasing of wallet currency (SONAS) and Available for Nearly 175
                    countries.Invest Low Earn High!!!
    
                </p>
            </div>
        </div>           
    )
    }
}

export default Index;