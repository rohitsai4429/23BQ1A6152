# Notification System

## Overview

This project is a full-stack Notification Management System built using React and Node.js. The application provides a simple interface for viewing and managing notifications through REST APIs.

Repository Name: **23BQ1A6152**

## Project Structure

```text
23BQ1A6152
│
├── notification_app_be
│   ├── data
│   ├── routes
│   ├── logging_middleware
│   ├── index.js
│   └── package.json
│
├── notification_app_fe
│   ├── src
│   ├── public
│   └── package.json
│
├── screenshots
│   ├── desktop.png
│   ├── mobile.png
│   ├── postman-get.png
│   └── postman-post.png
│
├── notification_system_design.md
└── .gitignore
```

---

## Features

### Backend

* REST API implementation using Express.js
* Notification retrieval endpoint
* Notification creation endpoint
* Middleware-based request logging
* JSON request/response handling
* CORS support

### Frontend

* React-based user interface
* Dynamic notification rendering
* Responsive layout
* API integration with backend services
* Error handling for API requests

### Documentation

* System design document
* API testing screenshots
* Desktop and mobile UI screenshots

---

## API Endpoints

### Get Notifications

```http
GET /api/notifications
```

Returns all available notifications.

### Create Notification

```http
POST /api/notifications
```

Request Body:

```json
{
  "title": "Test Notification",
  "message": "Hello Rohit"
}
```

Response:

```json
{
  "id": 2,
  "title": "Test Notification",
  "message": "Hello Rohit"
}
```

---

## Technologies Used

### Frontend

* React
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* CORS

### Development Tools

* VS Code
* Git
* GitHub
* Postman

---

## Screenshots Included

* Desktop View
* Mobile View
* Postman GET API Test
* Postman POST API Test

---

## Running the Project

### Backend

```bash
cd notification_app_be
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:3000
```

### Frontend

```bash
cd notification_app_fe
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Author

**Kamepalli Rohit Sai**

Roll Number: **23BQ1A6152**
