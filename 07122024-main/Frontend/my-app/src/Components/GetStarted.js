import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css"; // Import the CSS file

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup"); // Redirect to sign-up or another relevant page
  };

  return (
    <div className="get-started-container">
      <h1>🌿 Ready to Transform Your Farming? 🌱</h1>
      <p>
        Join thousands of farmers and shop owners who trust 
        <strong> GreenYield Solutions</strong> to enhance their 
        agricultural productivity. Get expert guidance on crop nutrition, 
        fertilizer usage, and efficient inventory management.
      </p>

      {/* Image Section */}
      <div className="image-container">
        <img
          src="https://via.placeholder.com/600x300"
          alt="Farming Transformation"
          className="responsive-img"
        />
      </div>

      {/* Benefits Section */}
      <div className="benefits">
        <h2>Why Choose GreenYield Solutions?</h2>
        <ul>
          <li>✅ Expert advice on crop nutrition</li>
          <li>✅ Data-driven fertilizer recommendations</li>
          <li>✅ Smart inventory tracking</li>
          <li>✅ Trusted by thousands of farmers</li>
          <li>✅ Simple and easy-to-use platform</li>
        </ul>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🌱 Precision Farming</h3>
            <p>Use data-driven insights to optimize your crop yield.</p>
          </div>
          <div className="feature-card">
            <h3>📦 Inventory Management</h3>
            <p>Track stock levels, sales, and purchases in real-time.</p>
          </div>
          <div className="feature-card">
            <h3>📊 Smart Analytics</h3>
            <p>Monitor trends and make data-driven decisions for farming.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>
            "GreenYield Solutions has completely changed how I manage my farm.
            The expert advice and inventory tracking have made my life so much
            easier!" 
            <br />— <strong>Rajesh Kumar, Farmer</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "I used to struggle with keeping track of fertilizers and seeds. 
            Now, everything is digital and super simple to manage." 
            <br />— <strong>Anita Sharma, Shop Owner</strong>
          </p>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="faq-section">
        <h2>FAQs</h2>
        <div className="faq">
          <h3>📌 How do I sign up?</h3>
          <p>Click on the "Get Started" button and follow the sign-up process.</p>
        </div>
        <div className="faq">
          <h3>📌 Is GreenYield Solutions free?</h3>
          <p>Yes, we offer a free version with essential features, and a premium version for advanced tools.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h2>🚀 Start Your Journey Today!</h2>
        <p>Sign up now and take your farming to the next level.</p>
        
      </div>
    </div>
  );
};

export default GetStarted;
