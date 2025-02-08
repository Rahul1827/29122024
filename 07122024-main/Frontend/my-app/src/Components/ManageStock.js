// import React, { useState, useEffect } from "react";
// import "./ManageStock.css";

// const ManageStock = () => {
//   const [incomingStock, setIncomingStock] = useState({
//     productName: "",
//     brandName: "",
//     quantity: "",
//     category: "Wheat",
//     dealerPrice: "",
//     dealerName: "",
//   });

//   const [inventory, setInventory] = useState(
//     JSON.parse(localStorage.getItem("inventory")) || []
//   );
  
//   const [incomingStocks, setIncomingStocks] = useState(
//     JSON.parse(localStorage.getItem("incomingStocks")) || []
//   );
  
//   const [categories, setCategories] = useState(
//     JSON.parse(localStorage.getItem("categories")) || ["Wheat", "Rice", "Corn"]
//   );
  
//   const [searchQuery, setSearchQuery] = useState("");
//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("products")) || []
//   );

//   const [activeSection, setActiveSection] = useState("incoming");

//   useEffect(() => {
//     localStorage.setItem("inventory", JSON.stringify(inventory));
//     localStorage.setItem("incomingStocks", JSON.stringify(incomingStocks));
//     localStorage.setItem("categories", JSON.stringify(categories));
//   }, [inventory, incomingStocks, categories]);

//   const handleIncomingStockChange = (e) => {
//     const { name, value } = e.target;
//     setIncomingStock((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleAddIncomingStock = (e) => {
//     e.preventDefault();

//     const { productName, quantity, dealerName, dealerPrice, category } = incomingStock;
//     const productDetails = products.find((p) => p.name === productName);

//     if (!productDetails) {
//       alert("Product not found!");
//       return;
//     }

//     const newIncomingStock = {
//       ...incomingStock,
//       price: productDetails.price,
//     };

//     const updatedIncomingStocks = [...incomingStocks, newIncomingStock];
//     setIncomingStocks(updatedIncomingStocks);

//     const updatedInventory = [
//       ...inventory,
//       {
//         productName,
//         brandName: newIncomingStock.brandName,
//         quantity: parseInt(quantity),
//         category,
//       },
//     ];
//     setInventory(updatedInventory);

//     setIncomingStock({
//       productName: "",
//       brandName: "",
//       quantity: "",
//       category: "Wheat",
//       dealerPrice: "",
//       dealerName: "",
//     });
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filterInventory = () => {
//     return inventory.filter(
//       (item) =>
//         item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.category.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   return (
//     <div className="manage-stock-container">
//       <h2>Manage Stock</h2>

//       <div className="section-buttons">
//         <button onClick={() => setActiveSection("incoming")}>Incoming Stock</button>
//         <button onClick={() => setActiveSection("inventory")}>Inventory</button>
//         <button onClick={() => setActiveSection("available")}>View Available Stock</button>
//       </div>

//       {activeSection === "incoming" && (
//         <div className="incoming-stock-section">
//           <h3>Incoming Stock</h3>
//           <form onSubmit={handleAddIncomingStock} className="stock-form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="productName"
//                 value={incomingStock.productName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Product Name"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="brandName"
//                 value={incomingStock.brandName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Brand Name"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="number"
//                 name="quantity"
//                 value={incomingStock.quantity}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Quantity"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <select
//                 name="category"
//                 value={incomingStock.category}
//                 onChange={handleIncomingStockChange}
//                 className="form-control"
//               >
//                 {categories.map((category, index) => (
//                   <option key={index} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <input
//                 type="number"
//                 name="dealerPrice"
//                 value={incomingStock.dealerPrice}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Price from Dealer"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="dealerName"
//                 value={incomingStock.dealerName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Dealer Name"
//                 className="form-control"
//               />
//             </div>

//             <button type="submit" className="submit-button">
//               Add Incoming Stock
//             </button>
//           </form>
//         </div>
//       )}

//       {activeSection === "inventory" && (
//         <div className="inventory-section">
//           <h3>Inventory</h3>
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search Inventory"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="search-input"
//             />
//           </div>

//           {filterInventory().length > 0 ? (
//             <table className="inventory-table">
//               <thead>
//                 <tr>
//                   <th>Product Name</th>
//                   <th>Brand Name</th>
//                   <th>Category</th>
//                   <th>Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filterInventory().map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.productName}</td>
//                     <td>{item.brandName}</td>
//                     <td>{item.category}</td>
//                     <td>{item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No products found.</p>
//           )}
//         </div>
//       )}

//       {activeSection === "available" && (
//         <div className="available-stock-section">
//           <h3>View Available Stock</h3>
//           {filterInventory().length > 0 ? (
//             <table className="available-stock-table">
//               <thead>
//                 <tr>
//                   <th>Product Name</th>
//                   <th>Category</th>
//                   <th>Available Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filterInventory().map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.productName}</td>
//                     <td>{item.category}</td>
//                     <td>{item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No products available.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStock;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ManageStock.css";

// const ManageStock = () => {
//   const [incomingStock, setIncomingStock] = useState({
//     productName: "",
//     brandName: "",
//     quantity: "",
//     category: "Wheat",
//     dealerPrice: "",
//     dealerName: "",
//     cropIds: [],
//   });

//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [inventory, setInventory] = useState([]);

//   useEffect(() => {
//     // Fetch categories (crops)
//     axios.get("https://localhost:44361/api/crop")
//       .then((response) => setCategories(response.data))
//       .catch((error) => console.error("Error fetching categories:", error));

//     // Fetch products (if needed for stock addition)
//     axios.get("https://localhost:44361/api/product")  // Replace with your actual endpoint
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error("Error fetching products:", error));

//     // Fetch current inventory
//     axios.get("https://localhost:44361/api/stock")
//       .then((response) => setInventory(response.data))
//       .catch((error) => console.error("Error fetching inventory:", error));
//   }, []);

//   const handleIncomingStockChange = (e) => {
//     const { name, value } = e.target;
//     setIncomingStock((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleAddIncomingStock = (e) => {
//     e.preventDefault();
//     const { productName, quantity, dealerName, dealerPrice, category, cropIds } = incomingStock;

//     // Add the new stock via API
//     axios.post("https://localhost:44361/api/stock", {
//       productName,
//       brandName: "", // Use form field for brandName if required
//       quantity,
//       category,
//       dealerPrice,
//       dealerName,
//       cropIds,  // Send multiple crop IDs
//     })
//     .then((response) => {
//       console.log("Stock added:", response.data);
//       setInventory([...inventory, response.data]);
//     })
//     .catch((error) => console.error("Error adding stock:", error));
//   };

//   return (
//     <div className="manage-stock-container">
//       <h2>Manage Stock</h2>

//       <form onSubmit={handleAddIncomingStock}>
//         {/* Product Name, Brand Name, Quantity, Price */}
//         {/* Crop Selection (Multiple Crops) */}
//         <select
//           name="cropIds"
//           multiple
//           value={incomingStock.cropIds}
//           onChange={handleIncomingStockChange}
//         >
//           {categories.map((category) => (
//             <option key={category.id} value={category.id}>
//               {category.cropName}
//             </option>
//           ))}
//         </select>

//         <button type="submit">Add Incoming Stock</button>
//       </form>
//     </div>
//   );
// };

// export default ManageStock;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ManageStock.css";

// const ManageStock = () => {
//   const [incomingStock, setIncomingStock] = useState({
//     productName: "",
//     brandName: "",
//     quantity: "",
//     category: "Wheat",
//     dealerPrice: "",
//     dealerName: "",
//     cropIds: [],
//   });

//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [inventory, setInventory] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     // Fetch categories (crops)
//     axios
//       .get("https://localhost:44361/api/crop")
//       .then((response) => setCategories(response.data))
//       .catch((error) => console.error("Error fetching categories:", error));

//     // Fetch products (if needed for stock addition)
//     axios
//       .get("https://localhost:44361/api/product") // Replace with your actual endpoint
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error("Error fetching products:", error));

//     // Fetch current inventory
//     axios
//       .get("https://localhost:44361/api/stock")
//       .then((response) => setInventory(response.data))
//       .catch((error) => console.error("Error fetching inventory:", error));
//   }, []);

//   const handleIncomingStockChange = (e) => {
//     const { name, value, options } = e.target;
//     if (name === "cropIds") {
//       const selectedValues = Array.from(options)
//         .filter((option) => option.selected)
//         .map((option) => option.value);
//       setIncomingStock((prevState) => ({
//         ...prevState,
//         cropIds: selectedValues,
//       }));
//     } else {
//       setIncomingStock((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleAddIncomingStock = (e) => {
//     e.preventDefault();
//     const { productName, quantity, dealerName, dealerPrice, category, cropIds } = incomingStock;

//     // Add the new stock via API
//     axios
//       .post("https://localhost:44361/api/stock", {
//         productName,
//         brandName: "", // Use form field for brandName if required
//         quantity,
//         category,
//         dealerPrice,
//         dealerName,
//         cropIds, // Send multiple crop IDs
//       })
//       .then((response) => {
//         console.log("Stock added:", response.data);
//         setInventory([...inventory, response.data]);
//       })
//       .catch((error) => console.error("Error adding stock:", error));
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filterInventory = () => {
//     return inventory.filter(
//       (item) =>
//         item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.category.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   return (
//     <div className="manage-stock-container">
//       <h2>Manage Stock</h2>

//       <div className="section-buttons">
//         <button>Incoming Stock</button>
//         <button>Inventory</button>
//         <button>View Available Stock</button>
//       </div>

//       <div className="incoming-stock-section">
//         <h3>Incoming Stock</h3>
//         <form onSubmit={handleAddIncomingStock} className="stock-form">
//           <div className="form-group">
//             <input
//               type="text"
//               name="productName"
//               value={incomingStock.productName}
//               onChange={handleIncomingStockChange}
//               placeholder="Product Name"
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="text"
//               name="brandName"
//               value={incomingStock.brandName}
//               onChange={handleIncomingStockChange}
//               placeholder="Brand Name"
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="number"
//               name="quantity"
//               value={incomingStock.quantity}
//               onChange={handleIncomingStockChange}
//               placeholder="Quantity"
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="number"
//               name="dealerPrice"
//               value={incomingStock.dealerPrice}
//               onChange={handleIncomingStockChange}
//               placeholder="Price from Dealer"
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="text"
//               name="dealerName"
//               value={incomingStock.dealerName}
//               onChange={handleIncomingStockChange}
//               placeholder="Dealer Name"
//               className="form-control"
//             />
//           </div>

//           <div className="form-group">
//             <select
//               name="cropIds"
//               multiple
//               value={incomingStock.cropIds}
//               onChange={handleIncomingStockChange}
//               className="form-control"
//             >
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.cropName}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button type="submit" className="submit-button">
//             Add Incoming Stock
//           </button>
//         </form>
//       </div>

//       <div className="inventory-section">
//         <h3>Inventory</h3>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search Inventory"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="search-input"
//           />
//         </div>

//         {filterInventory().length > 0 ? (
//           <table className="inventory-table">
//             <thead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Brand Name</th>
//                 <th>Category</th>
//                 <th>Quantity</th>
//                 <th>Dealer Price</th>
//                 <th>Dealer Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filterInventory().map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.productName}</td>
//                   <td>{item.brandName}</td>
//                   <td>{item.category}</td>
//                   <td>{item.quantity}</td>
//                   <td>{item.dealerPrice}</td>
//                   <td>{item.dealerName}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManageStock;










// import React, { useState, useEffect } from "react";
// import "./ManageStock.css";

// const ManageStock = () => {
//   const [incomingStock, setIncomingStock] = useState({
//     productName: "",
//     brandName: "",
//     quantity: "",
//     category: "Wheat",
//     dealerPrice: "",
//     dealerName: "",
//   });

//   const [inventory, setInventory] = useState(
//     JSON.parse(localStorage.getItem("inventory")) || []
//   );
  
//   const [incomingStocks, setIncomingStocks] = useState(
//     JSON.parse(localStorage.getItem("incomingStocks")) || []
//   );
  
//   const [categories, setCategories] = useState(
//     JSON.parse(localStorage.getItem("categories")) || ["Wheat", "Rice", "Corn"]
//   );
  
//   const [searchQuery, setSearchQuery] = useState("");
//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("products")) || []
//   );

//   const [activeSection, setActiveSection] = useState("incoming");

//   useEffect(() => {
//     localStorage.setItem("inventory", JSON.stringify(inventory));
//     localStorage.setItem("incomingStocks", JSON.stringify(incomingStocks));
//     localStorage.setItem("categories", JSON.stringify(categories));
//   }, [inventory, incomingStocks, categories]);

//   const handleIncomingStockChange = (e) => {
//     const { name, value } = e.target;
//     setIncomingStock((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleAddIncomingStock = (e) => {
//     e.preventDefault();

//     const { productName, quantity, dealerName, dealerPrice, category } = incomingStock;
//     const productDetails = products.find((p) => p.name === productName);

//     if (!productDetails) {
//       alert("Product not found!");
//       return;
//     }

//     const newIncomingStock = {
//       ...incomingStock,
//       price: productDetails.price,
//     };

//     const updatedIncomingStocks = [...incomingStocks, newIncomingStock];
//     setIncomingStocks(updatedIncomingStocks);

//     const updatedInventory = [
//       ...inventory,
//       {
//         productName,
//         brandName: newIncomingStock.brandName,
//         quantity: parseInt(quantity),
//         category,
//       },
//     ];
//     setInventory(updatedInventory);

//     setIncomingStock({
//       productName: "",
//       brandName: "",
//       quantity: "",
//       category: "Wheat",
//       dealerPrice: "",
//       dealerName: "",
//     });
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filterInventory = () => {
//     return inventory.filter(
//       (item) =>
//         item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.category.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   return (
//     <div className="manage-stock-container">
//       <h2>Manage Stock</h2>

//       <div className="section-buttons">
//         <button onClick={() => setActiveSection("incoming")}>Incoming Stock</button>
//         <button onClick={() => setActiveSection("inventory")}>Inventory</button>
//         <button onClick={() => setActiveSection("available")}>View Available Stock</button>
//       </div>

//       {activeSection === "incoming" && (
//         <div className="incoming-stock-section">
//           <h3>Incoming Stock</h3>
//           <form onSubmit={handleAddIncomingStock} className="stock-form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="productName"
//                 value={incomingStock.productName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Product Name"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="brandName"
//                 value={incomingStock.brandName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Brand Name"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="number"
//                 name="quantity"
//                 value={incomingStock.quantity}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Quantity"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <select
//                 name="category"
//                 value={incomingStock.category}
//                 onChange={handleIncomingStockChange}
//                 className="form-control"
//               >
//                 {categories.map((category, index) => (
//                   <option key={index} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <input
//                 type="number"
//                 name="dealerPrice"
//                 value={incomingStock.dealerPrice}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Price from Dealer"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="dealerName"
//                 value={incomingStock.dealerName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Dealer Name"
//                 className="form-control"
//               />
//             </div>

//             <button type="submit" className="submit-button">
//               Add Incoming Stock
//             </button>
//           </form>
//         </div>
//       )}

//       {activeSection === "inventory" && (
//         <div className="inventory-section">
//           <h3>Inventory</h3>
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search Inventory"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="search-input"
//             />
//           </div>

//           {filterInventory().length > 0 ? (
//             <table className="inventory-table">
//               <thead>
//                 <tr>
//                   <th>Product Name</th>
//                   <th>Brand Name</th>
//                   <th>Category</th>
//                   <th>Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filterInventory().map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.productName}</td>
//                     <td>{item.brandName}</td>
//                     <td>{item.category}</td>
//                     <td>{item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No products found.</p>
//           )}
//         </div>
//       )}

//       {activeSection === "available" && (
//         <div className="available-stock-section">
//           <h3>View Available Stock</h3>
//           {filterInventory().length > 0 ? (
//             <table className="available-stock-table">
//               <thead>
//                 <tr>
//                   <th>Product Name</th>
//                   <th>Category</th>
//                   <th>Available Quantity</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filterInventory().map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.productName}</td>
//                     <td>{item.category}</td>
//                     <td>{item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No products available.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStock;





// import React, { useState, useEffect } from "react";
// import "./ManageStock.css";

// const ManageStock = () => {
//   const [incomingStock, setIncomingStock] = useState({
//     productName: "",
//     brandName: "",
//     quantity: "",
//     category: "Wheat",
//     dealerPrice: "",
//     dealerName: "",
//   });

//   const [inventory, setInventory] = useState(
//     JSON.parse(localStorage.getItem("inventory")) || []
//   );
  
//   const [incomingStocks, setIncomingStocks] = useState(
//     JSON.parse(localStorage.getItem("incomingStocks")) || []
//   );
  
//   const [categories, setCategories] = useState(
//     JSON.parse(localStorage.getItem("categories")) || ["Wheat", "Rice", "Corn"]
//   );
  
//   const [searchQuery, setSearchQuery] = useState("");
//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("products")) || []
//   );

//   const [activeSection, setActiveSection] = useState("inventory");
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("inventory", JSON.stringify(inventory));
//     localStorage.setItem("incomingStocks", JSON.stringify(incomingStocks));
//     localStorage.setItem("categories", JSON.stringify(categories));
//   }, [inventory, incomingStocks, categories]);

//   const handleIncomingStockChange = (e) => {
//     const { name, value } = e.target;
//     setIncomingStock((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleAddIncomingStock = (e) => {
//     e.preventDefault();

//     const { productName, quantity, dealerName, dealerPrice, category } = incomingStock;
//     const productDetails = products.find((p) => p.name === productName);

//     if (!productDetails) {
//       alert("Product not found!");
//       return;
//     }

//     const newIncomingStock = {
//       ...incomingStock,
//       price: productDetails.price,
//     };

//     const updatedIncomingStocks = [...incomingStocks, newIncomingStock];
//     setIncomingStocks(updatedIncomingStocks);

//     const updatedInventory = [
//       ...inventory,
//       {
//         productName,
//         brandName: newIncomingStock.brandName,
//         quantity: parseInt(quantity),
//         category,
//       },
//     ];
//     setInventory(updatedInventory);

//     setIncomingStock({
//       productName: "",
//       brandName: "",
//       quantity: "",
//       category: "Wheat",
//       dealerPrice: "",
//       dealerName: "",
//     });
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filterInventory = () => {
//     return inventory.filter(
//       (item) =>
//         item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.category.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   const handleEdit = (index) => {
//     setEditMode(true);
//     setEditIndex(index);
//     const itemToEdit = inventory[index];
//     setIncomingStock({
//       ...itemToEdit,
//     });
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const updatedInventory = [...inventory];
//     updatedInventory[editIndex] = incomingStock;
//     setInventory(updatedInventory);
//     setEditMode(false); // Exit edit mode
//     setIncomingStock({
//       productName: "",
//       brandName: "",
//       quantity: "",
//       category: "Wheat",
//       dealerPrice: "",
//       dealerName: "",
//     });
//   };

//   const handleDelete = (index) => {
//     const updatedInventory = inventory.filter((_, i) => i !== index);
//     setInventory(updatedInventory);
//   };

//   return (
//     <div className="manage-stock-container">
//       <h2>Manage Stock</h2>

//       <div className="section-buttons">
//         <button onClick={() => setActiveSection("inventory")}>Inventory</button>
//       </div>

//       {activeSection === "inventory" && (
//         <div className="inventory-section">
//           <h3>Inventory</h3>

//           {/* Form for adding or editing stock */}
//           <form onSubmit={editMode ? handleUpdate : handleAddIncomingStock} className="stock-form">
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="productName"
//                 value={incomingStock.productName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Product Name"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="brandName"
//                 value={incomingStock.brandName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Brand Name"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="number"
//                 name="quantity"
//                 value={incomingStock.quantity}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Quantity"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <select
//                 name="category"
//                 value={incomingStock.category}
//                 onChange={handleIncomingStockChange}
//                 className="form-control"
//               >
//                 {categories.map((category, index) => (
//                   <option key={index} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <input
//                 type="number"
//                 name="dealerPrice"
//                 value={incomingStock.dealerPrice}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Price from Dealer"
//                 className="form-control"
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="text"
//                 name="dealerName"
//                 value={incomingStock.dealerName}
//                 onChange={handleIncomingStockChange}
//                 placeholder="Dealer Name"
//                 className="form-control"
//               />
//             </div>

//             <button type="submit" className="submit-button">
//               {editMode ? "Update Stock" : "Add Incoming Stock"}
//             </button>
//           </form>

//           {/* Inventory Table with search functionality */}
//           <div className="search-bar">
//             <input
//               type="text"
//               placeholder="Search Inventory"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="search-input"
//             />
//           </div>

//           {filterInventory().length > 0 ? (
//             <table className="inventory-table">
//               <thead>
//                 <tr>
//                   <th>Product Name</th>
//                   <th>Brand Name</th>
//                   <th>Category</th>
//                   <th>Quantity</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filterInventory().map((item, index) => (
//                   <tr key={index}>
//                     <td>{item.productName}</td>
//                     <td>{item.brandName}</td>
//                     <td>{item.category}</td>
//                     <td>{item.quantity}</td>
//                     <td>
//                       <button onClick={() => handleEdit(index)}>Edit</button>
//                       <button onClick={() => handleDelete(index)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No products found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageStock;











// import React, { useState, useEffect } from "react";
// import "./ManageStock.css";

// const API_BASE_URL = "https://localhost:44361/api/StockInventory"; // Update API URL if needed

// const ManageStock = () => {
//   const [incomingStock, setIncomingStock] = useState({
//     productName: "",
//     brandName: "",
//     quantity: "",
//     category: "Wheat",
//     dealerPrice: "",
//     dealerName: "",
//   });

//   const [inventory, setInventory] = useState([]);
//   const [categories] = useState(["Wheat", "Rice", "Corn"]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // Fetch inventory from API on component mount
//   useEffect(() => {
//     fetch(API_BASE_URL)
//       .then((response) => response.json())
//       .then((data) => setInventory(data))
//       .catch((error) => console.error("Error fetching inventory:", error));
//   }, []);

//   // Handle input change
//   const handleIncomingStockChange = (e) => {
//     const { name, value } = e.target;
//     setIncomingStock((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Add new stock (POST)
//   const handleAddIncomingStock = (e) => {
//     e.preventDefault();
//     fetch(API_BASE_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(incomingStock),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setInventory([...inventory, data]);
//         resetForm();
//       })
//       .catch((error) => console.error("Error adding stock:", error));
//   };

//   // Edit stock (PUT)
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     fetch(`${API_BASE_URL}/${incomingStock.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(incomingStock),
//     })
//       .then(() => {
//         setInventory(
//           inventory.map((item) =>
//             item.id === incomingStock.id ? incomingStock : item
//           )
//         );
//         setEditMode(false);
//         resetForm();
//       })
//       .catch((error) => console.error("Error updating stock:", error));
//   };

//   // Delete stock (DELETE)
//   const handleDelete = (id) => {
//     fetch(`${API_BASE_URL}/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setInventory(inventory.filter((item) => item.id !== id));
//       })
//       .catch((error) => console.error("Error deleting stock:", error));
//   };

//   // Set edit mode
//   const handleEdit = (item) => {
//     setEditMode(true);
//     setIncomingStock(item);
//   };

//   // Reset form after submit
//   const resetForm = () => {
//     setIncomingStock({
//       productName: "",
//       brandName: "",
//       quantity: "",
//       category: "Wheat",
//       dealerPrice: "",
//       dealerName: "",
//     });
//   };

//   // Filter inventory by search query
//   const filteredInventory = inventory.filter(
//     (item) =>
//       item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="manage-stock-container">
//       <h2>Manage Stock</h2>

//       <div className="section-buttons">
//         <button>Add Incoming Stock</button>
//       </div>

//       {/* Stock Form */}
//       <form onSubmit={editMode ? handleUpdate : handleAddIncomingStock} className="stock-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="productName"
//             value={incomingStock.productName}
//             onChange={handleIncomingStockChange}
//             placeholder="Product Name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="brandName"
//             value={incomingStock.brandName}
//             onChange={handleIncomingStockChange}
//             placeholder="Brand Name"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="quantity"
//             value={incomingStock.quantity}
//             onChange={handleIncomingStockChange}
//             placeholder="Quantity"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <select name="category" value={incomingStock.category} onChange={handleIncomingStockChange}>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="dealerPrice"
//             value={incomingStock.dealerPrice}
//             onChange={handleIncomingStockChange}
//             placeholder="Price from Dealer"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="dealerName"
//             value={incomingStock.dealerName}
//             onChange={handleIncomingStockChange}
//             placeholder="Dealer Name"
//           />
//         </div>

//         <button type="submit">{editMode ? "Update Stock" : "Add Incoming Stock"}</button>
//       </form>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search Inventory"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Inventory Table */}
//       {filteredInventory.length > 0 ? (
//         <table className="inventory-table">
//           <thead>
//             <tr>
//               <th>Product Name</th>
//               <th>Brand Name</th>
//               <th>Category</th>
//               <th>Quantity</th>
//               <th>Dealer Price</th>
//               <th>Dealer Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredInventory.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.productName}</td>
//                 <td>{item.brandName}</td>
//                 <td>{item.category}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.dealerPrice}</td>
//                 <td>{item.dealerName}</td>
//                 <td>
//                   <button onClick={() => handleEdit(item)}>Edit</button>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ManageStock;














// import React, { useState, useEffect } from "react";
// import "./ManageStock.css";

// const API_BASE_URL = "https://localhost:44361/api/StockInventory"; // Update API URL if needed

// const ManageStock = () => {
//   const [incomingStock, setIncomingStock] = useState({
//     productName: "",
//     brandName: "",
//     quantity: "",
//     category: "Wheat",  // Default category
//     dealerPrice: "",
//     dealerName: "",
//     customCategory: "",  // New state to store custom category if "Other" is selected
//   });

//   const [inventory, setInventory] = useState([]);
//   const [categories] = useState(["Wheat", "Rice", "Corn", "Barley", "Oats"]); // Predefined categories
//   const [searchQuery, setSearchQuery] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   // Fetch inventory from API on component mount
//   useEffect(() => {
//     fetch(API_BASE_URL)
//       .then((response) => response.json())
//       .then((data) => setInventory(data))
//       .catch((error) => console.error("Error fetching inventory:", error));
//   }, []);

//   // Handle input change
//   const handleIncomingStockChange = (e) => {
//     const { name, value } = e.target;
//     setIncomingStock((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Add new stock (POST)
//   const handleAddIncomingStock = (e) => {
//     e.preventDefault();
//     // If the category is "Other", use the custom category
//     const category = incomingStock.category === "Other" ? incomingStock.customCategory : incomingStock.category;

//     const stockToAdd = {
//       ...incomingStock,
//       category,
//     };

//     fetch(API_BASE_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(stockToAdd),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setInventory([...inventory, data]);
//         resetForm();
//       })
//       .catch((error) => console.error("Error adding stock:", error));
//   };

//   // Edit stock (PUT)
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const category = incomingStock.category === "Other" ? incomingStock.customCategory : incomingStock.category;
//     const stockToUpdate = {
//       ...incomingStock,
//       category,
//     };

//     fetch(`${API_BASE_URL}/${incomingStock.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(stockToUpdate),
//     })
//       .then(() => {
//         setInventory(
//           inventory.map((item) =>
//             item.id === incomingStock.id ? stockToUpdate : item
//           )
//         );
//         setEditMode(false);
//         resetForm();
//       })
//       .catch((error) => console.error("Error updating stock:", error));
//   };

//   // Delete stock (DELETE)
//   const handleDelete = (id) => {
//     fetch(`${API_BASE_URL}/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setInventory(inventory.filter((item) => item.id !== id));
//       })
//       .catch((error) => console.error("Error deleting stock:", error));
//   };

//   // Set edit mode
//   const handleEdit = (item) => {
//     setEditMode(true);
//     setIncomingStock(item);
//   };

//   // Reset form after submit
//   const resetForm = () => {
//     setIncomingStock({
//       productName: "",
//       brandName: "",
//       quantity: "",
//       category: "Wheat", // Default category
//       dealerPrice: "",
//       dealerName: "",
//       customCategory: "", // Reset custom category input
//     });
//   };

//   // Filter inventory by search query
//   const filteredInventory = inventory.filter(
//     (item) =>
//       item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="manage-stock-container">
//       <h2>Manage Stock</h2>

//       <div className="section-buttons">
//         <button>Add Incoming Stock</button>
//       </div>

//       {/* Stock Form */}
//       <form onSubmit={editMode ? handleUpdate : handleAddIncomingStock} className="stock-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="productName"
//             value={incomingStock.productName}
//             onChange={handleIncomingStockChange}
//             placeholder="Product Name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="brandName"
//             value={incomingStock.brandName}
//             onChange={handleIncomingStockChange}
//             placeholder="Brand Name"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="quantity"
//             value={incomingStock.quantity}
//             onChange={handleIncomingStockChange}
//             placeholder="Quantity"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <select name="category" value={incomingStock.category} onChange={handleIncomingStockChange}>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//             <option value="Other">Other</option>
//           </select>
//           {incomingStock.category === "Other" && (
//             <input
//               type="text"
//               name="customCategory"
//               value={incomingStock.customCategory}
//               onChange={handleIncomingStockChange}
//               placeholder="Enter Custom Category"
//               required
//             />
//           )}
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="dealerPrice"
//             value={incomingStock.dealerPrice}
//             onChange={handleIncomingStockChange}
//             placeholder="Price from Dealer"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="dealerName"
//             value={incomingStock.dealerName}
//             onChange={handleIncomingStockChange}
//             placeholder="Dealer Name"
//           />
//         </div>

//         <button type="submit">{editMode ? "Update Stock" : "Add Incoming Stock"}</button>
//       </form>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search Inventory"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Inventory Table */}
//       {filteredInventory.length > 0 ? (
//         <table className="inventory-table">
//           <thead>
//             <tr>
//               <th>Product Name</th>
//               <th>Brand Name</th>
//               <th>Category</th>
//               <th>Quantity</th>
//               <th>Dealer Price</th>
//               <th>Dealer Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredInventory.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.productName}</td>
//                 <td>{item.brandName}</td>
//                 <td>{item.category}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.dealerPrice}</td>
//                 <td>{item.dealerName}</td>
//                 <td>
//                   <button onClick={() => handleEdit(item)}>Edit</button>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ManageStock;





// import React, { useState, useEffect } from "react";
// import "./ManageStock.css";

// const API_BASE_URL = "https://localhost:44361/api/StockInventory"; // Update API URL if needed

// const ManageStock = () => {
//   const [incomingStock, setIncomingStock] = useState({
//     productName: "",
//     brandName: "",
//     quantity: "",
//     category: "Wheat",  // Default category
//     dealerPrice: "",
//     dealerName: "",
//     customCategory: "",  // New state to store custom category if "Other" is selected
//   });

//   const [inventory, setInventory] = useState([]);
//   const [categories] = useState(["Wheat", "Rice", "Corn", "Barley", "Oats"]); // Predefined categories
//   const [searchQuery, setSearchQuery] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(""); // State for error messages

//   // Fetch inventory from API on component mount
//   useEffect(() => {
//     fetch(API_BASE_URL)
//       .then((response) => response.json())
//       .then((data) => setInventory(data))
//       .catch((error) => console.error("Error fetching inventory:", error));
//   }, []);

//   // Handle input change
//   const handleIncomingStockChange = (e) => {
//     const { name, value } = e.target;
//     setIncomingStock((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Add new stock (POST)
//   const handleAddIncomingStock = (e) => {
//     e.preventDefault();

//     // Check for duplicate product name
//     const isDuplicate = inventory.some(
//       (item) => item.productName.toLowerCase() === incomingStock.productName.toLowerCase()
//     );

//     if (isDuplicate) {
//       setErrorMessage("Product name already exists. Please choose a different name.");
//       return; // Prevent form submission if duplicate is found
//     }

//     // If the category is "Other", use the custom category
//     const category = incomingStock.category === "Other" ? incomingStock.customCategory : incomingStock.category;

//     const stockToAdd = {
//       ...incomingStock,
//       category,
//     };

//     fetch(API_BASE_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(stockToAdd),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setInventory([...inventory, data]);
//         resetForm();
//         setErrorMessage(""); // Clear error message after successful submission
//       })
//       .catch((error) => console.error("Error adding stock:", error));
//   };

//   // Edit stock (PUT)
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const category = incomingStock.category === "Other" ? incomingStock.customCategory : incomingStock.category;
//     const stockToUpdate = {
//       ...incomingStock,
//       category,
//     };

//     fetch(`${API_BASE_URL}/${incomingStock.id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(stockToUpdate),
//     })
//       .then(() => {
//         setInventory(
//           inventory.map((item) =>
//             item.id === incomingStock.id ? stockToUpdate : item
//           )
//         );
//         setEditMode(false);
//         resetForm();
//       })
//       .catch((error) => console.error("Error updating stock:", error));
//   };

//   // Delete stock (DELETE)
//   const handleDelete = (id) => {
//     fetch(`${API_BASE_URL}/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => {
//         setInventory(inventory.filter((item) => item.id !== id));
//       })
//       .catch((error) => console.error("Error deleting stock:", error));
//   };

//   // Set edit mode
//   const handleEdit = (item) => {
//     setEditMode(true);
//     setIncomingStock(item);
//   };

//   // Reset form after submit
//   const resetForm = () => {
//     setIncomingStock({
//       productName: "",
//       brandName: "",
//       quantity: "",
//       category: "Wheat", // Default category
//       dealerPrice: "",
//       dealerName: "",
//       customCategory: "", // Reset custom category input
//     });
//   };

//   // Filter inventory by search query
//   const filteredInventory = inventory.filter(
//     (item) =>
//       item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="manage-stock-container">
//       <h2>Manage Stock</h2>

//       <div className="section-buttons">
//         <button>Add Incoming Stock</button>
//       </div>

//       {/* Display error message */}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {/* Stock Form */}
//       <form onSubmit={editMode ? handleUpdate : handleAddIncomingStock} className="stock-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="productName"
//             value={incomingStock.productName}
//             onChange={handleIncomingStockChange}
//             placeholder="Product Name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="brandName"
//             value={incomingStock.brandName}
//             onChange={handleIncomingStockChange}
//             placeholder="Brand Name"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="quantity"
//             value={incomingStock.quantity}
//             onChange={handleIncomingStockChange}
//             placeholder="Quantity"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <select name="category" value={incomingStock.category} onChange={handleIncomingStockChange}>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//             <option value="Other">Other</option>
//           </select>
//           {incomingStock.category === "Other" && (
//             <input
//               type="text"
//               name="customCategory"
//               value={incomingStock.customCategory}
//               onChange={handleIncomingStockChange}
//               placeholder="Enter Custom Category"
//               required
//             />
//           )}
//         </div>

//         <div className="form-group">
//           <input
//             type="number"
//             name="dealerPrice"
//             value={incomingStock.dealerPrice}
//             onChange={handleIncomingStockChange}
//             placeholder="Price from Dealer"
//           />
//         </div>

//         <div className="form-group">
//           <input
//             type="text"
//             name="dealerName"
//             value={incomingStock.dealerName}
//             onChange={handleIncomingStockChange}
//             placeholder="Dealer Name"
//           />
//         </div>

//         <button type="submit">{editMode ? "Update Stock" : "Add Incoming Stock"}</button>
//       </form>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search Inventory"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Inventory Table */}
//       {filteredInventory.length > 0 ? (
//         <table className="inventory-table">
//           <thead>
//             <tr>
//               <th>Product Name</th>
//               <th>Brand Name</th>
//               <th>Category</th>
//               <th>Quantity</th>
//               <th>Dealer Price</th>
//               <th>Dealer Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredInventory.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.productName}</td>
//                 <td>{item.brandName}</td>
//                 <td>{item.category}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.dealerPrice}</td>
//                 <td>{item.dealerName}</td>
//                 <td>
//                   <button onClick={() => handleEdit(item)}>Edit</button>
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ManageStock;




import React, { useState, useEffect } from "react";
import "./ManageStock.css";

const API_BASE_URL = "https://localhost:44361/api/StockInventory"; // Update API URL if needed

const ManageStock = () => {
  const [incomingStock, setIncomingStock] = useState({
    productName: "",
    brandName: "",
    quantity: "",
    category: "Wheat",  // Default category
    dealerPrice: "",
    dealerName: "",
    customCategory: "",  // New state to store custom category if "Other" is selected
  });

  const [inventory, setInventory] = useState([]);
  const [categories] = useState(["Wheat", "Rice", "Corn", "Barley", "Oats"]); // Predefined categories
  const [searchQuery, setSearchQuery] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  // Fetch inventory from API on component mount
  useEffect(() => {
    fetch(API_BASE_URL)
      .then((response) => response.json())
      .then((data) => setInventory(data))
      .catch((error) => console.error("Error fetching inventory:", error));
  }, []);

  // Handle input change
  const handleIncomingStockChange = (e) => {
    const { name, value } = e.target;
    setIncomingStock((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Add new stock (POST)
  const handleAddIncomingStock = (e) => {
    e.preventDefault();

    // Check for duplicate product name
    const isDuplicate = inventory.some(
      (item) => item.productName.toLowerCase() === incomingStock.productName.toLowerCase()
    );

    if (isDuplicate) {
      setErrorMessage("Product name already exists. Please choose a different name.");
      return; // Prevent form submission if duplicate is found
    }

    // If the category is "Other", use the custom category
    const category = incomingStock.category === "Other" ? incomingStock.customCategory : incomingStock.category;

    const stockToAdd = {
      ...incomingStock,
      category,
    };

    fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stockToAdd),
    })
      .then((response) => response.json())
      .then((data) => {
        setInventory([...inventory, data]);
        resetForm();
        setErrorMessage(""); // Clear error message after successful submission
      })
      .catch((error) => console.error("Error adding stock:", error));
  };

  // Edit stock (PUT)
  const handleUpdate = (e) => {
    e.preventDefault();
    const category = incomingStock.category === "Other" ? incomingStock.customCategory : incomingStock.category;
    const stockToUpdate = {
      ...incomingStock,
      category,
    };

    fetch(`${API_BASE_URL}/${incomingStock.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(stockToUpdate),
    })
      .then(() => {
        setInventory(
          inventory.map((item) =>
            item.id === incomingStock.id ? stockToUpdate : item
          )
        );
        setEditMode(false);
        resetForm();
      })
      .catch((error) => console.error("Error updating stock:", error));
  };

  // Delete stock (DELETE)
  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setInventory(inventory.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting stock:", error));
  };

  // Set edit mode
  const handleEdit = (item) => {
    setEditMode(true);
    setIncomingStock(item);
  };

  // Reset form after submit
  const resetForm = () => {
    setIncomingStock({
      productName: "",
      brandName: "",
      quantity: "",
      category: "Wheat", // Default category
      dealerPrice: "",
      dealerName: "",
      customCategory: "", // Reset custom category input
    });
  };

  // Filter inventory by search query
  const filteredInventory = inventory.filter(
    (item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="manage-stock-container">
      <h2>Manage Stock</h2>

      <div className="section-buttons">
        <button>Add Incoming Stock</button>
      </div>

      {/* Display error message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Stock Form */}
      <form onSubmit={editMode ? handleUpdate : handleAddIncomingStock} className="stock-form">
        <div className="form-group">
          <input
            type="text"
            name="productName"
            value={incomingStock.productName}
            onChange={handleIncomingStockChange}
            placeholder="Product Name"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="brandName"
            value={incomingStock.brandName}
            onChange={handleIncomingStockChange}
            placeholder="Brand Name"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="quantity"
            value={incomingStock.quantity}
            onChange={handleIncomingStockChange}
            placeholder="Quantity"
            required
          />
        </div>

        <div className="form-group">
          <div>
            {categories.map((category, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={incomingStock.category === category}
                  onChange={handleIncomingStockChange}
                />
                {category}
              </label>
            ))}
            <label>
              <input
                type="radio"
                name="category"
                value="Other"
                checked={incomingStock.category === "Other"}
                onChange={handleIncomingStockChange}
              />
              Other
            </label>
          </div>
          {incomingStock.category === "Other" && (
            <input
              type="text"
              name="customCategory"
              value={incomingStock.customCategory}
              onChange={handleIncomingStockChange}
              placeholder="Enter Custom Category"
              required
            />
          )}
        </div>

        <div className="form-group">
          <input
            type="number"
            name="dealerPrice"
            value={incomingStock.dealerPrice}
            onChange={handleIncomingStockChange}
            placeholder="Price from Dealer"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="dealerName"
            value={incomingStock.dealerName}
            onChange={handleIncomingStockChange}
            placeholder="Dealer Name"
          />
        </div>

        <button type="submit">{editMode ? "Update Stock" : "Add Incoming Stock"}</button>
      </form>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Inventory"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Inventory Table */}
      {filteredInventory.length > 0 ? (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Brand Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Dealer Price</th>
              <th>Dealer Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item.id}>
                <td>{item.productName}</td>
                <td>{item.brandName}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.dealerPrice}</td>
                <td>{item.dealerName}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ManageStock;




