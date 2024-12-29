// import React from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const navigate = useNavigate();

//   // Handlers for navigation
//   const handleFarmerLogin = () => {
//     navigate("/farmerLogin"); // Redirect to Farmer Login page
//   };

//   const handleAdminLogin = () => {
//     navigate("/adminLogin"); // Redirect to Admin Login page
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Login</h2>
//       <div style={styles.cardsContainer}>
//         {/* Farmer Login Card */}
//         <div style={styles.card} onClick={handleFarmerLogin}>
//           <h3 style={styles.cardTitle}>Farmer Login</h3>
//           <p style={styles.cardDescription}>
//             Click here to log in as a Farmer.
//           </p>
//         </div>

//         {/* Admin Login Card */}
//         <div style={styles.card} onClick={handleAdminLogin}>
//           <h3 style={styles.cardTitle}>Admin Login</h3>
//           <p style={styles.cardDescription}>
//             Click here to log in as an Admin.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Login;


import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleFarmerLogin = () => {
    navigate("/farmerLogin");
  };

  const handleAdminLogin = () => {
    navigate("/adminLogin");
  };

  return (

    <div class="abc">
    <div className="container">
      <h2 className="heading">Login</h2>
      <div className="cardsContainer">
        <div className="card" onClick={handleFarmerLogin}>
          <h3 className="cardTitle">Farmer Login</h3>
          <p className="cardDescription">Click here to log in as a Farmer.</p>
        </div>
        <div className="card" onClick={handleAdminLogin}>
          <h3 className="cardTitle">Admin Login</h3>
          <p className="cardDescription">Click here to log in as an Admin.</p>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Login;

