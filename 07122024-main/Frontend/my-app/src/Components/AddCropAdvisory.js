// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./AddCropAdvisory.css"; // Custom styling

// const AdminPanel = () => {
//   const [crop, setCrop] = useState({
//     name: "",
//     variety: "",
//     season: "",
//     duration: "",
//     soilType: "",
//     plowingMethod: "",
//     baseFertilizer: "",
//     sowingDate: "",
//     seedRate: "",
//     irrigation: "",
//     pests: "",
//     pesticides: "",
//     harvesting: "",
//     fertilizerRecommendation: "",
//   });

//   const handleChange = (e) => {
//     setCrop({ ...crop, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Crop Data:", crop);
//     alert("Crop details saved successfully!");
//   };

//   return (
//     <motion.div
//       className="admin-panel"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="title">🌾 Admin - Add Crop Details</h2>
//       <form onSubmit={handleSubmit} className="crop-form">
//         <div className="form-group">
//           <label>Crop Name:</label>
//           <input type="text" name="name" value={crop.name} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Variety:</label>
//           <input type="text" name="variety" value={crop.variety} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Season:</label>
//           <select name="season" value={crop.season} onChange={handleChange}>
//             <option value="">Select Season</option>
//             <option value="Kharif">Kharif</option>
//             <option value="Rabi">Rabi</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Duration (Days):</label>
//           <input type="number" name="duration" value={crop.duration} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Soil Type:</label>
//           <input type="text" name="soilType" value={crop.soilType} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Plowing Method:</label>
//           <input type="text" name="plowingMethod" value={crop.plowingMethod} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Base Fertilizer:</label>
//           <input type="text" name="baseFertilizer" value={crop.baseFertilizer} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Sowing Date:</label>
//           <input type="date" name="sowingDate" value={crop.sowingDate} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Seed Rate (kg/acre):</label>
//           <input type="number" name="seedRate" value={crop.seedRate} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Irrigation Management:</label>
//           <input type="text" name="irrigation" value={crop.irrigation} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Common Pests:</label>
//           <input type="text" name="pests" value={crop.pests} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Recommended Pesticides:</label>
//           <input type="text" name="pesticides" value={crop.pesticides} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Harvesting Time:</label>
//           <input type="text" name="harvesting" value={crop.harvesting} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label>Recommended Fertilizer & Equipment:</label>
//           <input type="text" name="fertilizerRecommendation" value={crop.fertilizerRecommendation} onChange={handleChange} required />
//         </div>
//         <motion.button
//           type="submit"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="submit-btn"
//         >
//           Save Crop Details
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// };

// export default AdminPanel;



//=====================updated React Code below====================================

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./AddCropAdvisory.css"; // Custom styling

// const AdminCropPanel = () => {
//   const [formData, setFormData] = useState({
//     cropName: "",
//     variety: "",
//     season: "",
//     duration: "",
//     soilType: "",
//     plowingMethod: "",
//     soilRequirement: "",
//     baseFertilizer: "",
//     sowingDate: "",
//     seedRate: "",
//     rowSpacing: "",
//     irrigationFirst: "",
//     irrigationFrequency: "",
//     commonPests: "",
//     recommendedPesticide: "",
//     floweringStage: "",
//     fruitingStage: "",
//     nutrientName: "",
//     nutrientAmount: "",
//     applicationTime: "",
//     harvestDate: "",
//     storageRecommendations: "",
//     recommendedFertilizer: "",
//     recommendedPesticide: "",
//     recommendedEquipment: "",
//     otherSeason: "",
//     otherSoilType: "",
//     otherPlowingMethod: "",
//     otherNutrient: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     alert("Crop Details Submitted Successfully!");
//   };

//   return (
//     <motion.div className="admin-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <h2 className="title">📢 Admin Panel - Add Crop Details</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="section">
//           <h3>🌱 Crop Information</h3>
//           <input type="text" name="cropName" placeholder="Crop Name" onChange={handleChange} required />
//           <input type="text" name="variety" placeholder="Variety" onChange={handleChange} required />
//           <select name="season" onChange={handleChange} required>
//             <option value="">Select Season</option>
//             <option value="Kharif">Kharif</option>
//             <option value="Rabi">Rabi</option>
//             <option value="Other">Other</option>
//           </select>
//           {formData.season === "Other" && <input type="text" name="otherSeason" placeholder="Specify Season" onChange={handleChange} />}
//           <input type="number" name="duration" placeholder="Duration (Days)" onChange={handleChange} required />
//           <select name="soilType" onChange={handleChange} required>
//             <option value="">Select Soil Type</option>
//             <option value="Clay">Clay</option>
//             <option value="Sandy">Sandy</option>
//             <option value="Loamy">Loamy</option>
//             <option value="Other">Other</option>
//           </select>
//           {formData.soilType === "Other" && <input type="text" name="otherSoilType" placeholder="Specify Soil Type" onChange={handleChange} />}
//         </div>

//         <div className="section">
//           <h3>🌾 Cultivation Steps</h3>
//           <select name="plowingMethod" onChange={handleChange} required>
//             <option value="">Select Plowing Method</option>
//             <option value="Manual">Manual</option>
//             <option value="Tractor">Tractor</option>
//             <option value="Rotavator">Rotavator</option>
//             <option value="Other">Other</option>
//           </select>
//           {formData.plowingMethod === "Other" && <input type="text" name="otherPlowingMethod" placeholder="Specify Plowing Method" onChange={handleChange} />}
//           <input type="text" name="soilRequirement" placeholder="Soil Requirement" onChange={handleChange} required />
//           <input type="text" name="baseFertilizer" placeholder="Base Fertilizer" onChange={handleChange} required />
//         </div>

//         <div className="section">
//           <h3>🌿 Nutrient Management</h3>
//           <select name="nutrientName" onChange={handleChange} required>
//             <option value="">Select Nutrient</option>
//             <option value="Nitrogen">Nitrogen</option>
//             <option value="Phosphorus">Phosphorus</option>
//             <option value="Potassium">Potassium</option>
//             <option value="Other">Other</option>
//           </select>
//           {formData.nutrientName === "Other" && <input type="text" name="otherNutrient" placeholder="Specify Nutrient" onChange={handleChange} />}
//           <input type="number" name="nutrientAmount" placeholder="Required Amount (kg/acre)" onChange={handleChange} required />
//           <input type="text" name="applicationTime" placeholder="Application Time" onChange={handleChange} required />
//         </div>

//         <div className="section">
//           <h3>✅ Harvesting & Post-Harvest Handling</h3>
//           <input type="date" name="harvestDate" placeholder="Harvest Date" onChange={handleChange} required />
//           <input type="text" name="storageRecommendations" placeholder="Storage Recommendations" onChange={handleChange} required />
//         </div>

//         <div className="section">
//           <h3>🛒 Recommended Products for Farmers</h3>
//           <input type="text" name="recommendedFertilizer" placeholder="Fertilizer" onChange={handleChange} required />
//           <input type="text" name="recommendedPesticide" placeholder="Pesticide" onChange={handleChange} required />
//           <input type="text" name="recommendedEquipment" placeholder="Equipment" onChange={handleChange} required />
//         </div>

//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </motion.div>
//   );
// };

// export default AdminCropPanel;






//=======================Api Integrated Code =====================================



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./AddCropAdvisory.css"; // Custom styling

// const AdminCropPanel = () => {
//   const [formData, setFormData] = useState({
//     cropName: "",
//     variety: "",
//     season: "",
//     duration: "",
//     soilType: "",
//     plowingMethod: "",
//     soilRequirement: "",
//     baseFertilizer: "",
//     sowingDate: "",
//     seedRate: "",
//     rowSpacing: "",
//     irrigationFirst: "",
//     irrigationFrequency: "",
//     commonPests: "",
//     recommendedPesticide: "",
//     floweringStage: "",
//     fruitingStage: "",
//     nutrientName: "",
//     nutrientAmount: "",
//     applicationTime: "",
//     harvestDate: "",
//     storageRecommendations: "",
//     recommendedFertilizer: "",
//     recommendedPesticide: "",
//     recommendedEquipment: "",
//     otherSeason: "",
//     otherSoilType: "",
//     otherPlowingMethod: "",
//     otherNutrient: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
  
//     // Convert Duration to a number if the field is "Duration"
//     const updatedValue = name === "Duration" ? Number(value) : value;
  
//     setFormData({
//       ...formData,
//       [name]: updatedValue,
//     });
//   };
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await fetch("https://localhost:44361/api/CropAdvisory", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(formData),
//   //     });
//   //     if (response.ok) {
//   //       alert("Crop Details Submitted Successfully!");
//   //     } else {
//   //       alert("Failed to submit crop details.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error submitting crop details:", error);
//   //   }
//   // };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting form data:", formData); // Log form data
  
//       const response = await fetch("https://localhost:44361/api/CropAdvisory", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
  
//       console.log("Response status:", response.status); // Log response status
  
//       if (response.ok) {
//         alert("Crop Details Submitted Successfully!");
//       } else {
//         const errorData = await response.json(); // Parse the error response
//         console.error("Error Response:", errorData);
//         alert(`Failed to submit crop details: ${errorData.message || "Unknown error"}`);
//       }
//     } catch (error) {
//       console.error("Error submitting crop details:", error);
//       alert("An error occurred while submitting crop details. Please try again.");
//     }
//   };
//   return (
//     <motion.div className="admin-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <h2 className="title">📢 Admin Panel - Add Crop Details</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="section">
//           <h3>🌱 Crop Information</h3>
//           <input type="text" name="cropName" placeholder="Crop Name" onChange={handleChange} required />
//           <input type="text" name="variety" placeholder="Variety" onChange={handleChange} required />
//           <select name="season" onChange={handleChange} required>
//             <option value="">Select Season</option>
//             <option value="Kharif">Kharif</option>
//             <option value="Rabi">Rabi</option>
//             <option value="Other">Other</option>
//           </select>
//           {formData.season === "Other" && <input type="text" name="otherSeason" placeholder="Specify Season" onChange={handleChange} />}
//           <input type="number" name="duration" placeholder="Duration (Days)" onChange={handleChange} required />
//           <select name="soilType" onChange={handleChange} required>
//             <option value="">Select Soil Type</option>
//             <option value="Clay">Clay</option>
//             <option value="Sandy">Sandy</option>
//             <option value="Loamy">Loamy</option>
//             <option value="Other">Other</option>
//           </select>
//           {formData.soilType === "Other" && <input type="text" name="otherSoilType" placeholder="Specify Soil Type" onChange={handleChange} />}
//         </div>

//         <div className="section">
//           <h3>🌾 Cultivation Steps</h3>
//           <select name="plowingMethod" onChange={handleChange} required>
//             <option value="">Select Plowing Method</option>
//             <option value="Manual">Manual</option>
//             <option value="Tractor">Tractor</option>
//             <option value="Rotavator">Rotavator</option>
//             <option value="Other">Other</option>
//           </select>
//           {formData.plowingMethod === "Other" && <input type="text" name="otherPlowingMethod" placeholder="Specify Plowing Method" onChange={handleChange} />}
//           <input type="text" name="soilRequirement" placeholder="Soil Requirement" onChange={handleChange} required />
//           <input type="text" name="baseFertilizer" placeholder="Base Fertilizer" onChange={handleChange} required />
//         </div>

//         <div className="section">
//           <h3>🌿 Nutrient Management</h3>
//           <select name="nutrientName" onChange={handleChange} required>
//             <option value="">Select Nutrient</option>
//             <option value="Nitrogen">Nitrogen</option>
//             <option value="Phosphorus">Phosphorus</option>
//             <option value="Potassium">Potassium</option>
//             <option value="Other">Other</option>
//           </select>
//           {formData.nutrientName === "Other" && <input type="text" name="otherNutrient" placeholder="Specify Nutrient" onChange={handleChange} />}
//           <input type="number" name="nutrientAmount" placeholder="Required Amount (kg/acre)" onChange={handleChange} required />
//           <input type="text" name="applicationTime" placeholder="Application Time" onChange={handleChange} required />
//         </div>

//         <div className="section">
//           <h3>✅ Harvesting & Post-Harvest Handling</h3>
//           <input type="date" name="harvestDate" placeholder="Harvest Date" onChange={handleChange} required />
//           <input type="text" name="storageRecommendations" placeholder="Storage Recommendations" onChange={handleChange} required />
//         </div>

//         <div className="section">
//           <h3>🛒 Recommended Products for Farmers</h3>
//           <input type="text" name="recommendedFertilizer" placeholder="Fertilizer" onChange={handleChange} required />
//           <input type="text" name="recommendedPesticide" placeholder="Pesticide" onChange={handleChange} required />
//           <input type="text" name="recommendedEquipment" placeholder="Equipment" onChange={handleChange} required />
//         </div>

//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </motion.div>
//   );
// };

// export default AdminCropPanel;













// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./AddCropAdvisory.css";

// const AdminCropPanel = () => {
//   const [formData, setFormData] = useState({
//     cropName: "",
//     variety: "",
//     season: "",
//     duration: "",
//     soilType: "",
//     plowingMethod: "",
//     soilRequirement: "",
//     baseFertilizer: "",
//     sowingDate: "",
//     seedRate: "",
//     rowSpacing: "",
//     irrigationFirst: "",
//     irrigationFrequency: "",
//     commonPests: "",
//     floweringStage: "",
//     fruitingStage: "",
//     nutrientName: "",
//     nutrientAmount: "",
//     applicationTime: "",
//     harvestDate: "",
//     storageRecommendations: "",
//     recommendedFertilizer: "",
//     recommendedPesticide: "",
//     recommendedEquipment: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare the data for submission
//     const submitData = {
//       ...formData,
//       duration: parseInt(formData.duration), // Convert duration to a number
//       sowingDate: formData.sowingDate ? new Date(formData.sowingDate).toISOString() : null,
//       harvestDate: formData.harvestDate ? new Date(formData.harvestDate).toISOString() : null,
//     };

//     try {
//       const response = await fetch("https://localhost:44361/api/CropAdvisory", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(submitData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("Success:", result);
//       alert("Crop Details Submitted Successfully!");

//       // Reset the form after successful submission
//       setFormData({
//         cropName: "",
//         variety: "",
//         season: "",
//         duration: "",
//         soilType: "",
//         plowingMethod: "",
//         soilRequirement: "",
//         baseFertilizer: "",
//         sowingDate: "",
//         seedRate: "",
//         rowSpacing: "",
//         irrigationFirst: "",
//         irrigationFrequency: "",
//         commonPests: "",
//         floweringStage: "",
//         fruitingStage: "",
//         nutrientName: "",
//         nutrientAmount: "",
//         applicationTime: "",
//         harvestDate: "",
//         storageRecommendations: "",
//         recommendedFertilizer: "",
//         recommendedPesticide: "",
//         recommendedEquipment: "",
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to submit data. Please check the console for details.");
//     }
//   };

//   return (
//     <motion.div
//       className="admin-panel"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <h2 className="title">📢 Admin Panel - Add Crop Details</h2>
//       <form onSubmit={handleSubmit} className="form-container">
//         <div className="section">
//           <h3>🌱 Basic Information</h3>
//           <input
//             type="text"
//             name="cropName"
//             value={formData.cropName}
//             onChange={handleChange}
//             placeholder="Crop Name"
//             required
//           />
//           <input
//             type="text"
//             name="variety"
//             value={formData.variety}
//             onChange={handleChange}
//             placeholder="Variety"
//             required
//           />
//           <select
//             name="season"
//             value={formData.season}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Season</option>
//             <option value="Kharif">Kharif</option>
//             <option value="Rabi">Rabi</option>
//             <option value="Zaid">Zaid</option>
//           </select>
//           <input
//             type="number"
//             name="duration"
//             value={formData.duration}
//             onChange={handleChange}
//             placeholder="Duration (days)"
//             required
//           />
//         </div>

//         <div className="section">
//           <h3>🌾 Soil and Plowing</h3>
//           <select
//             name="soilType"
//             value={formData.soilType}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Soil Type</option>
//             <option value="Clay">Clay</option>
//             <option value="Sandy">Sandy</option>
//             <option value="Loamy">Loamy</option>
//           </select>
//           <input
//             type="text"
//             name="soilRequirement"
//             value={formData.soilRequirement}
//             onChange={handleChange}
//             placeholder="Soil Requirements"
//             required
//           />
//           <select
//             name="plowingMethod"
//             value={formData.plowingMethod}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Plowing Method</option>
//             <option value="Manual">Manual</option>
//             <option value="Mechanical">Mechanical</option>
//             <option value="Zero Tillage">Zero Tillage</option>
//           </select>
//         </div>

//         <div className="section">
//           <h3>💧 Irrigation and Fertilizers</h3>
//           <input
//             type="text"
//             name="baseFertilizer"
//             value={formData.baseFertilizer}
//             onChange={handleChange}
//             placeholder="Base Fertilizer"
//             required
//           />
//           <input
//             type="text"
//             name="irrigationFirst"
//             value={formData.irrigationFirst}
//             onChange={handleChange}
//             placeholder="First Irrigation"
//           />
//           <input
//             type="text"
//             name="irrigationFrequency"
//             value={formData.irrigationFrequency}
//             onChange={handleChange}
//             placeholder="Irrigation Frequency"
//           />
//         </div>

//         <div className="section">
//           <h3>📅 Important Dates</h3>
//           <input
//             type="date"
//             name="sowingDate"
//             value={formData.sowingDate}
//             onChange={handleChange}
//             placeholder="Sowing Date"
//           />
//           <input
//             type="date"
//             name="harvestDate"
//             value={formData.harvestDate}
//             onChange={handleChange}
//             placeholder="Harvest Date"
//             required
//           />
//         </div>

//         <div className="section">
//           <h3>🌿 Growth Stages</h3>
//           <input
//             type="text"
//             name="floweringStage"
//             value={formData.floweringStage}
//             onChange={handleChange}
//             placeholder="Flowering Stage"
//           />
//           <input
//             type="text"
//             name="fruitingStage"
//             value={formData.fruitingStage}
//             onChange={handleChange}
//             placeholder="Fruiting Stage"
//           />
//         </div>

//         <div className="section">
//           <h3>🧪 Nutrients and Protection</h3>
//           <input
//             type="text"
//             name="nutrientName"
//             value={formData.nutrientName}
//             onChange={handleChange}
//             placeholder="Nutrient Name"
//             required
//           />
//           <input
//             type="text"
//             name="nutrientAmount"
//             value={formData.nutrientAmount}
//             onChange={handleChange}
//             placeholder="Nutrient Amount"
//             required
//           />
//           <input
//             type="text"
//             name="recommendedPesticide"
//             value={formData.recommendedPesticide}
//             onChange={handleChange}
//             placeholder="Recommended Pesticide"
//             required
//           />
//         </div>

//         <div className="section">
//           <h3>🏭 Storage and Equipment</h3>
//           <input
//             type="text"
//             name="storageRecommendations"
//             value={formData.storageRecommendations}
//             onChange={handleChange}
//             placeholder="Storage Recommendations"
//             required
//           />
//           <input
//             type="text"
//             name="recommendedEquipment"
//             value={formData.recommendedEquipment}
//             onChange={handleChange}
//             placeholder="Recommended Equipment"
//             required
//           />
//         </div>

//         <button type="submit" className="submit-btn">
//           Submit Crop Details
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default AdminCropPanel;



//====================Above code is working fine==================================


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./AddCropAdvisory.css";

const AdminCropPanel = () => {
  const [formData, setFormData] = useState({
    id: null, // Add id field to handle updates
    cropName: "",
    variety: "",
    season: "",
    duration: "",
    soilType: "",
    plowingMethod: "",
    soilRequirement: "",
    baseFertilizer: "",
    sowingDate: "",
    seedRate: "",
    rowSpacing: "",
    irrigationFirst: "",
    irrigationFrequency: "",
    commonPests: "",
    floweringStage: "",
    fruitingStage: "",
    nutrientName: "",
    nutrientAmount: "",
    applicationTime: "",
    harvestDate: "",
    storageRecommendations: "",
    recommendedFertilizer: "",
    recommendedPesticide: "",
    recommendedEquipment: "",
  });

  const [cropAdvisories, setCropAdvisories] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchCropAdvisories();
  }, []);

  const fetchCropAdvisories = async () => {
    try {
      const response = await fetch("https://localhost:44361/api/CropAdvisory");
      if (response.ok) {
        const data = await response.json();
        setCropAdvisories(data);
      } else {
        console.error("Failed to fetch crop advisories.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = {
        id: editId ? parseInt(editId) : 0,
        cropName: formData.cropName,
        variety: formData.variety,
        season: formData.season,
        duration: parseInt(formData.duration),
        soilType: formData.soilType,
        plowingMethod: formData.plowingMethod,
        soilRequirement: formData.soilRequirement,
        baseFertilizer: formData.baseFertilizer,
        sowingDate: formData.sowingDate ? new Date(formData.sowingDate).toISOString() : null,
        seedRate: formData.seedRate,
        rowSpacing: formData.rowSpacing,
        irrigationFirst: formData.irrigationFirst,
        irrigationFrequency: formData.irrigationFrequency,
        commonPests: formData.commonPests,
        floweringStage: formData.floweringStage,
        fruitingStage: formData.fruitingStage,
        nutrientName: formData.nutrientName,
        nutrientAmount: formData.nutrientAmount,
        applicationTime: formData.applicationTime,
        harvestDate: formData.harvestDate ? new Date(formData.harvestDate).toISOString() : null,
        storageRecommendations: formData.storageRecommendations,
        recommendedFertilizer: formData.recommendedFertilizer,
        recommendedPesticide: formData.recommendedPesticide,
        recommendedEquipment: formData.recommendedEquipment
    };

    const url = editId
        ? `https://localhost:44361/api/CropAdvisory/${editId}`
        : "https://localhost:44361/api/CropAdvisory";
    const method = editId ? "PUT" : "POST";

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submitData)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.log('Response:', errorText); // For debugging
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        // Handle successful response
        alert(editId ? "Crop Details Updated Successfully!" : "Crop Details Submitted Successfully!");
        
        // Reset form
        setFormData({
            cropName: "",
            variety: "",
            season: "",
            duration: "",
            soilType: "",
            plowingMethod: "",
            soilRequirement: "",
            baseFertilizer: "",
            sowingDate: "",
            seedRate: "",
            rowSpacing: "",
            irrigationFirst: "",
            irrigationFrequency: "",
            commonPests: "",
            floweringStage: "",
            fruitingStage: "",
            nutrientName: "",
            nutrientAmount: "",
            applicationTime: "",
            harvestDate: "",
            storageRecommendations: "",
            recommendedFertilizer: "",
            recommendedPesticide: "",
            recommendedEquipment: ""
        });

        setEditId(null);
        fetchCropAdvisories();
    } catch (error) {
        console.error("Error:", error);
        alert(`Failed to submit data: ${error.message}`);
    }
};


  // const handleEdit = (crop) => {
  //   setFormData({
  //     ...crop,
  //     sowingDate: crop.sowingDate ? crop.sowingDate.split("T")[0] : "",
  //     harvestDate: crop.harvestDate ? crop.harvestDate.split("T")[0] : "",
  //   });
  //   setEditId(crop.id);
  // };

  const handleEdit = (crop) => {
    setFormData({
      ...crop,
      sowingDate: crop.sowingDate ? crop.sowingDate.split("T")[0] : "",
      harvestDate: crop.harvestDate ? crop.harvestDate.split("T")[0] : "",
    });
    setEditId(crop.id);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://localhost:44361/api/CropAdvisory/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("Crop Details Deleted Successfully!");
      fetchCropAdvisories();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete data. Please check the console for details.");
    }
  };

  return (
    <motion.div className="admin-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="title">📢 Admin Panel - Add Crop Details</h2>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Basic Information Section */}
        <div className="section">
          <h3>🌱 Basic Information</h3>
          <input
            type="text"
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            placeholder="Crop Name"
            required
          />
          <input
            type="text"
            name="variety"
            value={formData.variety}
            onChange={handleChange}
            placeholder="Variety"
            required
          />
          <select
            name="season"
            value={formData.season}
            onChange={handleChange}
            required
          >
            <option value="">Select Season</option>
            <option value="Kharif">Kharif</option>
            <option value="Rabi">Rabi</option>
            <option value="Zaid">Zaid</option>
          </select>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration (days)"
            required
          />
        </div>

        {/* Soil and Plowing Section */}
        <div className="section">
          <h3>🌾 Soil and Plowing</h3>
          <select
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            required
          >
            <option value="">Select Soil Type</option>
            <option value="Clay">Clay</option>
            <option value="Sandy">Sandy</option>
            <option value="Loamy">Loamy</option>
          </select>
          <input
            type="text"
            name="soilRequirement"
            value={formData.soilRequirement}
            onChange={handleChange}
            placeholder="Soil Requirements"
            required
          />
          <select
            name="plowingMethod"
            value={formData.plowingMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Plowing Method</option>
            <option value="Manual">Manual</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Zero Tillage">Zero Tillage</option>
          </select>
        </div>

        {/* Irrigation and Fertilizers Section */}
        <div className="section">
          <h3>💧 Irrigation and Fertilizers</h3>
          <input
            type="text"
            name="baseFertilizer"
            value={formData.baseFertilizer}
            onChange={handleChange}
            placeholder="Base Fertilizer"
            required
          />
          <input
            type="text"
            name="irrigationFirst"
            value={formData.irrigationFirst}
            onChange={handleChange}
            placeholder="First Irrigation"
          />
          <input
            type="text"
            name="irrigationFrequency"
            value={formData.irrigationFrequency}
            onChange={handleChange}
            placeholder="Irrigation Frequency"
          />
        </div>

        {/* Important Dates Section */}
        <div className="section">
          <h3>📅 Important Dates</h3>
          <input
            type="date"
            name="sowingDate"
            value={formData.sowingDate}
            onChange={handleChange}
            placeholder="Sowing Date"
          />
          <input
            type="date"
            name="harvestDate"
            value={formData.harvestDate}
            onChange={handleChange}
            placeholder="Harvest Date"
            required
          />
        </div>

        {/* Growth Stages Section */}
        <div className="section">
          <h3>🌿 Growth Stages</h3>
          <input
            type="text"
            name="floweringStage"
            value={formData.floweringStage}
            onChange={handleChange}
            placeholder="Flowering Stage"
          />
          <input
            type="text"
            name="fruitingStage"
            value={formData.fruitingStage}
            onChange={handleChange}
            placeholder="Fruiting Stage"
          />
        </div>

        {/* Nutrients and Protection Section */}
        <div className="section">
          <h3>🧪 Nutrients and Protection</h3>
          <input
            type="text"
            name="nutrientName"
            value={formData.nutrientName}
            onChange={handleChange}
            placeholder="Nutrient Name"
            required
          />
          <input
            type="text"
            name="nutrientAmount"
            value={formData.nutrientAmount}
            onChange={handleChange}
            placeholder="Nutrient Amount"
            required
          />
          <input
            type="text"
            name="recommendedPesticide"
            value={formData.recommendedPesticide}
            onChange={handleChange}
            placeholder="Recommended Pesticide"
            required
          />
        </div>

        {/* Storage and Equipment Section */}
        <div className="section">
          <h3>🏭 Storage and Equipment</h3>
          <input
            type="text"
            name="storageRecommendations"
            value={formData.storageRecommendations}
            onChange={handleChange}
            placeholder="Storage Recommendations"
            required
          />
          <input
            type="text"
            name="recommendedEquipment"
            value={formData.recommendedEquipment}
            onChange={handleChange}
            placeholder="Recommended Equipment"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          {editId ? "Update Crop Details" : "Submit Crop Details"}
        </button>
      </form>

      {/* Grid to display crop advisories */}
      <div className="crop-advisory-grid">
        <h3>📋 Crop Advisory List</h3>
        <table>
          <thead>
            <tr>
              <th>Crop Name</th>
              <th>Variety</th>
              <th>Season</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cropAdvisories.map((crop) => (
              <tr key={crop.id}>
                <td>{crop.cropName}</td>
                <td>{crop.variety}</td>
                <td>{crop.season}</td>
                <td>{crop.duration}</td>
                <td>
                  <button onClick={() => handleEdit(crop)}>Edit</button>
                  <button onClick={() => handleDelete(crop.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AdminCropPanel;