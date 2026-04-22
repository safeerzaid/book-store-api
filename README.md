📚 Book Store API

A RESTful API for a Book Store built with Node.js, Express.js, and MongoDB.

🚀 Features
Full CRUD Operations (Create, Read, Update, Delete)
MongoDB integration with Mongoose ODM
Environment variables using dotenv
Clean MVC folder structure
🛠️ Tech Stack
Node.js
Express.js
MongoDB
Mongoose
dotenv
📁 Folder Structure
book-store-api/
│
├── index.js
├── .env
├── .gitignore
│
├── database/
│   └── db.js
│
├── models/
│   └── book.model.js
│
├── router/
│   └── book.router.js
│
└── controller/
    └── controller.js
⚙️ Installation
# Clone the repository
git clone https://github.com/YOUR_USERNAME/book-store-api.git

# Navigate to project folder
cd book-store-api

# Install dependencies
npm install

# Create .env file
touch .env
🔑 Environment Variables

Create a .env file in the root directory and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
▶️ Run the Application
# Development mode
nodemon index.js

# Production mode
node index.js
📡 API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/:id	Get book by ID
POST	/api/books	Create a new book
PUT	/api/books/:id	Update a book
DELETE	/api/books/:id	Delete a book
📝 Request Body (POST / PUT)
{
  "name": "Harry Potter",
  "price": 299,
  "category": "adult",
  "description": "A magical book",
  "inStock": true
}
✅ Response Example
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Harry Potter",
    "price": 299,
    "category": "adult",
    "description": "A magical book",
    "inStock": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
🗂️ Category Options
adult
minor
📌 Coming Soon
Middleware
User Authentication (JWT)
Input Validation
File Upload
Pagination & Search
Deployment (Render)
👨‍💻 Author

Safeer
Made with ❤️
