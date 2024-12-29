import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import * as Components from './AdminLoginPageStyle';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === 'admin@gmail.com' && password === 'password') {
            localStorage.setItem('adminLoggedIn', 'true');
            navigate('/adminDashboard');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
     <div class="admin">
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
                        <Components.Input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                        <Components.Button type="submit">Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
            </Components.Container>
        </div>
        </div>
  
 
    );
}
