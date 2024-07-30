// src/components/NotificationSettings.js
import React, { useState } from 'react';
import './NotificationSettings.css';

const NotificationSettings = () => {
  const [email, setEmail] = useState('');
  const [sms, setSms] = useState('');

  const handleSave = () => {
    // Save settings to the backend
  };

  return (
    <div className="notification-settings">
      <h2>Notification Settings</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        SMS:
        <input
          type="text"
          value={sms}
          onChange={e => setSms(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default NotificationSettings;
