# 📝 MERN Blog App

This is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** blog application built for the Week 4 MERN Integration Assignment. It allows users to register, login, create blog posts, edit them, and delete them. The app includes authentication using JWT, and supports basic CRUD operations on blog posts.

---

## 🚀 Features

- 🔐 User authentication (JWT-based)
- 📝 Full CRUD operations on blog posts
- 🧑 Author info linked to posts
- 📦 RESTful API with Express.js and MongoDB
- ⚛️ React.js frontend with routing
- 📦 Axios integration with token-based API access

---

## 📁 Project Structure

mern-blog/
├── client/ # React front-end
│ ├── public/
│ ├── src/
│ │ ├── components/ # Navbar, etc.
│ │ ├── pages/ # Login, Register, Home, PostForm, PostDetails
│ │ ├── services/ # Axios services (optional)
│ │ ├── context/ # Global auth state (optional)
│ │ └── App.jsx
│ └── package.json
├── server/ # Express.js backend
│ ├── config/ # DB config (if needed)
│ ├── controllers/ # authController, postController
│ ├── middleware/ # JWT middleware
│ ├── models/ # User, Post
│ ├── routes/ # authRoutes, postRoutes
│ ├── utils/ # (optional helpers)
│ ├── server.js
│ └── package.json
└── README.md

---

## 🛠️ Technologies Used

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Auth:** JSON Web Tokens (JWT), bcrypt
- **Dev Tools:** Nodemon, MongoDB Compass / MongoDB Atlas

---

## 📦 Getting Started

### ✅ Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm (or yarn)

### 🔧 Backend Setup

1. Navigate to the server:
   ```bash
   cd server
Install dependencies:

npm install
Create a .env file:

env
Copy
Edit
MONGO_URI=mongodb://127.0.0.1:27017/mern_blog
JWT_SECRET=supersecretkey
Start the server:
npm run dev
💻 Frontend Setup
Navigate to the client:

bash
cd ../client
Install dependencies:

bash
npm install
Start the frontend:

bash
npm start
🔄 API Endpoints
Method	Route	Description	Protected
POST	/api/auth/register	Register user	❌ No
POST	/api/auth/login	Login user, get token	❌ No
GET	/api/posts	List all posts	❌ No
GET	/api/posts/:id	Get single post	❌ No
POST	/api/posts	Create post	✅ Yes
PUT	/api/posts/:id	Update post	✅ Yes
DELETE	/api/posts/:id	Delete post	✅ Yes

🖼️ Screenshots

✅ Backend Running

✅ Frontend Running

✅ Register Page

✅ Login Page

✅ Home Page

✅ Post Details

✅ New Post

✅ Edit Post

📚 Resources
MongoDB Docs

Express.js Docs

React Docs

Mongoose Docs

JWT Docs

📌 Author
Brighton – GitHub Classroom Assignment Submission
GitHub Repo
