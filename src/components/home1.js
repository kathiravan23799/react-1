import React, { Component, useState } from 'react'
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
import Homepage from './homepage'
import Shoppage from './shoppage'
import Scratchcard from './scratchcard'
import Account from './account'
import Mywallet from './mywallet'
import Tournamentdetails from './tournamentdetails'
import axios from 'axios'

class Home1 extends Component{

    constructor(props,datas){
        super(props)
        this.state={
            homeredirect:true,
            ticketredirect:false,
            scratchredirect:false,
            shopredirect:false,
            walletredirect:false,
            myaccountredirect:false,
            data:[],
            tournaments:[],
        }
    }

    componentDidMount(){
        axios.get('http://vavamoney.com/api/banner/?list=true')
        .then(res=>{
            this.setState({
                data:res.data
            })
            // console.log(this.state.data)
            // console.log(localStorage.getItem('token'))
        })

        axios.get("http://vavamoney.com/api/date/?list=true&featured=true")
        .then(res=>{
            console.log(res)
            this.setState({
                tournaments:res.data
            })
        })
    }

    render(){
    return(
        
        <div>
            
            <header id="app-header">
                <div className="header-left">
                    
                    <img src={logo1} alt="" className="header-logo" />
                </div>
                <div className="header-right">
                    <div className="header-widget">
                    {localStorage.getItem('sonas')}
                    <a onClick={()=>{
                        this.setState({
                            homeredirect:false,
                            ticketredirect:false,
                            scratchredirect:false,
                            shopredirect:false,
                            myaccountredirect:false,
                            walletredirect:true,
                            
                        })
                    }} >
                        <img src={logo} alt="" />{this.state.walletredirect ? <Redirect to="/wallet"/>:null}
                    </a>
                    </div>
                    <div className="profile-icon">
                    <img onClick={()=>{
                        this.setState({
                            homeredirect:false,
                            ticketredirect:false,
                            scratchredirect:false,
                            shopredirect:false,
                            walletredirect:false,
                            myaccountredirect:true,
                            
                            
                        })
                    }}
                        src="https://www.eharmony.com/blog/wp-content/uploads/2017/07/short-men-and-dating-e1499470604767.jpg"
                        alt=""
                    /> {this.state.myaccountredirect ? <Redirect to="/account"/>:null}
                    </div>
                </div>
            </header>
            <main id="app-main">
                <section className="home-banner-section w-100">
                    <div className="home-slider-wrapper">
                    
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                           {this.state.data.map((ban)=>{
                               return <img src={`http://vavamoney.com${ban.image}`} className="img-fluid d-block mx-auto" alt="" />
                           })}
            
                            </div>
                        </div>
                    </div>
                    
                    <img src={arrow_left} className="home-slider-arrow arrow-left" alt="" />
                    <img src={arrow_right} className="home-slider-arrow arrow-right" alt="" />
                    </div>
                </section>
                <hr/>
                <section className="daily-draw">
                    <div className="container" style={{width:"100%",position:"relative",alignItems:"center",justifyItems:"center",display:"flex"}}>  {/* "width: 100%;position: relative;align-items: center;justify-items: center;display: flex;" */}
                    
                        
                        <div className="col-md-4">
                            <Link to="/dailydraw"><a href="#">
                                <div className="card" style={{background:"linear-gradient(132.52deg,#ffd200 -5.34%,#ff7f00 104.76%)",padding:"10px",fontWeight:"bold"}}> {/*"background: linear-gradient(132.52deg,#ffd200 -5.34%,#ff7f00 104.76%);padding:10px;font-weight: bold;" */}
                                Daily
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-md-4" >
                            <Link to="/weeklydraw"><a href="#">
                                <div className="card" style={{background:"linear-gradient(132.52deg,#ffd200 -5.34%,#ff7f00 104.76%)",padding:"10px",fontWeight:"bold"}}>
                                    Weekly
                                </div>
                            </a></Link>
                        </div>
                        <div className="col-md-4" >
                            <Link to="/monthlydraw"><a href="#">
                                <div className="card" style={{background:"linear-gradient(132.52deg,#ffd200 -5.34%,#ff7f00 104.76%)",padding:"10px",fontWeight:"bold"}}>
                                    Monthly
                                </div>
                            </a></Link>
                        </div>
                    
                    </div>
                </section>
                <hr/>
                
                <section className="home-tournaments-list">
                    <h5 className="tc-list-title">Quiz Tournaments</h5>
                   
                       {this.state.tournaments.map((r)=>{
                           return(
                            <Link to={{pathname:"/tournamentdetails",data:r.id,data1:r.title}} onClick={(e)=>{localStorage.setItem('tournamentid',r.id)}}>

                            <div className="tc card-orange">
                            <div className="container-fluid p-0">
                            <div className="row no-gutters">
                            <div className="col-8">
                            <h5 className="tc-title">{r.title}</h5>
                                <div className="row w-100 m-0 p-0 no-gutters">
                                <div className="col-7">
                                    <p className="tc-meta"><img src={trophy} alt="" /> First price</p>
                                    <p className="tc-meta"><img src={timer} alt="" /> Results Date</p>
                                    <p className="tc-meta"><img src={users} alt="" />Sonas</p>
                                </div>
                                <div className="col-5">
                                    <p className="tc-data">{r.total_prize}</p>
                                    <p className="tc-data">{r.time.date.end_date}</p>
                                    <p className="tc-data">{r.bid_amount}</p>
                                
                                </div>
                                </div>
                                <div className="progress position-relative">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{width: `${r.percentage}%`}}
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
                                src={`http://vavamoney.com${r.image}`}
                                className="img-fluid d-block mx-auto"
                                alt=""
                                />
                                <span className="tc-amount"> {r.bid_amount} rs </span>
                            </div>
                            </div>
                        </div></div></Link>
                           )
                       })}
                    
                    
                </section>

            </main>
           


            
            <footer id="app-menu">
                <div className="app-menu-inner">
                    <a className="app-menu-item">
                    <img onClick={()=>{
                        this.setState({
                            
                            ticketredirect:false,
                            scratchredirect:false,
                            shopredirect:false,
                            walletredirect:false,
                            myaccountredirect:false,
                            homeredirect:true,
                            
                        })
                    }} src={menuhome} alt="" />{this.state.homeredirect ? <Redirect to="/home"/>:null}
                    </a>
                    <a  className="app-menu-item">
                    <img onClick={()=>{
                        this.setState({
                            homeredirect:false,
                            scratchredirect:false,
                            shopredirect:false,
                            walletredirect:false,
                            myaccountredirect:false,
                            ticketredirect:true,
                        })
                    }} src={menuvoucher} alt="" />{this.state.ticketredirect ? <Redirect to="/ticketpage"/>:null}
                    </a>            
                    <a className="app-menu-item">
                    <img onClick={()=>{
                        this.setState({
                            homeredirect:false,
                            ticketredirect:false,
                            shopredirect:false,
                            walletredirect:false,
                            myaccountredirect:false,
                            scratchredirect:true,
                            
                        })
                    }} src={menutournament} alt="" />{this.state.scratchredirect ? <Redirect to="/scratchcardpage"/>:null}
                    </a>
                    <a className="app-menu-item">
                    <img onClick={()=>{
                        this.setState({
                            homeredirect:false,
                            ticketredirect:false,
                            scratchredirect:false,
                            walletredirect:false,
                            myaccountredirect:false,
                            shopredirect:true,
                        })
                    }} src={menustore} alt="" />{this.state.shopredirect ? <Redirect to="/shop"/>:null}
                    </a>
                </div>
            </footer>

            

        </div>
    )
    }
}

export default Home1;