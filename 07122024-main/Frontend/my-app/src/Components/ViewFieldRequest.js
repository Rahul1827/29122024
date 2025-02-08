


// import React, { useState, useEffect } from 'react';
// import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import './ViewFieldRequest.css';


// export const ViewFieldRequest = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await fetch('https://localhost:44361/api/FieldVisitRequests/all');
//         if (!response.ok) throw new Error('Failed to fetch requests.');
//         const data = await response.json();
//         const sortedRequests = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
//         setRequests(sortedRequests);
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRequests();
//   }, []);

//   const handleAccept = async (index) => {
//     const updatedRequests = [...requests];
//     updatedRequests[index].status = 'Accepted';
//     try {
//       const response = await fetch(`https://localhost:44361/api/FieldVisitRequests/${updatedRequests[index].id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedRequests[index]),
//       });
//       if (!response.ok) throw new Error('Failed to update request.');
//       setRequests(updatedRequests);
//     } catch (error) {
//       console.error('Error updating request:', error);
//     }
//   };

//   const handleReject = async (index) => {
//     const updatedRequests = [...requests];
//     updatedRequests[index].status = 'Rejected';
//     try {
//       const response = await fetch(`https://localhost:44361/api/FieldVisitRequests/${updatedRequests[index].id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedRequests[index]),
//       });
//       if (!response.ok) throw new Error('Failed to update request.');
//       setRequests(updatedRequests);
//     } catch (error) {
//       console.error('Error updating request:', error);
//     }
//   };

//   const handleDelete = async (index) => {
//     try {
//       const response = await fetch(`https://localhost:44361/api/FieldVisitRequests/${requests[index].id}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) throw new Error('Failed to delete request.');
//       setRequests(requests.filter((_, i) => i !== index));
//     } catch (error) {
//       console.error('Error deleting request:', error);
//     }
//   };

//   if (loading) {
//     return <div className="loading-spinner-container"><div className="loading-spinner" /></div>;
//   }

//   return (
    
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="view-field-requests-container"
//     >
//       <h2>Field Visit Requests</h2>
//       {requests.length === 0 ? (
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="no-requests"
//         >
//           No field visit requests to display
//         </motion.p>
//       ) : (
//         <AnimatePresence>
//           <div className="requests-grid">
//             {requests.map((request, index) => (
//               <motion.div
//                 key={request.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="request-card"
//               >
//                 <div className="request-header">
//                   <h3>{request.farmerName}</h3>
//                   <span className={`status-badge ${request.status.toLowerCase()}`}>
//                     {request.status}
//                   </span>
//                 </div>
//                 <div className="request-content">
//                   <p><span>Crop Type:</span> {request.cropType}</p>
//                   <p><span>Farm Address:</span> {request.farmAddress}</p>
//                   <p><span>Contact:</span> {request.contactNo}</p>
//                   <p><span>Date:</span> {new Date(request.timestamp).toLocaleString()}</p>
//                 </div>
//                 <div className="request-actions">
//   {request.status === 'Pending' && (
//     <>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="icon-btn accept-btn"
//         onClick={() => handleAccept(index)}
//         data-action="Accept"
//       >
//         <span className="button-content">✓</span>
//       </motion.button>

//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="icon-btn reject-btn"
//         onClick={() => handleReject(index)}
//         data-action="Reject"
//       >
//         <span className="button-content">✕</span>
//       </motion.button>
//     </>
//   )}
  
//   <motion.button
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//     className="icon-btn delete-btn"
//     onClick={() => handleDelete(index)}
//     data-action="Delete"
//   >
//     <span className="button-content">🗑</span>
//   </motion.button>
// </div>

//               </motion.div>
//             ))}
//           </div>
//         </AnimatePresence>
//       )}
//     </motion.div>
//   );
// };



//==================================Trial Code ===================================
import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaTrash } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './ViewFieldRequest.css';

export const ViewFieldRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('https://localhost:44361/api/FieldVisitRequests/all');
        if (!response.ok) throw new Error('Failed to fetch requests.');
        const data = await response.json();
        const sortedRequests = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setRequests(sortedRequests);
      } catch (error) {
        console.error('Error fetching requests:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleAccept = async (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Accepted';
    try {
      const response = await fetch(`https://localhost:44361/api/FieldVisitRequests/${updatedRequests[index].id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRequests[index]),
      });
      if (!response.ok) throw new Error('Failed to update request.');
      setRequests(updatedRequests);
    } catch (error) {
      console.error('Error updating request:', error);
    }
  };

  const handleReject = async (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Rejected';
    try {
      const response = await fetch(`https://localhost:44361/api/FieldVisitRequests/${updatedRequests[index].id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRequests[index]),
      });
      if (!response.ok) throw new Error('Failed to update request.');
      setRequests(updatedRequests);
    } catch (error) {
      console.error('Error updating request:', error);
    }
  };

  const handleDelete = async (index) => {
    try {
      const response = await fetch(`https://localhost:44361/api/FieldVisitRequests/${requests[index].id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete request.');
      setRequests(requests.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting request:', error);
    }
  };

  if (loading) {
    return <div className="loading-spinner-container"><div className="loading-spinner" /></div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="view-field-requests-container"
    >
      <h2>Field Visit Requests</h2>
      {requests.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="no-requests"
        >
          No field visit requests to display
        </motion.p>
      ) : (
        <AnimatePresence>
          <div className="requests-grid">
            {requests.map((request, index) => (
              <motion.div
                key={request.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="request-card"
              >
                <div className="request-header">
                  <h3>{request.farmerName}</h3>
                  <span className={`status-badge ${request.status.toLowerCase()}`}>
                    {request.status}
                  </span>
                </div>
                <div className="request-content">
                  <p><span>Crop Type:</span> {request.cropType}</p>
                  <p><span>Farm Address:</span> {request.farmAddress}</p>
                  <p><span>Contact:</span> {request.contactNo}</p>
                  <p><span>Date:</span> {new Date(request.timestamp).toLocaleString()}</p>
                </div>
                <div className="request-actions">
                  {request.status === 'Pending' && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="icon-btn accept-btn"
                        onClick={() => handleAccept(index)}
                        data-action="Accept"
                      >
                        <span className="button-content">✓</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="icon-btn reject-btn"
                        onClick={() => handleReject(index)}
                        data-action="Reject"
                      >
                        <span className="button-content">✕</span>
                      </motion.button>
                    </>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="icon-btn delete-btn"
                    onClick={() => handleDelete(index)}
                    data-action="Delete"
                  >
                    <span className="button-content">🗑</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};