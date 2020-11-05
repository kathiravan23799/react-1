import React, { Component } from 'react'
import ScratchCard from 'react-scratchcard'
import logo from '../assets/images/images/won-card-bg.png'
import '../assets/styles/scratch.css'
import axios from 'axios'

class Example extends Component{
    constructor(props){
        super(props)
        this.state={
            sonas:this.props.s,

            visible:false,
            id:this.props.i
        }
    }
    settings = {
        width: 300,
        height: 203,
        image: logo,
        finishPercent: 50,
        onComplete: () =>{
            console.log('The card is now clear!')
            this.setState({
                visible:true
            })
            axios.get(`http://vavamoney.com/api/scratch/reedem/?id=${this.state.id}&reedem=true`,{headers:{
                'Authorization': `token ${localStorage.getItem('token')}`
            }})
            .then((res)=>{
                console.log("success")
            })
            .catch((res)=>{
                console.log(res)
            })
        } 
      };
    render(){
        return(
            <>
            {this.state.sonas !=0 ? 
                <div className="background"> 
                    <div className="badge">
                        <p className="waste"></p>
                    </div>
                    {this.state.visible ? <p className="won-text">you won {this.state.sonas} sonas</p>:null}
                </div> :
                <div className="background"> 
                    <div className="badge">
                        <p className="waste"></p>
                    </div>
                    {this.state.visible ? <p className="won-text">Better luck next time</p>:null}
                </div>
                }
            <ScratchCard {...this.settings} />
            </>
    
        )
    }
}

export default Example
