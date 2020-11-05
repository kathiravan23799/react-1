import React, { Component } from 'react'
import '../assets/styles/style.css'
import scratch from '../assets/images/images/scratch-1.png'
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
import Axios from 'axios'
import  '../assets/styles/scratch.css'

class Shoppage extends Component{
    constructor(props){
        super(props)
        this.state={
            homeredirect:false,
            ticketredirect:false,
            scratchredirect:false,
            shopredirect:true,
            walletredirect:false,
            myaccountredirect:false,
            data:[],
            join:false,
            numberoftickets:null,
            id:null,
            notification:false,
        }
    }
    componentDidMount(){
        Axios.get("http://vavamoney.com/api/scratch/")
        .then((res)=>{
            console.log(res)
            this.setState({
                data:res.data
            })

        })
    }

    buycards=()=>{
        Axios.get(`http://vavamoney.com/api/scratch/?id=${this.state.id}&buy=true&quantity=${this.state.numberoftickets}`,{headers: {
            'Authorization': `token ${localStorage.getItem('token')}`
          }})
        .then((res)=>{
            console.log(res)
            this.setState({
              notification:true
            })
        })
        Axios.get(`http://vavamoney.com/api/get-sonas/`,{headers:{
          'Authorization': `token ${localStorage.getItem('token')}`
        }})
        .then((res)=>{
          console.log(res)
          localStorage.setItem('sonas',res.data.sonas)
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
                        <h5 className="tc-list-title mt-3 mb-4">Available cards</h5>
                        {this.state.data.map((r)=>{
                            return(
                                <div className="container-fluid p-0" style={{marginBottom:"20px"}}>
                            <div className="row">
                                <div className="col-12">
                                <div className="scratch-card scratch-big card-yellow">
                                    <div className="shop-now">Shop now</div>
                                    <img src={`http://vavamoney.com${r.image}`} alt="" />
                                    <p>Win upto {r.result_prize}</p>
                                </div>
                                <h6 className="w-100 text-center">For {r.sonas} rs</h6>
                                <button className="btn buy-now mt-3" value={r.id} onClick={(e)=>{this.setState({join:true,id:e.target.value,numberoftickets:null})}} >Buy now</button>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                        
                    </section>
                    </main>

                    {this.state.join ? 
            <div className="popup">
              <div className="heading_container">
                <h3 className="heading">BUY SCRATCH CARDS</h3>
                <button className="close-btn-X" onClick={()=>{
                  this.setState({
                    join:false
                  })
                }}>X</button>
              </div>
              
              <input type="text" placeholder="Enter you want no of cards" className="input_text" onChange={(e)=>{this.setState({numberoftickets:e.target.value})}} value={this.state.numberoftickets}></input>
              <div className="input_btns">
                <div className="input_btns_one">
                  <input className="ticket_input_btn" onClick={(e)=>{
                    
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="1" type="button"/>
                  <input className="ticket_input_btn" onClick={(e)=>{
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="8" type="button"/>
                  
                  <input className="ticket_input_btn" onClick={(e)=>{
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="20" type="button"/>
                </div>
                <div className="input_btns_two">
                  <input className="ticket_input_btn" onClick={(e)=>{
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="3" type="button"/>
                  <input className="ticket_input_btn" onClick={(e)=>{
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="10" type="button"/>
                  <input className="ticket_input_btn" onClick={(e)=>{
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="25" type="button"/>
                </div>
                <div className="input_btns_three">
                  <input className="ticket_input_btn" onClick={(e)=>{
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="5" type="button"/>
                  <input className="ticket_input_btn" onClick={(e)=>{
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="15" type="button"/>
                  <input className="ticket_input_btn" onClick={(e)=>{
                    this.setState({
                      numberoftickets:e.target.value
                    })
                  }} value="30" type="button"/>
                </div>    
              </div>
              <input className="buy_btn" type="button" onClick={()=>{this.buycards()}} value="BUY"/>
            </div>:null}

            {this.state.notification ? 
            <div className="popup" style={{height:"auto",backgroundColor:"purple",top:"-100px",background:"blur"}}>
                <h3 className="heading">NOTIFICATION</h3>
                <button className="close-btn-X" onClick={()=>{
                  this.setState({
                    notification:false,join:false
                  });window.location.reload()
                }}>X</button>
                <div className="notification-content" style={{position:"relative",height:"auto",padding:"20px",backgroundColor:"lightgray"}}>
                    <p>successfully buy scratch card</p>
                </div>
              
              {/* <input className="buy_btn_wallet" type="button" onClick={()=>{this.setState({notification:false,join:false,edit:false,request:false})}} value="OK"/> */}
            </div>:null}



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

export default Shoppage;