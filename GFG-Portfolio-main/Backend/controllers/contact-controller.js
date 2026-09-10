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

        // Check required data
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: "Please fill all fields",
                success: false,
            });
        }

        // Save message to MongoDB
        console.log("Saving message to MongoDB...");

        const newPortfolio = new portfolioModel({
            name,
            email,
            subject,
            message,
        });

        await newPortfolio.save();

        console.log("Message saved to MongoDB successfully.");

        // Send email
        console.log("Sending email...");

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

        console.log("Email sent successfully.");

        return res.status(200).json({
            message: "Message sent successfully",
            success: true,
        });

    } catch (error) {
        console.error("CONTACT FORM ERROR:");
        console.error(error);

        return res.status(500).json({
            message: "Error submitting form",
            success: false,
        });
    }
};

module.exports = Portfolio;