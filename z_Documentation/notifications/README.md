# Notifications Service

## Overview

The Notifications Service is designed to handle the real-time delivery of notifications using various messaging systems. This service can send notifications via Firebase Cloud Messaging (FCM), Kafka, or RabbitMQ. It is part of the Flight Status application and ensures that users receive timely updates on flight status changes.

## Features

### Notification Systems
- **Firebase Cloud Messaging (FCM):** Send notifications to users' mobile devices and web applications.
- **Kafka:** Publish messages to Kafka topics for real-time processing and integration with other systems.
- **RabbitMQ:** Queue and manage messages for delivery to consumers.

## Use Cases

### For Users
- Receive timely notifications about flight status changes on their preferred platforms (mobile, web).

### For Administrators
- Configure and manage notification systems and ensure reliable message delivery.

## Setup Instructions

### Prerequisites
- Node.js and npm
- Docker (optional, for containerization)
- Kafka and/or RabbitMQ instances

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-repository/notifications-service.git
   cd notifications-service
