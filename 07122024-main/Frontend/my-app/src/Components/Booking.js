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



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div>
        <h2>No product selected for booking.</h2>
        <button onClick={() => navigate("/farmerProducts")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <h2>Booking for {product.name}</h2>
      <img src={product.imagePath || "/placeholder.png"} alt={product.name} style={{ width: "200px" }} />
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
      
      {/* Add a form here for the booking process */}
      <button className="btn-primary" onClick={() => alert("Booking Confirmed!")}>
        Confirm Booking
      </button>
      <button className="btn-secondary" onClick={() => navigate("/farmerProducts")}>
        Back to Products
      </button>
    </div>
  );
};

export default BookingPage;
