// src/pages/Home.js
import React from 'react';
import FlightStatus from '../components/FlightStatus';
import NotificationSettings from '../components/NotificationSettings';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <FlightStatus />
      <NotificationSettings />
    </div>
  );
};

export default Home;
