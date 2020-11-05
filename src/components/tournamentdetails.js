import React, { Component } from 'react'

import '../assets/styles/style.css'
import '../assets/styles/popup.css'
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
import Axios from 'axios'
import '../assets/styles/scratch.css'

class Tournamentdetails extends Component{
  constructor(props,ID){
    super(props)
    this.state={
        homeredirect:false,
        ticketredirect:false,
        scratchredirect:false,
        shopredirect:false,
        walletredirect:false,
        myaccountredirect:false,
        datas:[],
        prize:[],
        result_date:[],
        join:false,
        numberoftickets:null,
        quiz:[],
        quizpage:false,
        title:this.props.location.data1,
        notification:false,

       
    }
}

  componentDidMount(){
    this.api();
    
  }
  api(){
    Axios.get(`http://vavamoney.com/api/date/?tournament_id=${localStorage.getItem('tournamentid')}`)
    .then((res)=>{
      console.log(res)
      this.setState({
        datas:res.data,
        prize:res.data.prize,
        result_date:res.data.time.date
        
      })
    })
    console.log(this.state.datas)
    console.log(this.state.prize)
    
  }

  buyticket=()=>{
    Axios.get(`http://vavamoney.com/api/quiz/?id=${this.props.location.data}`)
    .then((res)=>{
      console.log(res)
      this.setState({
        quiz:res.data,
        quizpage:true
      })
      console.log(this.state.quiz)
    })
    Axios.get(`http://vavamoney.com/api/get-sonas/`,{headers:{
      'Authorization': `token ${localStorage.getItem('token')}`
    }})
    .then((res)=>{
      console.log(res)
      localStorage.setItem('sonas',res.data.sonas)
    })
  
  }

  submit_btn(){
    Axios.get(`http://vavamoney.com/api/date/?id=${this.props.location.data}&bulk_participate=${this.state.numberoftickets}`,{ headers: {
      'Authorization': `token ${localStorage.getItem('token')}`
    }})
    .then((res)=>{
       console.log(res)
       this.setState({
         numberoftickets:0,
         notification:true,
         join:false,quizpage:false
       })
       window.location.reload()
       setTimeout(()=>{
        this.setState({
          
          notification:false,
          
        })
      }, 1000);
        
    })
  }

    render(){
      
      // this.api()
        return(
          this.state.quizpage ? <> 
            <div className="quiz-main-container">
              <div className="quiz-container">
                  <h3>Quiz Tournament</h3>

                  <div className="questions">

                    <h4>{this.state.title}</h4>
                      {this.state.quiz.map((r,index)=>{
                        return(
                          <div className="question-collection">
                            <p>{index+1}. {r.question}</p>
                            <div className="options">
                              <form>
                                <input type="radio" name="gender" id={r.a} value={r.a}/> <label>{r.a}</label> <br></br>
                                <input type="radio" name="gender" id={r.b} value={r.b}/> <label>{r.b}</label> <br></br>
                                <input type="radio" name="gender" id={r.c} value={r.c}/> <label>{r.c}</label> <br></br>
                              </form>
                            </div>
                          </div>
                        )
                      })}
                      <input className="submit-btn" type="button" value="Submit Answer" onClick={()=>{this.submit_btn()}}/>
                  </div>
              </div>
            </div>
            
             </>  :
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
            {this.state.notification ? <div className="message">
              <p><small>answers submited successfully<br>
                    </br> to view results go to ticket page </small></p>
          </div>:null}

<main id="app-main">
    
      <section className="home-tournaments-list mt-4">
        <h5 className="tc-list-title">Quiz Tournament</h5>
        <div className="tc card-yellow">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-8">
                <h5 className="tc-title">{this.state.datas.title}</h5>
                <div className="row w-100 m-0 p-0 no-gutters">
                  <div className="col-12">
                    <h6>Entry : {this.state.datas.bid_amount}rs</h6>
                  </div>
                </div>
                <div className="progress position-relative">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: `${this.state.datas.percentage}`}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <small
                    className="progress-number justify-content-center d-flex position-absolute w-100"
                    >500 slots remaining</small
                  >
                </div>
                <p className="small mb-0 mt-1">ID : {this.state.datas.tournamentid}</p>
              </div>
              <div className="col-4 px-2">
                <img
                  className="tc-image"
                  src="./images/money1.png"
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section className="home-tournaments-list mt-2">
        <div className="row no-gutters">
          <div className="col-8 pr-2">
            <button className="btn outline-btn golden">
              <img src="./images/file_copy.png" className="mr-2" alt="" /> Refer friends
              & earn Sonas
            </button>
          </div>
          <div className="col-4 pl-1">
            <button className="gold-btn" onClick={()=>{
              this.setState({
                join:true
              })
            }}>Join</button>
          </div>
        </div>
      </section>

      <section className="home-tournaments-list mt-3">
        <div className="bg-wrapper">
          <ul className="list-unstyled p-3 m-0">
            <li className="bottom-border">
              <div className="row mb-2">
                <div className="col-6">
                  <p className="secondary-text mb-0">
                    <img
                      src="./images/trophy-golden.png"
                      width="16"
                      className="mr-2"
                      alt=""
                    />
                    First price
                  </p>
                </div>
                <div className="col-6"><p className="mb-0">{this.state.datas.total_prize}</p></div>
              </div>
            </li>
            <li className="bottom-border">
              <div className="row my-2">
                <div className="col-6">
                  <p className="secondary-text mb-0">
                    <img
                      src="./images/time-golden.png"
                      width="16"
                      className="mr-2"
                      alt=""
                    />
                    Result Date
                  </p>
                </div>
                  <div className="col-6"><p className="mb-0">{this.state.result_date.end_date}</p></div>
              </div>
            </li>
            <li className="">
              <div className="row my-2">
                <div className="col-6">
                  <p className="secondary-text mb-0">
                    <img
                      src="./images/user-golden.png"
                      width="16"
                      className="mr-2"
                      alt=""
                    />
                    Bid sonas
                  </p>
                </div>
                <div className="col-6"><p className="mb-0">{this.state.datas.bid_amount}</p></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="home-tournaments-list mt-3 mb-3">
        <div className="bg-wrapper text-center">
          <h6 className="text-center secondary-text my-3">Prizes</h6>
          <div className="container">
            <div className="row bottom-border pb-2 mb-2">
              <div className="col-6">
                <p className="mb-0"><strong> Rank </strong></p>
              </div>
              <div className="col-6">
                <p className="mb-0"><strong> Prizes </strong></p>
              </div>
            </div>
            {this.state.prize.map((r)=>{
              return(
                <div className="row bottom-border pb-2 mb-2">
                    <div className="col-6">
                      {r.rank_from === r.rank_to ? <p className="mb-0">{r.rank_from}</p> : <p className="mb-0">{r.rank_from} - {r.rank_to}</p> }
                      
                    </div>
                    <div className="col-6">
                      <p className="mb-0">{r.prize}</p>
                    </div>
                </div>
              )
            })}
            
          </div>
        </div>
      </section>
    </main>
            {this.state.join ? 
            <div className="popup">
              <div className="heading_container">
                <h3 className="heading">BUY TICKETS</h3>
                <button className="close-btn-X" onClick={()=>{
                  this.setState({
                    join:false
                  })
                }}>X</button>
              </div>
              
              <input type="text" placeholder="Enter you want tickets" className="input_text" onChange={(e)=>{this.setState({numberoftickets:e.target.value})}} value={this.state.numberoftickets}></input>
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
              <input className="buy_btn" type="button" onClick={()=>{this.buyticket()}} value="BUY"/>
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

export default Tournamentdetails;