# E-Commerce MERN Project

## Overview
This is a simple e-commerce backend built with Node.js, Express, and MongoDB. It provides REST API endpoints for user authentication and product management.

## Project Structure
- `server.js` - Entry point for the Express server
- `APIS/` - API route handlers
  - `product-api.js` - Product routes
  - `user-api.js` - User routes
- `Models/` - Mongoose models
  - `product-model.js` - Product schema
  - `User-Model.js` - User schema
- `middlewares/` - Custom Express middleware
  - `verifyToken.js` - JWT authentication middleware
- `package.json` - Project dependencies and scripts
- `Readme` - Project documentation


# Installed Packages

## e-commerce

```bash
npm install express mongoose bcryptjs dotenv
```
```bash
npm install express mongoose bcryptjs jsonwebtoken cookie-parser
```
```bash
npm install express
---
## Features
- User registration and login
- JWT-based authentication
- Product CRUD operations
- Protected routes for authenticated users

## Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your MongoDB connection settings and JWT secret.
3. Start the server:
   ```bash
   npm start
   ```

## Environment Variables
Add a `.env` file at the project root with values similar to:

```env
MONGO_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```

## API Endpoints
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login and receive a JWT
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a product (protected)
- `PUT /api/products/:id` - Update a product (protected)
- `DELETE /api/products/:id` - Delete a product (protected)

## Notes
- Ensure MongoDB is running or accessible via your connection string.
- Protect your `.env` file and never commit secrets to source control.
