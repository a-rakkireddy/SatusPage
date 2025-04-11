# StatusPage

A simplified status page application that allows administrators to manage services and their statuses, and provides a public-facing page for users to view the current status of all services.

## Features

- **User Authentication**: Secure login and registration system
- **Team Management**: Add and manage team members
- **Organization (Multi-tenant)**: Support for multiple organizations
- **Service Management**: CRUD operations for services with status updates
- **Incident/Maintenance Management**: Create, update, and resolve incidents
- **Real-time Status Updates**: WebSocket implementation for live updates
- **Public Status Page**: Display current status of all services

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/status-page
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
status-page/
├── config/             # Configuration files
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/             # Database models
├── public/             # Static files
│   ├── css/
│   ├── js/
│   └── img/
├── routes/             # API routes
├── views/              # EJS templates
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies
├── README.md           # Project documentation
└── server.js           # Entry point
```