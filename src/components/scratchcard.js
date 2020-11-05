import React, { Component } from 'react'
import scratch1 from '../assets/images/images/scratch-1.png'
import scratch2 from '../assets/images/images/scratch-2.png'
import scratch3 from '../assets/images/images/scratch-3.png'
import scratch4 from '../assets/images/images/scratch-4.png'
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
import '../assets/styles/style.css'
import Axios from 'axios'
import '../assets/styles/scratch.css'
import scratchcard from 'react-scratchcard'
import Example from './scratchcardpage'
import badge from '../assets/images/images/badge.png'
import sam from './scratchcardpage'

class Scratchcard extends Component{
    constructor(props){
        super(props)
        this.state={
            homeredirect:false,
            ticketredirect:false,
            scratchredirect:true,
            shopredirect:false,
            walletredirect:false,
            myaccountredirect:false,
            data:[],
            sonas:null,
            nextpage:false,
            text:10,
            id:null
        }
    }

    

    componentDidMount(){
        Axios.get(`http://vavamoney.com/api/scratch/reedem/?pending_list=true`,{ headers: {
            'Authorization': `token ${localStorage.getItem('token')}`
          }})
        .then((res)=>{
            this.setState({
                data:res.data,
                
            })
            console.log(this.state.sonas)
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
                        <h5 className="tc-list-title mt-3">Scratch cards</h5>
                        <div className="container-fluid p-0">
                        <div className="row">
                            
                            {this.state.data.map((r)=>{
                                return(
                                    <>

                                    <div className="col-6">
                                        <Link to={{pathname:"/scratch",data:r.id,data1:r.sonas}}>
                                        <div className="scratch-card card-yellow">
                                            <p style={{position:"relative",fontSize:"18px",fontWeight:"bold"}}>Win upto {r.scratch.result_prize}</p>
                                            <img src={`http://vavamoney.com${r.scratch.image}`} alt="" />
                                            <p className="tap-btn" style={{position:"relative",border:"none",outline:"none",borderRadius:"5px",color:"white",fontWeight:"500",fontSize:"13px",padding:"5px"}} value={r.sonas}  onClick={(e)=>{this.setState({sonas:e.target.value,nextpage:true})}}>Tap to scratch</p>
                                        </div></Link>
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                        </div>
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

export default Scratchcard;