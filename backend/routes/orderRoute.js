const express = require("express");
const Checkout = require("../model/Checkout");
const Cart = require("../model/Cart");
const Product = require("../model/Product");
const Order = require("../model/Order");
const { protect } = require("../middleware/authentication");

const router = express.Router();

// route to get orders
router.get("/my-orders", protect, async (req, res) => {
    try {
        // Find orders for the authenticated user
        const orders = await Order.find({ user: req.user.id }).sort({
            createdAt: -1,
        }); // sort by most recent orders
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// route to get order details
router.get("/:id", protect, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
        );

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Return the order details
        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;