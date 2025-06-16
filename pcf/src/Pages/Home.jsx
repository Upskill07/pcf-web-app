import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../Pages/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faStar, faThumbsUp, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaHandHoldingHeart, FaUsers, FaProjectDiagram } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
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
      <FontAwesomeIcon icon={faGraduationCap} color="#ff160a" size="2x" />
    </div>
    <h2 className="title">WHAT WE DO</h2>
    <p className="description">
      Someone said that, Self-Help is the best help and we believe in the same.
      We are committed to lead the cause in a way where individual will
    </p>
  </div>
</a>


        <a href="/support" className="card-link">
          <div className="card gray1">
            <div className="icon">
              <FontAwesomeIcon icon={faStar} color="orange" size="2x" />
            </div>
            <h2 className="title">SUPPORT THE CAUSE</h2>
            <p className="description">As a social entity we seek support involvement encour- agement and contr- ibution from individuals groups corporates and like-minded</p>
          </div>
        </a>

        <div className="card gray2">
          <div className="icon">
            <FontAwesomeIcon icon={faThumbsUp} color="#09ed2f" size="2x" />
          </div>
          <h2 className="title">TAKE INITIATIVE</h2>
          <p className="description">"Be the change you wish to see in the world." Put your Social Cause here and as per hour,
            PCP team will contribute to lead your cause in your</p>
        </div>

        <div className="card blue">
          <div className="icon">
            <FontAwesomeIcon icon={faPencilAlt} color="#03adfc" size="2x" />
          </div>
          <h2 className="title">UPCOMING PROJECTS</h2>
          <p className="description">Year 2016–17. You can participate in any project of your interest and
            contribute your part in this social</p>
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
            People Civilization Foundation, a non-profit organization founded in 2015 by Dnyaneshwar Birajdar and 
            his group, is a dedicated initiative focused on empowering rural youth through awareness, education, 
            and holistic development. We have remained committed to nurturing self-growth, building resilience, and
            driving sustainable change from the ground up.
            </p>
            <br />
            <p>
             We believe that true development begins from within. Our mission is to help young individuals 
             recognize their potential and guide them in channelling it with purpose, confidence, and a proactive
             mindset.
            </p>
            <p>Through this social platform, we focus on <strong>untapped areas</strong> such as <strong>Career
              Counseling of youths in
              rural areas, SWOT analysis, School and Skill Development and need-based Projects in Education and
              Environment.</strong></p>
            <p>
              We work at the <strong>root causes</strong> of challenges aiming to create long-term impact rather than temporary
              solutions. By encouraging self-awareness and practical implementation of skills, we strive to
              build a generation that is confident, capable, and community driven.
            </p>
            <Link className="about-button" to="/knowmore">Know more...</Link>

          </div>
          <div className="about-video">
            <video controls>
              <source src={pcfvideo} type="video/mp4" />
              Your browser does not support the video tag.
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


<div className="card-slider">
      <Slider
  dots={true}
  infinite={true}
  speed={800}
  autoplay={true}
  autoplaySpeed={5000}
  slidesToShow={3}
  slidesToScroll={1}
  centerMode={true}
  centerPadding="0px"
  responsive={[

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
      },
    },
  ]}
>

        {/* Flip Cards */}
   <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>Antarang-Personality Development Workshop</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>The unique way to promote life-skills amongst rural students through fun activities... (Since Dec 2016)</p>
            </div>
          </div>
        </div> </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>Vichardhan</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>An online special ‘Thought of the Day’ initiative... (since 2015)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>PCF Volleyball Club</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Promoting physical and mental fitness amongst youths (est. in Oct 2016)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>Dnyanada Library</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Promoting reading culture amongst rural youths (est. in Jan 2014)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>PCF Badminton Club</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Promoting fitness amongst youths (est. in Oct 2016)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>Computer Literacy Mission</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Promoting basic free computer education (Since 2014)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>Tree Plantation initiative</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Step to plant & conserve trees in drought area. (2016)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>National Youth Day Celebration</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Programs for students on Swami Vivekananda’s birth anniversary (since 2013)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>PCF Special Notebooks for Students</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Low-cost quality notebooks portraying great personalities. (Since 2016)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>Computer Literacy Mission</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Promoting basic free computer education (Since 2014)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>Career Guidance Workshops</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Awareness among rural youths about careers after SSC & HSC (Since 2012)</p>
            </div>
          </div>
        </div>
        </div>

        <div className="slider-card-wrapper">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h5>Dnyanada Essay Competition</h5>
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="flip-card-back">
              <p>Supporting rational thinking through writing on social topics (since 2015)</p>
            </div>
          </div>
        </div>
        </div>
      </Slider>
    </div>

      <div id="joinus">
             <br /><br /><br /> 
            <h3 className="whattxt">Join Us</h3>
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
                 As a social entity we seek support, involvement, encouragement and contribution 
                    from individuals, groups, corporates and like-minded organization to lead this 
                    cause in more meaningful way.
                </p>
              </div>
            </section>
        
        
        
           
        <div className="join-container">
              
        
              <div className="join-grid">
                {/* Donations Card */}
                <div className="join-card">
                  <div className="join-icon orange">
                    <FaHandHoldingHeart />
                  </div>
                  <h3 className="join-title">Donations</h3>
                  <p className="join-text">
                    Your donations empower our noble causes. People Civilization is a righteous platform for causes you believe in.
                  </p>
                </div>
        
                {/* Volunteer Card */}
                <div className="join-card volunteer-card">
                  <h3 className="join-title orange-text">Volunteer Registration</h3>
                  <p className="join-text dark">
                    Join us on the field. Your contribution matters more than ever. Help us lead this cause in your unique way.
                  </p>
                </div>
        
                {/* Social Associates Card */}
                <div className="join-card">
                  <div className="join-icon orange">
                    <FaUsers />
                  </div>
                  <h3 className="join-title">Become Our Social Associates</h3>
                  <p className="join-text">
                    Organizations and groups can partner with us for common social responsibilities. Register to collaborate.
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
              <h2 className="donate-heading">Donate</h2>
               <div className="line-wrapper">
                      <div className="line"></div>
                      <div className="center-block"></div>
                      <div className="line"></div>
                    </div>
              <p className="donate-description">
                There are several meaningful ways you can contribute to this noble cause. People Civilization 
                Foundation serves as<br /> a trusted platform, ensuring your donations are utilized effectively for 
                the causes you care about. <br />We currently accept donations through the following channels:
              </p>
        
              <div className="donate-columns">
                <div className="donate-box">
                  <h3>Bank Details</h3>
                  <p><strong>Account Holder Name:</strong> People Civilization Foundation</p>
                  <p><strong>Branch:</strong> Bank of Maharashtra, Killari</p>
                  <p><strong>Account No:</strong> 60239904236</p>
                  <p><strong>IFSC:</strong> MAHB0000248</p>
                </div>
        
                <div className="donate-box">
                  <h3>Donate through Phone</h3>
                  <p><strong>Please Call:</strong></p>
                  <p>(+91) 9767881946</p>
                  <p>(+91) 9890997368</p>
                </div>
        
                <div className="donate-box">
                  <h3>Donate through Cheque</h3>
                  <p>
                    Donate through cheque on the name of:<br />
                    <strong>People Civilization Foundation, Killari</strong>
                  </p>
                </div>
              </div>
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
            <h4>	Address - Registered Address</h4>
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
