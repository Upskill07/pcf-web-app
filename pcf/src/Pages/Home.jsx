import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../Pages/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandshake, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FaMapMarkerAlt,  FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaHandHoldingHeart} from 'react-icons/fa';
import { FaSchool,  FaUsers, FaGraduationCap, FaLaptop, FaTree } from "react-icons/fa";
import { GiSchoolBag,GiFruitTree } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import pcfvideo from "../assets/img/pcfvideo.mp4";
import LiveProject from "../components/LiveProject.jsx";

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);
  function toggleVisibility() {
    setIsVisible(window.scrollY > 300);
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <div className="scroll-buttons-container">
      <a href="https://wa.me/919767881946" target="_blank" rel="noopener noreferrer" className="whatsapp-button glowPuls" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
      {isVisible && (
        <button onClick={scrollToTop} className="bounce-button" aria-label="Scroll to top">↑</button>
      )}
    </div>
  );
}

function Home() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/images')
      .then(res => res.json())
      .then(data => setCarouselImages(data))
      .catch(err => console.error("Failed to fetch images:", err));
  }, []);

  

  return (

     <>

 

     
    <div id="home">
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {carouselImages.length === 0
              ? null
              : carouselImages.map(function (img, idx) {
                return (
                  <div
                    key={img.id}
                    className={"carousel-item " + (idx === 0 ? "active" : "")}
                  >
                    <img className="w-100" src={"http://localhost:5000" + img.url} alt={img.name} />
                  </div>
                );
              })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      

     

      <h3 className="wlc">Welcome to People Civilization Foundation</h3>
      <div className="line-wrapper">
        <div className="line"></div>
        <div className="center-block"></div>
        <div className="line"></div>
      </div>
      <h5 className="wlc1">A non-profit dedicated to nurturing the rural youths through education and self-development since 2015.</h5>

      <br />
      <div className="container">
        <a href="#whatwedo" className="card-link">
  <div className="card gray1">
    <div className="icon">
     <FaUsers size={52} color="#ff6600" />
    </div>
    <h2 className="title">WHAT WE DO</h2>
    <p className="description">
      Someone said that, Self-Help is the best help and we believe in the same.
      We are committed to lead the cause in a way where individual will
    </p>
  </div>
</a>

       
          <div className="card gray1">
            <div className="icon">
              <FontAwesomeIcon icon={faHandshake} color="orange" size="2x" />
            </div>
            <h2 className="title">How I Can Join</h2>
            <p className="description">Become a part of our mission by volunteering, donating, or spreading the 
              word — every effort counts toward empowering rural youth.</p>
          </div>
        

     

        <div className="card blue">
          <div className="icon">
            <FontAwesomeIcon icon={faPencilAlt} color="#03adfc" size="2x" />
          </div>
          <h2 className="title">ONGOING PROJECTS</h2>
         
           <marquee style={{ color: 'black', fontSize: '0.875rem', marginTop: '8px' }}>PCF-School-Kit-2025</marquee>
          <p>Helping 500 rural students every year with educational School-Kit.</p>
           
         
            
        

        </div>
        

      </div>

     
              </div>

      {/* About Section */}
      <div id="about" >
       
         <h2 className='wlc'>About People Civilization Foundation</h2>
      <div className="line-wrapper">
        <div className="line"></div>
        <div className="center-block"></div>
        <div className="line"></div>
      </div>
        <div className="about-container">
         <div className="about-text">
      <h5>People Civilization Foundation, Killari</h5>
      
      <p>
        People Civilization Foundation, a non-profit organization founded in 2015 by{' '}
        <Link 
          to="/knowmore" 
          style={{ color: '#f57c00', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Dnyaneshwar Birajdar
        </Link>{' '}
        and his group, is a dedicated initiative focused on empowering rural youth through awareness, education, 
        and holistic development. We have remained committed to nurturing self-growth, building resilience, and
        driving sustainable change from the ground up.
      </p>

      <p>
        We believe that true development begins from within. Our mission is to help young individuals 
        recognize their potential and guide them in channelling it with purpose, confidence, and a proactive
        mindset.
      </p>

      <p>
        We work at the root causes of challenges, aiming to create long-term impact rather than temporary 
        solutions. By fostering self-awareness and encouraging the practical application of skills, we strive
        to build a generation that is empowered, capable, and committed to uplifting their communities.
      </p>

      <Link className="about-button" to="/knowmore">Know more...</Link>
    </div>
          <div className="about-video">
            <video controls>
              <source src={pcfvideo} type="video/mp4" />
             
            </video>
          </div>
        </div>
      </div>
      <br />

      <div id="whatwedo" className="section">
        
        <h3 className="wlc">What We Do</h3>
        <div className="line-wrapper">
              <div className="line"></div>
              <div className="center-block"></div>
              <div className="line"></div>
            </div>
        
      <section style={{ maxWidth: '1000px', margin: '3rem auto', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div
        style={{
          flex: '1 1 300px',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
       
        <p>
         Someone once said, "Self-help is the best help," and we wholeheartedly believe in this philosophy. 
         We are committed to empowering individuals to recognize and nurture their own abilities—for their 
         personal growth and for the greater good of society.As a social facilitation centre, we have taken 
         the initiative to promote awareness and self-development among rural youth. Since our inception, 
         we have been implementing a range of impactful, result-oriented projects aimed at uplifting and
         empowering young people in rural areas.

        </p>
      </div>
    </section>




<div className="card-grid">
  <div className="simple-card">
    <GiSchoolBag className="card-icon" />
    <h5>PCF-School-Kit-2025</h5>
    <p>Helping 500 rural students every year with educational School-Kit.</p>
  </div>

  <div className="simple-card">
    <IoColorPaletteOutline className="card-icon" />
    <h5>Bolkya Bhinti</h5>
    <p>Dedicated to transforming classrooms into safe, welcoming spaces for students</p>
  </div>

  <div className="simple-card">
    <FaUsers className="card-icon" />
    <h5>Antarang Workshop</h5>
    <p>The unique way to promote life-skills amongst rural students through various interactive & 
      'fun n frolic' activities.</p>
  </div>

  <div className="simple-card">
    <FaGraduationCap className="card-icon" />
    <h5>Career Guidance</h5>
    <p>To create awareness amongst rural youths about career paths after SSC & HSC, PCF is organizing Career 
      Guidance Sessions since 2012.</p>
  </div>

  <div className="simple-card">
    <FaLaptop className="card-icon" />
    <h5>Computer Literacy Mission</h5>
    <p>Promoting basic free computer education (Since 2014).</p>
  </div>

  <div className="simple-card">
    <GiFruitTree className="card-icon" />
    <h5>Tree Plantation</h5>
    <p>To protect our mother earth a small step has been taken to plant & conserve trees in drought area. (2016)</p>
  </div>
</div>


      <div id="joinus">
             <br /><br /><br /> 
            <h3 className="whattxt">Join Us</h3>
                <div className="line-wrapper">
                      <div className="line"></div>
                      <div className="center-block"></div>
                      <div className="line"></div>
                    </div>
                 
                 
                  
        
        {/**  <section style={{ maxWidth: '1000px', margin: '3rem auto', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div
                style={{
                  flex: '1 1 300px',
                  padding: '1rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
               
                <p>
                 As a social entity we seek support, involvement, encouragement and contribution 
                    from individuals, groups, corporates and like-minded organization to lead this 
                    cause in more meaningful way.
                </p>
              </div>
            </section>
            
            */}
        
        
        
           
          <div className="join-container">
                <div className="join-grid two-columns">
                  {/* Donations Card */}
                  <div className="join-card">
                    <div className="join-icon orange">
                      <FaHandHoldingHeart />
                    </div>
                    <h3 className="join-title">Donations</h3>
                    <p className="join-text">
                      There are several meaningful ways you can contribute to this noble cause. People Civilization 
                      Foundation serves as a trusted platform, ensuring your donations are utilized effectively for 
                      the causes you care about. We currently accept donations through the following channels:
                    </p>
                  </div>

                  {/* Social Associates Card */}
                  <div className="join-card">
                    <div className="join-icon orange">
                      <FaUsers />
                    </div>
                    <h3 className="join-title">Join as  Volunteering</h3>
                    <p className="join-text">
                      We welcome enthusiast volunteers to join hands with us and help us in the mission to empower rural youths. Contact us for more information.
                    </p>
                  </div>
                </div>
              </div>

        
        
               {/*--<div className="join-card">
                <div className="join-icon green">
                    <FaProjectDiagram />
                  </div>
                  <h3 className="join-title green-text">Sponsor an Upcoming Project</h3>
                  <p className="join-text dark">
                    Choose an upcoming project and sponsor fully or partially. Call us at <strong>9767881946</strong> to express your interest.
                  </p>
              </div>--*/}
              
        


           <section className="donate-three-column">
          
             
        
              <div className="donate-columns">
                <div className="donate-box">
                  <h3>Bank Details</h3>
                  <p><strong>Account Holder Name:</strong> People Civilization Foundation Killari</p>
                  <p><strong>Branch:</strong> Bank of Maharashtra</p>
                  <p><strong>Account No:</strong> 60239904236</p>
                  <p><strong>IFSC:</strong> MAHB0000248</p>
                </div>
        
              <div className="donate-box">
  <h3>Donate through UPI</h3>
  <p><strong>UPI ID:</strong></p>
  <p 
    style={{ userSelect: 'none', pointerEvents: 'none' }}
    onCopy={(e) => e.preventDefault()}
    onContextMenu={(e) => e.preventDefault()}
  >
    919767881946.P@mahb
  </p>
</div>

                <div className="donate-box">
                  <h3>Donate through Cheque</h3>
                  <p>
                    Donate through cheque on the name of:<br />
                    <strong>People Civilization Foundation, Killari</strong>
                  </p>
                </div>
              </div>
              
              <marquee style={{ color: 'red', fontSize: '0.875rem', marginTop: '8px' }}>
                Note:-Donations to our organization are eligible for tax exemption under Section 80G of the Income Tax Act, 1961.
              </marquee>
            </section>

      </div>

       <div id="contact">
      <section className="contact-modern-section">
      <div className="contact-modern-container">
        
        
        <h2 className="wlc">Contact Us</h2>
         <div className="line-wrapper">
              <div className="line"></div>
              <div className="center-block"></div>
              <div className="line"></div>
            </div>
        <br></br>
        <div className="contact-modern-cards">
          <div className="contact-modern-card">
            <FaMapMarkerAlt className="contact-modern-icon" />
            <h4>Registered Address</h4>
            <p>Killari, Ta: Ausa, Dist: Latur, Maharashtra - 413516</p>
          </div>

         
          <div className="contact-modern-card">
            <FaEnvelope className="contact-modern-icon" />
            <h4>Email</h4>
            <p>pcfkillari[at]gmail.com</p>
          </div>
        </div>
      </div>
       <br></br><br></br><br></br>
       <div className="footer-bottom">
      <p>
         Copyright © 2015 People Civilization Foundation All Rights Reserved.</p>
         
    </div>
    </section>


   
    
   
       </div>
             




    </div>

      {/* Scroll to top button */}
      <ScrollUpButton />
      <LiveProject />
    
  </>
  );
}

export default Home;
