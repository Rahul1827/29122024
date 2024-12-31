import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Assuming the styles are in Navbar.css
import logo2 from '../assests/images/logo2.png'; // Path to your logo image

export default function FarmerHeader() {
  const [isFarmerLoggedIn, setIsFarmerLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); 
    } else {
      setScrolled(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const farmerLoggedIn = localStorage.getItem('farmerLoggedIn');
    if (farmerLoggedIn === 'true') {
      setIsFarmerLoggedIn(true);
    }
  }, []);

  const handleFarmerLogout = () => {
    localStorage.removeItem('farmerLoggedIn');
    setIsFarmerLoggedIn(false);
    navigate('/');
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo2} alt="GreenYield Logo" className="navbar-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/farmerdash/farmerhome">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/farmerdash/farmerproducts">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/farmerdash/farmerservices">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/farmerdash/contact">
                  Contact
                </Link>
              </li>

              {isFarmerLoggedIn && (
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleFarmerLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}