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


class Login1 extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            redirect:false,
            error:false,
            data:''

        }
    }

    
    componentDidMount(){
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
    }

    validate=(event)=>{
        if(this.state.username==='' || this.state.password===''){
            this.setState({
                error:true
            })
        }
        else{
            axios.get(`http://vavamoney.com/api/login/?username=${btoa(this.state.username)}&password=${btoa(this.state.password)}`)
            .then(res=>{
                this.setState({
                    data:res.data,
                    redirect:true,
                })
                console.log(this.state.data)
                localStorage.setItem('token',this.state.data.token)
                localStorage.setItem('sonas',this.state.data.wallet.sonas)
            })
        }
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
                    {this.state.error ? <div style={{position:"relative",left:"120px",color:"red"}}><h4 style={{fontSize:"15px"}}>* please fill below field</h4></div>:null}
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
                        <button type="button" onClick={this.validate} className="btn app-button">LOGIN{this.state.redirect ? <Redirect to="/home" datas={this.state.data}/>:null}</button>
                        <div className="form-helper">
                        <span> Create new Account </span> <a><Link to="/signup">Sign up.</Link> </a>
                        </div>
                    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                    </div>
                </section>
            </main>                                                                                                                                                                                                                                                                      
           
        </React.Fragment>
    )
    }  
}

export default Login1;


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