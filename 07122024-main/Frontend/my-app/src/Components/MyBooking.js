// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./MyBooking.css"; // Import the CSS file

// export const MyBooking = () => {
//   const navigate = useNavigate();

//   // Retrieve booking details from localStorage
//   const bookings = JSON.parse(localStorage.getItem("myBookings")) || [];

//   // Handle going back to the products page
//   const handleBack = () => {
//     navigate("/farmerdash/farmerproducts");
//   };

//   return (
//     <div className="my-booking-page">
//       <h2>My Bookings</h2>

//       {bookings.length === 0 ? (
//         <p>No bookings found.</p>
//       ) : (
//         <div className="booking-list">
//           {bookings.map((booking, index) => (
//             <div key={index} className="booking-item">
//               <h3>Booking Date: {booking.date || "Unknown Date"}</h3>
              
//               {/* Ensure `booking.items` exists before mapping */}
//               {(Array.isArray(booking.items) ? booking.items : []).map((item, itemIndex) => (
//                 <div key={itemIndex} className="booking-product">
//                   <img src={item.imagePath || "/placeholder.png"} alt={item.name || "Product"} />
//                   <p><strong>Product:</strong> {item.name || "N/A"}</p>
//                   <p><strong>Brand:</strong> {item.brand || "N/A"}</p>
//                   <p><strong>Description:</strong> {item.description || "No description available"}</p>
//                   <p><strong>Quantity:</strong> {item.quantity || 1}</p>
//                   <p><strong>Price per unit:</strong> ₹{item.price || 0}</p>
//                   <p><strong>Total:</strong> ₹{item.total || 0}</p>
//                 </div>
//               ))}

//               <p><strong>Total Price for this Booking:</strong> ₹{booking.totalPrice || 0}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Back to Products Button */}
//       <button className="btn-secondary" onClick={handleBack}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default MyBooking;














// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./MyBooking.css";

// const MyBooking = () => {
//   const navigate = useNavigate();
//   const [bookings, setBookings] = useState([]);

//   // Fetch bookings from the backend API
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch("https://localhost:44361/api/booking"); // Replace with your API URL
//         if (response.ok) {
//           const data = await response.json();
//           setBookings(data);
//         } else {
//           console.error("Failed to fetch bookings");
//         }
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // Handle going back to the products page
//   const handleBack = () => {
//     navigate("/farmerdash/farmerproducts");
//   };

//   return (
//     <div className="my-booking-page">
//       <h2>My Bookings</h2>

//       {bookings.length === 0 ? (
//         <p>No bookings found.</p>
//       ) : (
//         <div className="booking-list">
//           {bookings.map((booking, index) => (
//             <div key={index} className="booking-item">
//               <h3>Booking Date: {new Date(booking.bookingDate).toLocaleString()}</h3>
//               <p><strong>Customer:</strong> {booking.customerName}</p>

//               {booking.items.map((item, itemIndex) => (
//                 <div key={itemIndex} className="booking-product">
//                   <img src={item.imagePath || "/placeholder.png"} alt={item.productName} />
//                   <p><strong>Product:</strong> {item.productName}</p>
//                   <p><strong>Brand:</strong> {item.brand}</p>
//                   <p><strong>Description:</strong> {item.description}</p>
//                   <p><strong>Quantity:</strong> {item.quantity}</p>
//                   <p><strong>Price per unit:</strong> ₹{item.price}</p>
//                   <p><strong>Total:</strong> ₹{item.price * item.quantity}</p>
//                 </div>
//               ))}

//               <p><strong>Total Price for this Booking:</strong> ₹{booking.totalPrice}</p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Back to Products Button */}
//       <button className="btn-secondary" onClick={handleBack}>
//         Back to Products
//       </button>
//     </div>
//   );
// };

// export default MyBooking;




import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBooking.css";

const MyBooking = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const customerName = sessionStorage.getItem("userName");

  useEffect(() => {
    if (!customerName) return;

    const fetchBookings = async () => {
      try {
        const response = await fetch(`https://localhost:44361/api/booking/customer/${customerName}`);
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          console.error("Failed to fetch bookings");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [customerName]);

  const handleBack = () => {
    navigate("/farmerdash/farmerproducts");
  };

  return (
    <div className="my-booking-page">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking, index) => (
            <div key={index} className="booking-item">
              <h3>Booking Date: {new Date(booking.bookingDate).toLocaleString()}</h3>
              <p><strong>Customer:</strong> {booking.customerName}</p>
              {booking.items.map((item, itemIndex) => (
                <div key={itemIndex} className="booking-product">
                  <img 
                    src={item.imagePath ? `https://localhost:44361/${item.imagePath}` : "/placeholder.png"} 
                    alt={item.productName} 
                    onError={(e) => { e.target.src = "/placeholder.png"; }} // Handle broken images
                  />
                  <p><strong>Product:</strong> {item.productName}</p>
                  <p><strong>Brand:</strong> {item.brand}</p>
                  <p><strong>Description:</strong> {item.description}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Price per unit:</strong> ₹{item.price}</p>
                  <p><strong>Total:</strong> ₹{item.price * item.quantity}</p>
                </div>
              ))}
              <p><strong>Total Price for this Booking:</strong> ₹{booking.totalPrice}</p>
            </div>
          ))}
        </div>
      )}
      <button className="btn-secondary" onClick={handleBack}>Back to Products</button>
    </div>
  );
};

export default MyBooking;
