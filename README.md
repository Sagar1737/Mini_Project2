Microproject #2 – (CREATE Operation)

This project is a simple MongoDB, Express, and Node.js application that implements the CREATE operation using a POST API.

Features

Connects to MongoDB Atlas using Mongoose

POST route to create a new student

Uses MVC structure (model, controller, routes)

Tested using Postman

How to Run

Install dependencies:

npm install


Start the server:

npm run dev


Make a POST request in Postman:

http://localhost:5000/api/students

Example JSON Body
{
  "name": "Ram",
  "email": "ram@example.com",
  "course": "Business",
  "gpa": 3.4,
  "age": 22
}


This will insert a new document into your MongoDB Atlas collection.
