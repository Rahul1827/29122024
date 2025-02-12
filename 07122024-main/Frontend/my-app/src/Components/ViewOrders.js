// import React, { useState, useEffect } from 'react';
// import './ViewOrders.css';

// export default function ViewOrders() {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
//         setOrders(storedOrders);
//     }, []);

//     return (
//         <div className="view-orders">
//             <h2>View Orders</h2>
//             <div className="order-list">
//                 {orders.length > 0 ? (
//                     orders.map((order, index) => (
//                         <div className="order-card" key={index}>
//                             <h4>Order ID: {order.id}</h4>
//                             <p>Date: {order.date}</p>
//                             <p>Customer: {order.customerName}</p>
//                             <p>Total Price: ₹{order.totalPrice}</p>
//                             <div className="order-items">
//                                 <h5>Items:</h5>
//                                 {order.items.map((item, itemIndex) => (
//                                     <div key={itemIndex} className="order-item">
//                                         <img src={item.imagePath || "/placeholder.png"} alt={item.productName} />
//                                         <p><strong>Product:</strong> {item.productName}</p>
//                                         <p><strong>Quantity:</strong> {item.quantity}</p>
//                                         <p><strong>Price per unit:</strong> ₹{item.price}</p>
//                                         <p><strong>Total:</strong> ₹{item.total}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No orders yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// }




// import React, { useEffect, useState } from "react";
// import "./ViewOrders.css";

// const ViewOrders = () => {
//   const [orders, setOrders] = useState([]);

//   // Fetch orders from the backend API
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/orders"); // Replace with your API URL
//         if (response.ok) {
//           const data = await response.json();
//           setOrders(data);
//         } else {
//           console.error("Failed to fetch orders");
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="view-orders">
//       <h2>View Orders</h2>
//       <div className="order-list">
//         {orders.length > 0 ? (
//           orders.map((order, index) => (
//             <div className="order-card" key={index}>
//               <h4>Order ID: {order.id}</h4>
//               <p>Date: {new Date(order.date).toLocaleString()}</p>
//               <p>Customer: {order.customerName}</p>
//               <p>Total Price: ₹{order.totalPrice}</p>
//               <div className="order-items">
//                 <h5>Items:</h5>
//                 {order.items.map((item, itemIndex) => (
//                   <div key={itemIndex} className="order-item">
//                     <img src={item.imagePath || "/placeholder.png"} alt={item.productName} />
//                     <p><strong>Product:</strong> {item.productName}</p>
//                     <p><strong>Quantity:</strong> {item.quantity}</p>
//                     <p><strong>Price per unit:</strong> ₹{item.price}</p>
//                     <p><strong>Total:</strong> ₹{item.total}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No orders yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewOrders;



import React, { useEffect, useState } from "react";
import "./ViewOrders.css";

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("https://localhost:44361/api/booking");
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          console.error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="view-orders">
      <h2>View Orders</h2>
      <div className="order-list">
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div className="order-card" key={index}>
              <h4>Order ID: {order.id}</h4>
              <p>Date: {new Date(order.bookingDate).toLocaleString()}</p>
              <p>Customer: {order.customerName}</p>
              <p>Total Price: ₹{order.totalPrice}</p>
              <div className="order-items">
                <h5>Items:</h5>
                {order.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="order-item">
                    <img 
                      src={item.imagePath ? `https://localhost:44361/${item.imagePath}` : "/placeholder.png"} 
                      alt={item.productName} 
                      onError={(e) => { e.target.src = "/placeholder.png"; }} // Handle broken images
                    />
                    <p><strong>Product:</strong> {item.productName}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Price per unit:</strong> ₹{item.price}</p>
                    <p><strong>Total:</strong> ₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default ViewOrders;
