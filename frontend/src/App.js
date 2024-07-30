import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import FlightDetails from './pages/FlightDetails';
import './App.css';

// Main App component
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
          <h1>Flight Status and Notifications</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flights/:flightId" element={<FlightDetails />} />
            </Routes>
          </main>
          <footer className="App-footer">
            <p>&copy; 2024 Flight Status and Notifications System</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
