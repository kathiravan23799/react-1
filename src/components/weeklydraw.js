import React, { Component } from 'react'
import person from '../assets/images/images/person.png'
import addcircle from '../assets/images/images/add-circle.png'
import wallet from '../assets/images/images/wallet.png'
import referal from '../assets/images/images/referal.png'
import rightarrow from '../assets/images/images/right-arrow.png'
import privacy from '../assets/images/images/privacy.png'
import terms from '../assets/images/images/terms.png'
import settings from '../assets/images/images/settings.png'
import logout from '../assets/images/images/logout.png'
import axios from 'axios'
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

class WeeklyDraw extends Component{
  constructor(props){
    super(props)
    this.state={
        homeredirect:false,
        ticketredirect:false,
        scratchredirect:false,
        shopredirect:false,
        walletredirect:false,
        myaccountredirect:false,
        data:[]
    }
}

    componentDidMount(){
        axios.get("http://vavamoney.com/api/date/?weekly=true")
            .then(res=>{
                console.log(res)
                this.setState({
                    data:res.data
                })
            })
    }
    render(){
        return(
            <>
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
   
            <section className="home-tournaments-list">
                    <h5 className="tc-list-title">Quiz Tournaments</h5>
                   
                       {this.state.data.map((r)=>{
                           return(
                            <Link to={{pathname:"/tournamentdetails",data:r.id}}>

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

            </>
        )
    }
}

export default WeeklyDraw;