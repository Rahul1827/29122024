// import React, { useState } from 'react';
// import './BookFieldVisit.css';

// export default function BookFieldVisit() {
//   const [formData, setFormData] = useState({
//     farmerName: '',
//     cropType: '',
//     farmAddress: '',
//     contactNo: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Field Visit Details:", formData);
//     alert("Field visit booked successfully!");
//     // Perform API call or form submission logic here
//   };

//   return (
//     <div className="serviceimg">
//     <div className="visit-container">
//       <h2 className="visit-title">Book Field Visit</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label className="form-label">Farmer Name:</label>
//           <input
//             type="text"
//             name="farmerName"
//             className="form-input"
//             placeholder="Enter your name"
//             value={formData.farmerName}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label className="form-label">Crop Type:</label>
//           <select
//             name="cropType"
//             className="form-select"
//             value={formData.cropType}
//             onChange={handleChange}
//           >
//             <option value="">Select Crop Type</option>
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
//           <label className="form-label">Farm Address:</label>
//           <input
//             type="text"
//             name="farmAddress"
//             className="form-input"
//             placeholder="Enter your farm address"
//             value={formData.farmAddress}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label className="form-label">Contact Number:</label>
//           <input
//             type="text"
//             name="contactNo"
//             className="form-input"
//             placeholder="Enter your contact number"
//             value={formData.contactNo}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="btn-submit">
//           Book Visit
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import './BookFieldVisit.css';

// export default function BookFieldVisit() {
//   const [formData, setFormData] = useState({
//     farmerName: '',
//     cropType: '',
//     farmAddress: '',
//     contactNo: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Retrieve existing field visit requests from localStorage or initialize with an empty array
//     const existingRequests = JSON.parse(localStorage.getItem('fieldRequests')) || [];

//     // Add the new request
//     existingRequests.push({
//       ...formData,
//       status: 'Pending', // Default status for a new request
//     });

//     // Save the updated requests array to localStorage
//     localStorage.setItem('fieldRequests', JSON.stringify(existingRequests));

//     // Show success message
//     alert('Field visit booked successfully!');

//     // Optionally redirect or reset the form
//     setFormData({
//       farmerName: '',
//       cropType: '',
//       farmAddress: '',
//       contactNo: '',
//     });
//   };

//   return (
//     <div className="serviceimg">
//       <div className="visit-container">
//         <h2 className="visit-title">Book Field Visit</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label className="form-label">Farmer Name:</label>
//             <input
//               type="text"
//               name="farmerName"
//               className="form-input"
//               placeholder="Enter your name"
//               value={formData.farmerName}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Crop Type:</label>
//             <select
//               name="cropType"
//               className="form-select"
//               value={formData.cropType}
//               onChange={handleChange}
//             >
//               <option value="">Select Crop Type</option>
//               <option value="Wheat">Wheat</option>
//               <option value="Maize">Maize</option>
//               <option value="Bajra">Bajra</option>
//               <option value="Jowar">Jowar</option>
//               <option value="Sugarcane">Sugarcane</option>
//               <option value="Pomegranate">Pomegranate</option>
//               <option value="Banana">Banana</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Farm Address:</label>
//             <input
//               type="text"
//               name="farmAddress"
//               className="form-input"
//               placeholder="Enter your farm address"
//               value={formData.farmAddress}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label className="form-label">Contact Number:</label>
//             <input
//               type="text"
//               name="contactNo"
//               className="form-input"
//               placeholder="Enter your contact number"
//               value={formData.contactNo}
//               onChange={handleChange}
//             />
//           </div>

//           <button type="submit" className="btn-submit">
//             Book Visit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import './BookFieldVisit.css';

export default function BookFieldVisit() {
  const [formData, setFormData] = useState({
    farmerName: '',
    cropType: '',
    farmAddress: '',
    contactNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      ...formData,
      status: 'Pending', // Default status
      timestamp: new Date().toLocaleString(), // Add timestamp
    };

    // Get existing requests from localStorage or initialize empty array
    const fieldRequests = JSON.parse(localStorage.getItem('fieldRequests')) || [];
    
    // Add new request to the list
    fieldRequests.push(newRequest);
    
    // Save the updated requests to localStorage
    localStorage.setItem('fieldRequests', JSON.stringify(fieldRequests));

    console.log("Field Visit Details:", formData);
    alert("Field visit booked successfully!");
  };

  return (
    <div className="serviceimg">
      <div className="visit-container">
        <h2 className="visit-title">Book Field Visit</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Farmer Name:</label>
            <input
              type="text"
              name="farmerName"
              className="form-input"
              placeholder="Enter your name"
              value={formData.farmerName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Crop Type:</label>
            <select
              name="cropType"
              className="form-select"
              value={formData.cropType}
              onChange={handleChange}
            >
              <option value="">Select Crop Type</option>
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
            <label className="form-label">Farm Address:</label>
            <input
              type="text"
              name="farmAddress"
              className="form-input"
              placeholder="Enter your farm address"
              value={formData.farmAddress}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Contact Number:</label>
            <input
              type="text"
              name="contactNo"
              className="form-input"
              placeholder="Enter your contact number"
              value={formData.contactNo}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-submit">
            Book Visit
          </button>
        </form>
      </div>
    </div>
  );
}
