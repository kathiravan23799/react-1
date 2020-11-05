import React, { Component } from 'react'
import '../assets/styles/style.css'

class Home extends Component{

  render(){
    return(
        <>
          <header id="app-header">
            <div className="header-left">
              <img src="{% static 'mobile/images/logo.png' %}" alt="" className="header-logo" />
            </div>
            <div className="header-right">
              <div className="header-widget">
                <a href="{% url 'vava:wallet' %}">
                  <img src="{% static 'mobile/images/header-icon.png' %}" alt="" />
                </a>
              </div>
              <div className="profile-icon">
                <a href="{% url 'vava:account' %}">
                <img
                  src="{% static 'mobile/images/profile.png' %}"
                  alt=""
                />
              </a>
              </div>
            </div>
          </header>
          <main>
          <section className="home-banner-section w-100">
            <div className="home-slider-wrapper">            
              <div className="swiper-container">
                <div className="swiper-wrapper">              
                  <div className="swiper-slide">
                    <img src="/media/{{ i.image }}" className="img-fluid d-block mx-auto" alt="" />
                  </div>              
                </div>
              </div> 
              <img src="{% static 'mobile/images/arrow-left.png' %}" className="home-slider-arrow arrow-left" alt="" />
              <img src="{% static 'mobile/images/arrow-right.png" className="home-slider-arrow arrow-right" alt="" />
            </div>
          </section>
          <hr/>
          <section className="daily-draw" style="">
            <div className="container" style="width: 100%;position: relative;align-items: center;justify-items: center;display: flex;">
              <div className="col-md-4">
                <a href="{% url 'vava:draw' %}?weekly=true">
                  <div className="card" style="background: linear-gradient(132.52deg,#ffd200 -5.34%,#ff7f00 104.76%);padding:10px;font-weight: bold;">
                    Daily<br/>Draw
                  </div>
                </a>
              </div>
              <div className="col-md-4" >
                <a href="{% url 'vava:draw' %}?weekly=true">
                  <div className="card" style="background: linear-gradient(132.52deg,#ffd200 -5.34%,#ff7f00 104.76%);padding:10px;font-weight: bold;">
                    Weekly<br/>Draw
                  </div>
                </a>
              </div>

              <div className="col-md-4" >
                <a href="{% url 'vava:draw' %}?monthly=true">
                  <div className="card" style="background: linear-gradient(132.52deg,#ffd200 -5.34%,#ff7f00 104.76%);padding:10px;font-weight: bold;">
                    Monthly<br/>Draw
                  </div>
                </a>
              </div>
            </div>
          </section>
          <hr/>

          <section className="home-tournaments-list">
              <h5 className="tc-list-title">Special Tournaments</h5>
              
              <a href="{% url 'vava:tournamentdetails' pk=i.id %}?participate=false">
              <div className="tc card-orange">
                <div className="container-fluid p-0">
                  <div className="row no-gutters">
                    <div className="col-8">
                      <h5 className="tc-title">Diwali</h5>
                      <div className="row w-100 m-0 p-0 no-gutters">
                        <div className="col-7">
                          <p className="tc-meta"><img src="{% static 'mobile/images/trophy.png' %}" alt="" /> First price</p>
                          <p className="tc-meta"><img src="{% static 'mobile/images/timer.png' %}" alt="" /> Results Date</p>
                          <p className="tc-meta"><img src="{% static 'mobile/images/users.png' %}" alt="" />Sonas</p>
                        </div>
                        <div className="col-5">
                          <p className="tc-data">10000/-</p>
                          <p className="tc-data">20-10-2020</p>
                          <p className="tc-data">100</p>
                        
                        </div>
                      </div>
                      <div className="progress position-relative">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style="width: {{ i.percentage }}%"
                          aria-valuenow="{{ i.percentage }}"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <small
                          className="progress-number justify-content-center d-flex position-absolute w-100"
                          >5%percentage remaining</small
                        >
                      </div>
                    </div>
                    <div className="col-4 px-2">
                      <img
                        className="tc-image"
                        src="{% static 'mobile/images/firecracker.png' %}"
                        className="img-fluid d-block mx-auto"
                        alt=""
                      />
                      <span className="tc-amount"> 100 </span>
                    </div>
                  </div>
                </div>
              </div>
              </a> 
            </section>
          </main>
          <footer id="app-menu">
            <div className="app-menu-inner">
              <a className="app-menu-item active" href="{% url 'vava:dashboard' %}">
                <img src="{% static 'mobile/images/menu-home.png' %}" alt="" />
              </a>
              <a className="app-menu-item"  href="{% url 'vava:ticket' %}">
                <img src="{% static 'mobile/images/menu-voucher.png' %}" alt="" />
              </a>
              <a className="app-menu-item" href="{% url 'vava:cards' %}">
                <img src="{% static 'mobile/images/menu-tournament.png' %}" alt="" />
              </a>
              <a className="app-menu-item" href="{% url 'vava:shop' %}">
                <img src="{% static 'mobile/images/menu-store.png' %}" alt="" />
              </a>
            </div>
          </footer>
        </>
    )
    }
}

export default Home;