import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            GreenYield Solutions is dedicated to empowering farmers with
            sustainable solutions. We provide expert advice, fertilizers,
            and more to enhance productivity.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Link to Home page */}
            </li>
            {/* <li>
              <Link to="/about">About</Link> 
            </li> */}
            <li>
              <Link to="/service">Services</Link> {/* Link to Services page */}
            </li>
            <li>
              <Link to="/contactus">Contact</Link> {/* Link to Contact page */}
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Phone: +91-9340901294 <br />
            Email: swamitraders@gmail.com <br />
            Address: Shop no:21, Choriya Market Raver, Dist-Jalgaon, Pincode: 425508
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GreenYield Solutions. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#facebook" className="icon facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter" className="icon twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#instagram" className="icon instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#linkedin" className="icon linkedin">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
