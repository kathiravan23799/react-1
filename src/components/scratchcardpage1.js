import React, { Component } from 'react' 
import '../assets/styles/popup.css'
import '../assets/styles/scratch.css'
import '../assets/styles/style.css'
import '../assets/styles/content.css'
import '../assets/styles/index.css'
import axios from 'axios'
import Example from './scratchcardpage'
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';


class Scratchpageone extends Component{
    constructor(props){
        super(props)
        this.state={
            sonas:this.props.location.data1,
            id:this.props.location.data
        }
    }
    render(){
        return(
            <>
            <main className="scratch-page">
            <div className="main-container">
                <Example s={this.state.sonas} i={this.state.id}/>
                <Link to="/scratchcardpage"><button className="back-button">back</button></Link>
            </div>
        </main>
            </>
        )

    }
}

export default Scratchpageone