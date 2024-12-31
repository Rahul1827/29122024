

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard() {
    const navigate = useNavigate();

    // Redirect to add product page
    const handleAddProduct = () => {
        navigate('/admindsh/addproduct');
    };

    // Redirect to manage stock page
    const handleManageStock = () => {
        navigate('/admindsh/managestock');
    };

    // Redirect to view orders page
    const handleViewOrders = () => {
        navigate('/admindsh/vieworders');
    };

    // Redirect to view field requests page
    const handleViewFieldRequests = () => {
        navigate('/admindsh/viewfieldvisitrequest');  // Make sure the route exists
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = '/';
    };

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>

            <div className="dashboard-cards">
                {/* Add Product Card */}
                <div className="dashboard-card" onClick={handleAddProduct}>
                    <h3>Add Product</h3>
                    <p>Click to add new products to your inventory.</p>
                </div>

                {/* Manage Stock Card */}
                <div className="dashboard-card" onClick={handleManageStock}>
                    <h3>Manage Stock</h3>
                    <p>Click to manage your stock levels.</p>
                </div>

                {/* View Orders Card */}
                <div className="dashboard-card" onClick={handleViewOrders}>
                    <h3>View Orders</h3>
                    <p>Click to view customer orders.</p>
                </div>

                {/* View Field Requests Card */}
                <div className="dashboard-card" onClick={handleViewFieldRequests}>
                    <h3>View Field Requests</h3>
                    <p>Click to view and manage field requests.</p>
                </div>
            </div>
        </div>
    );
}


