# Flight Status Backend

## Overview

The Flight Status Backend is a RESTful API designed to manage and provide real-time updates on flight statuses. This backend application allows users to access flight information, update flight statuses, and manage notification preferences. It supports integration with MongoDB, PostgreSQL, and messaging systems like Kafka and RabbitMQ.

## Features

### Flight Management
- **Retrieve All Flights:** Get a list of all flights with their current statuses.
- **Retrieve Flight Details:** Get detailed information about a specific flight, including current status and updates.
- **Update Flight Status:** Update flight statuses to reflect real-time changes such as delays or cancellations.

### Notification Management
- **Save Notification Settings:** Store user preferences for receiving notifications about flight status changes.
- **Retrieve Notification Settings:** Fetch user notification settings.

### Database Integration
- **MongoDB:** Stores flight data and user settings.
- **PostgreSQL:** Provides additional relational data storage.

### Messaging Systems
- **Kafka or RabbitMQ:** Manage real-time notifications and updates for users.

## Use Cases

### For Users
- View real-time flight statuses and details.
- Receive notifications about flight changes according to their preferences.
- Update flight information as needed.

### For Administrators
- Monitor and maintain accurate flight data.
- Configure and manage notification systems.

## Setup Instructions

### Prerequisites
- Python 3.x
- Docker (optional, for containerization)
- PostgreSQL and/or MongoDB instance
- Kafka and/or RabbitMQ (for notifications)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repository/flight-status-backend.git
   cd flight-status-backend
