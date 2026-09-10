require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mainrouter = require("./routes/mainroute");
const cors = require("cors");

const app = express();

// CORS configuration
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Parse request data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/", mainrouter);

// Server
const port = 8080;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});