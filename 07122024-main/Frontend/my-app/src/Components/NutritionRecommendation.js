// import React, { useState } from 'react';
// import './NutritionRecommendation.css'; // External CSS file

// export default function NutritionRecommendation() {
//   const [formData, setFormData] = useState({
//     crop: '',
//     soil: '',
//     weather: '',
//   });

//   const [recommendations, setRecommendations] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Recommendation logic based on form input
//     let recommendationsText = '';

//     if (formData.crop && formData.soil && formData.weather) {
//       if (formData.crop === 'Wheat' && formData.soil === 'Black Soil' && formData.weather === 'Sunny') {
//         recommendationsText = 'We recommend the following products for Wheat on Black Soil in Sunny weather: Product A, Product B.';
//       } else if (formData.crop === 'Maize' && formData.soil === 'Red Soil' && formData.weather === 'Cloudy') {
//         recommendationsText = 'We recommend the following products for Maize on Red Soil in Cloudy weather: Product C, Product D.';
//       } else {
//         recommendationsText = 'No specific recommendations available for the selected options. Please adjust your inputs.';
//       }
//     } else {
//       recommendationsText = 'Please fill out all fields to get recommendations.';
//     }

//     setRecommendations(recommendationsText);
//   };

//   return (
//     <div className="nutrition-container">
//       <h2 className="nutrition-title">Nutrition Recommendation</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="crop" className="form-label">Crop Name</label>
//           <select
//             id="crop"
//             name="crop"
//             className="form-select"
//             value={formData.crop}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Crop</option>
//             <option value="Wheat">Wheat</option>
//             <option value="Maize">Maize</option>
//             <option value="Bajra">Bajra</option>
//             <option value="Jowar">Jowar</option>
//             <option value="Sugarcane">Sugarcane</option>
//             <option value="Pomegranate">Pomegranate</option>
//             <option value="Banana">Banana</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="soil" className="form-label">Soil Type</label>
//           <select
//             id="soil"
//             name="soil"
//             className="form-select"
//             value={formData.soil}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Soil Type</option>
//             <option value="Black Soil">Black Soil</option>
//             <option value="Red Soil">Red Soil</option>
//             <option value="Alluvial Soil">Alluvial Soil</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="weather" className="form-label">Weather Condition</label>
//           <select
//             id="weather"
//             name="weather"
//             className="form-select"
//             value={formData.weather}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Weather Condition</option>
//             <option value="Sunny">Sunny</option>
//             <option value="Cloudy">Cloudy</option>
//           </select>
//         </div>
//         <button type="submit" className="btn-submit">Submit</button>
//       </form>

//       {/* Display Recommendations */}
//       {recommendations && (
//         <div className="recommendations-container">
//           <h3 className="recommendations-title">Product Recommendations</h3>
//           <p>{recommendations}</p>
//         </div>
//       )}
//     </div>
//   );
// }



//================React Updated code============================================

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import './NutritionRecommendation.css';

// const FarmerCropDetails = () => {
//   const [selectedCrop, setSelectedCrop] = useState("");
//   const [cropDetails, setCropDetails] = useState(null);
//   const [cropList, setCropList] = useState([]);

//   useEffect(() => {
//     setCropList(["Wheat", "Rice", "Maize", "Soybean", "Other"]);
//   }, []);

//   const handleCropChange = (e) => {
//     setSelectedCrop(e.target.value);
//     if (e.target.value === "Other") {
//       setCropDetails(null);
//     } else {
//       fetchCropDetails(e.target.value);
//     }
//   };

//   const fetchCropDetails = (cropName) => {
//     const data = {
//       cropName,
//       variety: "High Yield",
//       season: "Rabi",
//       duration: "120 Days",
//       soilType: "Loamy",
//       plowingMethod: "Tractor",
//       baseFertilizer: "NPK 10:26:26",
//       irrigationFrequency: "Every 7 Days",
//       commonPests: "Aphids, Armyworms",
//       recommendedPesticide: "Chlorpyrifos",
//       floweringStage: "60 Days",
//       fruitingStage: "90 Days",
//       nutrientRequirement: "Nitrogen 50kg/acre, Potassium 30kg/acre",
//       harvestDate: "April 15, 2025",
//       storageRecommendations: "Store in dry and cool conditions",
//       recommendedFertilizer: "DAP, Urea",
//       recommendedEquipment: "Tractor, Seeder",
//     };
//     setCropDetails(data);
//   };

//   return (
//     <motion.div className="farmer-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <h2 className="title">🌾 Farmer's Crop Guide</h2>
//       <div className="dropdown-container">
//         <label>Select Your Crop:</label>
//         <select value={selectedCrop} onChange={handleCropChange}>
//           <option value="">-- Choose a Crop --</option>
//           {cropList.map((crop, index) => (
//             <option key={index} value={crop}>{crop}</option>
//           ))}
//         </select>
//         {selectedCrop === "Other" && <input type="text" placeholder="Enter Crop Name" className="other-input" />}
//       </div>
//       {cropDetails && (
//         <motion.div className="crop-details" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
//           <h3>🌱 {cropDetails.cropName} - Growth Guide</h3>
//           <p><strong>Variety:</strong> {cropDetails.variety}</p>
//           <p><strong>Season:</strong> {cropDetails.season}</p>
//           <p><strong>Duration:</strong> {cropDetails.duration}</p>
//           <p><strong>Soil Type:</strong> {cropDetails.soilType}</p>
//           <p><strong>Plowing Method:</strong> {cropDetails.plowingMethod}</p>
//           <p><strong>Base Fertilizer:</strong> {cropDetails.baseFertilizer}</p>
//           <p><strong>Irrigation Frequency:</strong> {cropDetails.irrigationFrequency}</p>
//           <p><strong>Common Pests:</strong> {cropDetails.commonPests}</p>
//           <p><strong>Recommended Pesticide:</strong> {cropDetails.recommendedPesticide}</p>
//           <p><strong>Flowering Stage:</strong> {cropDetails.floweringStage}</p>
//           <p><strong>Fruiting Stage:</strong> {cropDetails.fruitingStage}</p>
//           <p><strong>Nutrient Requirement:</strong> {cropDetails.nutrientRequirement}</p>
//           <p><strong>Harvest Date:</strong> {cropDetails.harvestDate}</p>
//           <p><strong>Storage Recommendations:</strong> {cropDetails.storageRecommendations}</p>
//           <p><strong>Recommended Fertilizer:</strong> {cropDetails.recommendedFertilizer}</p>
//           <p><strong>Recommended Equipment:</strong> {cropDetails.recommendedEquipment}</p>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default FarmerCropDetails;





//====================API Integrated code ==========================================

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import './NutritionRecommendation.css';

// const FarmerCropDetails = () => {
//   const [selectedCrop, setSelectedCrop] = useState("");
//   const [cropDetails, setCropDetails] = useState(null);
//   const [cropList, setCropList] = useState([]);

//   useEffect(() => {
//     fetchCropList();
//   }, []);

//   const fetchCropList = async () => {
//     try {
//       const response = await fetch("https://localhost:44361/api/Crops");
//       const data = await response.json();
//       setCropList(data.map(crop => crop.cropName));
//     } catch (error) {
//       console.error("Error fetching crop list:", error);
//     }
//   };

//   const handleCropChange = async (e) => {
//     setSelectedCrop(e.target.value);
//     if (e.target.value === "Other") {
//       setCropDetails(null);
//     } else {
//       try {
//         const response = await fetch(`https://localhost:44361/api/Crops?cropName=${e.target.value}`);
//         const data = await response.json();
//         setCropDetails(data[0]);
//       } catch (error) {
//         console.error("Error fetching crop details:", error);
//       }
//     }
//   };

//   return (
//     <motion.div className="farmer-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <h2 className="title">🌾 Farmer's Crop Guide</h2>
//       <div className="dropdown-container">
//         <label>Select Your Crop:</label>
//         <select value={selectedCrop} onChange={handleCropChange}>
//           <option value="">-- Choose a Crop --</option>
//           {cropList.map((crop, index) => (
//             <option key={index} value={crop}>{crop}</option>
//           ))}
//         </select>
//         {selectedCrop === "Other" && <input type="text" placeholder="Enter Crop Name" className="other-input" />}
//       </div>
//       {cropDetails && (
//         <motion.div className="crop-details" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
//           <h3>🌱 {cropDetails.cropName} - Growth Guide</h3>
//           <p><strong>Variety:</strong> {cropDetails.variety}</p>
//           <p><strong>Season:</strong> {cropDetails.season}</p>
//           <p><strong>Duration:</strong> {cropDetails.duration}</p>
//           <p><strong>Soil Type:</strong> {cropDetails.soilType}</p>
//           <p><strong>Plowing Method:</strong> {cropDetails.plowingMethod}</p>
//           <p><strong>Base Fertilizer:</strong> {cropDetails.baseFertilizer}</p>
//           <p><strong>Irrigation Frequency:</strong> {cropDetails.irrigationFrequency}</p>
//           <p><strong>Common Pests:</strong> {cropDetails.commonPests}</p>
//           <p><strong>Recommended Pesticide:</strong> {cropDetails.recommendedPesticide}</p>
//           <p><strong>Flowering Stage:</strong> {cropDetails.floweringStage}</p>
//           <p><strong>Fruiting Stage:</strong> {cropDetails.fruitingStage}</p>
//           <p><strong>Nutrient Requirement:</strong> {cropDetails.nutrientName} {cropDetails.nutrientAmount}</p>
//           <p><strong>Harvest Date:</strong> {new Date(cropDetails.harvestDate).toLocaleDateString()}</p>
//           <p><strong>Storage Recommendations:</strong> {cropDetails.storageRecommendations}</p>
//           <p><strong>Recommended Fertilizer:</strong> {cropDetails.recommendedFertilizer}</p>
//           <p><strong>Recommended Equipment:</strong> {cropDetails.recommendedEquipment}</p>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default FarmerCropDetails;














// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import './NutritionRecommendation.css';

// const FarmerCropDetails = () => {
//   const [selectedCrop, setSelectedCrop] = useState("");
//   const [cropDetails, setCropDetails] = useState(null);
//   const [cropList, setCropList] = useState([]);

//   useEffect(() => {
//     setCropList(["Wheat", "Rice", "Maize", "Soybean", "Other"]);
//   }, []);

//   const handleCropChange = (e) => {
//     setSelectedCrop(e.target.value);
//     if (e.target.value === "Other") {
//       setCropDetails(null);
//     } else {
//       fetchCropDetails(e.target.value);
//     }
//   };

//  const fetchCropDetails = async (cropName) => {
//   try {
//     const response = await fetch(`https://localhost:44361/api/CropAdvisory?cropName=${cropName}`);
//     if (response.ok) {
//       const data = await response.json();
//       setCropDetails(data);
//     } else {
//       console.error("Failed to fetch crop details.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

//   return (
//     <motion.div className="farmer-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <h2 className="title">🌾 Farmer's Crop Guide</h2>
//       <div className="dropdown-container">
//         <label>Select Your Crop:</label>
//         <select value={selectedCrop} onChange={handleCropChange}>
//           <option value="">-- Choose a Crop --</option>
//           {cropList.map((crop, index) => (
//             <option key={index} value={crop}>{crop}</option>
//           ))}
//         </select>
//         {selectedCrop === "Other" && <input type="text" placeholder="Enter Crop Name" className="other-input" />}
//       </div>
//       {cropDetails && (
//         <motion.div className="crop-details" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
//           <h3>🌱 {cropDetails.cropName} - Growth Guide</h3>
//           <p><strong>Variety:</strong> {cropDetails.variety}</p>
//           <p><strong>Season:</strong> {cropDetails.season}</p>
//           <p><strong>Duration:</strong> {cropDetails.duration}</p>
//           <p><strong>Soil Type:</strong> {cropDetails.soilType}</p>
//           <p><strong>Plowing Method:</strong> {cropDetails.plowingMethod}</p>
//           <p><strong>Base Fertilizer:</strong> {cropDetails.baseFertilizer}</p>
//           <p><strong>Irrigation Frequency:</strong> {cropDetails.irrigationFrequency}</p>
//           <p><strong>Common Pests:</strong> {cropDetails.commonPests}</p>
//           <p><strong>Recommended Pesticide:</strong> {cropDetails.recommendedPesticide}</p>
//           <p><strong>Flowering Stage:</strong> {cropDetails.floweringStage}</p>
//           <p><strong>Fruiting Stage:</strong> {cropDetails.fruitingStage}</p>
//           <p><strong>Nutrient Requirement:</strong> {cropDetails.nutrientRequirement}</p>
//           <p><strong>Harvest Date:</strong> {cropDetails.harvestDate}</p>
//           <p><strong>Storage Recommendations:</strong> {cropDetails.storageRecommendations}</p>
//           <p><strong>Recommended Fertilizer:</strong> {cropDetails.recommendedFertilizer}</p>
//           <p><strong>Recommended Equipment:</strong> {cropDetails.recommendedEquipment}</p>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default FarmerCropDetails;


//===================Above code is working fine==============================

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./NutritionRecommendation.css";

// const FarmerCropDetails = () => {
//   const [selectedCrop, setSelectedCrop] = useState("");
//   const [cropDetails, setCropDetails] = useState(null);
//   const [cropList, setCropList] = useState([]);

//   // Fetch crop list on component mount
//   useEffect(() => {
//     fetchCropList();
//   }, []);

//   // Fetch all crop names from the backend
//   const fetchCropList = async () => {
//     try {
//       const response = await fetch("https://localhost:44361/api/CropAdvisory");
//       if (response.ok) {
//         const data = await response.json();
//         const uniqueCrops = [...new Set(data.map((crop) => crop.cropName))]; // Extract unique crop names
//         setCropList(uniqueCrops);
//       } else {
//         console.error("Failed to fetch crop list.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   // Handle crop selection change
//   const handleCropChange = (e) => {
//     setSelectedCrop(e.target.value);
//     if (e.target.value === "Other") {
//       setCropDetails(null);
//     } else {
//       fetchCropDetails(e.target.value);
//     }
//   };

//   // Fetch crop details based on selected crop
//   const fetchCropDetails = async (cropName) => {
//     try {
//       const response = await fetch(`https://localhost:44361/api/CropAdvisory/ByName?cropName=${cropName}`);
//       if (response.ok) {
//         const data = await response.json();
//         setCropDetails(data[0]); // Display the first matching crop
//       } else {
//         console.error("Failed to fetch crop details.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <motion.div className="farmer-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//       <h2 className="title">🌾 Farmer's Crop Guide</h2>
//       <div className="dropdown-container">
//         <label>Select Your Crop:</label>
//         <select value={selectedCrop} onChange={handleCropChange}>
//           <option value="">-- Choose a Crop --</option>
//           {cropList.map((crop, index) => (
//             <option key={index} value={crop}>
//               {crop}
//             </option>
//           ))}
//         </select>
//         {selectedCrop === "Other" && <input type="text" placeholder="Enter Crop Name" className="other-input" />}
//       </div>
//       {cropDetails && (
//         <motion.div className="crop-details" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
//           <h3>🌱 {cropDetails.cropName} - Growth Guide</h3>
//           <p><strong>Variety:</strong> {cropDetails.variety}</p>
//           <p><strong>Season:</strong> {cropDetails.season}</p>
//           <p><strong>Duration:</strong> {cropDetails.duration}</p>
//           <p><strong>Soil Type:</strong> {cropDetails.soilType}</p>
//           <p><strong>Plowing Method:</strong> {cropDetails.plowingMethod}</p>
//           <p><strong>Base Fertilizer:</strong> {cropDetails.baseFertilizer}</p>
//           <p><strong>Irrigation Frequency:</strong> {cropDetails.irrigationFrequency}</p>
//           <p><strong>Common Pests:</strong> {cropDetails.commonPests}</p>
//           <p><strong>Recommended Pesticide:</strong> {cropDetails.recommendedPesticide}</p>
//           <p><strong>Flowering Stage:</strong> {cropDetails.floweringStage}</p>
//           <p><strong>Fruiting Stage:</strong> {cropDetails.fruitingStage}</p>
//           <p><strong>Nutrient Requirement:</strong> {cropDetails.nutrientRequirement}</p>
//           <p><strong>Harvest Date:</strong> {cropDetails.harvestDate}</p>
//           <p><strong>Storage Recommendations:</strong> {cropDetails.storageRecommendations}</p>
//           <p><strong>Recommended Fertilizer:</strong> {cropDetails.recommendedFertilizer}</p>
//           <p><strong>Recommended Equipment:</strong> {cropDetails.recommendedEquipment}</p>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default FarmerCropDetails;







import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./NutritionRecommendation.css";

const FarmerCropDetails = () => {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [cropDetails, setCropDetails] = useState(null);
  const [cropList, setCropList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCropList();
  }, []);

  const fetchCropList = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://localhost:44361/api/CropAdvisory");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const uniqueCrops = [...new Set(data.map((crop) => crop.cropName))];
      setCropList(uniqueCrops);
    } catch (error) {
      setError("Failed to fetch crop list: " + error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCropChange = async (e) => {
  const cropName = e.target.value;
  setSelectedCrop(cropName);
  
  if (cropName && cropName !== "Other") {
    try {
      setLoading(true);
      // Updated URL to match your backend API route
      const response = await fetch(
        `https://localhost:44361/api/CropAdvisory/ByName?cropName=${encodeURIComponent(cropName)}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      if (data && data.length > 0) {
        setCropDetails(data[0]);
      } else {
        setError("No data found for selected crop");
        setCropDetails(null);
      }
    } catch (error) {
      setError("Failed to fetch crop details: " + error.message);
      console.error("Error:", error);
      setCropDetails(null);
    } finally {
      setLoading(false);
    }
  } else {
    setCropDetails(null);
    setError(null);
  }
};


  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <motion.div 
      className="farmer-panel" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <h2 className="title">🌾 Farmer's Crop Guide</h2>
      
      <div className="dropdown-container">
        <label>Select Your Crop:</label>
        <select 
          value={selectedCrop} 
          onChange={handleCropChange}
          disabled={loading}
        >
          <option value="">-- Choose a Crop --</option>
          {cropList.map((crop, index) => (
            <option key={index} value={crop}>
              {crop}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error-message">{error}</div>}

      {cropDetails && (
        <motion.div 
          className="crop-details" 
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h3>🌱 {cropDetails.cropName} - Growth Guide</h3>
          
          <div className="details-grid">
            <div className="detail-item">
              <strong>Variety:</strong> {cropDetails.variety || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Season:</strong> {cropDetails.season || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Duration:</strong> {cropDetails.duration || "Not specified"} days
            </div>
            <div className="detail-item">
              <strong>Soil Type:</strong> {cropDetails.soilType || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Plowing Method:</strong> {cropDetails.plowingMethod || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Base Fertilizer:</strong> {cropDetails.baseFertilizer || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Irrigation Frequency:</strong> {cropDetails.irrigationFrequency || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Common Pests:</strong> {cropDetails.commonPests || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Recommended Pesticide:</strong> {cropDetails.recommendedPesticide || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Flowering Stage:</strong> {cropDetails.floweringStage || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Fruiting Stage:</strong> {cropDetails.fruitingStage || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Nutrient Name:</strong> {cropDetails.nutrientName || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Nutrient Amount:</strong> {cropDetails.nutrientAmount || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Sowing Date:</strong> {formatDate(cropDetails.sowingDate)}
            </div>
            <div className="detail-item">
              <strong>Harvest Date:</strong> {formatDate(cropDetails.harvestDate)}
            </div>
            <div className="detail-item">
              <strong>Storage:</strong> {cropDetails.storageRecommendations || "Not specified"}
            </div>
            <div className="detail-item">
              <strong>Recommended Equipment:</strong> {cropDetails.recommendedEquipment || "Not specified"}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FarmerCropDetails;
