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

class Account extends Component{
  constructor(props){
    super(props)
    this.state={
        homeredirect:false,
        ticketredirect:false,
        scratchredirect:false,
        shopredirect:false,
        walletredirect:false,
        myaccountredirect:true,
    }
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
      <section className="account-menu">
        <ul className="account-menu_list list-unstyled p-0 m-0">
          <li>
            <div
              className="list-inner"
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <div className="d-flex justify-content-center align-items-center">
                <img src={person} alt="" /> My account
              </div>
              <div>
                <img src={addcircle} alt="" />
              </div>
            </div>
            
            <div className="collapse" id="collapseExample">
              <div className="mt-3">
                <ul className="list-unstyled inner-list m-0 p-0">
                  <li>Profile</li>
                  <li>Change password</li>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
            
          </li>
          <li>
            <div className="list-inner">
              <div className="d-flex justify-content-center align-items-center">
                <img src={wallet} alt="" /> My Wallet
              </div>
              <div>
                <img src={addcircle} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="list-inner">
              <div className="d-flex justify-content-center align-items-center">
                <img src={referal} alt="" /> Referal code : B78b0
              </div>
              <div>
                <img src={rightarrow} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="list-inner">
              <div className="d-flex justify-content-center align-items-center">
                <img src={privacy} alt="" /> Privacy Policy
              </div>
              <div>
                <img src={rightarrow} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="list-inner">
              <div className="d-flex justify-content-center align-items-center">
                <img src={terms} alt="" /> Terms & Conditions
              </div>
              <div>
                <img src={addcircle} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="list-inner">
              <div className="d-flex justify-content-center align-items-center">
                <img src={settings} alt="" /> Settings
              </div>
              <div>
                <img src={rightarrow} alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="list-inner">
              <div className="d-flex justify-content-center align-items-center">
                <img src={logout} alt="" /> Logout
              </div>
              <div>
                <img src={rightarrow} alt="" />
              </div>
            </div>
          </li>
        </ul>
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

export default Account;