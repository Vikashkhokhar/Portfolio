import React from "react";
import {Link} from "react-router-dom";
import "../index.css";


const Service = () => {
return(
    <>
    <header className="header">
    <a href="#" className="logo">Portfolio <span>Page</span></a>
    <nav className="navbar">
    <ul>
       <li><Link to="/" className="active">Home</Link></li>
       <li><Link to="/service" className="active"><span>Service</span></Link></li>
       <li><Link to="/about" className="active">About</Link></li> 
       <li><Link to="/contact" className="active">Contact</Link></li>
      
    </ul>
    </nav>
    </header>

    <section className="service" id="service">
        <h2 className="allheading">Our <span>Services</span></h2>

    <div className="service-section">

        <div className="service-box">
            <i className='bx bx-code-alt' ></i>
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eligendi obcaecati enim quam praesentium molestias? Sint neque perspiciatis sunt aspernatur.</p>
            <a href="#" className="btn">Read more</a>
        </div>

        <div className="service-box">
            <i className='bx bx-bar-chart-alt'></i>
            <h3>Full Stack Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eligendi obcaecati enim quam praesentium molestias? Sint neque perspiciatis sunt aspernatur.</p>
            <a href="#" className="btn">Read more</a>
        </div>

        <div className="service-box">
            <i className='bx bxl-adobe' ></i>
            <h3>Photoshop</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eligendi obcaecati enim quam praesentium molestias? Sint neque perspiciatis sunt aspernatur.</p>
            <a href="#" className="btn">Read more</a>
        </div>
    </div>
    </section>
</>
)
}
export default Service;