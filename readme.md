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
