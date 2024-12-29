// import React, { useState } from 'react';
// import './NutritionRecommendation.css'; // External CSS file

// export default function NutritionRecommendation() {
//   const [formData, setFormData] = useState({
//     crop: '',
//     soil: '',
//     weather: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Submitted Data:\nCrop: ${formData.crop}\nSoil: ${formData.soil}\nWeather: ${formData.weather}`);
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
//     </div>
//   );
// }



import React, { useState } from 'react';
import './NutritionRecommendation.css'; // External CSS file

export default function NutritionRecommendation() {
  const [formData, setFormData] = useState({
    crop: '',
    soil: '',
    weather: '',
  });

  const [recommendations, setRecommendations] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Recommendation logic based on form input
    let recommendationsText = '';

    if (formData.crop && formData.soil && formData.weather) {
      if (formData.crop === 'Wheat' && formData.soil === 'Black Soil' && formData.weather === 'Sunny') {
        recommendationsText = 'We recommend the following products for Wheat on Black Soil in Sunny weather: Product A, Product B.';
      } else if (formData.crop === 'Maize' && formData.soil === 'Red Soil' && formData.weather === 'Cloudy') {
        recommendationsText = 'We recommend the following products for Maize on Red Soil in Cloudy weather: Product C, Product D.';
      } else {
        recommendationsText = 'No specific recommendations available for the selected options. Please adjust your inputs.';
      }
    } else {
      recommendationsText = 'Please fill out all fields to get recommendations.';
    }

    setRecommendations(recommendationsText);
  };

  return (
    <div className="nutrition-container">
      <h2 className="nutrition-title">Nutrition Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="crop" className="form-label">Crop Name</label>
          <select
            id="crop"
            name="crop"
            className="form-select"
            value={formData.crop}
            onChange={handleChange}
            required
          >
            <option value="">Select Crop</option>
            <option value="Wheat">Wheat</option>
            <option value="Maize">Maize</option>
            <option value="Bajra">Bajra</option>
            <option value="Jowar">Jowar</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Pomegranate">Pomegranate</option>
            <option value="Banana">Banana</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="soil" className="form-label">Soil Type</label>
          <select
            id="soil"
            name="soil"
            className="form-select"
            value={formData.soil}
            onChange={handleChange}
            required
          >
            <option value="">Select Soil Type</option>
            <option value="Black Soil">Black Soil</option>
            <option value="Red Soil">Red Soil</option>
            <option value="Alluvial Soil">Alluvial Soil</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="weather" className="form-label">Weather Condition</label>
          <select
            id="weather"
            name="weather"
            className="form-select"
            value={formData.weather}
            onChange={handleChange}
            required
          >
            <option value="">Select Weather Condition</option>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>

      {/* Display Recommendations */}
      {recommendations && (
        <div className="recommendations-container">
          <h3 className="recommendations-title">Product Recommendations</h3>
          <p>{recommendations}</p>
        </div>
      )}
    </div>
  );
}
