//=============================all working  Code==============================


// import React, { useState, useEffect } from "react";
// import "./BookFieldVisit.css";

// export default function BookFieldVisit() {
//   const [formData, setFormData] = useState({
//     farmerName: "",
//     cropType: "",
//     farmAddress: "",
//     contactNo: "",
//     farmerEmail: "",
//   });

//   const [fieldRequests, setFieldRequests] = useState([]);
//   const [isRequestVisible, setIsRequestVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   //  Check sessionStorage on component mount
//   useEffect(() => {
//     const userEmail = sessionStorage.getItem("userEmail");
//     const userName = sessionStorage.getItem("userName");

//     if (userEmail && userName) {
//         setFormData(prevData => ({
//             ...prevData,
//             farmerName: userName,
//             farmerEmail: userEmail,
//         }));
//     }
//     setIsLoading(false);
// }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userEmail = sessionStorage.getItem("userEmail");
    
//     if (!userEmail) {
//         alert("Please login first to book a field visit.");
//         return;
//     }

//     const requestData = {
//         ...formData,
//         farmerEmail: userEmail,
//     };

//     try {
//         const response = await fetch("https://localhost:44361/api/FieldVisitRequests", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(requestData),
//         });

//         if (response.ok) {
//             alert("Field visit booked successfully!");
//             // Reset form while keeping farmer name and email
//             setFormData(prev => ({
//                 ...prev,
//                 cropType: "",
//                 farmAddress: "",
//                 contactNo: "",
//             }));
//         } else {
//             throw new Error("Failed to book field visit.");
//         }
//     } catch (error) {
//         console.error("Error booking field visit:", error);
//         alert("Failed to book field visit.");
//     }
// };

//   const handleViewRequests = async () => {
//     try {
//         const userEmail = sessionStorage.getItem("userEmail");
//         if (!userEmail) {
//             alert("User email is not available.");
//             return;
//         }

//         const response = await fetch(`https://localhost:44361/api/FieldVisitRequests?email=${userEmail}`);
//         if (!response.ok) {
//             throw new Error("Failed to fetch requests.");
//         }
//         const data = await response.json();
        
//         // Sort requests by time (most recent first)
//         const sortedRequests = data.sort((a, b) => 
//             new Date(b.timestamp) - new Date(a.timestamp)
//         );
        
//         setFieldRequests(sortedRequests);
//         setIsRequestVisible(true);
//     } catch (error) {
//         console.error("Error fetching requests:", error);
//         alert("Failed to fetch requests.");
//     }
// };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="serviceimg">
//       <div className="Form">
//         <div className="visit-container">
//           <h2 className="visit-title">Book Field Visit</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label className="form-label">Farmer Name:</label>
//               <input type="text" name="farmerName" className="form-input" value={formData.farmerName} disabled />
//             </div>

//             <div className="form-group">
//               <label className="form-label">Crop Type:</label>
//               <select name="cropType" className="form-select" value={formData.cropType} onChange={handleChange} required>
//                 <option value="">Select Crop Type</option>
//                 <option value="Wheat">Wheat</option>
//                 <option value="Maize">Maize</option>
//                 <option value="Bajra">Bajra</option>
//                 <option value="Jowar">Jowar</option>
//                 <option value="Sugarcane">Sugarcane</option>
//                 <option value="Pomegranate">Pomegranate</option>
//                 <option value="Banana">Banana</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label className="form-label">Farm Address:</label>
//               <input type="text" name="farmAddress" className="form-input" placeholder="Enter your farm address" value={formData.farmAddress} onChange={handleChange} required />
//             </div>

//             <div className="form-group">
//               <label className="form-label">Contact Number:</label>
//               <input type="text" name="contactNo" className="form-input" placeholder="Enter your contact number" value={formData.contactNo} onChange={handleChange} required />
//             </div>

//             <button type="submit" className="btn-submit">Book Visit</button>
//           </form>
//         </div>
//       </div>

//       <div className="view-requests-container">
//         <button onClick={handleViewRequests} className="btn-view-requests">View Your Requests</button>
//       </div>

//       {isRequestVisible && (
//         <div className="request-grid-container">
//           <div className="request-grid">
//             <table>
//               <thead>
//                 <tr>
//                   <th>Farmer Name</th>
//                   <th>Crop Type</th>
//                   <th>Farm Address</th>
//                   <th>Contact No</th>
//                   <th>Status</th>
//                   <th>Timestamp</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {fieldRequests.length > 0 ? (
//                   fieldRequests.map((request) => (
//                     <tr key={request.id}>
//                       <td>{request.farmerName}</td>
//                       <td>{request.cropType}</td>
//                       <td>{request.farmAddress}</td>
//                       <td>{request.contactNo}</td>
//                       <td>{request.status}</td>
//                       <td>{new Date(request.timestamp).toLocaleString()}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6">No requests found.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


//=============================Trial  Code==============================
import React, { useState, useEffect } from "react";
import "./BookFieldVisit.css";

export default function BookFieldVisit() {
  const [formData, setFormData] = useState({
    farmerName: "",
    cropType: "",
    farmAddress: "",
    contactNo: "",
    farmerEmail: "",
  });

  const [fieldRequests, setFieldRequests] = useState([]);
  const [isRequestVisible, setIsRequestVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userEmail = sessionStorage.getItem("userEmail");
    const userName = sessionStorage.getItem("userName");

    if (userEmail && userName) {
      setFormData(prevData => ({
        ...prevData,
        farmerName: userName,
        farmerEmail: userEmail,
      }));
    }
    setIsLoading(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = sessionStorage.getItem("userEmail");

    if (!userEmail) {
      alert("Please login first to book a field visit.");
      return;
    }

    const requestData = {
      ...formData,
      farmerEmail: userEmail,
    };

    try {
      const response = await fetch("https://localhost:44361/api/FieldVisitRequests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert("Field visit booked successfully!");
        setFormData(prev => ({
          ...prev,
          cropType: "",
          farmAddress: "",
          contactNo: "",
        }));
      } else {
        throw new Error("Failed to book field visit.");
      }
    } catch (error) {
      console.error("Error booking field visit:", error);
      alert("Failed to book field visit.");
    }
  };

  const handleViewRequests = async () => {
    try {
      const userEmail = sessionStorage.getItem("userEmail");
      if (!userEmail) {
        alert("User email is not available.");
        return;
      }

      const response = await fetch(`https://localhost:44361/api/FieldVisitRequests?email=${userEmail}`);
      if (!response.ok) {
        throw new Error("Failed to fetch requests.");
      }
      const data = await response.json();
      const sortedRequests = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setFieldRequests(sortedRequests);
      setIsRequestVisible(true);
    } catch (error) {
      console.error("Error fetching requests:", error);
      alert("Failed to fetch requests.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="serviceimg">
      <div className="Form">
        <div className="visit-container">
          <h2 className="visit-title">Book Field Visit</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Farmer Name:</label>
              <input type="text" name="farmerName" className="form-input" value={formData.farmerName} disabled />
            </div>

            <div className="form-group">
              <label className="form-label">Crop Type:</label>
              <select name="cropType" className="form-select" value={formData.cropType} onChange={handleChange} required>
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
              <input type="text" name="farmAddress" className="form-input" placeholder="Enter your farm address" value={formData.farmAddress} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label">Contact Number:</label>
              <input type="text" name="contactNo" className="form-input" placeholder="Enter your contact number" value={formData.contactNo} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn-submit">Book Visit</button>
          </form>
        </div>
      </div>

      <div className="view-requests-container">
        <button onClick={handleViewRequests} className="btn-view-requests">View Your Requests</button>
      </div>

      {isRequestVisible && (
        <div className="request-grid-container">
          <div className="request-grid">
            <table>
              <thead>
                <tr>
                  <th>Farmer Name</th>
                  <th>Crop Type</th>
                  <th>Farm Address</th>
                  <th>Contact No</th>
                  <th>Status</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {fieldRequests.length > 0 ? (
                  fieldRequests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.farmerName}</td>
                      <td>{request.cropType}</td>
                      <td>{request.farmAddress}</td>
                      <td>{request.contactNo}</td>
                      <td>{request.status}</td>
                      <td>{new Date(request.timestamp).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No requests found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}