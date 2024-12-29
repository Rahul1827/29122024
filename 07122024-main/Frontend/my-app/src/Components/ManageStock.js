import React, { useState, useEffect } from "react";
import "./ManageStock.css";

const ManageStock = () => {
  const [incomingStock, setIncomingStock] = useState({
    productName: "",
    brandName: "",
    quantity: "",
    category: "Wheat",
    dealerPrice: "",
    dealerName: "",
  });

  const [inventory, setInventory] = useState(
    JSON.parse(localStorage.getItem("inventory")) || []
  );
  
  const [incomingStocks, setIncomingStocks] = useState(
    JSON.parse(localStorage.getItem("incomingStocks")) || []
  );
  
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || ["Wheat", "Rice", "Corn"]
  );
  
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [activeSection, setActiveSection] = useState("incoming");

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("incomingStocks", JSON.stringify(incomingStocks));
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [inventory, incomingStocks, categories]);

  const handleIncomingStockChange = (e) => {
    const { name, value } = e.target;
    setIncomingStock((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddIncomingStock = (e) => {
    e.preventDefault();

    const { productName, quantity, dealerName, dealerPrice, category } = incomingStock;
    const productDetails = products.find((p) => p.name === productName);

    if (!productDetails) {
      alert("Product not found!");
      return;
    }

    const newIncomingStock = {
      ...incomingStock,
      price: productDetails.price,
    };

    const updatedIncomingStocks = [...incomingStocks, newIncomingStock];
    setIncomingStocks(updatedIncomingStocks);

    const updatedInventory = [
      ...inventory,
      {
        productName,
        brandName: newIncomingStock.brandName,
        quantity: parseInt(quantity),
        category,
      },
    ];
    setInventory(updatedInventory);

    setIncomingStock({
      productName: "",
      brandName: "",
      quantity: "",
      category: "Wheat",
      dealerPrice: "",
      dealerName: "",
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterInventory = () => {
    return inventory.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="manage-stock-container">
      <h2>Manage Stock</h2>

      <div className="section-buttons">
        <button onClick={() => setActiveSection("incoming")}>Incoming Stock</button>
        <button onClick={() => setActiveSection("inventory")}>Inventory</button>
        <button onClick={() => setActiveSection("available")}>View Available Stock</button>
      </div>

      {activeSection === "incoming" && (
        <div className="incoming-stock-section">
          <h3>Incoming Stock</h3>
          <form onSubmit={handleAddIncomingStock} className="stock-form">
            <div className="form-group">
              <input
                type="text"
                name="productName"
                value={incomingStock.productName}
                onChange={handleIncomingStockChange}
                placeholder="Product Name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="brandName"
                value={incomingStock.brandName}
                onChange={handleIncomingStockChange}
                placeholder="Brand Name"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                name="quantity"
                value={incomingStock.quantity}
                onChange={handleIncomingStockChange}
                placeholder="Quantity"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <select
                name="category"
                value={incomingStock.category}
                onChange={handleIncomingStockChange}
                className="form-control"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <input
                type="number"
                name="dealerPrice"
                value={incomingStock.dealerPrice}
                onChange={handleIncomingStockChange}
                placeholder="Price from Dealer"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="dealerName"
                value={incomingStock.dealerName}
                onChange={handleIncomingStockChange}
                placeholder="Dealer Name"
                className="form-control"
              />
            </div>

            <button type="submit" className="submit-button">
              Add Incoming Stock
            </button>
          </form>
        </div>
      )}

      {activeSection === "inventory" && (
        <div className="inventory-section">
          <h3>Inventory</h3>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Inventory"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          {filterInventory().length > 0 ? (
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Brand Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {filterInventory().map((item, index) => (
                  <tr key={index}>
                    <td>{item.productName}</td>
                    <td>{item.brandName}</td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}

      {activeSection === "available" && (
        <div className="available-stock-section">
          <h3>View Available Stock</h3>
          {filterInventory().length > 0 ? (
            <table className="available-stock-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Available Quantity</th>
                </tr>
              </thead>
              <tbody>
                {filterInventory().map((item, index) => (
                  <tr key={index}>
                    <td>{item.productName}</td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageStock;
