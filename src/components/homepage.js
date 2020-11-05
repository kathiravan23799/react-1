import React, { Component } from 'react'
import '../assets/styles/style.css'
import logo1 from '../assets/images/images/logo.png'
import logo from '../assets/images/images/header-icon.png'
import banner1 from '../assets/images/images/home-banner.png'
import arrow_left from '../assets/images/images/arrow-left.png'
import arrow_right from '../assets/images/images/arrow-right.png'
import dailydraw from '../assets/images/images/daily-draw.png'
import trophy from '../assets/images/images/trophy.png'
import timer from '../assets/images/images/timer.png'
import users from '../assets/images/images/users.png'
import money1 from '../assets/images/images/money1.png'
import firecracker from '../assets/images/images/firecracker.png'
import menuhome from '../assets/images/images/menu-home.png'
import menuvoucher from '../assets/images/images/menu-voucher.png'
import menutournament from '../assets/images/images/menu-tournament.png'
import menustore from '../assets/images/images/menu-store.png'
import { Link, Redirect } from 'react-router-dom'
import Ticketpage from './ticketpage'


export default class Homepage extends Component{
    constructor(props){
        super(props)
        this.state={
            redirect:false
        }
    }
    render(){
        return(
            <>
           
        <main id="app-main">
                <section className="home-banner-section w-100">
                    <div className="home-slider-wrapper">
                    
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={banner1} className="img-fluid d-block mx-auto" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <img src={arrow_left} className="home-slider-arrow arrow-left" alt="" />
                    <img src={arrow_right} className="home-slider-arrow arrow-right" alt="" />
                    </div>
                </section>

                <section className="daily-draw">
                    <img src={dailydraw} className="img-fluid" alt="" />
                </section>
                
                <section className="home-tournaments-list">
                    <h5 className="tc-list-title">Special Tournaments</h5>
                   <Link to="/tournamentdetails" ><div className="tc card-yellow">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                        <div className="col-8">
                            <h5 className="tc-title">Diwali dhamaka</h5>
                            <div className="row w-100 m-0 p-0 no-gutters">
                            <div className="col-7">
                                <p className="tc-meta"><img src={trophy} alt="" /> First price</p>
                                <p className="tc-meta"><img src={timer} alt="" /> Results Date</p>
                                <p className="tc-meta"><img src={users} alt="" />Sonas</p>
                            </div>
                            <div className="col-5">
                                <p className="tc-data">5000/-</p>
                                <p className="tc-data">26/11/2020</p>
                                <p className="tc-data">1000</p>
                            
                            </div>
                            </div>
                            <div className="progress position-relative">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{width: "25%"}}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            <small
                                className="progress-number justify-content-center d-flex position-absolute w-100"
                                >500 slots remaining</small
                            >
                            </div>
                        </div>
                        <div className="col-4 px-2">
                            <img
                            className="tc-image"
                            src={money1}
                            className="img-fluid d-block mx-auto"
                            alt=""
                            />
                            <span className="tc-amount"> 5000 rs </span>
                        </div>
                        </div>
                    </div>
                    </div></Link>
                    <div className="tc card-orange">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                        <div className="col-8">
                            <h5 className="tc-title">Diwali dhamaka</h5>
                            <div className="row w-100 m-0 p-0 no-gutters">
                            <div className="col-7">
                                <p className="tc-meta"><img src={trophy} alt="" /> First price</p>
                                <p className="tc-meta"><img src={timer} alt="" /> Results Date</p>
                                <p className="tc-meta"><img src={users} alt="" />Sonas</p>
                            </div>
                            <div className="col-5">
                                <p className="tc-data">5000/-</p>
                                <p className="tc-data">26/11/2020</p>
                                <p className="tc-data">1000</p>
                            
                            </div>
                            </div>
                            <div className="progress position-relative">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{width: "25%"}}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            <small
                                className="progress-number justify-content-center d-flex position-absolute w-100"
                                >500 slots remaining</small
                            >
                            </div>
                        </div>
                        <div className="col-4 px-2">
                            <img
                            className="tc-image"
                            src={firecracker}
                            className="img-fluid d-block mx-auto"
                            alt=""
                            />
                            <span className="tc-amount"> 5000 rs </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

            </main>
            </>
            )
    }
}

