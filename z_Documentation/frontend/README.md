# Flight Status Frontend

## Overview

This is the frontend application for managing and displaying flight statuses. It provides a user interface for viewing all flights, details of individual flights, and updating flight statuses. Built using React, this application allows users to interact with the backend API to fetch and update flight information.

## Features

- **View All Flights**: Display a list of all flights with basic details like flight number, status, and departure time.
- **Flight Details**: View detailed information about an individual flight, including flight status, gate information, and estimated arrival time.
- **Update Flight Status**: Allow users to update the status of a flight (e.g., delayed, on time, cancelled).
- **Responsive Design**: The application is designed to work on various devices, including desktops, tablets, and mobile phones.

## Functionality

### Home Page

- **Flight List**: The home page displays a list of all available flights. Each flight entry includes key details such as flight number, status, departure time, and destination.
- **Search and Filter**: Users can search for flights by flight number or filter by status to find specific flights quickly.

### Flight Details Page

- **Flight Information**: Provides comprehensive details about a selected flight, including:
  - Flight Number
  - Departure and Arrival Times
  - Gate Information
  - Status (e.g., delayed, cancelled, on time)
  - Destination and Origin
- **Status Updates**: Allows users to update the flight status directly from this page. Users can choose from predefined statuses and submit the update.

### Notification Settings

- **Save Notification Preferences**: Users can configure their notification settings, including preferred notification channels (SMS, email, or app notifications).
- **Retrieve Notification Settings**: Fetch and display current notification preferences for users to review and update.

## Technologies

- **React.js**: For building the user interface.
- **Redux**: For state management.
- **Axios**: For making API requests.
- **React Router**: For client-side routing.
- **CSS**: For styling the application.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repo/flight-status-frontend.git
   cd flight-status-frontend
