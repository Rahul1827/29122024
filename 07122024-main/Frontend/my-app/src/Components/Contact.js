// import React from 'react';
// import './Contact.css'; // Import the CSS file

// export default function Contact() {
//   return (
//     <div className="contact-page">
//       <h2>Connect with us</h2>
//       <div className="contact-card">
       
//         <div className="contact-info">
//           <p><strong>Phone Number:</strong> +91 9876543210</p>
//           <p><strong>Telephone Number:</strong> (022) 123-4567</p>
//           <p>
//             <strong>Email:</strong>{' '}
//             <a href="mailto:shopowner@example.com">shopowner@example.com</a>
//           </p>
//           <p>
//             <strong>Facebook:</strong>{' '}
//             <a
//               href="https://facebook.com/shopowner"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               facebook.com/shopowner
//             </a>
//           </p>
//           <p>
//             <strong>Instagram:</strong>{' '}
//             <a
//               href="https://instagram.com/shopowner"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               @shopowner
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import './Contact.css';

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState(""); // To show feedback after submission

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (you can extend this based on your needs)
    if (!email || !username || !query) {
      setMessage("Please fill in all the fields!");
      return;
    }

    // Simulate form submission (here you can call an API or backend)
    console.log("Form Submitted", { email, username, query });

    // Show a success message
    setMessage("Thank you for your submission! We will get back to you soon.");

    // Reset form
    setEmail("");
    setUsername("");
    setQuery("");
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="query">Your Query:</label>
            <textarea
              id="query"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>

          <button className="btnContact" type="submit">Submit</button>
        </form>

        {/* Message after submission */}
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ContactPage;