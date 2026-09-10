const { portfolioModel } = require("../models/contact-model.js");

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

        // Send email using Resend API
        console.log("Sending email using Resend...");

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "onboarding@resend.dev",
                to: [process.env.EMAIL_USER],
                reply_to: email,
                subject: `Portfolio Contact: ${subject}`,
                html: `
                    <h2>New Portfolio Contact Message</h2>

                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>

                    <h3>Message:</h3>
                    <p>${message}</p>
                `,
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error("Resend error:", result);

            return res.status(500).json({
                message: "Message saved, but email could not be sent",
                success: false,
            });
        }

        console.log("Email sent successfully using Resend.");
        console.log("Resend response:", result);

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