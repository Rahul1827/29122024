import React from "react";
import "./InventoryManagement.css";
import stockTracking from "../assests/images/tracking.png";
import salesAnalytics from"../assests/images/sales.png";
import supplierManagement from "../assests/images/supplier.png";

const InventoryManagement = () => {
  const inventoryFeatures = [
    {
      title: "Stock Tracking",
      description:
        "Monitor stock levels in real time and get alerts for low inventory.",
      image:stockTracking ,
    },
    {
      title: "Sales Analytics",
      description:
        "Analyze sales data and identify best-selling products to optimize restocking.",
      image:salesAnalytics ,
    },
    {
      title: "Supplier Management",
      description:
        "Keep track of supplier details, purchase history, and payment records.",
      image: supplierManagement ,
    },
  ];

  return (
    <div className="inventory-management">
      <header className="page-header">
        <h1>Inventory Management</h1>
        <p>Manage your stock efficiently and boost business productivity.</p>
      </header>

      <section className="inventory-cards">
        {inventoryFeatures.map((feature, index) => (
          <div key={index} className="card">
            <img src={feature.image} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="article">
        <h2>How to Improve Inventory Management?</h2>
        <p>
          An efficient inventory system ensures that products are always
          available for customers while minimizing wastage. Some key strategies
          include:
        </p>
        <ul>
          <li>Using barcode or RFID scanning for quick stock updates.</li>
          <li>Implementing real-time stock alerts to prevent shortages.</li>
          <li>Integrating inventory software for automated tracking.</li>
        </ul>
        <p>
          Keeping a detailed inventory log can help businesses avoid losses and
          optimize storage space.
        </p>
      </section>
    </div>
  );
};

export default InventoryManagement;
