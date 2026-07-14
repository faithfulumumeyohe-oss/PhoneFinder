const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone");

// Get all phones
router.get("/", async (req, res) => {
    try {
        const phones = await Phone.find();
        res.json(phones);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one phone by ID 
router.get("/:id", async (req, res) => {
    try {
        const phone = await Phone.findById(req.params.id);

        if (!phone) {
            return res.status(404).json({
                message: "Phone not found"
            });
        }

        res.json(phone);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;