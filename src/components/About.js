import React from "react";
import {Link} from "react-router-dom";
import img1 from "./images/WhatsApp Image 2023-02-03 at 6.58.53 PM.jpeg";


const About = () =>{
    
    return(
    
    <>
        <header className="header">
    <a href="#" className="logo">Portfolio <span>Page</span></a>
    <nav className="navbar">
    <ul>
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/service" className="active">Service</Link></li>
        <li><Link to="/about" className="active"><span>About</span></Link></li>
        <li><Link to="/contact" className="active">Contact</Link></li>
        
    </ul>
    </nav>
    </header>


    {/* about section */}
    <section className="about" id="about">
        <div className="about-img">
            <img src= {img1} alt="loading "/>
        </div>
       
        <div className="about-section">
            <h2 className="allheading">About<span> Us</span></h2><br/>
            <h3>Web Developer</h3>
            <p>  I am a web developer, currently living in Jaipur. I enjoy building everything from small bussiness sites to rich interactive weeb apps. If you are a bussiness seeking a web presence or an employer looking to hire,you can get in touch with me here</p>
            <a href="#" className="btn">Read More</a>            
        </div>
    </section>
    
    

        {/* footer section */}

    <footer className="footer">
        <div className="text">
            <p>copyright@2023 by Vikash Khokhar || All Rights Reserved</p>
        </div>
        <div className="footerup">
            <a href="#"><i class='bx bx-up arrow-alt'></i></a>
        </div>
    </footer>
    </>
    )
}




export default About;