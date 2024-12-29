import React, { useState, useEffect } from 'react';
import './ViewOrders.css';

export default function ViewOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(storedOrders);
    }, []);

    return (
        <div className="view-orders">
            <h2>View Orders</h2>
            <div className="order-list">
                {orders.length > 0 ? (
                    orders.map((order, index) => (
                        <div className="order-card" key={index}>
                            <h4>Order ID: {order.id}</h4>
                            <p>Customer: {order.customerName}</p>
                            <p>Product: {order.productName}</p>
                            <p>Quantity: {order.quantity}</p>
                            <p>Total Price: ₹{order.totalPrice}</p>
                        </div>
                    ))
                ) : (
                    <p>No orders yet.</p>
                )}
            </div>
        </div>
    );
}
