
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Navbar.css';
// import logo2 from '../assests/images/logo2.png';


// export default function AdminHeader() {
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
//   const [notificationCount, setNotificationCount] = useState(0);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const adminLoggedIn = localStorage.getItem('adminLoggedIn');
//     if (adminLoggedIn === 'true') {
//       setIsAdminLoggedIn(true);
//     }
//   }, []);

//   useEffect(() => {
//     const fetchNotificationCount = async () => {
//       try {
//         const response = await fetch('https://localhost:44361/api/contact');
//         if (response.ok) {
//           const data = await response.json();
//           setNotificationCount(data.length);
//         } else {
//           console.error('Failed to fetch notification count');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchNotificationCount();
//   }, []);

//   const handleAdminLogout = () => {
//     localStorage.removeItem('adminLoggedIn');
//     setIsAdminLoggedIn(false);
//     navigate('/');
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand">
//             <img src={logo2} alt="GreenYield Logo" className="navbar-logo" />
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/admindsh/adminhome">
//                   Home
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/admindsh/adminproduct">
//                   Products
//                 </Link>
//               </li>

//               {isAdminLoggedIn && (
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/admindsh/adminDashboard">
//                     Dashboard
//                   </Link>
//                 </li>
//               )}

//               <li className="nav-item">
//                 <Link className="nav-link" to="/admindsh/notification">
//                   Notification
//                   {notificationCount > 0 && (
//                     <span className="notification-badge">{notificationCount}</span>
//                   )}
//                 </Link>
//               </li>

//               {isAdminLoggedIn && (
//                 <li className="nav-item">
//                   <button
//                     className="nav-link btn btn-link"
//                     onClick={handleAdminLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }






import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo2 from '../assests/images/logo2.png';

export default function AdminHeader() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn === 'true') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchNotificationCount = async () => {
      try {
        const response = await fetch('https://localhost:44361/api/contact');
        if (response.ok) {
          const data = await response.json();

          // Get the last cleared notification timestamp from localStorage
          const lastCleared = localStorage.getItem('lastClearedNotifications') || 0;

          // Filter new notifications
          const newNotifications = data.filter(
            (item) => new Date(item.submittedAt).getTime() > lastCleared
          );

          setNotificationCount(newNotifications.length);
        } else {
          console.error('Failed to fetch notification count');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchNotificationCount();
  }, []);

  const handleAdminLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsAdminLoggedIn(false);
    navigate('/');
  };

  const handleClearNotifications = () => {
    // Store the current timestamp in localStorage when the notification tab is clicked
    localStorage.setItem('lastClearedNotifications', Date.now());
    setNotificationCount(0);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo2} alt="GreenYield Logo" className="navbar-logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/admindsh/adminhome">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/admindsh/adminproduct">
                  Products
                </Link>
              </li>

              {isAdminLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admindsh/adminDashboard">
                    Dashboard
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/admindsh/notification" onClick={handleClearNotifications}>
                  Notification
                  {notificationCount > 0 && (
                    <span className="notification-badge">{notificationCount}</span>
                  )}
                </Link>
              </li>

              {isAdminLoggedIn && (
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleAdminLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
