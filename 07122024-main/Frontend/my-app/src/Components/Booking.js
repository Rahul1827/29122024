// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Booking = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;
  
//   const isFarmerLoggedIn = localStorage.getItem("farmerLoggedIn") === "true";

//   if (!isFarmerLoggedIn) {
//     alert("You must be logged in to book a product.");
//     navigate("/farmerLogin");
//     return null;
//   }

//   if (!product) {
//     return <p>No product selected for booking.</p>;
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>
//       <div className="booking-card">
//         <img 
//           src={product.imagePath || "/placeholder.png"} 
//           alt={product.name} 
//           className="booking-img"
//         />
//         <div className="booking-info">
//           <h3>{product.name}</h3>
//           <p><strong>Brand:</strong> {product.brand}</p>
//           <p>{product.description}</p>
//           <p><strong>Price:</strong> ₹{product.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const BookingPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   if (!product) {
//     return (
//       <div>
//         <h2>No product selected for booking.</h2>
//         <button onClick={() => navigate("/farmerProducts")}>Go Back</button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking for {product.name}</h2>
//       <img src={product.imagePath || "/placeholder.png"} alt={product.name} style={{ width: "200px" }} />
//       <p><strong>Brand:</strong> {product.brand}</p>
//       <p><strong>Description:</strong> {product.description}</p>
//       <p><strong>Price:</strong> ₹{product.price}</p>
      
//       {/* Add a form here for the booking process */}
//       <button className="btn-primary" onClick={() => alert("Booking Confirmed!")}>
//         Confirm Booking
//       </button>
//       <button className="btn-secondary" onClick={() => navigate("/farmerProducts")}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default BookingPage;



// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Booking.css"; // Import the CSS file

// const BookingPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(product?.price || 0);

//   if (!product) {
//     return (
//       <div className="booking-page">
//         <h2>No product selected for booking.</h2>
//         <button className="btn-secondary" onClick={() => navigate("/farmerProducts")}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   const handleQuantityChange = (change) => {
//     let newQuantity = quantity + change;
//     if (newQuantity < 1) newQuantity = 1; // Prevent negative or zero quantity
//     setQuantity(newQuantity);
//     setTotalPrice(newQuantity * product.price);
//   };

//   const handleBack = () => {
//     navigate("/farmerdash/farmerproducts");
//   };

//   return (
//     <div className="booking-page">
//       <h2>Booking for {product.name}</h2>
//       <img
//         src={product.imagePath || "/placeholder.png"}
//         alt={product.name}
//       />
//       <p><strong>Brand:</strong> {product.brand}</p>
//       <p><strong>Description:</strong> {product.description}</p>
//       <p><strong>Price per unit:</strong> ₹{product.price}</p>
      
//       {/* Quantity Selection */}
//       <div className="quantity-selector">
//         <button onClick={() => handleQuantityChange(-1)}>-</button>
//         <input
//           type="number"
//           value={quantity}
//           min="1"
//           readOnly
//         />
//         <button onClick={() => handleQuantityChange(1)}>+</button>
//       </div>

//       <p><strong>Total Price:</strong> ₹{totalPrice}</p>

//       <button 
//         className="btn-primary" 
//         onClick={() => alert(`Booking Confirmed! Quantity: ${quantity}, Total: ₹${totalPrice}`)}
//       >
//         Confirm Booking
//       </button>
      
//       {/* Back to Products Button */}
//       <button className="btn-secondary" onClick={handleBack}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default BookingPage;


//======================above code working fine============================
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Booking.css"; // Import the CSS file

// const BookingPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   // Retrieve products from sessionStorage or initialize as an empty array
//   const [products, setProducts] = useState(
//     JSON.parse(sessionStorage.getItem("bookingProducts")) || []
//   );
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Update sessionStorage whenever products change
//   useEffect(() => {
//     sessionStorage.setItem("bookingProducts", JSON.stringify(products));
//     calculateTotalPrice(products);
//   }, [products]);

//   // Add the new product to the list when the component mounts or when a new product is added
//   useEffect(() => {
//     if (product) {
//       const existingProductIndex = products.findIndex((p) => p.id === product.id);

//       if (existingProductIndex !== -1) {
//         // If the product already exists, update its quantity
//         const updatedProducts = [...products];
//         updatedProducts[existingProductIndex].quantity += 1;
//         setProducts(updatedProducts);
//       } else {
//         // If the product is new, add it to the list
//         setProducts([...products, { ...product, quantity: 1 }]);
//       }
//     }
//   }, [product]);

//   // Calculate total price
//   const calculateTotalPrice = (products) => {
//     const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotalPrice(total);
//   };

//   // Handle quantity change for a specific product
//   const handleQuantityChange = (index, change) => {
//     const newProducts = [...products];
//     let newQuantity = newProducts[index].quantity + change;

//     // Prevent negative or zero quantity
//     if (newQuantity < 1) newQuantity = 1;

//     newProducts[index].quantity = newQuantity;
//     setProducts(newProducts);
//   };

//   // Handle adding more products
//   const handleAddMoreProducts = () => {
//     navigate("/farmerdash/farmerproducts", { state: { fromBooking: true } });
//   };

//   // Handle booking confirmation
//   const handleConfirmBooking = () => {
//     const bookingDetails = products.map((item) => ({
//       name: item.name,
//       quantity: item.quantity,
//       price: item.price,
//       total: item.price * item.quantity,
//     }));

//     alert(`Booking Confirmed! Details: ${JSON.stringify(bookingDetails, null, 2)}`);
//     // Clear the booking state after confirmation
//     sessionStorage.removeItem("bookingProducts");
//     setProducts([]);
//   };

//   // Handle going back to the products page
//   const handleBack = () => {
//     navigate("/farmerdash/farmerproducts");
//   };

//   // If no products are selected
//   if (products.length === 0) {
//     return (
//       <div className="booking-page">
//         <h2>No products selected for booking.</h2>
//         <button className="btn-secondary" onClick={handleBack}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       {/* Display all products in the booking */}
//       {products.map((item, index) => (
//         <div key={index} className="product-booking">
//           <h3>{item.name}</h3>
//           <img src={item.imagePath || "/placeholder.png"} alt={item.name} />
//           <p><strong>Brand:</strong> {item.brand}</p>
//           <p><strong>Description:</strong> {item.description}</p>
//           <p><strong>Price per unit:</strong> ₹{item.price}</p>

//           {/* Quantity Selector */}
//           <div className="quantity-selector">
//             <button onClick={() => handleQuantityChange(index, -1)}>-</button>
//             <input type="number" value={item.quantity} min="1" readOnly />
//             <button onClick={() => handleQuantityChange(index, 1)}>+</button>
//           </div>

//           <p><strong>Total for {item.name}:</strong> ₹{item.price * item.quantity}</p>
//         </div>
//       ))}

//       {/* Total Price */}
//       <p><strong>Total Price:</strong> ₹{totalPrice}</p>

//       {/* Confirm Booking Button */}
//       <button className="btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>

//       {/* Add More Products Button */}
//       <button className="btn-secondary" onClick={handleAddMoreProducts}>
//         Add More Products
//       </button>

//       {/* Back to Products Button */}
//       <button className="btn-secondary" onClick={handleBack}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default BookingPage;

//==================Above code is latest before my Booking option added============

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Booking.css"; // Import the CSS file

// const BookingPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   // Retrieve products from sessionStorage or initialize as an empty array
//   const [products, setProducts] = useState(
//     JSON.parse(sessionStorage.getItem("bookingProducts")) || []
//   );
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Update sessionStorage whenever products change
//   useEffect(() => {
//     sessionStorage.setItem("bookingProducts", JSON.stringify(products));
//     calculateTotalPrice(products);
//   }, [products]);

//   // Add the new product to the list when the component mounts or when a new product is added
//   useEffect(() => {
//     if (product) {
//       const existingProductIndex = products.findIndex((p) => p.id === product.id);

//       if (existingProductIndex !== -1) {
//         // If the product already exists, update its quantity
//         const updatedProducts = [...products];
//         updatedProducts[existingProductIndex].quantity += 1;
//         setProducts(updatedProducts);
//       } else {
//         // If the product is new, add it to the list
//         setProducts([...products, { ...product, quantity: 1 }]);
//       }
//     }
//   }, [product]);

//   // Calculate total price
//   const calculateTotalPrice = (products) => {
//     const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotalPrice(total);
//   };

//   // Handle quantity change for a specific product
//   const handleQuantityChange = (index, change) => {
//     const newProducts = [...products];
//     let newQuantity = newProducts[index].quantity + change;

//     // Prevent negative or zero quantity
//     if (newQuantity < 1) newQuantity = 1;

//     newProducts[index].quantity = newQuantity;
//     setProducts(newProducts);
//   };

//   // Handle adding more products
//   const handleAddMoreProducts = () => {
//     navigate("/farmerdash/farmerproducts", { state: { fromBooking: true } });
//   };

//   // Handle booking confirmation
//   const handleConfirmBooking = () => {
//     const bookingDetails = {
//       date: new Date().toLocaleString(), // Add booking date and time
//       items: products.map((item) => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//         total: item.price * item.quantity,
//         imagePath: item.imagePath,
//         brand: item.brand,
//         description: item.description,
//       })),
//       totalPrice: totalPrice,
//     };

//     // Retrieve existing bookings from localStorage
//     const existingBookings = JSON.parse(localStorage.getItem("myBookings")) || [];
//     // Add the new booking to the list
//     const updatedBookings = [...existingBookings, bookingDetails];
//     // Save updated bookings to localStorage
//     localStorage.setItem("myBookings", JSON.stringify(updatedBookings));

//     // Clear the booking state after confirmation
//     sessionStorage.removeItem("bookingProducts");
//     setProducts([]);

//     // Redirect to the My Booking page
//     navigate("/farmerdash/mybookings");
//   };

//   // Handle going back to the products page
//   const handleBack = () => {
//     navigate("/farmerdash/farmerproducts");
//   };

//   // If no products are selected
//   if (products.length === 0) {
//     return (
//       <div className="booking-page">
//         <h2>No products selected for booking.</h2>
//         <button className="btn-secondary" onClick={handleBack}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       {/* Display all products in the booking */}
//       {products.map((item, index) => (
//         <div key={index} className="product-booking">
//           <h3>{item.name}</h3>
//           <img src={item.imagePath || "/placeholder.png"} alt={item.name} />
//           <p><strong>Brand:</strong> {item.brand}</p>
//           <p><strong>Description:</strong> {item.description}</p>
//           <p><strong>Price per unit:</strong> ₹{item.price}</p>

//           {/* Quantity Selector */}
//           <div className="quantity-selector">
//             <button onClick={() => handleQuantityChange(index, -1)}>-</button>
//             <input type="number" value={item.quantity} min="1" readOnly />
//             <button onClick={() => handleQuantityChange(index, 1)}>+</button>
//           </div>

//           <p><strong>Total for {item.name}:</strong> ₹{item.price * item.quantity}</p>
//         </div>
//       ))}

//       {/* Total Price */}
//       <p><strong>Total Price:</strong> ₹{totalPrice}</p>

//       {/* Confirm Booking Button */}
//       <button className="btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>

//       {/* Add More Products Button */}
//       <button className="btn-secondary" onClick={handleAddMoreProducts}>
//         Add More Products
//       </button>

//       {/* Back to Products Button */}
//       <button className="btn-secondary" onClick={handleBack}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default BookingPage;


//======================Above code is working================================
// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Booking.css"; // Import the CSS file

// const BookingPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   // Retrieve products from sessionStorage or initialize as an empty array
//   const [products, setProducts] = useState(
//     JSON.parse(sessionStorage.getItem("bookingProducts")) || []
//   );
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Update sessionStorage whenever products change
//   useEffect(() => {
//     sessionStorage.setItem("bookingProducts", JSON.stringify(products));
//     calculateTotalPrice(products);
//   }, [products]);

//   // Add the new product to the list when the component mounts or when a new product is added
//   useEffect(() => {
//     if (product) {
//       const existingProductIndex = products.findIndex((p) => p.id === product.id);

//       if (existingProductIndex !== -1) {
//         // If the product already exists, update its quantity
//         const updatedProducts = [...products];
//         updatedProducts[existingProductIndex].quantity += 1;
//         setProducts(updatedProducts);
//       } else {
//         // If the product is new, add it to the list
//         setProducts([...products, { ...product, quantity: 1 }]);
//       }
//     }
//   }, [product]);

//   // Calculate total price
//   const calculateTotalPrice = (products) => {
//     const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotalPrice(total);
//   };

//   // Handle quantity change for a specific product
//   const handleQuantityChange = (index, change) => {
//     const newProducts = [...products];
//     let newQuantity = newProducts[index].quantity + change;

//     // Prevent negative or zero quantity
//     if (newQuantity < 1) newQuantity = 1;

//     newProducts[index].quantity = newQuantity;
//     setProducts(newProducts);
//   };

//   // Handle adding more products
//   const handleConfirmBooking = async () => {
//   const bookingDetails = {
//     customerName: "Customer Name", // Replace with actual customer name
//     bookingDate: new Date().toISOString(),
//     totalPrice: totalPrice,
//     items: products.map((item) => ({
//       productId: item.id,
//       quantity: item.quantity,
//       pricePerUnit: item.price,
//     })),
//   };

//   try {
//     const response = await fetch("/api/bookings", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(bookingDetails),
//     });

//     if (response.ok) {
//       sessionStorage.removeItem("bookingProducts");
//       setProducts([]);
//       navigate("/farmerdash/mybookings");
//     } else {
//       console.error("Failed to confirm booking");
//     }
//   } catch (error) {
//     console.error("Error confirming booking:", error);
//   }
// };

//     // Retrieve existing orders from localStorage
//     const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     // Add the new order to the list
//     const updatedOrders = [...existingOrders, bookingDetails];
//     // Save updated orders to localStorage
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));

//     // Clear the booking state after confirmation
//     sessionStorage.removeItem("bookingProducts");
//     setProducts([]);

//     // Redirect to the My Booking page
//     navigate("/farmerdash/mybookings");
//   };

//   // Handle going back to the products page
//   const handleBack = () => {
//     navigate("/farmerdash/farmerproducts");
//   };

//   // If no products are selected
//   if (products.length === 0) {
//     return (
//       <div className="booking-page">
//         <h2>No products selected for booking.</h2>
//         <button className="btn-secondary" onClick={handleBack}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       {/* Display all products in the booking */}
//       {products.map((item, index) => (
//         <div key={index} className="product-booking">
//           <h3>{item.name}</h3>
//           <img src={item.imagePath || "/placeholder.png"} alt={item.name} />
//           <p><strong>Brand:</strong> {item.brand}</p>
//           <p><strong>Description:</strong> {item.description}</p>
//           <p><strong>Price per unit:</strong> ₹{item.price}</p>

//           {/* Quantity Selector */}
//           <div className="quantity-selector">
//             <button onClick={() => handleQuantityChange(index, -1)}>-</button>
//             <input type="number" value={item.quantity} min="1" readOnly />
//             <button onClick={() => handleQuantityChange(index, 1)}>+</button>
//           </div>

//           <p><strong>Total for {item.name}:</strong> ₹{item.price * item.quantity}</p>
//         </div>
//       ))}

//       {/* Total Price */}
//       <p><strong>Total Price:</strong> ₹{totalPrice}</p>

//       {/* Confirm Booking Button */}
//       <button className="btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>

//       {/* Add More Products Button */}
//       <button className="btn-secondary" onClick={handleAddMoreProducts}>
//         Add More Products
//       </button>

//       {/* Back to Products Button */}
//       <button className="btn-secondary" onClick={handleBack}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default BookingPage;




// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Booking.css"; // Import the CSS file

// const BookingPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const product = location.state?.product;

//   // Retrieve products from sessionStorage or initialize as an empty array
//   const [products, setProducts] = useState(
//     JSON.parse(sessionStorage.getItem("bookingProducts")) || []
//   );
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Update sessionStorage whenever products change
//   useEffect(() => {
//     sessionStorage.setItem("bookingProducts", JSON.stringify(products));
//     calculateTotalPrice(products);
//   }, [products]);

//   // Add the new product to the list when the component mounts or when a new product is added
//   useEffect(() => {
//     if (product) {
//       const existingProductIndex = products.findIndex((p) => p.id === product.id);

//       if (existingProductIndex !== -1) {
//         // If the product already exists, update its quantity
//         const updatedProducts = [...products];
//         updatedProducts[existingProductIndex].quantity += 1;
//         setProducts(updatedProducts);
//       } else {
//         // If the product is new, add it to the list
//         setProducts([...products, { ...product, quantity: 1 }]);
//       }
//     }
//   }, [product]);

//   // Calculate total price
//   const calculateTotalPrice = (products) => {
//     const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotalPrice(total);
//   };

//   // Handle quantity change for a specific product
//   const handleQuantityChange = (index, change) => {
//     const newProducts = [...products];
//     let newQuantity = newProducts[index].quantity + change;

//     // Prevent negative or zero quantity
//     if (newQuantity < 1) newQuantity = 1;

//     newProducts[index].quantity = newQuantity;
//     setProducts(newProducts);
//   };

//   // Handle adding more products
//   const handleAddMoreProducts = () => {
//     navigate("/farmerdash/farmerproducts", { state: { fromBooking: true } });
//   };

//   // Handle booking confirmation
//   // const handleConfirmBooking = async () => {
//   //   const bookingDetails = {
//   //     customerName: "Customer Name", // Replace with actual customer name
//   //     bookingDate: new Date().toISOString(),
//   //     totalPrice: totalPrice,
//   //     items: products.map((item) => ({
//   //       productId: item.id,
//   //       quantity: item.quantity,
//   //       pricePerUnit: item.price,
//   //     })),
//   //   };

//   //   try {
//   //     // Replace with your backend API URL (e.g., http://localhost:<port>/api/bookings)
//   //     const apiUrl = "https://localhost:44361/api/bookings"; // Update this with your backend URL
//   //     const response = await fetch(apiUrl, {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(bookingDetails),
//   //     });

//   //     if (response.ok) {
//   //       // Clear the booking state after confirmation
//   //       sessionStorage.removeItem("bookingProducts");
//   //       setProducts([]);

//   //       // Redirect to the My Booking page
//   //       navigate("/farmerdash/mybookings");
//   //     } else {
//   //       console.error("Failed to confirm booking");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error confirming booking:", error);
//   //   }
//   // };


//   const handleConfirmBooking = async () => {
//     const bookingDetails = {
//         customerName: "Customer Name",
//         bookingDate: new Date().toISOString(),
//         totalAmount: totalPrice,
//         items: products.map(item => ({
//             productId: item.id,
//             quantity: item.quantity,
//             unitPrice: item.price
//         }))
//     };

//     try {
//         const apiUrl = "https://localhost:44361/api/bookings";
//         const response = await fetch(apiUrl, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             credentials: 'include',
//             body: JSON.stringify(bookingDetails)
//         });

//         if (response.ok) {
//             sessionStorage.removeItem("bookingProducts");
//             setProducts([]);
//             navigate("/farmerdash/mybookings");
//         } else {
//             const errorData = await response.json();
//             console.error("Booking failed:", errorData);
//         }
//     } catch (error) {
//         console.error("Error confirming booking:", error);
//     }
// };


//   // Handle going back to the products page
//   const handleBack = () => {
//     navigate("/farmerdash/farmerproducts");
//   };

//   // If no products are selected
//   if (products.length === 0) {
//     return (
//       <div className="booking-page">
//         <h2>No products selected for booking.</h2>
//         <button className="btn-secondary" onClick={handleBack}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       {/* Display all products in the booking */}
//       {products.map((item, index) => (
//         <div key={index} className="product-booking">
//           <h3>{item.name}</h3>
//           <img src={item.imagePath || "/placeholder.png"} alt={item.name} />
//           <p><strong>Brand:</strong> {item.brand}</p>
//           <p><strong>Description:</strong> {item.description}</p>
//           <p><strong>Price per unit:</strong> ₹{item.price}</p>

//           {/* Quantity Selector */}
//           <div className="quantity-selector">
//             <button onClick={() => handleQuantityChange(index, -1)}>-</button>
//             <input type="number" value={item.quantity} min="1" readOnly />
//             <button onClick={() => handleQuantityChange(index, 1)}>+</button>
//           </div>

//           <p><strong>Total for {item.name}:</strong> ₹{item.price * item.quantity}</p>
//         </div>
//       ))}

//       {/* Total Price */}
//       <p><strong>Total Price:</strong> ₹{totalPrice}</p>

//       {/* Confirm Booking Button */}
//       <button className="btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>

//       {/* Add More Products Button */}
//       <button className="btn-secondary" onClick={handleAddMoreProducts}>
//         Add More Products
//       </button>

//       {/* Back to Products Button */}
//       <button className="btn-secondary" onClick={handleBack}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default BookingPage;







// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "./Booking.css";

// const BookingPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const newProduct = location.state?.product; // Newly selected product

//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [customerName, setCustomerName] = useState("");

//   // Fetch logged-in user name from sessionStorage
//   useEffect(() => {
//     const storedUserName = sessionStorage.getItem("userName");
//     if (storedUserName) {
//       setCustomerName(storedUserName);
//     }

//     // Retrieve stored products from sessionStorage
//     const storedProducts = sessionStorage.getItem("selectedProducts");
//     if (storedProducts) {
//       setSelectedProducts(JSON.parse(storedProducts));
//     }
//   }, []);

//   // Add a new product to the list without replacing existing ones
//   useEffect(() => {
//     if (newProduct) {
//       setSelectedProducts((prevProducts) => {
//         const existingProductIndex = prevProducts.findIndex((p) => p.id === newProduct.id);
//         let updatedProducts;

//         if (existingProductIndex !== -1) {
//           // If product already exists, increase quantity
//           updatedProducts = [...prevProducts];
//           updatedProducts[existingProductIndex].quantity += 1;
//         } else {
//           // Add new product without replacing the old ones
//           updatedProducts = [...prevProducts, { ...newProduct, quantity: 1 }];
//         }

//         // Store updated products in sessionStorage
//         sessionStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));

//         return updatedProducts;
//       });
//     }
//   }, [newProduct]);

//   // Calculate total price
//   useEffect(() => {
//     const total = selectedProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     setTotalPrice(total);
//   }, [selectedProducts]);

//   // Handle quantity change
//   const handleQuantityChange = (index, change) => {
//     setSelectedProducts((prevProducts) => {
//       const updatedProducts = [...prevProducts];
//       let newQuantity = updatedProducts[index].quantity + change;

//       if (newQuantity < 1) newQuantity = 1; // Prevent negative quantity
//       updatedProducts[index] = { ...updatedProducts[index], quantity: newQuantity };

//       // Store updated products in sessionStorage
//       sessionStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));

//       return updatedProducts;
//     });
//   };

//   // Handle booking confirmation
//   const handleConfirmBooking = async () => {
//     if (!customerName.trim()) {
//       alert("Please enter your name.");
//       return;
//     }

//     if (selectedProducts.length === 0) {
//       alert("No product selected.");
//       return;
//     }

  

// const bookingDetails = {
//   customerName: customerName.trim(),
//   bookingDate: new Date().toISOString(),
//   items: selectedProducts.map((item) => ({
//     productId: item.id,
//     quantity: item.quantity,
//     price: item.price,  // ✅ Change "pricePerUnit" to "price"
//   })),
//   totalPrice: totalPrice,
// };



//     try {
//       const response = await fetch("https://localhost:44361/api/booking", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingDetails),
//       });

//       if (!response.ok) throw new Error("Failed to confirm booking");

//       sessionStorage.removeItem("selectedProducts"); // Clear selected products after booking
//       navigate("/farmerdash/mybookings");
//     } catch (error) {
//       console.error("Error confirming booking:", error);
//     }
//   };

//   // Handle going back to the products page
//   const handleBack = () => {
//     navigate("/farmerdash/farmerproducts");
//   };

//   // Handle adding more products
//   const handleAddMoreProducts = () => {
//     navigate("/farmerdash/farmerproducts"); // Navigate back to product selection without losing previous selections
//   };

//   if (selectedProducts.length === 0) {
//     return (
//       <div className="booking-page">
//         <h2>No product selected for booking.</h2>
//         <button className="btn-secondary" onClick={handleBack}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="booking-page">
//       <h2>Booking Details</h2>

//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={customerName}
//         readOnly // Auto-filled from sessionStorage
//       />

//       {selectedProducts.map((item, index) => (
//         <div key={item.id} className="product-booking">
//           <h3>{item.name}</h3>
//           <img src={item.imagePath || "/placeholder.png"} alt={item.name} />
//           <p><strong>Brand:</strong> {item.brand}</p>
//           <p><strong>Description:</strong> {item.description}</p>
//           <p><strong>Price per unit:</strong> ₹{item.price}</p>

//           <div className="quantity-selector">
//             <button onClick={() => handleQuantityChange(index, -1)}>-</button>
//             <input type="number" value={item.quantity} min="1" readOnly />
//             <button onClick={() => handleQuantityChange(index, 1)}>+</button>
//           </div>

//           <p><strong>Total for {item.name}:</strong> ₹{item.price * item.quantity}</p>
//         </div>
//       ))}

//       <p><strong>Total Price:</strong> ₹{totalPrice}</p>

//       <button className="btn-primary" onClick={handleConfirmBooking}>
//         Confirm Booking
//       </button>

//       <button className="btn-secondary" onClick={handleAddMoreProducts}>
//         Add More Products
//       </button>

//       <button className="btn-secondary" onClick={handleBack}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default BookingPage;


//=======================Above code is working=================================

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Booking.css";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const newProduct = location.state?.product; // Newly selected product

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerName, setCustomerName] = useState("");

  // Fetch logged-in user name from sessionStorage
  useEffect(() => {
    const storedUserName = sessionStorage.getItem("userName");
    if (storedUserName) {
      setCustomerName(storedUserName);
    }

    // Retrieve stored products from sessionStorage
    const storedProducts = sessionStorage.getItem("selectedProducts");
    if (storedProducts) {
      setSelectedProducts(JSON.parse(storedProducts));
    }
  }, []);

  // Add a new product to the list without replacing existing ones
  useEffect(() => {
    if (newProduct) {
      setSelectedProducts((prevProducts) => {
        const existingProductIndex = prevProducts.findIndex((p) => p.id === newProduct.id);
        let updatedProducts;

        if (existingProductIndex !== -1) {
          // If product already exists, increase quantity
          updatedProducts = [...prevProducts];
          updatedProducts[existingProductIndex].quantity += 1;
        } else {
          // Add new product without replacing the old ones
          updatedProducts = [...prevProducts, { ...newProduct, quantity: 1 }];
        }

        // Store updated products in sessionStorage
        sessionStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));

        return updatedProducts;
      });
    }
  }, [newProduct]);

  // Calculate total price
  useEffect(() => {
    const total = selectedProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [selectedProducts]);

  // Handle quantity change
  const handleQuantityChange = (index, change) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      let newQuantity = updatedProducts[index].quantity + change;

      if (newQuantity < 1) newQuantity = 1; // Prevent negative quantity
      updatedProducts[index] = { ...updatedProducts[index], quantity: newQuantity };

      // Store updated products in sessionStorage
      sessionStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));

      return updatedProducts;
    });
  };

  // Handle booking confirmation
  const handleConfirmBooking = async () => {
    if (!customerName.trim()) {
      alert("Please enter your name.");
      return;
    }
  
    if (selectedProducts.length === 0) {
      alert("No product selected.");
      return;
    }
  
    const bookingDetails = {
      customerName: customerName.trim(),
      bookingDate: new Date().toISOString(),
      status: "completed", // Marking booking as completed
      items: selectedProducts.map((item) => ({
        productId: item.id,
        productName: item.name, // Ensure product name is saved
        brand: item.brand,
        description: item.description,
        quantity: item.quantity,
        price: item.price, 
        imagePath: item.imagePath || "/placeholder.png"
      })),
      totalPrice: totalPrice,
    };
  
    try {
      const response = await fetch("https://localhost:44361/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });
  
      if (!response.ok) throw new Error("Failed to confirm booking");
  
      sessionStorage.removeItem("selectedProducts"); // Clear selected products after booking
      navigate("/farmerdash/mybookings"); // Redirect to MyBookings page after booking
    } catch (error) {
      console.error("Error confirming booking:", error);
    }
  };
  
  // Handle going back to the products page
  const handleBack = () => {
    navigate("/farmerdash/farmerproducts");
  };

  // Handle adding more products
  const handleAddMoreProducts = () => {
    navigate("/farmerdash/farmerproducts"); // Navigate back to product selection without losing previous selections
  };

  if (selectedProducts.length === 0) {
    return (
      <div className="booking-page">
        <h2>No product selected for booking.</h2>
        <button className="btn-secondary" onClick={handleBack}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <h2>Booking Details</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={customerName}
        readOnly // Auto-filled from sessionStorage
      />

      {selectedProducts.map((item, index) => (
        <div key={item.id} className="product-booking">
          <h3>{item.name}</h3>
          <img src={item.imagePath || "/placeholder.png"} alt={item.name} />
          <p><strong>Brand:</strong> {item.brand}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Price per unit:</strong> ₹{item.price}</p>

          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(index, -1)}>-</button>
            <input type="number" value={item.quantity} min="1" readOnly />
            <button onClick={() => handleQuantityChange(index, 1)}>+</button>
          </div>

          <p><strong>Total for {item.name}:</strong> ₹{item.price * item.quantity}</p>
        </div>
      ))}

      <p><strong>Total Price:</strong> ₹{totalPrice}</p>

      <button className="btn-primary" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>

      <button className="btn-secondary" onClick={handleAddMoreProducts}>
        Add More Products
      </button>

      <button className="btn-secondary" onClick={handleBack}>
        Back to Products
      </button>
    </div>
  );
};

export default BookingPage;