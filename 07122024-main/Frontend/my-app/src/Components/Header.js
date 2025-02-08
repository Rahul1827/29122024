import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo2 from '../assests/images/logo2.png'; 

export default function Header() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
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
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleAdminLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsAdminLoggedIn(false);
    navigate('/');
  };
  // const isAdminLoginPage = location.pathname === '/adminDashboard'|| location.pathname ==='/contactus';
  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img
              src={logo2} 
              alt="GreenYield Logo"
              className="navbar-logo"
            />
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
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>

             {/* <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li> */}

             <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact
                </Link>
              </li>

              {isAdminLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/adminDashboard">
                    Admin Logged In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>


    </div>
  );
}
