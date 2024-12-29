import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('farmerLoggedIn') === 'true');

  // Handle the "Book Now" button click
  const handleBookNow = () => {
    if (!isLoggedIn) {
      navigate('/farmer-login'); // Redirect to the login page if not logged in
    } else {
      alert('Product booked successfully!');
      // Additional booking logic can be added here
    }
  };

  // Check if product data is available
  if (!product || !product.image || !product.name || !product.description) {
    return <div>Product information is missing.</div>;
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={handleBookNow} className="btn-primary">
        Book Now
      </button>
    </div>
  );
};

export default ProductCard;
