const express = require("express");
const router = express.Router();
const Subscribe = require("../model/Subscribe");

router.post("/subscribe", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        // Check if the email is already subscribed
        let subscribe = await Subscribe.findOne({ email });

        if (subscribe) {
            return res.status(400).json({ message: "Email is already subscribed" });
        }

        subscribe = new Subscribe({ email });
        await subscribe.save();

        res
            .status(201)
            .json({ message: "Successfully subscribed to the newsletter!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
