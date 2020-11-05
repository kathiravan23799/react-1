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
import Axios from 'axios'

class Ticketpage extends Component{

  constructor(props){
    super(props)
    this.state={
        homeredirect:false,
        ticketredirect:true,
        scratchredirect:false,
        shopredirect:false,
        walletredirect:false,
        myaccountredirect:false,
        datas:[],
        home:true,
        reedemdata:[],
        sample:true,
        
    }
}
  componentDidMount(){
    Axios.get(`http://vavamoney.com/api/date/?tournament_list=true`,{ headers: {
      'Authorization': `token ${localStorage.getItem('token')}`
    }})
    .then((res)=>{
       console.log(res)
       this.setState({
         datas:res.data,
         
       })
       console.log(this.state.datas)
      
    })
  }

  redeem=()=>{
    Axios.get(`http://vavamoney.com/api/date/?tournament_list=true`,{ headers: {
      'Authorization': `token ${localStorage.getItem('token')}`
    }})
    .then((res)=>{
       console.log(res)
       this.setState({
         datas:res.data,
         sample:false
         
       })
       console.log(this.state.datas);
       console.log(this.state.home);
       console.log(this.state.sample);

       //window.location.reload();
      
    })
  }

  back=()=>{
    console.log("back")
    this.setState({
      sample:true
    })

    Axios.get(`http://vavamoney.com/api/date/?tournament_list=true`,{ headers: {
      'Authorization': `token ${localStorage.getItem('token')}`
    }})
    .then((res)=>{
       console.log(res)
       this.setState({
         datas:res.data,
         
       })
       console.log(this.state.datas)
      
    })

  
  }
    render(){
    return(
      this.state.sample ? 
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
        <h5 className="tc-list-title mt-3">Tickets</h5>
       
        {this.state.datas.map((r)=>{

          return(
        <div className="ticket orange-ticket">
          <img className="d-block mx-auto" src={logo1} width="60" alt="" />
          <div className="p-3 px-4">
            <div className="px-2">
              <p className="ticket-id">UUID - {r.tournament.tournamentid}</p>
          <h5 className="font-weight-bolder mb-0">{r.tournament.title}</h5>
            </div>
          </div>
          <div className="container-fluid p-0 m-0">
            <div className="row px-3">
              
              <div className="col-12">
                <small>Result : {r.tournament.time.date.end_date}</small>
                <button className="d-bock white-button">{r.tournament.bid_amount}Rs</button>
                <div
                  className="d-flex mt-2 w-100 justify-content-center align-content-center"
                >
                  {r.tournament.released ? 
                  <button className="outline-btn" value={r.id} onClick={(e)=>{Axios.get(`http://vavamoney.com/api/ticket/?id=${e.target.value}&reedem=true`,{headers:{'Authorization':`token ${localStorage.getItem('token')}`}}).then((res)=>{console.log(res);this.setState({reedemdata:res.data})});console.log(this.state.home);this.redeem()}}>Reedem</button>:null}
                  
                </div>
              </div>
            </div>
          </div>
        </div>)})}
     
        
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

    </> :

    <>
    <main className="reedem_page">
        <div className="result_container">
          <div className="result_container_image">
            {this.state.reedemdata.prize === 0 ? <p className="reedem_text">better luck next time</p> :<p >you won {this.state.reedemdata.prize} sonas</p>}
          </div>
          <button className="back_btn" onClick={()=>{this.back()}}>Back</button>
        </div>
    </main>

    </>
    )
    }
}

export default Ticketpage;