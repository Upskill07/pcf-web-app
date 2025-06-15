import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo2 from "../assets/img/pcflogo2.png";
import "../components/Navbar.css";
import {
  FaIdCard,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(window.location.hash || "#home");
  const [scrollTargetId, setScrollTargetId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.location.hash = id;
      setActiveId(`#${id}`);
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      setScrollTargetId(id); // Save ID to scroll later
      navigate("/");         // Navigate to home
    } else {
      scrollToSection(id);   // Scroll immediately
    }

    setIsOpen(false);
  };

  // Scroll after route changes to home
  useEffect(() => {
    if (location.pathname === "/" && scrollTargetId) {
      const tryScroll = () => {
        const section = document.getElementById(scrollTargetId);
        if (section) {
          scrollToSection(scrollTargetId);
          setScrollTargetId(null);
        } else {
          setTimeout(tryScroll, 100); // Retry until the DOM is ready
        }
      };
      tryScroll();
    }
  }, [location.pathname, scrollTargetId]);

  // Update activeId on hash change
  useEffect(() => {
    const onHashChange = () => {
      setActiveId(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="top-header">
      <div className="left-header">
        <img src={logo2} alt="PCF Logo 2" className="logo2-img" />
        <div className="pcf-logo">
          <div className="pcf-line1">PEOPLE CIVILIZATION</div>
          <div className="pcf-line2">FOUNDATION</div>
        </div>
      </div>

      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`center-header ${isOpen ? "show" : ""}`}>
        <ul className="nav-links">
          {["home", "about", "whatwedo", "joinus", "gallery", "contact"].map(
            (id) => {
              const isGallery = id === "gallery";
              const href = isGallery ? "/gallery" : `#${id}`;
              const label =
                id === "whatwedo"
                  ? "What We Do"
                  : id === "joinus"
                  ? "Join Us"
                  : id === "gallery"
                  ? "Gallery"
                  : id.charAt(0).toUpperCase() + id.slice(1);

              const isHome = location.pathname === "/";
              const isActive =
                (isHome && !isGallery && activeId === `#${id}`) ||
                (!isHome && isGallery && location.pathname === "/gallery");

              return (
                <li key={id} className={isActive ? "active" : ""}>
                  {isGallery ? (
                    <Link to={href}>{label}</Link>
                  ) : (
                    <a href={href} onClick={(e) => handleNavClick(e, id)}>
                      {label}
                    </a>
                  )}
                </li>
              );
            }
          )}
        </ul>
      </div>

      <div className="nav-small-text">
        <div className="contact-group">
          <div className="contact-item">
            <FaIdCard color="#ff6600" />
            <span>Reg.No. MH/153/15, F-23034</span>
          </div>
          <div className="contact-item">
            <FaEnvelope color="#ff6600" />
            <span>pcfkillari[at]gmail.com</span>
          </div>
          
        </div>

        <div className="social-icons">
          <a
            href="https://wa.me/9767881946"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp color="#25D366" />
          </a>
          <a
            href="https://www.facebook.com/pcfkillari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF color="#3b5998" />
          </a>
          <a
            href="https://www.youtube.com/@peoplecivilization-promoti1563"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube color="#FF0000" />
          </a>
        </div>
      </div>
    </div>
  );
}
