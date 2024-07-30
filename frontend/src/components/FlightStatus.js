// src/components/FlightStatus.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../store/actions/FlightActions'
import socket from '../services/websocket';
import './FlightStatus.css';

const FlightStatus = () => {
  const dispatch = useDispatch();
  const flights = useSelector(state => state.flight.flights);

  useEffect(() => {
    dispatch(fetchFlights());

    socket.on('flightUpdate', (updatedFlight) => {
      dispatch(fetchFlights());
    });

    return () => {
      socket.off('flightUpdate');
    };
  }, [dispatch]);

  return (
    <div className="flight-status">
      <h2>Current Flight Status</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            <p>Flight: {flight.number}</p>
            <p>Status: {flight.status}</p>
            <p>Gate: {flight.gate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightStatus;


