import React from "react";
import {Link} from "react-router-dom";
import "../index.css";

const Contact = () =>{
    return(
        <>
        <header className="header">
    <a href="#" className="logo">Portfolio <span>Page</span></a>
    <nav className="navbar">
    <ul>
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/service" className="active">Service</Link></li>
        <li><Link to="/about" className="active">About</Link></li>
        <li><Link to="/contact" className="active"><span>Contact</span></Link></li>
        
    </ul>

    </nav>
    </header>


        
         {/* create a contact section  */}

<section className="contact" id="contact">
    <h2 className="allheading">Contact <span>Us</span></h2>
    <form action="#">
        <div className="input-box">
            <input type="text" placeholder="Full Name"/>
            <input type="email" placeholder="Email"/>
        </div>

        <div className="input-box">
            <input type="tel" placeholder="Mobile Number"/>
            <input type="text" placeholder="Subject For"/>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea> 
        <input type="submit" class="btn" value="Send Message"/>
    </form>
</section>

        </>
    )

}


export default Contact;