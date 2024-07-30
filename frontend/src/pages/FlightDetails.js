import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './FlightDetails.css';

const FlightDetails = () => {
  const { flightId } = useParams();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await axios.get(`/api/flights/${flightId}`);
        setFlight(response.data);
      } catch (err) {
        setError('Failed to fetch flight details');
      } finally {
        setLoading(false);
      }
    };

    fetchFlightDetails();
  }, [flightId]);

  if (loading) {
    return <div className="loading">Loading flight details...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!flight) {
    return <div className="no-data">No flight details available.</div>;
  }

  return (
    <div className="flight-details">
      <h2>Flight Details</h2>
      <div className="flight-info">
        <p><strong>Flight Number:</strong> {flight.number}</p>
        <p><strong>Status:</strong> {flight.status}</p>
        <p><strong>Departure Airport:</strong> {flight.departureAirport}</p>
        <p><strong>Arrival Airport:</strong> {flight.arrivalAirport}</p>
        <p><strong>Departure Time:</strong> {new Date(flight.departureTime).toLocaleString()}</p>
        <p><strong>Arrival Time:</strong> {new Date(flight.arrivalTime).toLocaleString()}</p>
        <p><strong>Gate:</strong> {flight.gate}</p>
        <p><strong>Terminal:</strong> {flight.terminal}</p>
        <p><strong>Remarks:</strong> {flight.remarks}</p>
      </div>
      <div className="flight-status">
        <h3>Status Updates</h3>
        <ul>
          {flight.statusUpdates.map((update, index) => (
            <li key={index}>
              <p><strong>Time:</strong> {new Date(update.time).toLocaleString()}</p>
              <p><strong>Update:</strong> {update.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightDetails;
