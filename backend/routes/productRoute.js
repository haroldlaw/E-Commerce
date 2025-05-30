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
            brand,
            collection,
            images,
            isFeatured,
            isPublished,
            sku,
        } = req.body;

        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            brand,
            collection,
            images,
            isFeatured,
            isPublished,
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

// route to update product details
router.put("/:id", protect, admin, async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            brand,
            collection,
            images,
            isFeatured,
            isPublished,
            sku
        } = req.body

        // Find product by ID
        const product = await Product.findById(req.params.id);

        if (product) {
            // Update product details
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.discountPrice = discountPrice || product.discountPrice;
            product.countInStock = countInStock || product.countInStock;
            product.brand = brand || product.brand;
            product.collection = collection || product.collection;
            product.images = images || product.images;
            product.isFeatured =
                isFeatured !== undefined ? isFeatured : product.isFeatured;
            product.isPublished =
                isPublished !== undefined ? isPublished : product.isPublished;
            product.sku = sku || product.sku;

            //   Save the updated product
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

// route to delete product
router.delete("/:id", protect, admin, async (req, res) => {
    try {
        // Find the product by ID
        const product = await Product.findById(req.params.id);

        if (product) {
            // Delete the product from database
            await product.deleteOne();
            res.json({ message: "Product removed" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})

// route to get products
router.get("/", async (req, res) => {
    try {
        const {
            collection,
            minPrice,
            maxPrice,
            sortBy,
            search,
            brand
        } = req.query

        let query = {}

        // filter logic
        if (collection && collection.toLocaleLowerCase() !== "all") {
            query.collection = collection;
        }

        if (brand) {
            query.brand = { $in: brand.split(",") };
        }

        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
            ];
        }

        // sort logic
        let sort = {};
        if (sortBy) {
            switch (sortBy) {
                case "priceAsc":
                    sort = { price: 1 };
                    break;
                case "priceDesc":
                    sort = { price: -1 };
                    break;
                default:
                    break;
            }
        }

        // fetch products and apply sorting 
        let products = await Product.find(query)
            .sort(sort)
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send("server Error");
    }
})

// route to get single product
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            console.error(error);
            res.status(500).send("Server Error");
        }
    } catch (error) { }
})

module.exports = router