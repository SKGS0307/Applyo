const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors"); // Make sure cors is required
const AuthRouter = require("./routes/AuthRouter");
const TaskRouter = require("./routes/TaskRouter");

require("./models/db");
require("dotenv").config();

app.use(bodyParser.json());

// --- START OF CHANGES ---

// 1. Define your allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://applyo-wine.vercel.app'
];

// 2. Set up your CORS options
const corsOptions = {
  origin: allowedOrigins
};

// 3. Use the CORS middleware with your options
app.use(cors(corsOptions));

// --- END OF CHANGES ---

app.use("/auth", AuthRouter);
app.use("/api", TaskRouter);

const PORT = process.env.PORT || 5000;

app.get("/ping", (req, res) => {
    res.send("Pong");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});