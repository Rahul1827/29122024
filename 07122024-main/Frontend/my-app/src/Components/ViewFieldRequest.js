// import React, { useState, useEffect } from 'react';
// import './ViewFieldRequest.css';


// export const ViewFieldRequest = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     // Get all field visit requests from localStorage
//     const fieldRequests = JSON.parse(localStorage.getItem('fieldRequests')) || [];
//     setRequests(fieldRequests);
//   }, []);

//   const handleAccept = (index) => {
//     const updatedRequests = [...requests];
//     updatedRequests[index].status = 'Accepted'; // Set the status to Accepted
//     setRequests(updatedRequests);

//     // Update the requests in localStorage
//     localStorage.setItem('fieldRequests', JSON.stringify(updatedRequests));
//   };

//   const handleReject = (index) => {
//     const updatedRequests = [...requests];
//     updatedRequests[index].status = 'Rejected'; // Set the status to Rejected
//     setRequests(updatedRequests);

//     // Update the requests in localStorage
//     localStorage.setItem('fieldRequests', JSON.stringify(updatedRequests));
//   };

//   return (
//     <div className="view-field-requests-container">
//       <h2>View Field Visit Requests</h2>
//       {requests.length === 0 ? (
//         <p>No field visit requests to display</p>
//       ) : (
//         <ul>
//           {requests.map((request, index) => (
//             <li key={index} className="request-item">
//               <h4>{request.farmerName}</h4>
//               <p><strong>Crop Type:</strong> {request.cropType}</p>
//               <p><strong>Farm Address:</strong> {request.farmAddress}</p>
//               <p><strong>Contact Number:</strong> {request.contactNo}</p>
//               <p><strong>Status:</strong> {request.status}</p>

//               <div>
//                 {request.status === 'Pending' && (
//                   <>
//                     <button onClick={() => handleAccept(index)}>Accept</button>
//                     <button onClick={() => handleReject(index)}>Reject</button>
//                   </>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import './ViewFieldRequest.css';

// export const ViewFieldRequest = () => {
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     // Get all field visit requests from localStorage
//     const fieldRequests = JSON.parse(localStorage.getItem('fieldRequests')) || [];
//     setRequests(fieldRequests);
//   }, []);

//   const handleAccept = (index) => {
//     const updatedRequests = [...requests];
//     updatedRequests[index].status = 'Accepted'; // Set the status to Accepted
//     setRequests(updatedRequests);

//     // Update the requests in localStorage
//     localStorage.setItem('fieldRequests', JSON.stringify(updatedRequests));
//   };

//   const handleReject = (index) => {
//     const updatedRequests = [...requests];
//     updatedRequests[index].status = 'Rejected'; // Set the status to Rejected
//     setRequests(updatedRequests);

//     // Update the requests in localStorage
//     localStorage.setItem('fieldRequests', JSON.stringify(updatedRequests));
//   };

//   return (
//     <div className="view-field-requests-container">
//       <h2>View Field Visit Requests</h2>
//       {requests.length === 0 ? (
//         <p>No field visit requests to display</p>
//       ) : (
//         <ul>
//           {requests.map((request, index) => (
//             <li key={index} className="request-item">
//               <h4>{request.farmerName}</h4>
//               <p><strong>Crop Type:</strong> {request.cropType}</p>
//               <p><strong>Farm Address:</strong> {request.farmAddress}</p>
//               <p><strong>Contact Number:</strong> {request.contactNo}</p>
//               <p><strong>Status:</strong> {request.status}</p>
//               <p><strong>Request Date & Time:</strong> {request.timestamp}</p> {/* Display timestamp */}

//               <div>
//                 {request.status === 'Pending' && (
//                   <>
//                     <button onClick={() => handleAccept(index)}>Accept</button>
//                     <button onClick={() => handleReject(index)}>Reject</button>
//                   </>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };






import React, { useState, useEffect } from 'react';
import './ViewFieldRequest.css';

export const ViewFieldRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Get all field visit requests from localStorage
    const fieldRequests = JSON.parse(localStorage.getItem('fieldRequests')) || [];
    setRequests(fieldRequests);
  }, []);

  const handleAccept = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Accepted'; // Set the status to Accepted
    setRequests(updatedRequests);

    // Update the requests in localStorage
    localStorage.setItem('fieldRequests', JSON.stringify(updatedRequests));
  };

  const handleReject = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Rejected'; // Set the status to Rejected
    setRequests(updatedRequests);

    // Update the requests in localStorage
    localStorage.setItem('fieldRequests', JSON.stringify(updatedRequests));
  };

  const handleDelete = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index); // Remove the request at the given index
    setRequests(updatedRequests);

    // Update the requests in localStorage
    localStorage.setItem('fieldRequests', JSON.stringify(updatedRequests));
  };

  return (
    <div className="view-field-requests-container">
      <h2>View Field Visit Requests</h2>
      {requests.length === 0 ? (
        <p>No field visit requests to display</p>
      ) : (
        <ul>
          {requests.map((request, index) => (
            <li key={index} className="request-item">
              <h4>{request.farmerName}</h4>
              <p><strong>Crop Type:</strong> {request.cropType}</p>
              <p><strong>Farm Address:</strong> {request.farmAddress}</p>
              <p><strong>Contact Number:</strong> {request.contactNo}</p>
              <p><strong>Status:</strong> {request.status}</p>
              <p><strong>Request Date & Time:</strong> {request.timestamp}</p> {/* Display timestamp */}

              <div>
                {request.status === 'Pending' && (
                  <>
                    <button onClick={() => handleAccept(index)}>Accept</button>
                    <button onClick={() => handleReject(index)}>Reject</button>
                  </>
                )}
                <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
