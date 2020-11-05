import React, { Component, useEffect, useState } from 'react'
import js from '../assets/js/script'
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
  import base64 from 'react-native-base64'
  import utf8 from 'utf8'


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            redirect:false,
            encoded:'',
            encoded1:''
        }
    }

    componentDidMount(){
        console.log(this.state.username)
        console.log(this.state.password)
        console.log(this.state.encoded)
        console.log(this.state.encoded1)
    }

    validate=(event)=>{
        console.log("validate")

        var text = this.state.username;
        var encodeduser=btoa(text);
        console.log(encodeduser);

        var text1 = this.state.password;
        var encodedpassword =btoa(text1)
        console.log(encodedpassword);
        this.setState({
            encoded:encodeduser,
            encoded1:encodedpassword,
        })
        axios.get(`http://vavamoney.com/api/login/?username=${this.state.encoded}&password=${this.state.encoded1}`)
        .then(res=>{
            console.log(this.state.encoded)
            console.log(this.state.encoded1)
            console.log(res)
        })
        this.setState({
            redirect:true
        })   
        this.setState({
            username:'',
            password:'',
            encoded:'',
            encoded1:'',
        })
    }
    
    render(){
    return(
        <React.Fragment>
            
            <main>
                <section></section>
                <section id="otp-form">
                    <div className="logo-container">
                    <img src={vava} width="200" alt="" />
                    </div>
                    <div className="container px-5 flex-center">
                    <div className="w-100">
                        <div className="form-group">
                        <input type="text" name="username" className="app-input" placeholder="Enter email or mobile number" value={this.state.username} onChange={(event)=>{
                            this.setState({
                                username:event.target.value
                            })
                        }} />
                        </div>
                        <div className="form-group">
                        <input type="password" name="password" className="app-input" placeholder="Enter password" value={this.state.password} onChange={(event)=>{
                            this.setState({
                                password:event.target.value
                            })
                        }} />
                        </div>
                        <div className="form-helper mb-3">
                        <span><a><Link to="/otp">Forget password ? click here</Link></a> </span>
                        </div>
                        <button type="button" onClick={this.validate} className="btn app-button">LOGIN{this.state.redirect ? <Redirect to="/home"/>:null}</button>
                        <div className="form-helper">
                        <span> Create new Account </span> <a><Link to="/signup">Sign up.</Link> </a>
                        </div>
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    </div>
                </section>
            </main>                                                                                                                                                                                                                                                                                                                                                         


            {/* <!-- Scripts --> */}
            <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"
            ></script>
            <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"
            ></script>
            <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"
            ></script>
            {/* <!-- Template script [important & requires jquery] - always last --> */}
            <script>
                
            </script>
        </React.Fragment>
    )
    }  
}

export default Login;


// class Login extends Component{


//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }

//     increment(){
//         this.state.count+=1
//     }
//     decrement(){
//         this.state.count-=1
//     }
//     render(){
//         return(
//             <>
//             <button onClick={this.decrement}>-</button>
//             <span>{this.state.count}</span>
//             <button onClick={this.increment}>+</button>
//             </>
//         )

//     }
 
// }

// export default Login;