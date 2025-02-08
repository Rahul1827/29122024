

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { showPopup } from "../Store/ProductSlice";
// import Popup from "../Store/Popup";
// import "./AdminProduct.css"; // Import the CSS file for styles

// const AdminProduct = () => {
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

// export default AdminProduct;



// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { showPopup } from "../Store/ProductSlice";
// import Popup from "../Store/Popup";
// import "./AdminProduct.css"; // Import the CSS file for styles

// const AdminProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { popupVisible, selectedProduct } = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://localhost:44361/api/products"); // API Call
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       const data = await response.json();
//       setProducts(data);
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
//             <img src={item.imagePath} alt={item.name} className="card-img-top" />
//             <div className="card-body">
//               <h3 className="card-title">{item.name}</h3>
//               <p className="card-text">{item.description.substring(0, 100)}...</p>
//               <p className="product-price">Price: ₹{item.price}</p>
//               <div className="product-actions">
//                 <button className="btn-primary" onClick={() => dispatch(showPopup(item))}>
//                   Read More
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

// export default AdminProduct;























import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPopup } from "../Store/ProductSlice";
import Popup from "../Store/Popup";
import "./AdminProduct.css"; // Import the CSS file for styles

const AdminProduct = () => {
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
      const response = await fetch("https://localhost:44361/api/products"); // API Call
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setProducts(data);
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
