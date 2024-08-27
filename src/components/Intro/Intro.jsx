import React from 'react';
import "./Intro.css";
import bg from '../../assets/photo (2).png';
import { Link } from "react-scroll";
import scrollDown from '../../assets/icons8-scroll-100.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="introContent">
        <span className='hello'>Navya Srivastava <br /></span>
        <span className='introtext'> I'm Web Developer</span>
        <p className="introPara">
        creating dynamic, responsive, and user-friendly websites and applications.
        </p>
        <div className="btn-container">
          <Link to="services" smooth={true} duration={100}>
            <button className="btn">Hire me</button>
          </Link>
          <Link to="services" smooth={true} duration={100}>
            <div className="scroll-symbol-container">
              <img src={scrollDown} alt="Scroll Down" className="scroll-symbol" />
            </div>
          </Link>
        </div>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    

      <div className="contact-sidebar">
        <ul>
          <li><a href="mailto:navyasrivastava1212@gmail.com"><i className="fas fa-envelope"></i></a></li>
          <li><a href="https://www.linkedin.com/in/navyasrivastava29/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/Navya-1212/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
        </ul>
      </div>
    </section>
  );
}

export default Intro;
