const { portfolioModel } = require("../models/contact-model.js");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const Portfolio = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Save message to MongoDB
        const newPortfolio = new portfolioModel({
            name,
            email,
            subject,
            message,
        });

        await newPortfolio.save();

        // Send email to your Gmail
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `
You received a new message from your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
            `,
        });

        res.status(200).json({
            message: "Message sent successfully",
            success: true,
        });

    } catch (error) {
        console.error("Email/Database Error:", error);

        res.status(500).json({
            message: "Error submitting form",
            success: false,
        });
    }
};

module.exports = Portfolio;