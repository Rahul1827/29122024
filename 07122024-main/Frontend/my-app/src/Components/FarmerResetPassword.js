// import React, { useState } from "react";
// import axios from "axios";

// function ResetPassword() {
//   const [email, setEmail] = useState("");
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const handleResetPassword = async () => {
//     try {
//       const response = await axios.post("https://localhost:44361/api/users/reset-password", {
//         email,
//         oldPassword,
//         newPassword,
//       });

//       alert("Password reset successful! Please log in with your new password.");
//     } catch (error) {
//       console.error("Reset Password Error:", error.response?.data || error.message);
//       alert(error.response?.data || "Error resetting password.");
//     }
//   };

//   return (
//     <div>
//       <h2>Reset Password</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Old Password (Temporary Password)" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
//       <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//       <button onClick={handleResetPassword}>Reset Password</button>
//     </div>
//   );
// }

// export default ResetPassword;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newPassword') setNewPassword(value);
    if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const email = localStorage.getItem('userEmail');  // Get the email from localStorage if needed
      const response = await axios.post("https://localhost:44361/api/users/reset-password", {
        email,
        newPassword
      });

      if (response.status === 200) {
        alert("Password has been reset successfully!");
        navigate("/login");  // Navigate back to login after password reset
      } else {
        setMessage("Error resetting password. Please try again.");
      }
    } catch (error) {
      console.error("Reset Password Error:", error);
      setMessage("An error occurred while resetting your password.");
    }
  };

  return (
    <div className="reset-password">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          name="newPassword"
          placeholder="Enter new password"
          value={newPassword}
          onChange={handlePasswordChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={handlePasswordChange}
          required
        />
        {message && <p style={{ color: "red" }}>{message}</p>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
