
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { showPopup } from "../Store/ProductSlice";
// import Popup from "../Store/Popup";
// import "./Products.css"; // Import the CSS file for styles

// const FarmerProducts = () => {
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

// export default FarmerProducts;



//=================================Trial Code======================================
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Products.css";

// const FarmerProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Retrieve login state from localStorage
//   const isFarmerLoggedIn = localStorage.getItem("farmerLoggedIn") === "true";

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://localhost:44361/api/products");
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       const data = await response.json();
//       setProducts(data);
//       localStorage.setItem("farmerProducts", JSON.stringify(data));
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBookNow = (product) => {
//     if (!isFarmerLoggedIn) {
//       alert("You must be logged in to book a product.");
//       navigate("/farmerLogin"); // Redirect to login if not logged in
//       return;
//     }
    
//     navigate("/bookingProducts", { state: { product } });
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>Error loading products: {error}</p>;

//   return (
//     <div className="products-page">
//       <h2>Our Products</h2>
//       <div className="product-cards">
//         {products.length > 0 ? (
//           products.map((item) => (
//             <div key={item.id} className="product-card">
//               <img 
//                 src={item.imagePath || "/placeholder.png"} 
//                 alt={item.name} 
//                 className="card-img-top" 
//                 onError={(e) => e.target.src = "/placeholder.png"} 
//               />
//               <div className="card-body">
//                 <h3 className="card-title">{item.name}</h3>
//                 <p className="card-brand"><strong>Brand:</strong> {item.brand}</p>
//                 <p className="card-text">{item.description.substring(0, 100)}...</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <div className="product-actions">
//                   <button className="btn-primary" onClick={() => handleBookNow(item)}>
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FarmerProducts;




import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showPopup } from "../Store/ProductSlice";
import Popup from "../Store/Popup";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { popupVisible, selectedProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Retrieve login state from localStorage
  const isFarmerLoggedIn = localStorage.getItem("farmerLoggedIn") === "true";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://localhost:44361/api/products");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle "Book Now" click
  const handleBookNow = (product) => {
    if (!isFarmerLoggedIn) {
      alert("You must be logged in to book a product.");
      navigate("/login");
    } else {
      navigate("/bookingProducts", { state: { product } });
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
            <img 
              src={item.imagePath || "/placeholder.png"} 
              alt={item.name} 
              className="card-img-top" 
              onError={(e) => (e.target.src = "/placeholder.png")} 
            />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-brand"><strong>Brand:</strong> {item.brand}</p>
              <p className="card-text">{item.description.substring(0, 100)}...</p>
              <p className="product-price">Price: ₹{item.price}</p>
              <div className="product-actions">
                <button className="btn-primary" onClick={() => dispatch(showPopup(item))}>
                  Read More
                </button>
                <button className="btn-primary" onClick={() => handleBookNow(item)}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {popupVisible && <Popup product={selectedProduct} />}
    </div>
  );
};

export default Products;
