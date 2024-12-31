

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPopup } from "../Store/ProductSlice";
import Popup from "../Store/Popup";
import "./AdminProduct.css"; // Import the CSS file for styles

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const { popupVisible, selectedProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="product-cards">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-text">{item.description.substring(0, 100)}...</p>
              <p className="product-price">Price: ₹{item.price}</p>
              <div className="product-actions">
                <button
                  className="btn-primary"
                  onClick={() => dispatch(showPopup(item))}
                >
                  Read More
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup component */}
      {popupVisible && <Popup product={selectedProduct} />}
    </div>
  );
};

export default AdminProduct;
