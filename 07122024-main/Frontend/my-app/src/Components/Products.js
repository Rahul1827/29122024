// // import React, { useState, useEffect } from "react";
// // import "./Products.css"; // Add your CSS file for styling

// // const Products = () => {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
// //     setProducts(storedProducts);
// //   }, []);

// //   return (
// //     <div className="products-page">
// //       <h2>Products</h2>
// //       <div className="product-cards">
// //         {products.map((item, index) => (
// //           <div key={index} className="product-card">
// //             <img src={item.image} alt={item.name} className="product-image" />
// //             <div className="product-info">
// //               <h3 className="product-name">{item.name}</h3>
// //               <p className="product-description">{item.description}</p>
// //               <p className="product-price">Price: ₹{item.price}</p>
// //               <p className="product-quantity">Quantity: {item.quantity}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;

// import React, { useState, useEffect } from "react";
// import "./Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
//     setProducts(storedProducts);
//   }, []);

//   const categorizedProducts = products.reduce((acc, product) => {
//     acc[product.category] = acc[product.category] || [];
//     acc[product.category].push(product);
//     return acc;
//   }, {});

//   return (
//     <div className="products-page">
//       <h2>Products</h2>
//       {Object.keys(categorizedProducts).map((category) => (
//         <div key={category} className="category-section">
//           <h3 className="category-name">{category}</h3>
//           <div className="product-cards">
//             {categorizedProducts[category].map((item, index) => (
//               <div key={index} className="product-card">
//                 <img src={item.image} alt={item.name} className="product-image" />
//                 <div className="product-info">
//                   <h3 className="product-name">{item.name}</h3>
//                   <p className="product-description">{item.description}</p>
//                   <p className="product-price">Price: ₹{item.price}</p>
//                   <p className="product-quantity">Quantity: {item.quantity}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
 
// export default Products;

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleExpand } from "../Store/ProductSlice";
// // import "./../styles/Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const expandedProduct = useSelector((state) => state.products.expandedProduct);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
//     setProducts(storedProducts);
//   }, []);

//   const categorizedProducts = products.reduce((acc, product) => {
//     acc[product.category] = acc[product.category] || [];
//     acc[product.category].push(product);
//     return acc;
//   }, {});

//   return (
//     <div className="products-page">
//       <h2>Products</h2>
//       {Object.keys(categorizedProducts).map((category) => (
//         <div key={category} className="category-section">
//           <h3 className="category-name">{category}</h3>
//           <div className="product-cards">
//             {categorizedProducts[category].map((item, index) => (
//               <div key={index} className="product-card">
//                 <img src={item.image} alt={item.name} className="product-image" />
//                 <div className="product-info">
//                   <h3 className="product-name">{item.name}</h3>
//                   <p className="product-description">
//                     {expandedProduct === index
//                       ? item.description
//                       : `${item.description.substring(0, 50)}...`}
//                   </p>
//                   <p className="product-price">Price: ₹{item.price}</p>
//                   <p className="product-quantity">Quantity: {item.quantity}</p>
//                   {expandedProduct === index && (
//                     <div className="additional-details">
//                       <p>Brand: {item.brand}</p>
//                       <p>Category: {item.category}</p>
//                     </div>
//                   )}
//                   <div className="product-actions">
//                     <button
//                       className="read-more-button"
//                       onClick={() => dispatch(toggleExpand(index))}
//                     >
//                       {expandedProduct === index ? "Read Less" : "Read More"}
//                     </button>
//                     <button className="book-now-button">Book Now</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;


import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPopup } from "../Store/ProductSlice";
import Popup from "../Store/Popup";
import "./Products.css"; // Add necessary styles

const Products = () => {
  const [products, setProducts] = useState([]);
  const { popupVisible, selectedProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const categorizedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="products-page">
      <h2>Products</h2>
      {Object.keys(categorizedProducts).map((category) => (
        <div key={category} className="category-section">
          <h3 className="category-name">{category}</h3>
          <div className="product-cards">
            {categorizedProducts[category].map((item, index) => (
              <div key={index} className="product-card">
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-description">
                    {item.description.substring(0, 50)}...
                  </p>
                  <p className="product-price">Price: ₹{item.price}</p>
                  <p className="product-quantity">Quantity: {item.quantity}</p>
                  <div className="product-actions">
                    <button
                      className="read-more-button"
                      onClick={() => dispatch(showPopup(item))}
                    >
                      Read More
                    </button>
                    <button className="book-now-button">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {popupVisible && <Popup product={selectedProduct} />}
    </div>
  );
};

export default Products;
