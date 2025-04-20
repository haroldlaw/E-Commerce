const express = require("express");
const Product = require("../model/Product");
const { protect, admin } = require("../middleware/authentication");

const router = express.Router();

// route to get all products
router.get("/", protect, admin, async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
