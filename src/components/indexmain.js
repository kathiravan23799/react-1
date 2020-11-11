import React, { Component } from 'react'
import Index from './index'
import Footer from './footer'
import MediaQuery from 'react-responsive'
import '../assets/styles/new.css'
import logo from '../assets/images/logo1.png'
import sidemobile from '../assets/assets/img/mobile/slider-left-img.png.pagespeed.ce.dIGAQ5ob7I.png'



import { Link, Redirect } from 'react-router-dom'

class Indexmain extends Component{
    render(){
        return(
            <React.Fragment>
                

<header id="header">
<div className="header-area" style={{backgroundColor: "purple"}}>
<div className="container">
<div className="row">
<div className="menu-area">
<div className="col-md-3 col-sm-12 col-xs-12" style={{display:"flex"}}>
<div className="logo">
<a href="index.html"><img className="logo-image" src={logo}></img></a>
</div>
</div>
<div className="col-md-9 hidden-xs hidden-sm">
<div className="main-menu">
<nav className="nav-menu">
<ul style={{width:"100%",display:"flex",listStyle:"none",position:"relative",left:"330%",top:"-10px"}}>
<li className="active" id="link-menu"><a href="#home">Home</a></li>

<li id="link-menu"><a href="#screenshot">Screenshot</a></li>


<li id="link-menu"><a href="https://play.google.com/store/apps/details?id=com.app.vava&amp;hl=en">Download</a></li>

</ul>
</nav>
</div>
</div>
<div className="col-sm-12 col-xs-12 visible-sm visible-xs">
<div className="mobile_menu"></div>
</div>
</div>
</div>
</div>
</div>
</header>
<div className="index-main-container">
<section className="slider-area" style={{backgroundColor:"purple"}} id="home">
  
    
  <div className="container" style={{padding:"20px"}}>
   
    <a style={{position: "relative",left: "-500px",top: "-100px"}}><Link to="/login"><button style={{position:"relative",width:"200px",borderRadius:"20px",border:"none",outline:"none",backgroundColor:"#f9b827"}} className="footer-btn">Play now</button></Link></a>
    <a style={{position: "relative",left: "-500px",top: "-100px"}} className="download-btn-link" href="https://play.google.com/store/apps/details?id=com.app.vava&amp;hl=en"><button style={{position:"relative",width:"200px",borderRadius:"20px",border:"none",outline:"none",backgroundColor:"#f9b827"}} className="footer-btn">Download now</button></a>
  <div className="col-md-6 col-sm-6 hidden-xs">
  <div className="row">
  <div className="slider-img">
  <img className="side-mobile" src={sidemobile} alt="slider image"></img>
  </div>
  </div>
  </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="row text-row">
              <div className="slider-inner text-right">
  
                  <h3 className="text-row-h3">Join us now! Unravel the treasures that can change your life and build you a fortune with just an insanely simple entry.</h3> <p style={{color: "white",marginBottom:"35px"}}>VaVa is raring to go. What are you waiting for! Unleash your luck, Redesign your life when you redeem your winning!
                  </p>
                  <a className="playnow-btn" href="#"><button className="footer-btn">Play now</button></a>
              </div>
          </div>
      </div>
  </div>
  </section>
<div>
  <p>Sir Fabian Ware (1869–1949) was a British journalist and the founder of the Imperial War Graves Commission (IWGC), now the Commonwealth War Graves Commission. He travelled to the Transvaal Colony where he became Director of Education in 1903. Two years later he became editor of The Morning Post. He expanded the paper but was forced to retire in 1911. When the First World War started, Ware was appointed commander of a mobile ambulance unit and began marking and recording the graves of those killed. In 1916 the Department of Graves Registration and Enquiries was created with Ware at its head. On 21 May 1917 the IWGC was founded; Ware served as its vice-chairman. He ended the war as a major-general, having been mentioned in despatches twice. Post-war, Ware was heavily involved in the IWGC's function. When the Second World War broke out, he continued to serve as vice-chairman of the IWGC and was re-appointed director-general of Graves Registration and Enquiries. (Full article...)</p>
  Sir Fabian Ware (1869–1949) was a British journalist and the founder of the Imperial War Graves Commission (IWGC), now the Commonwealth War Graves Commission. He travelled to the Transvaal Colony where he became Director of Education in 1903. Two years later he became editor of The Morning Post. He expanded the paper but was forced to retire in 1911. When the First World War started, Ware was appointed commander of a mobile ambulance unit and began marking and recording the graves of those killed. In 1916 the Department of Graves Registration and Enquiries was created with Ware at its head. On 21 May 1917 the IWGC was founded; Ware served as its vice-chairman. He ended the war as a major-general, having been mentioned in despatches twice. Post-war, Ware was heavily involved in the IWGC's function. When the Second World War broke out, he continued to serve as vice-chairman of the IWGC and was re-appointed director-general of Graves Registration and Enquiries. (Full article...)
</div>
</div>

{/*<div className="service-area" style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div className="card card-image"
        style={{backgroundImage:"url(../assets/assets/img/webbanner2.jpg)",width:"75%",height:"250px",borderRadius:"20px",backgroundSize:"cover",backgroundRepeat:"repeat",objectFit:"cover"}}>
        <p></p>
      </div>
</div>

<div className="about-area ptb--100">
<div className="container">
<div className="section-title">
<h2>About App</h2>
<p>Online Quiz Tournament </p>
</div>
<div className="row d-flex flex-center">
<div className="col-md-6 col-sm-6 hidden-xs">
<div className="about-left-img">
<img src="assets/img/about/abt-left-img.png.pagespeed.ce.6UA1j6ORoi.png" alt="image"></img>
</div>
</div>
<div className="col-md-6 col-sm-6 col-xs-12 d-flex flex-center">
<div className="about-content">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiuiosmod terttmpor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. doliuor in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur. cdatat non proident</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tuiempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
</div>
</div>
</div>
</div>
</div>

<section className="screen-area bg-gray ptb--100" id="screenshot">
<div className="container">
<div className="section-title">
<h2>Screenshot</h2>
<p>VAVA App Screenshots</p>
</div>
<img className="screen-img" src="assets/img/mobile/screen-slider.png.pagespeed.ce.Ti30QlzYGF.png" alt="mobile screen"></img>
<div className="screen-slider owl-carousel">
<div className="single-screen">
<img src="assets/img/mobile/screen-slider/screen1.jpg.pagespeed.ce.L3pQI0kHod.jpg" alt="mobile screen"></img>
</div>
<div className="single-screen">
<img src="assets/img/mobile/screen-slider/screen2.jpg.pagespeed.ce.osIqvl2DMQ.jpg" alt="mobile screen"></img>
</div>
<div className="single-screen">
<img src="assets/img/mobile/screen-slider/xscreen3.jpg.pagespeed.ic.JeQlVqcwL-.jpg" alt="mobile screen"></img>
</div>
<div className="single-screen">
<img src="assets/img/mobile/screen-slider/xscreen4.jpg.pagespeed.ic.ydaN1PKUUI.jpg" alt="mobile screen"></img>
</div>
<div className="single-screen">
<img src="assets/img/mobile/screen-slider/xscreen5.jpg.pagespeed.ic.tbgsrLQ5k4.jpg" alt="mobile screen"></img>
</div>
<div className="single-screen">
<img src="assets/img/mobile/screen-slider/xscreen3.jpg.pagespeed.ic.JeQlVqcwL-.jpg" alt="mobile screen"></img>
</div>
<div className="single-screen">
<img src="assets/img/mobile/screen-slider/xscreen4.jpg.pagespeed.ic.ydaN1PKUUI.jpg" alt="mobile screen"></img>
</div>
</div>
</div>
</section>


<div className="clinet-area bg-gray ptb--100">
<div className="container">
<div className="client-carousel owl-carousel">
<img src="assets/img/client/xclient-img.png.pagespeed.ic.xSOVuAFTVo.png" alt="client image"></img>
<img src="assets/img/client/xclient-img1.png.pagespeed.ic.8TcLlTkoA6.png" alt="client image"></img>
<img src="assets/img/client/xclient-img2.png.pagespeed.ic.y0qVnrWPx0.png" alt="client image"></img>
<img src="assets/img/client/xclient-img3.png.pagespeed.ic.2jWklbJ_rZ.png" alt="client image"></img>
<img src="assets/img/client/xclient-img1.png.pagespeed.ic.8TcLlTkoA6.png" alt="client image"></img>
</div>
</div>
</div>


<div className="mt-5 pt-5 pb-5 footer" style={{backgroundColor: "purple",padding: "30px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>Contact us</h2>
              <p className="pr-5 text-white-50">Sonas Gaming Private Limited</p><p>Mail: sonasgamingpvtltd@gmail.com</p><p>Mobie No: 9867546790</p>
              <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Links</h4>
                <ul className="m-0 p-0">
                  <li>- <a href="#">About us</a></li>
                  <li>- <a href="#">Privacy and Policy</a></li>
                  <li>- <a href="#">Refund</a></li>
                  <li>- <a href="#">Cancellation Policies</a></li>
                  <li>- <a href="#">Terms & Conditions</a></li>
                  
                </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
              <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright">
              <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
        </div> */}
                {/* <Index/>
                 <Content Classname="contents1"/> 
                <Footer/> */}
            </React.Fragment>
        
        )
    }
}

export default Indexmain;