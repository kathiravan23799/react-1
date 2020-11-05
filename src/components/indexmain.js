import React, { Component } from 'react'
import Index from './index'
import Footer from './footer'
import MediaQuery from 'react-responsive'

class Indexmain extends Component{
    render(){
        return(
            <React.Fragment>
                <Index/>
                {/* <Content Classname="contents1"/> */}
                <Footer/>
            </React.Fragment>
        
        )
    }
}

export default Indexmain;