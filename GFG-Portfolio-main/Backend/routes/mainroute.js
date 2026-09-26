const express = require("express");

const router = express.Router();

const Portfolio = require("../controllers/contact-controller.js");
const GiridharaAI = require("../controllers/ai-controller.js");

// ==========================================
// CONTACT FORM
// ==========================================

router.post("/contact", Portfolio);


// ==========================================
// AI PORTFOLIO ASSISTANT
// ==========================================

router.post("/ai-chat", GiridharaAI);


// ==========================================
// WELCOME ROUTE
// ==========================================

router.get("/welcome", (req, res) => {
    res.send("Welcome to my Backend Server");
});


module.exports = router;