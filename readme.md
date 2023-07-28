# Todomeister - Fullstack Todo App

Todomeister is a fullstack Todo app built using React for the frontend and Node.js for the backend. It allows users to perform CRUD (Create, Read, Update, Delete) operations on their todos, and also provides a secure login system to store user-specific data. With Todomeister, managing tasks and staying organized has never been easier!

## Features

- User Authentication: Users can sign up and log in to their accounts securely. Passwords are hashed and stored securely in the database.
- Create Todo: Users can add new todos to their list.
- Read Todo: Users can view their existing todos in a neatly organized list.
- Update Todo: Users can edit and update their existing todos.
- Delete Todo: Users can remove completed or unnecessary todos from their list.
- Persistent Storage: Todos are stored in the database, ensuring data availability even after the app is closed or refreshed.
- Responsive Design: The app is fully responsive and works seamlessly on various devices and screen sizes.

## Technologies Used

### Frontend

- React: A popular JavaScript library for building user interfaces.
- HTML5 & CSS3: Markup and styling of the application.
- Axios: A promise-based HTTP client for making API requests to the backend.
- React Router: For managing routing within the React application.

### Backend

- Node.js: A powerful server-side JavaScript runtime.
- Express.js: A minimalist web framework for Node.js used for handling server-side logic and API routes.
- MongoDB: A NoSQL database used to store the user and todo data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB, simplifying database interactions.

# Installation

To clone the repo run

```
git clone git@github.com:iceonGit/todomeister.git
```

Go to `client` and `backend` directory to install packages using npm

```
cd client
npm install
```

```
cd backend
npm install
```

# Config

Create `.env` file inside `backend` directory and copy the following code

```
MONGO_URI=Your mongodb URI
PORT=5000
SECRET=some random string
```

# Run the App

Open the client and backend folder in the integrated terminal of your Vscode and run the following
commands

```
cd backend
nodemon app.js
```

```
cd client
npm start
```

## Contributing

If you wish to contribute to Todomeister, feel free to submit pull requests or raise issues on the GitHub repository.
License

Todomeister is open-source software licensed under the MIT License.
