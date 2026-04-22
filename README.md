📚 Book Store API
A RESTful API for a Book Store built with Node.js, Express.js and MongoDB.
🚀 Features

Full CRUD Operations (Create, Read, Update, Delete)
MongoDB with Mongoose ODM
Environment variables with dotenv
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
bash# Clone the repo
git clone https://github.com/YOUR_USERNAME/book-store-api.git

# Go into the folder
cd book-store-api

# Install dependencies
npm install

# Create .env file
touch .env
🔑 Environment Variables
Create a .env file in the root folder and add:
PORT=3000
MONGO_URI=your_mongodb_connection_string
▶️ Run the App
bash# Development
nodemon index.js

# Normal
node index.js
📡 API Endpoints
MethodEndpointDescriptionGET/api/booksGet all booksGET/api/books/:idGet book by IDPOST/api/booksCreate a new bookPUT/api/books/:idUpdate a bookDELETE/api/books/:idDelete a book
📝 Request Body (POST / PUT)
json{
  "name": "Harry Potter",
  "price": 299,
  "category": "adult",
  "description": "A magical book",
  "inStock": true
}
✅ Response Example
json{
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
 Deploy to Render

👨‍💻 Author
Made with ❤️ by Safeer
