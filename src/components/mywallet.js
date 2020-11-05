import React, { Component } from 'react'
import '../assets/styles/style.css'
import tickets from '../assets/images/images/tickets.png'
import trophy from '../assets/images/images/trophy.png'
import timer from '../assets/images/images/timer.png'
import users from '../assets/images/images/users.png'
import money1 from '../assets/images/images/money1.png'
import firecracker from '../assets/images/images/firecracker.png'

import logo1 from '../assets/images/images/logo.png'
import logo from '../assets/images/images/header-icon.png'
import banner1 from '../assets/images/images/home-banner.png'
import arrow_left from '../assets/images/images/arrow-left.png'
import arrow_right from '../assets/images/images/arrow-right.png'
import dailydraw from '../assets/images/images/daily-draw.png'
import menuhome from '../assets/images/images/menu-home.png'
import menuvoucher from '../assets/images/images/menu-voucher.png'
import menutournament from '../assets/images/images/menu-tournament.png'
import menustore from '../assets/images/images/menu-store.png'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import '../assets/styles/scratch.css'
import '../assets/styles/popup.css'

class Mywallet extends Component{

  constructor(props){
    super(props)
    this.state={
        homeredirect:false,
        ticketredirect:false,
        scratchredirect:false,
        shopredirect:false,
        walletredirect:true,
        myaccountredirect:false,
        data:[],
        data1:[],
        bankdetails:false,
        join:false,
        name:null,
        accountno:null,
        ifsccode:null,
        notfound:false,
        edit:false,
        request:false,
        withdrawsonas:null,
        notification:false,
        message:null
    }
}

  componentDidMount(){
    Axios.get(`http://vavamoney.com/api/get-sonas/`,{headers:{
      'Authorization': `token ${localStorage.getItem('token')}`
    }})
    .then((res)=>{
      console.log(res)
      localStorage.setItem('sonas',res.data.sonas)
    })
    Axios.get(`http://vavamoney.com/api/wallet`,{ headers: {
      'Authorization': `token ${localStorage.getItem('token')}`
    }})
    .then((res)=>{
       console.log(res)
       console.log(localStorage.getItem('token'))
       this.setState({
        data:res.data.withdraw
      })
      console.log(this.state.data)
       
      Axios.get(`http://vavamoney.com/api/bank`,{ headers: {
        'Authorization': `token ${localStorage.getItem('token')}`
      }})
      .then((res)=>{
        console.log(res)
        this.setState({
          data1:res.data,
          name:res.data.name,
          accountno:res.data.account_no,
          ifsccode:res.data.ifsc_code
        })

        console.log(this.state.name)
        
      })
      .catch((res)=>{
        console.log("its error")
        this.setState({notfound:true})
      })
       
       
       
       
    })

  }

  editbank=()=>{

    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('name', this.state.name);
    data.append('account_no', this.state.accountno);
    data.append('ifsc_code', this.state.ifsccode);

    var config = {
      method: 'put',
      url: 'http://vavamoney.com/api/bank/',
      headers: { 
        'Authorization': `token ${localStorage.getItem('token')}`
        
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      notification:true
    })



  }

  addbank=()=>{
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('name', this.state.name);
    data.append('account_no', this.state.accountno);
    data.append('ifsc_code', this.state.ifsccode);

    var config = {
      method: 'post',
      url: 'http://vavamoney.com/api/bank/',
      headers: { 
        'Authorization': `token ${localStorage.getItem('token')}`
        
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      notification:true
    })


  }

  request=()=>{
    Axios({
      method:'get',
      url:`http://vavamoney.com/api/withdraw/?sonas=${this.state.withdrawsonas}`,
      headers:{
        'Authorization':`token ${localStorage.getItem('token')}`
      },
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((res)=>{
      console.log("error")
      console.log(res)
      alert("please add bank details")
      this.setState({
        request:false,
        join:true
      })
    })
    this.setState({
      notification:true
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
        <h5 className="tc-list-title mt-3">My wallet</h5>
        <div className="container-fluid p-0">
          <div className="wallet-wrapper">
            <div className="row">
              <div className="col-6">
                <p className="mb-0">Available sonas</p>
                <h4>{localStorage.getItem('sonas')}</h4>
              </div>
              <div className="col-6">
                <img
                  src={tickets}
                  alt=""
                  width="80"
                  className="d-block ml-auto"
                />
              </div>
            </div>
            <div className="row no-gutters mt-3">
              <div className="col-6 pr-2">
                <button className="btn wallet-btn">BUY</button>
              </div>
              <div className="col-6 pl-2">
                <button className="btn wallet-btn" onClick={()=>{this.setState({message:"Withdraw",request:true})}}>WITHDRAW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <section className="mt-4 home-tournaments-list">
        <h5 className="tc-list-title mt-3">Withdraw request</h5>
        <div className="container-fluid p-0">
          <div className="withdraw-request-wrapper">
          {this.state.data.map((r)=>{
          return(
            <div className="withdraw-req">
              <div className="row no-gutters">
                <div className="col-7">
                  <p className="mb-0 small">Status</p>
                  <h6 className="mb-0">{r.status}</h6>
                </div>
                <div className="col-5 pl-3">
                  <p className="mb-0 small">Sonas</p>
                  <h6 className="mb-0">{r.sonas}</h6>
                </div>
              </div>
            </div>
          )
        })}
            
          </div>
        </div>
        {this.state.notfound ? <button className="add-bank-btn" onClick={()=>{this.setState({message:"Add Bank",join:true})}}>Add bank</button>:
        
        <div className="bank-account-details">
            <div className="text__">
              <h5 className="account-detail-text">Account Details</h5>
            </div>
            
            <div className="account-details1">
              <div className="right-side">
                  <label className="account-text">Name</label><br></br>
                  <label className="account-text">Account no</label><br></br>
                  <label className="account-text">Ifsc code</label><br></br>
              </div>
              <div className="left-side">
                  <label className="account-text" style={{fontWeight:"bold"}}>{this.state.data1.name}</label><br></br>
                  <label className="account-text" style={{fontWeight:"bold"}}>{this.state.data1.account_no}</label><br></br>
                  <label className="account-text" style={{fontWeight:"bold"}}>{this.state.data1.ifsc_code}</label><br></br>
              </div>
              <div>
                <button className="edit-btn" onClick={()=>{this.setState({message:"Edit Bank",edit:true})}}>Edit</button>
            </div>
            </div>
            
          
        </div>}
        
      </section>
  
      
    </main>

    {this.state.join ? 
            <div className="popup" style={{height:"350px"}}>
              <div className="heading_container">
                <h3 className="heading">ADD BANK DETAILS</h3>
                <button className="close-btn-X" onClick={()=>{
                  this.setState({
                    join:false
                  });window.location.reload()
                }}>X</button>
              </div>
              <div className="main-contaiiner">
                <div className="default">
                  <label className="default-text">name</label> <br></br>
                  <label className="default-text">Account no</label><br></br>
                  <label className="default-text">IFSC code</label><br></br>
                </div>
                <div className="input">
                  <input type="text" className="input-text" placeholder="name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input> <br></br>
                  <input type="text" className="input-text" placeholder="Account no" value={this.state.accountno} onChange={(e)=>{this.setState({accountno:e.target.value})}}></input><br></br>
                  <input type="text" className="input-text special" placeholder="IFSC code" value={this.state.ifsccode} onChange={(e)=>{this.setState({ifsccode:e.target.value})}}></input><br></br>
                </div>
              </div>
              <input className="buy_btn_wallet" type="button" onClick={()=>{this.addbank()}} value="ADD"/>
            </div>:null}

            {this.state.edit ? 
            <div className="popup" style={{height:"350px"}}>
              <div className="heading_container">
                <h3 className="heading">EDIT BANK DETAILS</h3>
                <button className="close-btn-X" onClick={()=>{
                  this.setState({
                    edit:false
                  });window.location.reload()
                }}>X</button>
              </div>
              <div className="main-contaiiner">
                <div className="default">
                  <label className="default-text">name</label> <br></br>
                  <label className="default-text">Account no</label><br></br>
                  <label className="default-text">IFSC code</label><br></br>
                </div>
                <div className="input">
                  <input type="text" className="input-text" placeholder="name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></input> <br></br>
                  <input type="text" className="input-text" placeholder="Account no" value={this.state.accountno} onChange={(e)=>{this.setState({accountno:e.target.value})}}></input><br></br>
                  <input type="text" className="input-text special" placeholder="IFSC code" value={this.state.ifsccode} onChange={(e)=>{this.setState({ifsccode:e.target.value})}}></input><br></br>
                </div>
              </div>
              <input className="buy_btn_wallet" type="button" onClick={()=>{this.editbank()}} value="SAVE"/>
            </div>:null}

            {this.state.request ? 
            <div className="popup" style={{height:"auto"}}>
              <div className="heading_container">
                <h3 className="heading">WITHDRAW DETAILS</h3>
                <button className="close-btn-X" onClick={()=>{
                  this.setState({
                    request:false
                  });window.location.reload()
                }}>X</button>
              </div>
              <div className="main-contaiiner">
                <input className="withdraw-sonas-input" type="text" placeholder="Enter you want no of sonas" value={this.state.withdrawsonas} onChange={(e)=>{this.setState({withdrawsonas:e.target.value})}}></input>
              </div>
              <input className="buy_btn_wallet" type="button" onClick={()=>{this.request()}} value="REQUEST" style={{position:"relative",top:"10px"}}/>
            </div>:null}

            {this.state.notification ? 
            <div className="popup" style={{height:"auto",backgroundColor:"purple",top:"-100px",background:"blur"}}>
                <h3 className="heading">NOTIFICATION</h3>
                <button className="close-btn-X" onClick={()=>{
                  this.setState({
                    notification:false,join:false,edit:false,request:false
                  });window.location.reload()
                }}>X</button>
                <div className="notification-content" style={{position:"relative",height:"auto",padding:"20px",backgroundColor:"lightgray"}}>
                    <p>successfully {this.state.message}</p>
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

export default Mywallet;