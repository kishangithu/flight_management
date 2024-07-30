// src/store/actions/flightActions.js
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const SET_FLIGHTS = 'SET_FLIGHTS';

export const fetchFlights = () => ({
  type: FETCH_FLIGHTS
});

export const setFlights = (flights) => ({
  type: SET_FLIGHTS,
  payload: flights
});
