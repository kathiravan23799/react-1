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

import Axios from 'axios'
import '../assets/styles/scratch.css'

class Signup extends Component{

  constructor(props){
    super(props)
    this.state={
      firstname:null,
      lastname:null,
      email:null,
      mobilenumber:null,
      password:null,
      confirmpassword:null,
      success:false,
      message:null,
      redirect:false

    }
  }

  submit=()=>{
    if(this.state.password === this.state.confirmpassword){
      let data = JSON.stringify({
        username:this.state.mobilenumber,
        password:this.state.confirmpassword,
        first_name:this.state.firstname,
        last_name:this.state.lastname,
    })
      Axios.post('http://vavamoney.com/api/signup/',data,{headers:{'Content-Type': 'application/json',}})
      .then((res)=>{
        console.log(res)
        this.setState({
          success:true,
          message:"Successfully Signup"
        })
        setTimeout(()=>{
          this.setState({
            redirect:true
          })
        }, 1000);
      })
      .catch((res)=>{
        console.log("error in signin")
        this.setState({
          success:true,
          message:"Invalid credentials"
        })
        console.log(res)
      })
    }
  }
  render(){
    return(
      this.state.redirect ?<Redirect to="/login"/> :
        <main>
  <section></section>
  <section id="otp-form">
    <div className="logo-container">
      <img src={vava} width="200" alt="" />
    </div>
    <div className="container px-5 ">
      <form method="POST" className="w-100">
        <div className="row w-100 m-0 p-0 no-gutters">
          <div className="col-6 pr-2">
            <input type="text" className="app-input" placeholder=" First name" name="first_name" value={this.state.firstname} onChange={(e)=>{this.setState({firstname:e.target.value})}}/>
          </div>
          <div className="col-6 pl-2">
            <input type="text" className="app-input" placeholder=" Last name" name="last_name" value={this.state.lastname} onChange={(e)=>{this.setState({lastname:e.target.value})}}/>
          </div>
        </div>
        <div className="form-group pr-1">
          <input type="text" className="app-input" placeholder="E- Mail id" name="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} />
        </div>
        <div className="form-group pr-1">
          <input type="text" className="app-input" placeholder="Mobile number" name="username" value={this.state.mobilenumber} onChange={(e)=>{this.setState({mobilenumber:e.target.value})}}/>
        </div>
        <div className="form-group pr-1">
          <input type="text" type="password" className="app-input" placeholder="Password" name="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} />
        </div>
        <div className="form-group pr-1">
          <input type="text" type="password" className="app-input" placeholder="Confirm Password" value={this.state.confirmpassword} onChange={(e)=>{this.setState({confirmpassword:e.target.value})}} />
        </div>
        
      </form>
      <button type="submit" className="btn app-button" onClick={()=>{this.submit()}}>Sign Up</button>
        <div className="form-helper">
          <span> Already have an account ? </span> <a><Link to="/login">Log in.</Link> </a>
        </div>
    </div>
  </section>
  {this.state.success ? <div className="message">
      <p>{this.state.message}</p>
  </div>:null}
</main>
    )
  }
}

export default Signup;