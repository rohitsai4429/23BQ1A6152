const express = require("express");
const notifications = require("../data/notifications");

const router = express.Router();

router.get("/notifications", (req, res) => {
    res.json(notifications);
});

router.post("/notifications", (req, res) => {
    const { title, message } = req.body;

    if (!title || !message) {
        return res.status(400).json({
            error: "title and message are required"
        });
    }

    const newNotification = {
        id: notifications.length + 1,
        title,
        message
    };

    notifications.push(newNotification);

    res.status(201).json(newNotification);
});

module.exports = router;