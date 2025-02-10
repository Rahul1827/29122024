import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  
  const isFarmerLoggedIn = localStorage.getItem("farmerLoggedIn") === "true";

  if (!isFarmerLoggedIn) {
    alert("You must be logged in to book a product.");
    navigate("/farmerLogin");
    return null;
  }

  if (!product) {
    return <p>No product selected for booking.</p>;
  }

  return (
    <div className="booking-page">
      <h2>Booking Details</h2>
      <div className="booking-card">
        <img 
          src={product.imagePath || "/placeholder.png"} 
          alt={product.name} 
          className="booking-img"
        />
        <div className="booking-info">
          <h3>{product.name}</h3>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
