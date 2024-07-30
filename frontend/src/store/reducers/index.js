// src/store/reducers/index.js
import { combineReducers } from 'redux';
import flightReducer from './flightReducer';

const rootReducer = combineReducers({
  flight: flightReducer
});

export default rootReducer;
