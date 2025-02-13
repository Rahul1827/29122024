




import React, { useState } from "react";
import "./Contact.css";

const ContactPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !mobile || !query) {
      setMessage("Please fill in all the fields!");
      return;
    }

    const contactData = { username, email, mobile, query };

    try {
      const response = await fetch("https://localhost:44361/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage("Thank you! Your query has been submitted successfully.");
        setUsername("");
        setEmail("");
        setMobile("");
        setQuery("");
      } else {
        setMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="query">Your Query:</label>
            <textarea id="query" value={query} onChange={(e) => setQuery(e.target.value)} rows="5" required></textarea>
          </div>

          <button className="btnContact" type="submit">Submit</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
