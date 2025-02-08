// import { useLocation } from 'react-router-dom';
// import { useState } from 'react';

// const ResetPassword = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const email = queryParams.get('email');  // Extract email from query params

//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handleResetPassword = async () => {
//         if (newPassword !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         // Send new password to the backend for reset
//         const response = await fetch('https://localhost:44361/api/admin/reset-password', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, newPassword })
//         });

//         if (response.ok) {
//             alert('Password reset successful! Please log in.');
//             // Redirect to login page or any desired page
//             navigate('/login');
//         } else {
//             alert('Failed to reset password!');
//         }
//     };

//     return (
//         <div>
//             <h2>Reset Password</h2>
//             <p>Reset your password for email: {email}</p>
//             <input 
//                 type="password" 
//                 placeholder="Enter New Password" 
//                 value={newPassword} 
//                 onChange={(e) => setNewPassword(e.target.value)} 
//             />
//             <input 
//                 type="password" 
//                 placeholder="Confirm New Password" 
//                 value={confirmPassword} 
//                 onChange={(e) => setConfirmPassword(e.target.value)} 
//             />
//             <button onClick={handleResetPassword}>Reset Password</button>
//         </div>
//     );
// };


// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const ResetPassword = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const email = queryParams.get('email');  // Extract email from query params

//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const navigate = useNavigate();  // Initialize navigate

//     const handleResetPassword = async () => {
//         if (newPassword !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         // Send new password to the backend for reset
//         const response = await fetch('https://localhost:44361/api/admin/reset-password', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, newPassword })
//         });

//         if (response.ok) {
//             alert('Password reset successful! Please log in.');
//             // Redirect to login page or any desired page
//             navigate('/adminLogin');
//         } else {
//             alert('Failed to reset password!');
//         }
//     };

//     return (
//         <div>
//             <h2>Reset Password</h2>
//             <p>Reset your password for email: {email}</p>
//             <input 
//                 type="password" 
//                 placeholder="Enter New Password" 
//                 value={newPassword} 
//                 onChange={(e) => setNewPassword(e.target.value)} 
//             />
//             <input 
//                 type="password" 
//                 placeholder="Confirm New Password" 
//                 value={confirmPassword} 
//                 onChange={(e) => setConfirmPassword(e.target.value)} 
//             />
//             <button onClick={handleResetPassword}>Reset Password</button>
//         </div>
//     );
// };
// export default ResetPassword;


// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const ResetPassword = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const email = queryParams.get('email');  // Extract email from query params

//     const [oldPassword, setOldPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const navigate = useNavigate();  // Initialize navigate

//     const handleResetPassword = async () => {
//         if (newPassword !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         // Send all required details to the backend for password reset
//         const response = await fetch('https://localhost:44361/api/admin/reset-password', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, oldPassword, newPassword })
//         });

//         if (response.ok) {
//             alert('Password reset successful! Please log in.');
//             // Redirect to login page or any desired page
//             navigate('/adminLogin');
//         } else {
//             alert('Failed to reset password!');
//         }
//     };

//     return (
//         <div>
//             <h2>Reset Password</h2>
//             <p>Reset your password for email: {email}</p>
//             <input 
//                 type="password" 
//                 placeholder="Enter Old Password" 
//                 value={oldPassword} 
//                 onChange={(e) => setOldPassword(e.target.value)} 
//             />
//             <input 
//                 type="password" 
//                 placeholder="Enter New Password" 
//                 value={newPassword} 
//                 onChange={(e) => setNewPassword(e.target.value)} 
//             />
//             <input 
//                 type="password" 
//                 placeholder="Confirm New Password" 
//                 value={confirmPassword} 
//                 onChange={(e) => setConfirmPassword(e.target.value)} 
//             />
//             <button onClick={handleResetPassword}>Reset Password</button>
//         </div>
//     );
// };
// export default ResetPassword;


// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import './Resetpassword.css';

// const ResetPassword = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const email = queryParams.get('email');  // Extract email from query params

//     const [oldPassword, setOldPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const navigate = useNavigate();  // Initialize navigate

//     const handleResetPassword = async () => {
//         if (newPassword !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         // Send all required details to the backend for password reset
//         const response = await fetch('https://localhost:44361/api/admin/reset-password', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, oldPassword, newPassword })
//         });

//         if (response.ok) {
//             alert('Password reset successful! Please log in.');
//             // Redirect to login page or any desired page
//             navigate('/adminLogin');
//         } else {
//             alert('Failed to reset password!');
//         }
//     };

//     return (
//         <div className="reset-password-container">
//             <h2>Reset Password</h2>
//             <p>Reset your password for email: {email}</p>
//             <input 
//                 type="password" 
//                 placeholder="Enter Old Password" 
//                 value={oldPassword} 
//                 onChange={(e) => setOldPassword(e.target.value)} 
//             />
//             <input 
//                 type="password" 
//                 placeholder="Enter New Password" 
//                 value={newPassword} 
//                 onChange={(e) => setNewPassword(e.target.value)} 
//             />
//             <input 
//                 type="password" 
//                 placeholder="Confirm New Password" 
//                 value={confirmPassword} 
//                 onChange={(e) => setConfirmPassword(e.target.value)} 
//             />
//             <button onClick={handleResetPassword}>Reset Password</button>
//         </div>
//     );
// };

// export default ResetPassword;












import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Resetpassword.css';

const ResetPassword = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');  // Extract email from query params

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();  // Initialize navigate

    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    // Validate new and confirm password
    const validatePasswords = () => {
        let errors = {};
        
        if (!newPassword) {
            errors.newPassword = 'New password is required';
        } else if (!passwordRegex.test(newPassword)) {
            errors.newPassword = 'New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        }

        if (newPassword !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle password reset
    const handleResetPassword = async () => {
        if (!validatePasswords()) return; // If validation fails, return early

        // Send all required details to the backend for password reset
        const response = await fetch('https://localhost:44361/api/admin/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, oldPassword, newPassword })
        });

        if (response.ok) {
            alert('Password reset successful! Please log in.');
            // Redirect to login page or any desired page
            navigate('/adminLogin');
        } else {
            alert('Failed to reset password!');
        }
    };

    return (
        <div className="reset-password-container">
            <h2>Reset Password</h2>
            <p>Reset your password for email: {email}</p>
            
            <input 
                type="password" 
                placeholder="Enter Old Password" 
                value={oldPassword} 
                onChange={(e) => setOldPassword(e.target.value)} 
            />
            
            <input 
                type="password" 
                placeholder="Enter New Password" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
            />
            {errors.newPassword && <p className="error">{errors.newPassword}</p>}

            <input 
                type="password" 
                placeholder="Confirm New Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

            <button onClick={handleResetPassword}>Reset Password</button>
        </div>
    );
};

export default ResetPassword;

