# LMS User Management Microservice 🎓

A secure, high-performance User Management and Authentication microservice for Learning Management Systems (LMS). Built with Node.js, Express, JWT, and Role-Based Access Control (RBAC).

---

## 🌟 Key Features

- **Authentication**: JWT-based stateless authentication with refresh token mechanics.
- **Role-Based Access Control (RBAC)**: Distinct permissions for `Student`, `Instructor`, `TeachingAssistant`, and `SuperAdmin`.
- **Profile & Enrollment Management**: Manage learner profiles, course enrollments, and instructor assignments.
- **Security Best Practices**: Password hashing with bcrypt, rate limiting, helmet security headers, and input sanitization.
- **RESTful Architecture**: Clean modular design conforming to OpenAPI 3.0 standards.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file:
```env
PORT=4000
JWT_SECRET=super_secure_lms_jwt_secret_key_2026
NODE_ENV=development
```

### 3. Start Development Server
```bash
npm run dev
```

---

## 📚 API Endpoints Overview

| Method | Endpoint | Description | Access Level |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Register new learner account | Public |
| `POST` | `/api/v1/auth/login` | Authenticate user & issue JWT | Public |
| `GET` | `/api/v1/users/me` | Fetch authenticated profile | Learner / All |
| `PATCH` | `/api/v1/users/me` | Update personal profile | Learner / All |
| `GET` | `/api/v1/users` | List users with pagination | Instructor / Admin |
| `DELETE` | `/api/v1/users/:id` | Soft delete / deactivate user | SuperAdmin |

---

## 🛡️ License
MIT License © 2026 Abdul Aziz Nooruddin
