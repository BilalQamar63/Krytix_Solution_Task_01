# Notes API

This is a simple RESTful Notes API built using **Express.js** and **MongoDB**.
It supports full CRUD functionality — allowing users to create, read, update, and delete notes.

---

## Features

- Create a new note
- Get all notes
- Get a single note by ID
- Update an existing note
- Delete a note
- MongoDB database connection with Mongoose
- `.env` support for environment variables

---

##  Installation & Setup

git clone https://github.com/BilalQamar63/Krytix_Solution_Task_01.git

1-Install dependencies

npm install

2-Create .env file
.env

MONGO_URI=your_mongodb_connection_string
PORT=5000


| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/notes`     | Get all notes     |
| GET    | `/notes/:id` | Get a note by ID  |
| POST   | `/notes`     | Create a new note |
| PUT    | `/notes/:id` | Update a note     |
| DELETE | `/notes/:id` | Delete a note     |


## How to Run the Server

npm run dev


