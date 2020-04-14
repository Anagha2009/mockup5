import React from 'react';
import bg from '../images/illustration-mockups.svg';
import logo from '../images/logo.svg';
import loc from '../images/icon-location.svg';
import email  from '../images/icon-email.svg';
import phone from '../images/icon-phone.svg';
import bg1 from '../images/illustration-grow-together.svg';
import bg3 from '../images/illustration-your-users.svg';
import bg2 from '../images/illustration-flowing-conversation.svg';
const Layout =()=>{
    return(
        <div>
            <div className="jumbotron jumbotron-fluid head">
                <img src={logo} alt="" className="logo"/>
                <button className="try float-right"> <strong>Try It Free</strong></button>
                <h3><strong>Build The Community <br></br>Your Fans Will Love</strong></h3>
                <p className="p1"> Huddle re-imagines the way we build communities. You have <br></br>a voice, but so does your audience. 
                Create connections with<br></br> your users as you engage in genuine discussion. </p>
                <button className="get">Get Started For Free</button>
                <img src={bg} alt="" className="float-right mockup"/>
            </div>
            <div className= "container">
            <div className="card card1">
                     <div className="row no-gutters">
                            <div className="col-md-7">
                            <h4>Grow Together</h4>
                            <p className="p2"> Generate meaningful discussions with your audience and <br></br>build a strong, loyal community. 
                            Think of the insightful <br></br>conversations you miss out on with a feedback form</p>
                            </div>
                            <div className="col-md-5">
                             <img src={bg1} alt="" className="img"/>
                            </div>
                     </div>
                     </div>
                
                    <div className="card card2">
                     <div className="row">
                            <div className="col-md-5">
                            <img src={bg2} alt="" className="img"/>
                            </div>
                            <div className="col-md-7">
                            <h4>Flowing Conversations</h4>
                            <p className="p2"> You wouldn't paginate a conversation in real life, so why do<br></br> it online? Our threads 
                             have just-in-time loading for a more <br></br>natural flow. </p>
                            </div>
                           
                     </div>
                    </div>
                    <div className="card card3">
                     <div className="row">
                            <div className="col-md-7">
                            <h4>   Your Users</h4>
                            <p className="p2"> It takes no time at all to integrate Huddle with your app's<br></br> authentication solution. 
                            This means, once signed in to <br></br>your app, your users can start chatting immediately. </p>
                            </div>
                            <div className="col-md-5">
                             <img src={bg3} alt="" className="img"/>
                            </div>
                     </div>
                     </div>
                    </div>
                    <section>
                        <div className="section">
                        <div className="card card-section">
                            <h4>Ready To Build Your Community?</h4>
                            <button className="btn btn-floating free">Get Started For Free</button>
                        </div>
                        </div>
                    </section>  
                    <footer>
                    <div className="foot jumbotron jumbotron-fluid">
                      <div className="row">
                        <div className="col-5">
                          <img src={logo} alt="" className="logo1"/>
                          <img src={loc} alt="" id="loc"/>
                          <img src={phone} alt="" id="phone"/>
                          <img src={email} alt="" id="email"/>
                          <div id="content">
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua
                            </p>
                        <p> +1-543-123-4567</p>
                        <p>example@huddle.com</p>
                        </div>
                        </div>
                        <div className="col-2 about">
                        About Us<br></br>
                        What We Do<br></br>
                        FAQ
                        </div>
                        <div className="col-2 about">
                        Career<br></br>
                        Blog<br></br>
                        Contact Us
                        </div>
                        <div className="col-3">
                        <div className="icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        </div>
                        <span>&copy; Copyright 2018 Huddle. All rights reserved.</span>
                        </div>
                        
                        </div>
                    </div>
                    </footer>
         </div>
                                    
            
    )
}
export default Layout;