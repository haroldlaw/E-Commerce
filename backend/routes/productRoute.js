const express = require("express");
const Product = require("../model/Product");
const { protect, admin } = require("../middleware/authentication")

const router = express.Router()

// route to create a product
router.post("/", protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            colours,
            collection,
            images,
            isFeatured,
            isPublished,
            weight,
            sku,
        } = req.body;

        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            colours,
            collection,
            images,
            isFeatured,
            isPublished,
            weight,
            sku,
            user: req.user.id, // Reference to the admin user who created it
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

module.exports = router