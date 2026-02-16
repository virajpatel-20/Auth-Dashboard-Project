# Auth Dashboard Project

## Overview

This is a full-stack authentication and dashboard web application built using React.js, Node.js, Express.js, and MongoDB. The application provides secure user authentication using JWT and allows users to manage personal tasks through a protected dashboard.

This project demonstrates full-stack development, secure authentication, REST API integration, and frontend-backend communication.

---

## Features

### Authentication

* User Registration
* User Login with JWT Authentication
* Secure password hashing using bcrypt
* Protected routes (Dashboard accessible only after login)
* Logout functionality

### Dashboard

* Create new tasks
* View all tasks
* Delete tasks
* Real-time updates from database

### Security

* JWT-based authentication
* Password hashing using bcrypt
* Protected API routes
* Token-based authorization

---

## Tech Stack

### Frontend

* React.js
* Axios
* React Router DOM
* JavaScript
* HTML & CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcrypt

---

## Project Structure

```
Auth-Dashboard-Project
│
├── backend
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── src
│   └── package.json
│
└── README.md
```

---

## Installation and Setup

### 1. Clone Repository

```
git clone https://github.com/virajpatel-20/Auth-Dashboard-Project.git
cd Auth-Dashboard-Project
```

---

### 2. Backend Setup

```
cd backend
npm install
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

Open new terminal:

```
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## API Endpoints

### Authentication

Register User

```
POST /api/auth/register
```

Login User

```
POST /api/auth/login
```

---

### Tasks

Get Tasks

```
GET /api/tasks
```

Create Task

```
POST /api/tasks
```

Delete Task

```
DELETE /api/tasks/:id
```

---

## Security Implementation

* JWT authentication for secure login
* Password hashing using bcrypt
* Protected frontend routes
* Protected backend API routes
* Token-based authentication system

---

## Skills Demonstrated

* Full Stack Development
* REST API Development
* Authentication and Authorization
* React.js Frontend Development
* Node.js Backend Development
* MongoDB Database Integration
* Secure Coding Practices

---

## Future Improvements

* Edit/Update tasks
* User profile page
* Deploy to cloud (Render / Vercel)
* Responsive UI improvements
* Refresh token implementation

---
##Screenshots
![Login](frontend/screenshots/login page.png)
![Dashboard](frontend/screenshots/dashboard page.png)


## Author

Viraj Patel
GitHub: https://github.com/virajpatel-20

---

## Conclusion

This project demonstrates the implementation of a secure full-stack authentication system with a functional dashboard and CRUD operations. It follows best practices for backend security, frontend routing, and API integration.

