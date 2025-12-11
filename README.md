# mern-auth-deploy

A complete MERN stack authentication system using **MongoDB, Express, React, Node.js, and JWT**.  
This project provides secure **Signup, Login, Logout, Token Refreshing**, and **Protected Routes** with a clean frontend and backend architecture.

---

## 🚀 Features

### 🔥 Backend Features
- JWT Authentication (Access + Refresh Tokens)
- HTTP-only cookie-based authentication
- Secure password hashing with **bcrypt**
- MongoDB connection using **Mongoose**
- Middleware-based protected routes
- Input validation
- Example protected Product route
- Clean and scalable folder structure

### 🎨 Frontend Features
- React-based authentication system
- Signup & Login pages
- Home page with conditional Dashboard link
- Auto token refresh system
- Axios interceptors for protected API calls
- Modern, responsive layout

---

## 📁 Project Structure

```
mern-auth-deploy/
│
├── backend/
│   ├── Controllers/
│   │   └── AuthController.js
│   ├── Middlewares/
│   │   ├── Auth.js
│   │   └── AuthValidation.js
│   ├── Models/
│   │   ├── User.js
│   │   └── db.js
│   ├── Routes/
│   │   ├── AuthRouter.js
│   │   └── ProductRouter.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   └── Signup.js
│   │   ├── RefreshHandler.js
│   │   ├── utils.js
│   │   ├── App.js
│   │   └── index.js
│   ├── vercel.json
│   └── package.json
│
└── README.md
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Rajan048/mern-auth-deploy.git
cd mern-auth-deploy
```

---

## 🟢 Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
CLIENT_URL=http://localhost:3000
PORT=5000
```

Start backend:

```bash
npm start
```

---

## 🔵 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 API Routes

### Authentication Routes
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/auth/logout` | Logout user |
| GET | `/api/auth/refresh` | Refresh JWT tokens |

### Protected Routes
| Method | Route | Description |
|--------|--------|-------------|
| GET | `/api/products` | Returns product list for authenticated users |

---

## 🌍 Deployment (Vercel Ready)

This project is fully configured for **Vercel deployment**:

- Frontend deployed as static React site  
- Backend deployed as Vercel Serverless Functions  
- `vercel.json` handles API routing  
- Supports cookies + CORS authentication  

---

## 🧰 Tech Stack

### Frontend
- React  
- React Router  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT  
- Bcrypt  
- Cookie-Parser  

---

## 🤝 Contributing

Feel free to fork this repo and submit pull requests.

---

## 📄 License

This project is licensed under the **MIT License**.
