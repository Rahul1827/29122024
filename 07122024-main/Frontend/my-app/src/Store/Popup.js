import React from "react";
import { useDispatch } from "react-redux";
import { hidePopup } from "./ProductSlice";
import "../Store/Popup.css" // Add necessary CSS

const Popup = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button
          className="close-button"
          onClick={() => dispatch(hidePopup())}
        >
          
        </button>
        <h3>{product.name}</h3>
        <img src={product.image} alt={product.name} className="popup-image" />
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Quantity:</strong> {product.quantity}</p>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
    </div>
  );
};

export default Popup;
