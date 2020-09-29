import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who I am</h2>
                    <p>I am a Mumbai born, Bangalore raised techie, who has spent a majority of my childhood in Michigan and Atlanta. I am a HUGE basketball and anime fan (Slam Dunk is my favorite anime). My other interests are reading about entrepreneurs and influential individuals. Also, I write to my LinkedIn audience about anything I find interesting in the tech sphere so you can check it out <a href="https://www.linkedin.com/in/hrishikesh-thakkar-5210/">here</a> and 
                     <a href="https://medium.com/@kesh5210"> here</a>.</p>
                    <p>From a professional standpoint I'm a Software Engineer in Bangalore currently. I graduated from NITK Surathkal in 2019. In pursuit of a Post Graduate Diploma from IIIT-B in Blockchain Software Engineering.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I work on</span>
                <h2 className="colorlib-heading">Areas of Focus</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                   <i className = "icon-android" />
                </span>
                <div className="desc">
                    <h3>Android Development </h3>
                    
                       Reworking access controls to accommodate a new user role. New Layouts, Activities and tweaking existing code. <br/><br/>
                       Working with Volley to handle API calls. <br/><br/>
                       Integrating Biometrics with oAuth Refresh Token. <br/><br/>
                       Implemented AES Encryption used to encrypt the Refresh Token. In tandem with AndroidKeyStore.
                       <br/><br/>
                       Created a Real Time Implementation of Travelling Salesman with Maps API.<br/><br/>
                       Created Periodic background notifications using WorkManager.<br/><br/>
                       Integrated force and flexible updates.
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Back End Development</h3>
                    Developed Rest APIs using SpringBoot and Hibernate.<br/><br/>
                    Worked with Stripe APIs for enabling connected accounts using a Java Servlet.<br/><br/>
                    Developed an Alexa Skill to register a new customer in Java using ASK SDK and AWS Lambda to host the controller. <br/><br/>
                     Created a Sentiment Analyzer of Facebook, Twitter and LinkedIn posts using Google APIs and REST APIs of the social media sites.
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-group"></i>
                </span>
                <div className="desc">
                    <h3>Blockchain</h3>
                    Developed a small scale functional Blockchain with consensus implmented.<br/><br/>
                    Created a basic cryptocurrency with Proof of Work using Python.<br/><br/>
                    Researched on an approach to improve Cluster Mining success by using Dynamic Binning.<br/> <br/>
                    Developing Smart Contracts and hosting them to test Ethereum network using Ganache.
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}