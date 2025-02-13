import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notifications = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://localhost:44361/api/contact');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <ul className="notifications-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="notification-item">
            <p><strong>Username:</strong> {contact.username}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Mobile:</strong> {contact.mobile}</p>
            <p><strong>Query:</strong> {contact.query}</p>
            <p className="submitted-date"><strong>Submitted At:</strong> {new Date(contact.submittedAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
