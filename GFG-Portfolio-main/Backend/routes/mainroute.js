const express = require("express");

const router = express.Router();

const Portfolio = require("../controllers/contact-controller.js");

// Contact form
router.post("/contact", Portfolio);

// Welcome route
router.get("/welcome", (req, res) => {
    res.send("Welcome to my Backend Server");
});

module.exports = router;