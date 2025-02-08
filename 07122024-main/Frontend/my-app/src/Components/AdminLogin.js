
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import * as Components from './AdminLoginPageStyle';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Validate email and password
    const validate = () => {
        let errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;  // Regex for password validation

        // Validate email
        if (!email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email format';
        }

        // Validate password
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        } else if (!passwordRegex.test(password)) {
            errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        // Send login request to the backend API
        const response = await fetch('https://localhost:44361/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            // If login is successful, save login state
            localStorage.setItem('adminLoggedIn', 'true');
            navigate('/admindsh/adminhome');
        } else {
            // If login fails, show an error
            alert('Invalid credentials');
        }
    };

    // Handle forgot password
    const handleForgotPassword = async () => {
        const emailInput = prompt('Enter your registered email:');
        if (!emailInput) return;

        const response = await fetch('https://localhost:44361/api/admin/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailInput })
        });

        if (response.ok) {
            const newPassword = await response.text();
            alert(`Your temporary password: ${newPassword}\nNow, reset your password.`);

            // Redirect to Reset Password Page, passing email in query params
            navigate(`/reset-password?email=${encodeURIComponent(emailInput)}`);
        } else {
            alert('Email not found!');
        }
    };

    return (
        <div className="admin">
            <div className="main-content">
                <Components.Container>
                    <Components.SignInContainer>
                        <Components.Form onSubmit={handleLogin}>
                            <Components.Title>Admin Login</Components.Title>

                            <Components.Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}

                            <Components.Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}

                            <Components.Anchor onClick={handleForgotPassword}>
                                Forgot your password?
                            </Components.Anchor>

                            <Components.Button type="submit">Sign In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>
                </Components.Container>
            </div>
        </div>
    );
}













