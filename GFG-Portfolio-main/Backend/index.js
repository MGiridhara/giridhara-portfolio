require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mainrouter = require("./routes/mainroute");
const cors = require("cors");

const app = express();

// CORS configuration
const allowedOrigins = [
    "http://localhost:5173",
    "https://giridhara-portfolio.vercel.app",
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Parse request data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Giridhara Portfolio Backend is running",
    });
});

// Routes
app.use("/", mainrouter);

// Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});