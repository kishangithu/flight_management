import axios from 'axios';

// Set up the base URL for the API
const BASE_URL = 'http://localhost:5000/api';

// Create an instance of axios with default configurations
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Timeout after 10 seconds
});

// Function to fetch all flights
export const getAllFlights = () => {
  return api.get('/flights')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching flights:', error);
      throw error;
    });
};

// Function to fetch a single flight by its ID
export const getFlightById = (flightId) => {
  return api.get(`/flights/${flightId}`)
    .then(response => response.data)
    .catch(error => {
      console.error(`Error fetching flight ${flightId}:`, error);
      throw error;
    });
};

// Function to update flight status
export const updateFlightStatus = (flightId, statusUpdate) => {
  return api.put(`/flights/${flightId}/status`, statusUpdate)
    .then(response => response.data)
    .catch(error => {
      console.error(`Error updating flight ${flightId} status:`, error);
      throw error;
    });
};

// Function to save user notification settings
export const saveNotificationSettings = (settings) => {
  return api.post('/notifications/settings', settings)
    .then(response => response.data)
    .catch(error => {
      console.error('Error saving notification settings:', error);
      throw error;
    });
};

// Function to get user notification settings
export const getNotificationSettings = () => {
  return api.get('/notifications/settings')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching notification settings:', error);
      throw error;
    });
};
