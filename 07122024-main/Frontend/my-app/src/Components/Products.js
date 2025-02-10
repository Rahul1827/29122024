
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { showPopup } from "../Store/ProductSlice";
// import Popup from "../Store/Popup";
// import "./Products.css"; // Add necessary styles

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const { popupVisible, selectedProduct } = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
//     setProducts(storedProducts);
//   }, []);

//   return (
//     <div className="products-page">
//       <h2>Our Products</h2>
//       <div className="product-cards">
//         {products.map((item, index) => (
//           <div key={index} className="product-card">
//             <img src={item.image} alt={item.name} className="card-img-top" />
//             <div className="card-body">
//               <h3 className="card-title">{item.name}</h3>
//               <p className="card-text">{item.description.substring(0, 100)}...</p>
//               <p className="product-price">Price: ₹{item.price}</p>
//               <div className="product-actions">
//                 <button
//                   className="btn-primary"
//                   onClick={() => dispatch(showPopup(item))}
//                 >
//                   Read More
//                 </button>
//                 <button className="btn-primary">Book Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Popup component */}
//       {popupVisible && <Popup product={selectedProduct} />}
//     </div>
//   );
// };

// export default Products;



import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPopup } from "../Store/ProductSlice";
import Popup from "../Store/Popup";
import "./Products.css"; // Import the CSS file for styles

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { popupVisible, selectedProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://localhost:44361/api/products"); // API Call to fetch products
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
      const data = await response.json();
      setProducts(data); // Set the fetched products in state
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="product-cards">
        {products.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.imagePath} alt={item.name} className="card-img-top" onError={(e) => e.target.src = "/placeholder.png"} />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-brand"><strong>Brand:</strong> {item.brand}</p> {/* Brand Name Added */}
              <p className="card-text">{item.description.substring(0, 100)}...</p>
              <p className="product-price">Price: ₹{item.price}</p>
              <div className="product-actions">
                <button className="btn-primary" onClick={() => dispatch(showPopup(item))}>
                  Read More
                </button>
                {/* Book Now Button */}
                <button className="btn-primary" onClick={() => alert(`Booking ${item.name}`)}>
                  Book Now
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

export default Products;


//==============================Trial code===========================================

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { showPopup } from "../Store/ProductSlice";
// import Popup from "../Store/Popup";
// import "./Products.css"; // Import the CSS file for styles

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { popupVisible, selectedProduct } = useSelector((state) => state.products);
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://localhost:44361/api/products"); // API Call to fetch products
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
//       const data = await response.json();
//       setProducts(data); // Set the fetched products in state
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>Error loading products: {error}</p>;

//   return (
//     <div className="products-page">
//       <h2>Our Products</h2>
//       <div className="product-cards">
//         {products.map((item, index) => (
//           <div key={index} className="product-card">
//             <img 
//               src={item.imagePath} 
//               alt={item.name} 
//               className="card-img-top" 
//               onError={(e) => e.target.src = "/placeholder.png"} 
//             />
//             <div className="card-body">
//               <h3 className="card-title">{item.name}</h3>
//               <p className="card-brand"><strong>Brand:</strong> {item.brand}</p> {/* Brand Name Added */}
//               <p className="card-text">{item.description.substring(0, 100)}...</p>
//               <p className="product-price">Price: ₹{item.price}</p>
//               <div className="product-actions">
//                 <button className="btn-primary" onClick={() => dispatch(showPopup(item))}>
//                   Read More
//                 </button>
//                 {/* Book Now Button - Redirects to Login Page */}
//                 <button className="btn-primary" onClick={() => navigate("/login")}>
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Popup component */}
//       {popupVisible && <Popup product={selectedProduct} />}
//     </div>
//   );
// };

// export default Products;
