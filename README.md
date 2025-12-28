![Node.js](https://img.shields.io/badge/Node.js-18-green)
![React](https://img.shields.io/badge/React-18-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)


# Estate Management Platform

A full-stack real estate management platform built with React and Express.js, featuring user authentication, a modern responsive UI, and real-time contact form submissions.

## 🚀 Features

### Backend (REST API)
- ✅ User registration with email validation
- ✅ Secure user authentication using JWT tokens
- ✅ Password hashing with bcryptjs
- ✅ Protected routes with authentication middleware
- ✅ User profile management
- ✅ MongoDB database integration
- ✅ Comprehensive error handling

### Frontend (React Application)
- ✅ Modern, responsive UI built with React and Tailwind CSS
- ✅ User authentication (Login/Signup pages)
- ✅ Protected routes for authenticated users
- ✅ Real estate property showcase
- ✅ About section with company information
- ✅ Testimonials section
- ✅ Contact form with real-time email notifications (Web3Forms)
- ✅ Smooth animations with Framer Motion
- ✅ Toast notifications for user feedback
- ✅ Mobile-responsive navigation menu

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **body-parser** - Request body parsing
- **nodemon** - Development server auto-reload

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Toastify** - Toast notifications
- **Web3Forms** - Contact form backend service

## 📁 Project Structure

```
Estate/
├── backend/
│   ├── controllers/
│   │   └── userController.js      # User authentication logic
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT authentication middleware
│   ├── models/
│   │   └── User.js                # User database schema
│   ├── routes/
│   │   └── userRoutes.js          # User API routes
│   ├── index.js                   # Main server file
│   ├── package.json               # Backend dependencies
│   └── .env                       # Backend environment variables
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── About.jsx           # About section component
    │   │   ├── Contact.jsx         # Contact form component
    │   │   ├── Footer.jsx          # Footer component
    │   │   ├── Header.jsx          # Header/hero section
    │   │   ├── Navbar.jsx           # Navigation bar
    │   │   ├── Projects.jsx        # Property listings
    │   │   ├── ProtectedRoute.jsx   # Route protection component
    │   │   └── Testimonails.jsx    # Testimonials section
    │   ├── pages/
    │   │   ├── Login.jsx            # Login page
    │   │   └── Signup.jsx          # Registration page
    │   ├── services/
    │   │   └── authService.js      # API service functions
    │   ├── assets/                 # Images and static assets
    │   ├── App.jsx                 # Main app component
    │   ├── main.jsx                # React entry point
    │   └── index.css               # Global styles
    ├── public/                     # Public assets
    ├── package.json                # Frontend dependencies
    ├── vite.config.js              # Vite configuration
    └── .env                        # Frontend environment variables
```

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** installed (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **MongoDB** installed and running (local or cloud instance like MongoDB Atlas)
- **Git** (for cloning the repository)

## 🔧 Installation

1. **Clone the repository:**
```bash
git clone <your-repository-url>
cd Estate
```

2. **Install backend dependencies:**
```bash
cd backend
npm install
```

3. **Install frontend dependencies:**
```bash
cd ../frontend
npm install
```

4. **Set up environment variables:**

   **Backend** - Create `backend/.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/Estate
   JWT_SECRET=your_super_secret_jwt_key_here
   ```
   
   **Frontend** - Create `frontend/.env`:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

   > **Note**: 
   > - Replace `MONGO_URI` with your MongoDB connection string (for MongoDB Atlas, use: `mongodb+srv://username:password@cluster.mongodb.net/Estate`)
   > - Replace `JWT_SECRET` with a strong, random secret key
   > - Get your Web3Forms access key from [web3forms.com](https://web3forms.com/) (enter your email to receive form submissions)

## 🚀 Running the Application

### Backend Server

1. Navigate to the backend directory:
```bash
cd backend
```

2. Start the server:
```bash
npm start
```

The server will start running on `http://localhost:5000` (or the port specified in your `.env` file).

You should see:
```
✅ MongoDB Connected Successfully
Server running on port 5000
```

### Frontend Development Server

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (default Vite port).

## 📡 API Endpoints

### Base URL
```
http://localhost:5000/api/users
```

### 1. User Registration
- **POST** `/signup`
- **Description**: Register a new user account
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response**: 
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "jwt_token_here"
  }
  ```
- **Status Codes**: 
  - `201` - User created successfully
  - `400` - User already exists
  - `500` - Server error

### 2. User Login
- **POST** `/login`
- **Description**: Authenticate user and receive JWT token
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response**: 
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "token": "jwt_token_here"
  }
  ```
- **Status Codes**: 
  - `200` - Login successful
  - `400` - Invalid email or password
  - `500` - Server error

### 3. Get User Profile
- **GET** `/profile`
- **Description**: Get authenticated user's profile information
- **Headers**: 
  ```
  Authorization: Bearer <jwt_token>
  ```
- **Response**: 
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
- **Status Codes**: 
  - `200` - Profile retrieved successfully
  - `401` - Not authorized (missing or invalid token)
  - `404` - User not found

## 🗄️ Database Schema

### User Model
```javascript
{
  _id: ObjectId,        // Unique user identifier (auto-generated)
  name: String,         // User's full name (required)
  email: String,        // User's email address (required, unique)
  password: String      // Hashed password (required)
}
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. **Registration/Login**: Users receive a JWT token upon successful registration or login
2. **Token Storage**: Frontend stores the token in `localStorage`
3. **Protected Routes**: Protected API endpoints require the token in the Authorization header:
   ```
   Authorization: Bearer <token>
   ```
4. **Token Expiration**: Tokens expire after 30 days
5. **Frontend Protection**: React routes are protected using the `ProtectedRoute` component

### Security Best Practices

- **Password Security**: Passwords are never stored in plain text - all passwords are hashed using bcryptjs before being saved to the database
- **Secret Key Management**: JWT secret keys are stored securely using environment variables and are never committed to version control
- **Environment Variables**: All sensitive configuration (database URLs, API keys, secrets) are stored in `.env` files which are gitignored

## 🎨 Frontend Routes

- **`/`** - Home page (protected, requires authentication)
  - Header/Hero section
  - About section
  - Projects/Properties section
  - Testimonials section
  - Contact form
  - Footer
- **`/login`** - Login page (public)
- **`/signup`** - Registration page (public)

## 📧 Contact Form

The contact form uses **Web3Forms** for real-time email notifications:

- Form submissions are sent directly to your email
- No backend processing required
- Configure your email in `frontend/.env` with `VITE_WEB3FORMS_ACCESS_KEY`
- Get your access key from [web3forms.com](https://web3forms.com/)

## ⚠️ Error Handling

The API includes comprehensive error handling for:
- Duplicate email registration
- Invalid login credentials
- Missing or invalid JWT tokens
- Database connection errors
- Missing required fields
- Port conflicts
- MongoDB connection issues

Proper HTTP status codes are used:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## 💻 Example Usage

### Using cURL

**Register a new user:**
```bash
curl -X POST http://localhost:5000/api/users/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

**Get user profile (requires token):**
```bash
curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

### Using JavaScript/Fetch

**Login example:**
```javascript
const response = await fetch('http://localhost:5000/api/users/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'password123'
  })
});

const data = await response.json();
localStorage.setItem('token', data.token);
```

## 🔑 Environment Variables

### Backend (`backend/.env`)
- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token signing

### Frontend (`frontend/.env`)
- `VITE_WEB3FORMS_ACCESS_KEY` - Web3Forms access key for contact form

> **Important**: 
> - Frontend environment variables must start with `VITE_` to be accessible in React
> - Never commit `.env` files to Git (they're already in `.gitignore`)
> - Restart your development server after changing environment variables

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running (local) or cluster is accessible (Atlas)
- Check your `MONGO_URI` format
- Verify your IP is whitelisted in MongoDB Atlas
- Check network connectivity

### Port Already in Use
- Change the `PORT` in `backend/.env`
- Or stop the process using port 5000:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <process_id> /F
  ```

### Frontend Environment Variables Not Working
- Ensure variable name starts with `VITE_`
- Restart the development server after changing `.env`
- Check that `.env` file is in the `frontend` directory

## 🚀 Future Improvements

- [ ] Property management features (CRUD operations)
- [ ] Property search and filtering
- [ ] Image upload functionality
- [ ] User favorites/bookmarks
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Admin dashboard
- [ ] Property categories and tags
- [ ] Pagination for property listings
- [ ] Real-time notifications
- [ ] Property comparison feature
- [ ] User reviews and ratings
- [ ] Map integration for property locations
- [ ] Input validation using express-validator or Joi
- [ ] Rate limiting for API endpoints
- [ ] Comprehensive logging middleware
- [ ] API documentation with Swagger
- [ ] Unit and integration tests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Your Name**
- Name: Harsha Koushik Teja Aila
- GitHub: [@HarshaKoushikTeja](https://github.com/HarshaKoushikTeja)
- Email: harshaus33@gmail.com

---

*Built with ❤️ using React, Express.js, and MongoDB*