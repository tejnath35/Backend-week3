# JS Assignments — Week 3

This repository contains backend development assignments built using **Node.js**, **Express.js**, and **MongoDB**.
The projects demonstrate REST APIs, CRUD operations, middleware handling, authentication, schema validation, database integration using Mongoose.

---

# 📁 Folder Structure

```bash
week-3/
│
├── backend-1/
│   ├── APIs/
│   ├── server.js
│   ├── req.http
│   └── package.json
│
├── backend-2/
│   ├── APIs/
│   ├── middlewares/
│   ├── models/
│   ├── server.js
│   ├── req.http
│   └── package.json
│
└── e-commerce/
    ├── APIs/
    ├── models/
    ├── server.js
    ├── req.http
    └── package.json
```

---

# 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcryptjs
* jsonwebtoken (JWT)
* cookie-parser
* dotenv

---

# 📦 Installed Packages

## backend-1

```bash
npm install express
```

---

## backend-2

```bash
npm install express mongoose bcryptjs jsonwebtoken cookie-parser
```

---

## e-commerce

```bash
npm install express mongoose bcryptjs dotenv
```

---

# 🔹 backend-1

A basic Express.js backend application implementing CRUD APIs using **local in-memory arrays**.

---

## ✨ Features

### User APIs

* Get all users
* Get user by ID
* Create user
* Update user
* Delete user

### Product APIs

* Get all products
* Get product by ID
* Get products by brand
* Create product
* Update product
* Delete product

### Other Features

* Express Router
* Route modularization
* Middleware setup
* JSON request parsing
* HTTP request testing using `req.http`

---

## 📂 Important Files

### `server.js`

* Creates Express server
* Connects route handlers
* Configures middleware
* Runs server on port `7890`

### `userapi.js`

Contains all user CRUD route handlers.

### `productapi.js`

Contains all product CRUD route handlers.

### `req.http`

Contains sample API requests for testing endpoints.

---

## ▶️ Run Project

```bash
cd backend-1
npm install
node server.js
```

---

## 🌐 API Base URLs

### User APIs

```http
GET    /user-api/users
GET    /user-api/users/:id
POST   /user-api/users
PUT    /user-api/users/:id
DELETE /user-api/users/:id
```

### Product APIs

```http
GET    /product-api/products
GET    /product-api/products-id/:id
GET    /product-api/products-brand/:brand
POST   /product-api/products
PUT    /product-api/products/:id
DELETE /product-api/products/:id
```

---

# 🔹 backend-2

An advanced backend project using **MongoDB + Mongoose** with authentication and middleware handling.

---

## ✨ Features

### User APIs

* Create user
* Read users
* Read user by ID
* Update user
* Delete user

### Authentication

* Password hashing using bcryptjs
* JWT token generation
* Cookie-based authentication
* Protected routes using middleware

### Product APIs

* Create product
* Read all products
* Read product by ID
* Update product

### Database Features

* MongoDB integration
* Mongoose schemas & models
* Validation rules
* Timestamps
* Strict schema enforcement

### Middleware

* Token verification middleware
* Cookie parser middleware

---

## 📂 Important Files

### `server.js`

* Connects Express server to MongoDB
* Registers APIs
* Configures middleware

### `user-api.js`

Handles user CRUD and authentication.

### `product-api.js`

Handles product CRUD operations.

### `verifyToken.js`

Middleware for verifying JWT tokens.

### `user-model.js`

Mongoose schema for users.

### `product-model.js`

Mongoose schema for products.

---

## 🔐 Authentication Flow

1. User registers
2. Password is hashed using bcryptjs
3. User logs in
4. JWT token generated
5. Token stored in HTTP-only cookie
6. Protected routes verified using middleware

---

## ▶️ Run Project

### Start MongoDB locally

```bash
mongod
```

### Run backend

```bash
cd backend-2
npm install
node server.js
```

---

## 🌐 API Base URLs

### User APIs

```http
GET    /user-api/users
GET    /user-api/users/:id
POST   /user-api/users
PUT    /user-api/users/:id
DELETE /user-api/users/:id
POST   /user-api/auth
GET    /user-api/test
```

### Product APIs

```http
GET    /prod-api/products
GET    /prod-api/products/:id
POST   /prod-api/products
PUT    /prod-api/products/:id
```

---

# 🔹 e-commerce

A mini e-commerce backend system with cart management using MongoDB relationships and population.

---

## ✨ Features

### Product APIs

* Create products
* Read all products

### User APIs

* Create user
* Read user by ID
* Add products to cart
* Increase quantity if product already exists in cart

### Cart Features

* Embedded cart schema
* Product references using ObjectId
* Quantity tracking
* Populate cart product details

### Security

* Password hashing using bcryptjs

### Database Features

* Mongoose schema validation
* Strict schema enforcement
* Environment variable configuration using dotenv

---

## 📂 Important Files

### `server.js`

* Connects app to MongoDB
* Loads environment variables
* Configures Express server

### `userapi.js`

Handles user creation and cart management.

### `productapi.js`

Handles product APIs.

### `user-model.js`

Defines user and cart schemas.

### `product-model.js`

Defines product schema.

### `req.http`

Contains sample API requests.

---

## 🛒 Cart Logic

When a product is added:

* If product already exists in cart → quantity increases
* Else → new product added to cart

Product details are populated using:

```js
.populate("cart.product")
```

---

## ▶️ Run Project

### Create `.env`

```env
PORT=2000
DB_URL=mongodb://localhost:27017/ecommerce
```

### Start Project

```bash
cd e-commerce
npm install
node server.js
```

---

## 🌐 API Base URLs

### Product APIs

```http
GET  /productapi/products
POST /productapi/products
```

### User APIs

```http
POST /userapi/users
GET  /userapi/users/:uid
PUT  /userapi/user-cart/user-id/:uid/product-id/:pid
```

---

# 🧠 Concepts Practiced

* REST APIs
* CRUD Operations
* Express Routing
* Middleware
* JWT Authentication
* Cookie Handling
* MongoDB Integration
* Mongoose Models & Schemas
* Password Hashing
* Environment Variables
* Cart Management Logic
* API Testing with `.http` files

---

# 👨‍💻 Author

## [Ritesh Mogilamoni](https://github.com/ritesh-mogilamoni)

Backend development practice repository built as part of JavaScript and Node.js learning assignments.
