import React, { Component } from 'react'
import '../assets/styles/style.css'
import vava from '../assets/images/logo1.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import axios from 'axios'
import '../assets/styles/scratch.css'
import Axios from 'axios';

class Otp extends Component{
  constructor(props){
    super(props)
    this.state={
      number:null,
      data:[],
      otp:null,
      inputotp:null,
      nextpage:false,
      newpassword:null,
      confirmpassword:null,
      redirect:false,
    }
  }

  send_otp=(e)=>{
    axios.get(`http://vavamoney.com/api/check-user/?detail=${btoa(this.state.number)}`)
    .then((res)=>{
      console.log(res)
      this.setState({
        data:res.data,
        otp:res.data.hash
      })
      localStorage.setItem('token1',res.data.token)
      console.log(atob(this.state.otp))
      console.log(localStorage.getItem('token1'))
    })
    .catch((res)=>{
      console.log(res)
    })
  }
  submit=()=>{
    if (this.state.inputotp === atob(this.state.otp)){
      this.setState({nextpage:true})
    } 
  }
  submit1=()=>{
    if(this.state.newpassword === this.state.confirmpassword){
      Axios.get(`http://vavamoney.com/api/password/dash/?password=${btoa(this.state.confirmpassword)}`,{headers:{
        'Authorization':`token ${localStorage.getItem('token1')}`
      }})
      .then((res)=>{
        console.log(res)
        this.setState({
          redirect:true
        })
        
      })
      .catch((res)=>{
        console.log(res)
      })

    }
  }
  render(){
    return(
      
      this.state.nextpage ? 
      <>
      {this.state.redirect ? <Redirect to="/login"/> :null}
      <main>
        <div className="main-container-otp">
          <form className="forgetpassword-form">
            <h4 className="new-password-containers1">NEW PASSWORD</h4>
            <div className="new-password-containers">
                <input className="app-input" type="password" placeholder="Enter new password" value={this.state.newpassword} onChange={(e)=>{this.setState({newpassword:e.target.value})}}/>
            </div>
            <div className="new-password-containers">
                <input className="app-input" type="password" placeholder="Confirm password" value={this.state.confirmpassword} onChange={(e)=>{this.setState({confirmpassword:e.target.value})}}/>
            </div>
            
          </form>
          <div className="new-password-containers">
              <button style={{position:"relative",width:"200px",left:"108px",top:"450px"}} className="btn app-button" onClick={()=>{this.submit1()}}> SUBMIT </button>
          </div>

        </div>

      </main>

      </>
      
      : 
        <div>
            <main>
  <section></section>
  <section id="otp-form">
    <div className="logo-container">
      <img src={vava} width="200" alt="" />
    </div>

    <div className="forget-container">
      <label style={{position:"relative",color:"lightgray",top:"0px",left:"60px"}}>+91</label><input name="mobile" style={{position:"relative",textAlign:"center",width:"70%",left:"30px"}} type="text" maxLength="10" className="app-input" placeholder="Enter your mobile number" value={this.state.number} onChange={(e)=>{this.setState({number:e.target.value})}}></input>
      <button className="btn app-button" style={{position:"relative",width:"100px",left:"150px",borderRadius:"10px",top:"20px"}} onClick={(event)=>{this.send_otp();event.preventDefault()}}> SENT OTP </button>
      <input style={{position:"relative",textAlign:"center",width:"70%",left:"-43px",top:"90px"}} name="otp" type="text" className="app-input" placeholder="Enter OTP" value={this.state.inputotp} onChange={(e)=>{this.setState({inputotp:e.target.value})}}/>
      <button style={{position:"relative",width:"200px",left:"100px",top:"100px"}} className="btn app-button" onClick={()=>{this.submit()}}> SUBMIT </button>
    </div>
  </section>
</main>
        </div>
    )
  }
}

export default Otp;