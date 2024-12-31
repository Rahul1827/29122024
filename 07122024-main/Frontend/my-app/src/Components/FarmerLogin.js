




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "./FarmerLoginPageStyle";
import "./FarmerLogin.css";

function FarmerLogin() {
  const [signIn, toggle] = useState(true);
  const [loginMessage, setLoginMessage] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

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

  // Email validation regex pattern
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Load users from localStorage when the component mounts
  const loadUsersFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users;
  };

  // Use useState to load users from localStorage
  const [users, setUsers] = useState(loadUsersFromLocalStorage());

  // Save users to localStorage whenever the users array changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { name, email, password } = registrationData;

    // Clear previous registration messages
    setRegistrationMessage("");

    // Basic field validations
    if (!name || !email || !password) {
      setRegistrationMessage("All fields are required.");
      return;
    }

    // Email format validation
    if (!emailRegex.test(email)) {
      setRegistrationMessage("Please enter a valid email address.");
      return;
    }

    // Password strength validation (for example, at least 6 characters)
    if (password.length < 6) {
      setRegistrationMessage("Password must be at least 6 characters long.");
      return;
    }

    // Check if user already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setRegistrationMessage("Email already registered. Please use a different email.");
    } else {
      const newUser = { name, email, password };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      alert("Registration successful! Please log in.");
      toggle(true); // Switch to sign-in view
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    // Clear previous login messages
    setLoginMessage("");

    // Basic field validations
    if (!email || !password) {
      setLoginMessage("Both email and password are required.");
      return;
    }

    // Email format validation
    if (!emailRegex.test(email)) {
      setLoginMessage("Please enter a valid email address.");
      return;
    }

    // Check if the user exists and credentials are correct
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setLoginMessage("");
      alert(`Welcome, ${user.name}! Redirecting to the Farmer Dashboard...`);
      navigate("/farmerdash/farmerhome");
    } else {
      setLoginMessage("Invalid email or password.");
    }
  };

  return (
    <div className="farmer">
      <div className="main-content">
        <Components.Container>
          <Components.SignUpContainer signingIn={signIn}>
            <Components.Form onSubmit={handleSignUp}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                name="name"
                placeholder="Name"
                value={registrationData.name}
                onChange={handleRegistrationChange}
                required
              />
              <Components.Input
                type="email"
                name="email"
                placeholder="Email"
                value={registrationData.email}
                onChange={handleRegistrationChange}
                required
              />
              <Components.Input
                type="password"
                name="password"
                placeholder="Password"
                value={registrationData.password}
                onChange={handleRegistrationChange}
                required
              />
              {registrationMessage && (
                <p style={{ color: "red", fontSize: "0.9rem" }}>{registrationMessage}</p>
              )}
              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signingIn={signIn}>
            <Components.Form onSubmit={handleSignIn}>
              <Components.Title>Sign in</Components.Title>
              <Components.Input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
              <Components.Input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
              <Components.Anchor href="#">Forgot your password?</Components.Anchor>
              {loginMessage && (
                <p style={{ color: "red", fontSize: "0.9rem" }}>{loginMessage}</p>
              )}
              <Components.Button type="submit">Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <Components.LeftOverlayPanel signingIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us please login with your personal info
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>
              <Components.RightOverlayPanel signingIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter your personal details and start your journey with us
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>
    </div>
  );
}

export default FarmerLogin;

