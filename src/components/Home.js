import React from "react";
import {Link} from "react-router-dom";
import "../index.css";
import img1 from "./images/WhatsApp Image 2023-02-03 at 6.58.53 PM.jpeg";

const Home = () => {
return(
    <>

        <header className="header">
    <a href="#" className="logo">Portfolio <span>Page</span></a>
    <nav className="navbar">
    <ul>
        <li><Link to="/" className="active"><span>Home</span></Link></li>
        <li><Link to="/service" className="active">Service</Link></li>
        <li><Link to="/about" className="active">About</Link></li>
        <li><Link to="/contact" className="active">Contact</Link></li>

    </ul>

    </nav>
    </header>


    {/* home section */}

    <section className="home" id="home">
        <div className="home-detail">
            <h3>Hello It's Me</h3>
            <h1>Vikash Khokhar</h1>
            <h3>And I'm <span class="textline">  Web Developer</span></h3>
            <p> Web designer and developer. I create custom websites to help   <br/>businesses do better online.</p><br/>
            <button className="btn">Download CV</button>
        </div>
        <div className="home-img">
            <img src= {img1} alt="loading"/>
        </div>
    </section>


    </>
)
}

export default Home;