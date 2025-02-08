

import React from "react";
import { useDispatch } from "react-redux";
import { hidePopup } from "./ProductSlice";
import "../Store/Popup.css"; // Ensure CSS is properly imported

const Popup = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={() => dispatch(hidePopup())}>
          ×
        </button>
        <img
          src={product.imagePath}
          alt={product.name}
          className="popup-image"
          onError={(e) => (e.target.src = "/placeholder.png")}
        />
        <div className="popup-body">
          <h2>{product.name}</h2>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p>{product.description}</p> 
          <p><strong>Price:</strong> ₹{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
