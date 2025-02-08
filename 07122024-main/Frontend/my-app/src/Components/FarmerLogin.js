// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import * as Components from "./FarmerLoginPageStyle";
// import "./FarmerLogin.css";
// import axios from "axios";

// function FarmerLogin() {
//   const [signIn, toggle] = useState(true);
//   const [loginMessage, setLoginMessage] = useState("");
//   const [registrationMessage, setRegistrationMessage] = useState("");
//   const [emailForReset, setEmailForReset] = useState(""); // Email for password reset
//   const [tempPassword, setTempPassword] = useState(""); // Temporary password
//   const [showResetPage, setShowResetPage] = useState(false); // State to show ResetPassword page
//   const [newPassword, setNewPassword] = useState(""); // State for new password
//   const [oldPassword, setOldPassword] = useState(""); // State for old (temporary) password
//   const [resetMessage, setResetMessage] = useState(""); // Message for reset process

//   const [registrationData, setRegistrationData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleRegistrationChange = (e) => {
//     const { name, value } = e.target;
//     setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setRegistrationMessage("");

//     try {
//       const response = await axios.post("https://localhost:44361/api/users/register", registrationData);

//       if (response.status === 200) {
//         alert("Registration successful! Please log in.");
//         toggle(true);
//       }
//     } catch (error) {
//       setRegistrationMessage(error.response?.data?.message || "An error occurred during registration.");
//     }
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoginMessage("");

//     try {
//       const response = await axios.post("https://localhost:44361/api/users/login", loginData, {
//         headers: { "Content-Type": "application/json" }
//       });

//       if (response.data.message === "Login successful") {
//         localStorage.setItem('userName', response.data.userName);
//         localStorage.setItem('userEmail', response.data.userEmail);
//         alert(`Welcome, ${response.data.userName}! Redirecting to the Farmer Dashboard...`);
//         navigate("/farmerdash/farmerhome");
//       } else {
//         setLoginMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       setLoginMessage(error.response?.data?.message || "Invalid email or password.");
//     }
//   };

//   // Forgot password logic
//   const handleForgotPassword = async () => {
//     if (!loginData.email) {
//       alert("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://localhost:44361/api/users/forgot-password", {
//         email: loginData.email,
//       });

//       if (response.data.tempPassword) {
//         setTempPassword(response.data.tempPassword);
//         alert(`Your temporary password: ${response.data.tempPassword}`);
//         setShowResetPage(true); // Show reset page after temp password
//       } else {
//         alert("No account found with that email.");
//       }
//     } catch (error) {
//       alert("Error occurred while resetting password.");
//       console.error("Forgot Password Error:", error.response?.data || error.message);
//     }
//   };

//   // Reset password logic
//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (!oldPassword || !newPassword) {
//       alert("Please enter both old and new password.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://localhost:44361/api/users/reset-password", {
//         email: loginData.email,
//         oldPassword: oldPassword,
//         newPassword: newPassword,
//       });

//       if (response.status === 200) {
//         alert("Password successfully updated.");
//         setShowResetPage(false); // Hide the reset page
//         navigate("/farmerlogin"); // Redirect to login page after successful password update
//       }
//     } catch (error) {
//       setResetMessage(error.response?.data || "Failed to reset password.");
//       console.error("Reset Password Error:", error.response?.data || error.message);
//       alert("An error occurred. Please try again."); // Notify the user of the error
//     }
//   };

//   // Render Reset Password Page
//   if (showResetPage) {
//     return (
//       <div className="reset-password-page">
//         <div className="reset-form-container">
//           <h2>Reset Your Password</h2>
//           <form onSubmit={handleResetPassword}>
//             <div className="input-group">
//               <label htmlFor="oldPassword">Old (Temporary) Password</label>
//               <input
//                 type="password"
//                 id="oldPassword"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//                 placeholder="Enter your old password"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="newPassword">New Password</label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Enter your new password"
//                 required
//               />
//             </div>

//             {resetMessage && <p className="error-message">{resetMessage}</p>}

//             <button type="submit" className="reset-btn">
//               Reset Password
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="farmer">
//       <div className="main-content">
//         <Components.Container>
//           {/* Sign Up Container */}
//           <Components.SignUpContainer signingIn={signIn}>
//             <Components.Form onSubmit={handleSignUp}>
//               <Components.Title>Create Account</Components.Title>
//               <Components.Input type="text" name="name" placeholder="Name" value={registrationData.name} onChange={handleRegistrationChange} required />
//               <Components.Input type="email" name="email" placeholder="Email" value={registrationData.email} onChange={handleRegistrationChange} required />
//               <Components.Input type="password" name="password" placeholder="Password" value={registrationData.password} onChange={handleRegistrationChange} required />
//               {registrationMessage && <p style={{ color: "red", fontSize: "0.9rem" }}>{registrationMessage}</p>}
//               <Components.Button type="submit">Sign Up</Components.Button>
//             </Components.Form>
//           </Components.SignUpContainer>

//           {/* Sign In Container */}
//           <Components.SignInContainer signingIn={signIn}>
//             <Components.Form onSubmit={handleSignIn}>
//               <Components.Title>Sign in</Components.Title>
//               <Components.Input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
//               <Components.Input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
//               <Components.Anchor onClick={handleForgotPassword}>Forgot your password?</Components.Anchor>
//               {loginMessage && <p style={{ color: "red", fontSize: "0.9rem" }}>{loginMessage}</p>}
//               <Components.Button type="submit">Sign In</Components.Button>
//             </Components.Form>
//           </Components.SignInContainer>

//           <Components.OverlayContainer signingIn={signIn}>
//             <Components.Overlay signingIn={signIn}>
//               <Components.LeftOverlayPanel signingIn={signIn}>
//                 <Components.Title>Welcome Back!</Components.Title>
//                 <Components.Paragraph>To keep connected with us please login with your personal info</Components.Paragraph>
//                 <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
//               </Components.LeftOverlayPanel>
//               <Components.RightOverlayPanel signingIn={signIn}>
//                 <Components.Title>Hello, Friend!</Components.Title>
//                 <Components.Paragraph>Enter your personal details and start journey with us</Components.Paragraph>
//                 <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
//               </Components.RightOverlayPanel>
//             </Components.Overlay>
//           </Components.OverlayContainer>
//         </Components.Container>
//       </div>
//     </div>
//   );
// }

// export default FarmerLogin;




// FarmerLogin.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import * as Components from "./FarmerLoginPageStyle";
// import "./FarmerLogin.css";
// import axios from "axios";

// function FarmerLogin() {
//   const [signIn, toggle] = useState(true);
//   const [loginMessage, setLoginMessage] = useState("");
//   const [registrationMessage, setRegistrationMessage] = useState("");
//   const [emailForReset, setEmailForReset] = useState(""); // Email for password reset
//   const [tempPassword, setTempPassword] = useState(""); // Temporary password
//   const [showResetPage, setShowResetPage] = useState(false); // State to show ResetPassword page
//   const [newPassword, setNewPassword] = useState(""); // State for new password
//   const [oldPassword, setOldPassword] = useState(""); // State for old (temporary) password
//   const [resetMessage, setResetMessage] = useState(""); // Message for reset process

//   const [registrationData, setRegistrationData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleRegistrationChange = (e) => {
//     const { name, value } = e.target;
//     setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setRegistrationMessage("");

//     try {
//       const response = await axios.post("https://localhost:44361/api/users/register", registrationData);

//       if (response.status === 200) {
//         alert("Registration successful! Please log in.");
//         toggle(true);
//       }
//     } catch (error) {
//       setRegistrationMessage(error.response?.data?.message || "An error occurred during registration.");
//     }
//   };

//   // const handleSignIn = async (e) => {
//   //   e.preventDefault();
//   //   setLoginMessage("");

//   //   try {
//   //     const response = await axios.post("https://localhost:44361/api/users/login", loginData, {
//   //       headers: { "Content-Type": "application/json" }
//   //     });

//   //     if (response.data.message === "Login successful") {
//   //       localStorage.setItem('userName', response.data.userName);
//   //       localStorage.setItem('userEmail', response.data.userEmail); // Storing email in localStorage
//   //       alert(`Welcome, ${response.data.userName}! Redirecting to the Farmer Dashboard...`);
//   //       navigate("/farmerdash/farmerhome");
//   //     } else {
//   //       setLoginMessage("Invalid email or password.");
//   //     }
//   //   } catch (error) {
//   //     setLoginMessage(error.response?.data?.message || "Invalid email or password.");
//   //   }
//   // };


//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setLoginMessage("");
  
//     try {
//       const response = await axios.post("https://localhost:44361/api/users/login", loginData, {
//         headers: { "Content-Type": "application/json" }
//       });
  
//       if (response.data.message === "Login successful") {
//         sessionStorage.setItem('userName', response.data.userName);
//         sessionStorage.setItem('userEmail', response.data.userEmail);
//         alert(`Welcome, ${response.data.userName}! Redirecting to the Farmer Dashboard...`);
//         navigate("/farmerdash/farmerhome");
//       } else {
//         setLoginMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       setLoginMessage(error.response?.data?.message || "Invalid email or password.");
//     }
//   };

// //   const handleSignIn = async (e) => {
// //     e.preventDefault();
// //     setLoginMessage("");
  
// //     try {
// //         const response = await axios.post("https://localhost:44361/api/users/login", loginData, {
// //             headers: { "Content-Type": "application/json" }
// //         });

// //         if (response.data.message === "Login successful") {
// //             // ✅ Store user info in sessionStorage
// //             sessionStorage.setItem("userName", response.data.userName);
// //             sessionStorage.setItem("userEmail", response.data.userEmail);

// //             // ✅ Debugging: Check if sessionStorage is set properly
// //             console.log("🚀 Stored userName in sessionStorage:", sessionStorage.getItem("userName"));
// //             console.log("🚀 Stored userEmail in sessionStorage:", sessionStorage.getItem("userEmail"));

// //             alert(`Welcome, ${response.data.userName}! Redirecting to the Farmer Dashboard...`);
// //             navigate("/farmerdash/farmerhome");
// //         } else {
// //             setLoginMessage("Invalid email or password.");
// //         }
// //     } catch (error) {
// //         setLoginMessage(error.response?.data?.message || "Invalid email or password.");
// //     }
// // };







//   // Forgot password logic
//   const handleForgotPassword = async () => {
//     if (!loginData.email) {
//       alert("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://localhost:44361/api/users/forgot-password", {
//         email: loginData.email,
//       });

//       if (response.data.tempPassword) {
//         setTempPassword(response.data.tempPassword);
//         alert(`Your temporary password: ${response.data.tempPassword}`);
//         setShowResetPage(true); // Show reset page after temp password
//       } else {
//         alert("No account found with that email.");
//       }
//     } catch (error) {
//       alert("Error occurred while resetting password.");
//       console.error("Forgot Password Error:", error.response?.data || error.message);
//     }
//   };

//   // Reset password logic
//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (!oldPassword || !newPassword) {
//       alert("Please enter both old and new password.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://localhost:44361/api/users/reset-password", {
//         email: loginData.email,
//         oldPassword: oldPassword,
//         newPassword: newPassword,
//       });

//       if (response.status === 200) {
//         alert("Password successfully updated.");
//         setShowResetPage(false); // Hide the reset page
//         navigate("/farmerlogin"); // Redirect to login page after successful password update
//       }
//     } catch (error) {
//       setResetMessage(error.response?.data || "Failed to reset password.");
//       console.error("Reset Password Error:", error.response?.data || error.message);
//       alert("An error occurred. Please try again."); // Notify the user of the error
//     }
//   };

//   // Render Reset Password Page
//   if (showResetPage) {
//     return (
//       <div className="reset-password-page">
//         <div className="reset-form-container">
//           <h2>Reset Your Password</h2>
//           <form onSubmit={handleResetPassword}>
//             <div className="input-group">
//               <label htmlFor="oldPassword">Old (Temporary) Password</label>
//               <input
//                 type="password"
//                 id="oldPassword"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//                 placeholder="Enter your old password"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="newPassword">New Password</label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Enter your new password"
//                 required
//               />
//             </div>

//             {resetMessage && <p className="error-message">{resetMessage}</p>}

//             <button type="submit" className="reset-btn">
//               Reset Password
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="farmer">
//       <div className="main-content">
//         <Components.Container>
//           {/* Sign Up Container */}
//           <Components.SignUpContainer signingIn={signIn}>
//             <Components.Form onSubmit={handleSignUp}>
//               <Components.Title>Create Account</Components.Title>
//               <Components.Input type="text" name="name" placeholder="Name" value={registrationData.name} onChange={handleRegistrationChange} required />
//               <Components.Input type="email" name="email" placeholder="Email" value={registrationData.email} onChange={handleRegistrationChange} required />
//               <Components.Input type="password" name="password" placeholder="Password" value={registrationData.password} onChange={handleRegistrationChange} required />
//               {registrationMessage && <p style={{ color: "red", fontSize: "0.9rem" }}>{registrationMessage}</p>}
//               <Components.Button type="submit">Sign Up</Components.Button>
//             </Components.Form>
//           </Components.SignUpContainer>

//           {/* Sign In Container */}
//           <Components.SignInContainer signingIn={signIn}>
//             <Components.Form onSubmit={handleSignIn}>
//               <Components.Title>Sign in</Components.Title>
//               <Components.Input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
//               <Components.Input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
//               <Components.Anchor onClick={handleForgotPassword}>Forgot your password?</Components.Anchor>
//               {loginMessage && <p style={{ color: "red", fontSize: "0.9rem" }}>{loginMessage}</p>}
//               <Components.Button type="submit">Sign In</Components.Button>
//             </Components.Form>
//           </Components.SignInContainer>

//           <Components.OverlayContainer signingIn={signIn}>
//             <Components.Overlay signingIn={signIn}>
//               <Components.LeftOverlayPanel signingIn={signIn}>
//                 <Components.Title>Welcome Back!</Components.Title>
//                 <Components.Paragraph>To keep connected with us please login with your personal info</Components.Paragraph>
//                 <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
//               </Components.LeftOverlayPanel>
//               <Components.RightOverlayPanel signingIn={signIn}>
//                 <Components.Title>Hello, Friend!</Components.Title>
//                 <Components.Paragraph>Enter your personal details and start journey with us</Components.Paragraph>
//                 <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
//               </Components.RightOverlayPanel>
//             </Components.Overlay>
//           </Components.OverlayContainer>
//         </Components.Container>
//       </div>
//     </div>
//   );
// }

// export default FarmerLogin;

// trial code below 





//=====================================================================================
//=====================================================================================
//=====================================================================================
//======================================================================================

//below code is working 










// FarmerLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "./FarmerLoginPageStyle";
import "./FarmerLogin.css";
import axios from "axios";

function FarmerLogin() {
  const [signIn, toggle] = useState(true);
  const [loginMessage, setLoginMessage] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [emailForReset, setEmailForReset] = useState(""); // Email for password reset
  const [tempPassword, setTempPassword] = useState(""); // Temporary password
  const [showResetPage, setShowResetPage] = useState(false); // State to show ResetPassword page
  const [newPassword, setNewPassword] = useState(""); // State for new password
  const [oldPassword, setOldPassword] = useState(""); // State for old (temporary) password
  const [resetMessage, setResetMessage] = useState(""); // Message for reset process

  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setRegistrationMessage("");

    try {
      const response = await axios.post("https://localhost:44361/api/users/register", registrationData);

      if (response.status === 200) {
        alert("Registration successful! Please log in.");
        toggle(true);
      }
    } catch (error) {
      setRegistrationMessage(error.response?.data?.message || "An error occurred during registration.");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoginMessage("");
  
    try {
        const response = await axios.post("https://localhost:44361/api/users/login", loginData, {
            headers: { "Content-Type": "application/json" }
        });

        if (response.data.message === "Login successful") {
            // Store user info in sessionStorage
            sessionStorage.setItem("userName", response.data.userName);
            sessionStorage.setItem("userEmail", loginData.email); // Store email from login data

            // Store email in database (assuming the API handles this)
            try {
                await axios.post("https://localhost:44361/api/users/store-email", {
                    email: loginData.email
                });
            } catch (error) {
                console.error("Error storing email in database:", error);
                // Continue with login process even if email storage fails
            }

            alert(`Welcome, ${response.data.userName}! Redirecting to the Farmer Dashboard...`);
            navigate("/farmerdash/farmerhome");
        } else {
            setLoginMessage("Invalid email or password.");
        }
    } catch (error) {
        setLoginMessage(error.response?.data?.message || "Invalid email or password.");
    }
};



  // Forgot password logic
  const handleForgotPassword = async () => {
    if (!loginData.email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const response = await axios.post("https://localhost:44361/api/users/forgot-password", {
        email: loginData.email,
      });

      if (response.data.tempPassword) {
        setTempPassword(response.data.tempPassword);
        alert(`Your temporary password: ${response.data.tempPassword}`);
        setShowResetPage(true); // Show reset page after temp password
      } else {
        alert("No account found with that email.");
      }
    } catch (error) {
      alert("Error occurred while resetting password.");
      console.error("Forgot Password Error:", error.response?.data || error.message);
    }
  };

  // Reset password logic
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword) {
      alert("Please enter both old and new password.");
      return;
    }

    try {
      const response = await axios.post("https://localhost:44361/api/users/reset-password", {
        email: loginData.email,
        oldPassword: oldPassword,
        newPassword: newPassword,
      });

      if (response.status === 200) {
        alert("Password successfully updated.");
        setShowResetPage(false); // Hide the reset page
        navigate("/farmerlogin"); // Redirect to login page after successful password update
      }
    } catch (error) {
      setResetMessage(error.response?.data || "Failed to reset password.");
      console.error("Reset Password Error:", error.response?.data || error.message);
      alert("An error occurred. Please try again."); // Notify the user of the error
    }
  };

  // Render Reset Password Page
  if (showResetPage) {
    return (
      <div className="reset-password-page">
        <div className="reset-form-container">
          <h2>Reset Your Password</h2>
          <form onSubmit={handleResetPassword}>
            <div className="input-group">
              <label htmlFor="oldPassword">Old (Temporary) Password</label>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter your old password"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                required
              />
            </div>

            {resetMessage && <p className="error-message">{resetMessage}</p>}

            <button type="submit" className="reset-btn">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="farmer">
      <div className="main-content">
        <Components.Container>
          {/* Sign Up Container */}
          <Components.SignUpContainer signingIn={signIn}>
            <Components.Form onSubmit={handleSignUp}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input type="text" name="name" placeholder="Name" value={registrationData.name} onChange={handleRegistrationChange} required />
              <Components.Input type="email" name="email" placeholder="Email" value={registrationData.email} onChange={handleRegistrationChange} required />
              <Components.Input type="password" name="password" placeholder="Password" value={registrationData.password} onChange={handleRegistrationChange} required />
              {registrationMessage && <p style={{ color: "red", fontSize: "0.9rem" }}>{registrationMessage}</p>}
              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          {/* Sign In Container */}
          <Components.SignInContainer signingIn={signIn}>
            <Components.Form onSubmit={handleSignIn}>
              <Components.Title>Sign in</Components.Title>
              <Components.Input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
              <Components.Input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
              <Components.Anchor onClick={handleForgotPassword}>Forgot your password?</Components.Anchor>
              {loginMessage && <p style={{ color: "red", fontSize: "0.9rem" }}>{loginMessage}</p>}
              <Components.Button type="submit">Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <Components.LeftOverlayPanel signingIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>To keep connected with us please login with your personal info</Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signingIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>Enter your personal details and start journey with us</Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </div>
  );
}

export default FarmerLogin;

