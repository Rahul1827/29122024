// import React, { useState, useEffect } from "react";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("products")) || []
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProduct((prevState) => ({
//         ...prevState,
//         image: imageUrl,
//       }));
//       setImagePreview(imageUrl);
//     }
//   };

//   const handleAddProduct = (e) => {
//     e.preventDefault();

//     const updatedProducts = [...products];
//     if (editingIndex !== null) {
//       updatedProducts[editingIndex] = product;
//       setEditingIndex(null);
//     } else {
//       updatedProducts.push(product);
//     }

//     setProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));

//     setProduct({
//       name: "",
//       brand: "",
//       description: "",
//       price: "",
//       image: "",
//     });
//     setImagePreview(null);
//   };

//   const handleEditProduct = (index) => {
//     const selectedProduct = products[index];
//     setProduct(selectedProduct);
//     setEditingIndex(index);
//     setImagePreview(selectedProduct.image);
//   };

//   const handleDeleteProduct = (index) => {
//     const updatedProducts = products.filter((_, i) => i !== index);
//     setProducts(updatedProducts);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));
//   };

//   return (
//     <div className="add-product-container">
//       <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>

//       <form onSubmit={handleAddProduct} className="product-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={product.name}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand Name"
//             value={product.brand}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             value={product.description}
//             onChange={handleChange}
//             className="form-control description-textarea"
//             rows="4"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageUpload}
//             className="form-control"
//           />
//         </div>
//         {imagePreview && (
//           <div className="image-preview">
//             <img src={imagePreview} alt="Preview" className="image-preview-img" />
//           </div>
//         )}
//         <button type="submit" className="submit-button">
//           {editingIndex !== null ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {products.length > 0 && (
//         <div className="product-cards">
//           {products.map((item, index) => (
//             <div key={index} className="product-card">
//               <img src={item.image} alt={item.name} className="product-image" />
//               <div className="product-info">
//                 <h3 className="product-name">{item.name}</h3>
//                 <p className="product-brand">Brand: {item.brand}</p>
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <div className="product-actions">
//                   <button
//                     className="edit-button"
//                     onClick={() => handleEditProduct(index)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDeleteProduct(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from API
//     axios
//       .get("https://localhost:44361/api/products")
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error("There was an error fetching the products!", error));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProduct((prevState) => ({
//         ...prevState,
//         image: imageUrl,
//       }));
//       setImagePreview(imageUrl);
//     }
//   };

//   // const handleAddProduct = (e) => {
//   //   e.preventDefault();

//   //   if (editingIndex !== null) {
//   //     // Update product
//   //     axios
//   //       .put(`https://localhost:44361/api/products/${products[editingIndex].id}`, product)
//   //       .then(() => {
//   //         const updatedProducts = [...products];
//   //         updatedProducts[editingIndex] = product;
//   //         setProducts(updatedProducts);
//   //         setEditingIndex(null);
//   //         setProduct({ name: "", brand: "", description: "", price: "", image: "" });
//   //       })
//   //       .catch((error) => console.error("There was an error updating the product!", error));
//   //   } else {
//   //     // Add new product
//   //     axios
//   //       .post("https://localhost:44361/api/products", product)
//   //       .then((response) => {
//   //         setProducts((prevProducts) => [...prevProducts, response.data]);
//   //         setProduct({ name: "", brand: "", description: "", price: "", image: "" });
//   //         // Reset form fields and image preview after successful addition
//   //         // setProduct({ name: "", brand: "", description: "", price: "", image: "" });
//   //         // setImagePreview(null);
//   //       })
//   //       .catch((error) => console.error("There was an error adding the product!", error));
//   //   }
//   // };

//   const handleAddProduct = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", product.name);
//     formData.append("brand", product.brand);
//     formData.append("description", product.description);
//     formData.append("price", product.price);

//     if (product.image instanceof File) {
//         formData.append("imageFile", product.image); // Backend expects "imageFile"
//     }

//     axios
//         .post("https://localhost:44361/api/products", formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         })
//         .then((response) => {
//             setProducts((prevProducts) => [...prevProducts, response.data]);
//             setProduct({ name: "", brand: "", description: "", price: "", image: "" });
//         })
//         .catch((error) => console.error("There was an error adding the product!", error.response?.data || error));
// };


//   const handleEditProduct = (index) => {
//     const selectedProduct = products[index];
//     setProduct(selectedProduct);
//     setEditingIndex(index);
//     setImagePreview(selectedProduct.image);
//   };

//   const handleDeleteProduct = (index) => {
//     const productId = products[index].id;
//     axios
//       .delete(`https://localhost:44361/api/products/${productId}`)
//       .then(() => {
//         const updatedProducts = products.filter((_, i) => i !== index);
//         setProducts(updatedProducts);
//       })
//       .catch((error) => console.error("There was an error deleting the product!", error));
//   };

//   return (
//     <div className="add-product-container">
//       <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>

//       <form onSubmit={handleAddProduct} className="product-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={product.name}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand Name"
//             value={product.brand}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             value={product.description}
//             onChange={handleChange}
//             className="form-control description-textarea"
//             rows="4"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageUpload}
//             className="form-control"
//           />
//         </div>

//         {imagePreview && (
//           <div className="image-preview">
//             <img src={imagePreview} alt="Preview" className="image-preview-img" />
//           </div>
//         )}

//         <button type="submit" className="submit-button">
//           {editingIndex !== null ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {products.length > 0 && (
//         <div className="product-cards">
//           {products.map((item, index) => (
//             <div key={index} className="product-card">
//               <img src={item.image} alt={item.name} className="product-image" />
//               <div className="product-info">
//                 <h3 className="product-name">{item.name}</h3>
//                 <p className="product-brand">Brand: {item.brand}</p>
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <div className="product-actions">
//                   <button
//                     className="edit-button"
//                     onClick={() => handleEditProduct(index)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDeleteProduct(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [products, setProducts] = useState([]);

//   const apiUrl = "https://localhost:44361/api/products"; // Replace with your API URL

//   // Fetch products from the API
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(apiUrl);
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Handle changes in form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Handle image file upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProduct((prevState) => ({
//         ...prevState,
//         image: imageUrl,
//       }));
//       setImagePreview(imageUrl);
//     }
//   };

//   // Handle add or edit product
//   const handleAddProduct = async (e) => {
//     e.preventDefault();

//     try {
//       if (editingIndex !== null) {
//         // Update existing product
//         await axios.put(`${apiUrl}/${product.id}`, product);
//       } else {
//         // Add new product
//         const response = await axios.post(apiUrl, product);
//         setProducts([...products, response.data]);
//       }

//       // Reset form
//       setProduct({
//         name: "",
//         brand: "",
//         description: "",
//         price: "",
//         image: "",
//       });
//       setImagePreview(null);
//       setEditingIndex(null);

//       // Refresh the products list from the API
//       fetchProducts();
//     } catch (error) {
//       console.error("Error adding/updating product:", error);
//     }
//   };

//   // Handle editing a product
//   const handleEditProduct = (index) => {
//     const selectedProduct = products[index];
//     setProduct(selectedProduct);
//     setEditingIndex(index);
//     setImagePreview(selectedProduct.image);
//   };

//   // Handle deleting a product
//   const handleDeleteProduct = async (id) => {
//     try {
//       await axios.delete(`${apiUrl}/${id}`);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>

//       <form onSubmit={handleAddProduct} className="product-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={product.name}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand Name"
//             value={product.brand}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             value={product.description}
//             onChange={handleChange}
//             className="form-control description-textarea"
//             rows="4"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageUpload}
//             className="form-control"
//           />
//         </div>
//         {imagePreview && (
//           <div className="image-preview">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="image-preview-img"
//             />
//           </div>
//         )}
//         <button type="submit" className="submit-button">
//           {editingIndex !== null ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {products.length > 0 && (
//         <div className="product-cards">
//           {products.map((item, index) => (
//             <div key={index} className="product-card">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="product-image"
//               />
//               <div className="product-info">
//                 <h3 className="product-name">{item.name}</h3>
//                 <p className="product-brand">Brand: {item.brand}</p>
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <div className="product-actions">
//                   <button
//                     className="edit-button"
//                     onClick={() => handleEditProduct(index)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDeleteProduct(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;













// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const [products, setProducts] = useState([]);

//   // Fetch the products from the API
//   useEffect(() => {
//     axios
//       .get("https://localhost:44361/api/products")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the products!", error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // const handleImageUpload = (e) => {
//   //   const file = e.target.files[0];
//   //   if (file) {
//   //     const imageUrl = URL.createObjectURL(file);
//   //     setProduct((prevState) => ({
//   //       ...prevState,
//   //       image: imageUrl,
//   //     }));
//   //     setImagePreview(imageUrl);
//   //   }
//   // };
 
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProduct((prevState) => ({
//         ...prevState,
//         image: file, // Store the file object
//       }));
//       setImagePreview(imageUrl);
//     }
//   };
  
  
 
  


  
//   // const handleAddProduct = (e) => {
//   //   e.preventDefault();

//   //   const newProduct = { ...product };

//   //   // If editing, update the product; otherwise, add a new one
//   //   if (editingIndex !== null) {
//   //     axios
//   //       .put(`https://localhost:44361/api/products/${products[editingIndex].id}`, newProduct)
//   //       .then((response) => {
//   //         const updatedProducts = [...products];
//   //         updatedProducts[editingIndex] = response.data;
//   //         setProducts(updatedProducts);
//   //         setEditingIndex(null);
//   //         resetForm();
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error updating product", error);
//   //       });
//   //   } else {
//   //     axios
//   //       .post("https://localhost:44361/api/products", newProduct)
//   //       .then((response) => {
//   //         setProducts([...products, response.data]);
//   //         resetForm();
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error adding product", error);
//   //       });
//   //   }
//   // };

//   // const handleAddProduct = (e) => {
//   //   e.preventDefault();
  
//   //   const newProduct = { ...product };
  
//   //   // If editing, update the product; otherwise, add a new one
//   //   if (editingIndex !== null) {
//   //     axios
//   //       .put(`https://localhost:44361/api/products/${products[editingIndex].id}`, newProduct)
//   //       .then((response) => {
//   //         const updatedProducts = [...products];
//   //         updatedProducts[editingIndex] = response.data; // Update the product at editingIndex
//   //         setProducts(updatedProducts); // Update the product list
  
//   //         setEditingIndex(null); // Reset the editing index
//   //         resetForm(); // Reset form fields
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error updating product", error);
//   //       });
//   //   } else {
//   //     axios
//   //       .post("https://localhost:44361/api/products", newProduct)
//   //       .then((response) => {
//   //         setProducts([...products, response.data]); // Add new product to the list
//   //         resetForm(); // Clear the form after adding
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error adding product", error);
//   //       });
//   //   }
//   // };
  

//   const handleAddProduct = (e) => {
//     e.preventDefault();
  
//     const formData = new FormData();
//     formData.append("name", product.name);
//     formData.append("brand", product.brand);
//     formData.append("description", product.description);
//     formData.append("price", product.price);
//     if (product.image instanceof File) {
//       formData.append("imageFile", product.image);
//     }
  
//     const url = editingIndex !== null
//       ? `https://localhost:44361/api/products/${products[editingIndex].id}`
//       : "https://localhost:44361/api/products";
  
//     const method = editingIndex !== null ? "put" : "post";
  
//     axios({
//       method: method,
//       url: url,
//       data: formData,
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//       .then((response) => {
//         if (editingIndex !== null) {
//           const updatedProducts = [...products];
//           updatedProducts[editingIndex] = response.data;
//           setProducts(updatedProducts);
//           setEditingIndex(null);
//         } else {
//           setProducts([...products, response.data]);
//         }
//         resetForm();
//       })
//       .catch((error) => {
//         console.error("Error adding/updating product", error);
//       });
//   };
  

//   const resetForm = () => {
//     setProduct({
//       name: "",
//       brand: "",
//       description: "",
//       price: "",
//       image: "",
//     });
//     setImagePreview(null);
//   };

//   // const handleEditProduct = (index) => {
//   //   const selectedProduct = products[index];
//   //   setProduct(selectedProduct);
//   //   setEditingIndex(index);
//   //   setImagePreview(selectedProduct.image);
//   // };

//   const handleEditProduct = (index) => {
//     const selectedProduct = products[index];
//     setProduct(selectedProduct);  // Load the product to edit
//     setEditingIndex(index);
//     setImagePreview(selectedProduct.image);  // Set the image preview for editing
//   };

//   const handleDeleteProduct = (index) => {
//     const productId = products[index].id;
//     axios
//       .delete(`https://localhost:44361/api/products/${productId}`)
//       .then(() => {
//         const updatedProducts = products.filter((_, i) => i !== index);
//         setProducts(updatedProducts);
//       })
//       .catch((error) => {
//         console.error("Error deleting product", error);
//       });
//   };

//   return (
//     <div className="add-product-container">
//       <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>

//       <form onSubmit={handleAddProduct} className="product-form" encType="multipart/form-data">
//   {/* Form fields... */}
//   <div className="form-group">
//     <input
//       type="file"
//       name="image"
//       onChange={handleImageUpload}
//       className="form-control"
//     />
//   </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand Name"
//             value={product.brand}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             value={product.description}
//             onChange={handleChange}
//             className="form-control description-textarea"
//             rows="4"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageUpload}
//             className="form-control"
//           />
//         </div>
//         {imagePreview && (
//           <div className="image-preview">
//             <img src={imagePreview} alt="Preview" className="image-preview-img" />
//           </div>
//         )}
//         <button type="submit" className="submit-button">
//           {editingIndex !== null ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {products.length > 0 && (
//         <div className="product-cards">
//           {products.map((item, index) => (
//             <div key={index} className="product-card">
//               {/* <img src={item.image} alt={item.name} className="product-image" /> */}
//               <img src={`https://localhost:44361${item.image}`} alt={item.name} className="product-image" />

//               <div className="product-info">
//                 <h3 className="product-name">{item.name}</h3>
//                 <p className="product-brand">Brand: {item.brand}</p>
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <div className="product-actions">
//                   <button
//                     className="edit-button"
//                     onClick={() => handleEditProduct(index)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="delete-button"
//                     onClick={() => handleDeleteProduct(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;



// AddProduct.js
// import React, { useState, useEffect } from "react";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://localhost:44361/api/products")
//       .then((response) => response.json())
//       .then((data) => {
//         const updatedProducts = data.map((product) => ({
//           ...product,
//           imagePath: product.image ? `https://localhost:44361${product.image}` : "/default-image.jpg",
//         }));
//         setProducts(updatedProducts);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   const handleChange = (e) => {
//     setProduct((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProduct((prevState) => ({ ...prevState, image: file }));
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const resetForm = () => {
//     setProduct({
//       name: "",
//       brand: "",
//       description: "",
//       price: "",
//       image: "",
//     });
//     setImagePreview(null);
//     setEditingIndex(null);
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", product.name);
//     formData.append("brand", product.brand);
//     formData.append("description", product.description);
//     formData.append("price", product.price);

//     const isEditing = editingIndex !== null;
//     const url = isEditing
//       ? `https://localhost:44361/api/products/${products[editingIndex].id}`
//       : "https://localhost:44361/api/products";

//     const method = isEditing ? "PUT" : "POST";

//     if (product.image instanceof File) {
//       formData.append("Image", product.image);
//     }

//     try {
//       const response = await fetch(url, {
//         method,
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Success:", data);

//       if (isEditing) {
//         setProducts((prevProducts) =>
//           prevProducts.map((p, index) => (index === editingIndex ? data : p))
//         );
//       } else {
//         setProducts([...products, data]);
//       }

//       resetForm();
//     } catch (error) {
//       console.error("Error adding/updating product:", error);
//       alert(`Error: ${error.message}`);
//     }
//   };

//   const handleDeleteProduct = async (index) => {
//     const productId = products[index].id;
//     try {
//       const response = await fetch(`https://localhost:44361/api/products/${productId}`, {
//         method: "DELETE",
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       setProducts(products.filter((_, i) => i !== index));
//       console.log("Product deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       alert(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>
//       <form onSubmit={handleAddProduct} className="product-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={product.name}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand Name"
//             value={product.brand}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             value={product.description}
//             onChange={handleChange}
//             className="form-control description-textarea"
//             rows="4"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input type="file" name="image" onChange={handleImageUpload} className="form-control" />
//         </div>
//         {imagePreview && (
//           <div className="image-preview">
//             <img 
//               src={imagePreview} 
//               alt="Preview" 
//               className="image-preview-img" 
//               onError={(e) => (e.target.src = "/default-image.jpg")} 
//             />
//           </div>
//         )}
//         <button type="submit" className="submit-button">
//           {editingIndex !== null ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {products.length > 0 && (
//         <div className="product-cards">
//           {products.map((item, index) => (
//             <div key={index} className="product-card">
//               <img
//                 src={item.imagePath || "/default-image.jpg"} // ✅ Fixes broken image issue
//                 alt={item.name}
//                 className="product-image"
//                 onError={(e) => (e.target.src = "/default-image.jpg")}
//               />
//               <div className="product-info">
//                 <h3 className="product-name">{item.name}</h3>
//                 <p className="product-brand">Brand: {item.brand}</p>
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <div className="product-actions">
//                   <button
//                     className="edit-button"
//                     onClick={() => {
//                       setProduct(item);
//                       setEditingIndex(index);
//                       setImagePreview(item.imagePath || "/default-image.jpg"); // ✅ Fix for missing preview
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button className="delete-button" onClick={() => handleDeleteProduct(index)}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddProduct;




// import React, { useState, useEffect } from "react";
// import "./AddProduct.css";



// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [products, setProducts] = useState([]);


  

//   // Fetch products when the component loads
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://localhost:44361/api/products");
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//       const data = await response.json();
//       console.log("Fetched Products:", data); // Debugging log
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setProduct((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProduct((prevState) => ({ ...prevState, image: file }));
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const fileInputRef = React.useRef(null);
//   const resetForm = () => {
//     setProduct({
//       name: "",
//       brand: "",
//       description: "",
//       price: "",
//       image: "",
//     });
  
//     setImagePreview(null);
//     setEditingIndex(null);
  
//     // Clear the file input field
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };
  


//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", product.name);
//     formData.append("brand", product.brand);
//     formData.append("description", product.description);
//     formData.append("price", product.price);
  
//     const isEditing = editingIndex !== null;
//     const url = isEditing
//       ? `https://localhost:44361/api/products/${products[editingIndex].id}`
//       : "https://localhost:44361/api/products";
  
//     const method = isEditing ? "PUT" : "POST";
  
//     if (product.image instanceof File) {
//       formData.append("Image", product.image);
//     }
  
//     try {
//       const response = await fetch(url, { method, body: formData });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
//       const data = await response.json();
//       console.log("Success:", data);
  
//       setProducts((prevProducts) =>
//         isEditing
//           ? prevProducts.map((p, index) => (index === editingIndex ? data : p))
//           : [...prevProducts, data]
//       );
  
//       // Reset form **after** successful addition or update
//       resetForm();
  
//     } catch (error) {
//       console.error("Error adding/updating product:", error);
//       alert(`Error: ${error.message}`);
//     }
//   };
  

//   const handleDeleteProduct = async (index) => {
//     const productId = products[index].id;
//     try {
//       const response = await fetch(`https://localhost:44361/api/products/${productId}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
//       console.log("Product deleted successfully.");
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       alert(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>
//       <form onSubmit={handleAddProduct} className="product-form">
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={product.name}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand Name"
//             value={product.brand}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             value={product.description}
//             onChange={handleChange}
//             className="form-control description-textarea"
//             rows="4"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           {/* <input type="file" name="image" onChange={handleImageUpload} className="form-control" /> */}
//           <input
//   type="file"
//   name="image"
//   onChange={handleImageUpload}
//   className="form-control"
//   ref={fileInputRef}  // Attach ref here
// />

//         </div>
//         {imagePreview && (
//           <div className="image-preview">
//             <img src={imagePreview} alt="Preview" className="image-preview-img" />
//           </div>
//         )}
//         <button type="submit" className="submit-button">
//           {editingIndex !== null ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {products.length > 0 ? (
//         <div className="product-cards">
//           {products.map((item, index) => (
//             <div key={index} className="product-card">
//               <img
//                 src={item.imagePath} // ✅ FIXED IMAGE PATH
//                 alt={item.name}
//                 className="product-image"
//               />
//               <div className="product-info">
//                 <h3 className="product-name">{item.name}</h3>
//                 <p className="product-brand">Brand: {item.brand}</p>
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <div className="product-actions">
//                   <button className="edit-button" onClick={() => {
//                     setProduct(item);
//                     setEditingIndex(index);
//                     setImagePreview(item.imagePath);
//                   }}>
//                     Edit
//                   </button>
//                   <button className="delete-button" onClick={() => handleDeleteProduct(index)}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// };

// export default AddProduct;



// import React, { useState, useEffect, useRef } from "react";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [products, setProducts] = useState([]);

//   const fileInputRef = useRef(null);
//   const formRef = useRef(null);  // ✅ Form reference

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://localhost:44361/api/products");
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setProduct((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProduct((prevState) => ({ ...prevState, image: file }));
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const resetForm = () => {
//     setProduct({
//       name: "",
//       brand: "",
//       description: "",
//       price: "",
//       image: "",
//     });
  
//     setImagePreview(null);
//     setEditingIndex(null);
  
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", product.name);
//     formData.append("brand", product.brand);
//     formData.append("description", product.description);
//     formData.append("price", product.price);

//     const isEditing = editingIndex !== null;
//     const url = isEditing
//       ? `https://localhost:44361/api/products/${products[editingIndex].id}`
//       : "https://localhost:44361/api/products";

//     const method = isEditing ? "PUT" : "POST";

//     if (product.image instanceof File) {
//       formData.append("Image", product.image);
//     }

//     try {
//       const response = await fetch(url, { method, body: formData });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       const data = await response.json();
//       setProducts((prevProducts) =>
//         isEditing
//           ? prevProducts.map((p, index) => (index === editingIndex ? data : p))
//           : [...prevProducts, data]
//       );

//       resetForm();
//     } catch (error) {
//       console.error("Error adding/updating product:", error);
//       alert(`Error: ${error.message}`);
//     }
//   };

//   const handleDeleteProduct = async (index) => {
//     const productId = products[index].id;
//     try {
//       const response = await fetch(`https://localhost:44361/api/products/${productId}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       alert(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>
      
//       <form ref={formRef} onSubmit={handleAddProduct} className="product-form">  
//         {/* ✅ Form now has a ref */}
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Product Name"
//             value={product.name}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="brand"
//             placeholder="Brand Name"
//             value={product.brand}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <textarea
//             name="description"
//             placeholder="Product Description"
//             value={product.description}
//             onChange={handleChange}
//             className="form-control description-textarea"
//             rows="4"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             value={product.price}
//             onChange={handleChange}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="file"
//             name="image"
//             onChange={handleImageUpload}
//             className="form-control"
//             ref={fileInputRef}
//           />
//         </div>
//         {imagePreview && (
//           <div className="image-preview">
//             <img src={imagePreview} alt="Preview" className="image-preview-img" />
//           </div>
//         )}
//         <button type="submit" className="submit-button">
//           {editingIndex !== null ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       {products.length > 0 ? (
//         <div className="product-cards">
//           {products.map((item, index) => (
//             <div key={index} className="product-card">
//               <img src={item.imagePath} alt={item.name} className="product-image" />
//               <div className="product-info">
//                 <h3 className="product-name">{item.name}</h3>
//                 <p className="product-brand">Brand: {item.brand}</p>
//                 <p className="product-description">{item.description}</p>
//                 <p className="product-price">Price: ₹{item.price}</p>
//                 <div className="product-actions">
//                   <button
//                     className="edit-button"
//                     onClick={() => {
//                       setProduct(item);
//                       setEditingIndex(index);
//                       setImagePreview(item.imagePath);

//                       // ✅ Scroll to form when editing
//                       formRef.current?.scrollIntoView({ behavior: "smooth" });
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button className="delete-button" onClick={() => handleDeleteProduct(index)}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// };

// export default AddProduct;


//===========================Trial code============================

// import React, { useState, useEffect, useRef } from "react";
// import "./AddProduct.css";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     brand: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [products, setProducts] = useState([]);
//   const fileInputRef = useRef(null);
//   const formRef = useRef(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://localhost:44361/api/products");
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//       const data = await response.json();
//       setProducts(data);
//       localStorage.setItem("farmerProducts", JSON.stringify(data)); // ✅ Sync with FarmerProduct
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setProduct((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setProduct((prevState) => ({ ...prevState, image: file }));
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const resetForm = () => {
//     setProduct({
//       name: "",
//       brand: "",
//       description: "",
//       price: "",
//       image: "",
//     });

//     setImagePreview(null);
//     setEditingIndex(null);

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", product.name);
//     formData.append("brand", product.brand);
//     formData.append("description", product.description);
//     formData.append("price", product.price);

//     const isEditing = editingIndex !== null;
//     const url = isEditing
//       ? `https://localhost:44361/api/products/${products[editingIndex].id}`
//       : "https://localhost:44361/api/products";

//     const method = isEditing ? "PUT" : "POST";

//     if (product.image instanceof File) {
//       formData.append("Image", product.image);
//     }

//     try {
//       const response = await fetch(url, { method, body: formData });
//       if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

//       const data = await response.json();
//       setProducts((prevProducts) =>
//         isEditing
//           ? prevProducts.map((p, index) => (index === editingIndex ? data : p))
//           : [...prevProducts, data]
//       );

//       localStorage.setItem("farmerProducts", JSON.stringify([...products, data])); // ✅ Sync FarmerProduct
//       resetForm();
//     } catch (error) {
//       console.error("Error adding/updating product:", error);
//       alert(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>

//       <form ref={formRef} onSubmit={handleAddProduct} className="product-form">
//         <div className="form-group">
//           <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <input type="text" name="brand" placeholder="Brand Name" value={product.brand} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <textarea name="description" placeholder="Product Description" value={product.description} onChange={handleChange} className="form-control" rows="4" required />
//         </div>
//         <div className="form-group">
//           <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <input type="file" name="image" onChange={handleImageUpload} className="form-control" ref={fileInputRef} />
//         </div>
//         {imagePreview && (
//           <div className="image-preview">
//             <img src={imagePreview} alt="Preview" className="image-preview-img" />
//           </div>
//         )}
//         <button type="submit" className="submit-button">
//           {editingIndex !== null ? "Update Product" : "Add Product"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;






import React, { useState, useEffect, useRef } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    image: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [products, setProducts] = useState([]);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://localhost:44361/api/products");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setProducts(data);
      localStorage.setItem("farmerProducts", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setProduct({ name: "", brand: "", description: "", price: "", image: "" });
    setImagePreview(null);
    setEditingIndex(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("brand", product.brand);
    formData.append("description", product.description);
    formData.append("price", product.price);

    const isEditing = editingIndex !== null;
    const url = isEditing
      ? `https://localhost:44361/api/products/${products[editingIndex].id}`
      : "https://localhost:44361/api/products";

    const method = isEditing ? "PUT" : "POST";

    if (product.image instanceof File) {
      formData.append("Image", product.image);
    }

    try {
      const response = await fetch(url, { method, body: formData });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      setProducts((prevProducts) =>
        isEditing ? prevProducts.map((p, index) => (index === editingIndex ? data : p)) : [...prevProducts, data]
      );

      localStorage.setItem("farmerProducts", JSON.stringify([...products, data]));
      resetForm();
    } catch (error) {
      console.error("Error adding/updating product:", error);
      alert(`Error: ${error.message}`);
    }
  };

  const handleDeleteProduct = async (index) => {
    const productId = products[index].id;
    try {
      const response = await fetch(`https://localhost:44361/api/products/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="add-product-container">
      <h2>{editingIndex !== null ? "Edit Product" : "Add New Product"}</h2>

      <form ref={formRef} onSubmit={handleAddProduct} className="product-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <input type="text" name="brand" placeholder="Brand Name" value={product.brand} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <textarea name="description" placeholder="Product Description" value={product.description} onChange={handleChange} className="form-control" rows="4" required />
        </div>
        <div className="form-group">
          <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <input type="file" name="image" onChange={handleImageUpload} className="form-control" ref={fileInputRef} />
        </div>
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" className="image-preview-img" />
          </div>
        )}
        <button type="submit" className="submit-button">
          {editingIndex !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      {products.length > 0 ? (
        <div className="product-cards">
          {products.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.imagePath} alt={item.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-brand">Brand: {item.brand}</p>
                <p className="product-description">{item.description}</p>
                <p className="product-price">Price: ₹{item.price}</p>
                <div className="product-actions">
                  <button
                    className="edit-button"
                    onClick={() => {
                      setProduct(item);
                      setEditingIndex(index);
                      setImagePreview(item.imagePath);
                      formRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteProduct(index)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default AddProduct;
