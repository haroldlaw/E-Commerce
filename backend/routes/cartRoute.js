const express = require("express")
const Cart = require("../model/Cart")
const Product = require("../model/Product")
const { protect } = require("../middleware/authentication")

const router = express.Router()

// function to get a cart by user Id or guest ID
const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    } else if (guestId) {
        return await Cart.findOne({ guestId });
    }
    return null;
}

// route to add product to cart for guest or logged in user
router.post("/", async (req, res) => {
    const { productId, quantity, guestId, userId } = req.body
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        // Determine if the user is logged in or guest
        let cart = await getCart(userId, guestId);

        // If the cart exists, update it
        if (cart) {
            const productIndex = cart.products.findIndex(
                (p) =>
                    p.productId.toString() === productId
            );

            if (productIndex > -1) {
                // If the product is already in the cart, update the quantity
                cart.products[productIndex].quantity += quantity;
            } else {
                // add new product
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    quantity,
                });
            }

            //   Recalculate the total price
            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            await cart.save();
            return res.status(200).json(cart);
        } else {
            // Create a new cart for the guest or user
            const newCart = await Cart.create({
                user: userId ? userId : undefined,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                products: [
                    {
                        productId,
                        name: product.name,
                        image: product.images[0].url,
                        price: product.price,
                        quantity,
                    },
                ],
                totalPrice: product.price * quantity,
            });
            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

// route to update product quantity in cart
router.put("/", async (req, res) => {
    const { productId, quantity, guestId, userId } = req.body;

    try {
        let cart = await getCart(userId, guestId);
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const productIndex = cart.products.findIndex(
            (p) =>
                p.productId.toString() === productId
        );

        if (productIndex > -1) {
            // update quantity
            if (quantity > 0) {
                cart.products[productIndex].quantity = quantity;
            } else {
                cart.products.splice(productIndex, 1); // Remove product if quantity is 0
            }

            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: "Product not found in cart" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

// route to delete product in cart
router.delete("/", async (req, res) => {
    const { productId, guestId, userId } = req.body;
    try {
        let cart = await getCart(userId, guestId);

        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const productIndex = cart.products.findIndex(
            (p) =>
                p.productId.toString() === productId
        );

        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);

            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: "Product not found in cart" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

//route to display product in cart
router.get("/", async (req, res) => {
    const { userId, guestId } = req.query;

    try {
        const cart = await getCart(userId, guestId);
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ message: "Cart not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// route to merge guest cart with user cart
router.post("/merge", protect, async (req, res) => {
    const { guestId } = req.body;

    try {
        // Find the guest cart and user cart
        const guestCart = await Cart.findOne({ guestId });
        const userCart = await Cart.findOne({ user: req.user.id });

        if (guestCart) {
            if (guestCart.products.length === 0) {
                return res.status(400).json({ message: "Guest cart is empty" });
            }

            if (userCart) {
                // Merge guest cart into user cart
                guestCart.products.forEach((guestItem) => {
                    const productIndex = userCart.products.findIndex(
                        (item) =>
                            item.productId.toString() === guestItem.productId.toString() 
                    );

                    if (productIndex > -1) {
                        // If the item exists in the user cart, update the quantity
                        userCart.products[productIndex].quantity += guestItem.quantity;
                    } else {
                        // Otherwise, add the guest item to the cart
                        userCart.products.push(guestItem);
                    }
                });

                userCart.totalPrice = userCart.products.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                );
                await userCart.save();

                // Remove the guest cart after merging
                try {
                    await Cart.findOneAndDelete({ guestId });
                } catch (error) {
                    console.error("Error deleting guest cart:", error);
                }
                res.status(200).json(userCart);
            } else {
                // If the user has no existing cart, assign the guest cart to the user
                guestCart.user = req.user.id;
                guestCart.guestId = undefined;
                await guestCart.save();

                res.status(200).json(guestCart);
            }
        } else {
            if (userCart) {
                // Guest cart has already been merged, return user cart
                return res.status(200).json(userCart);
            }
            res.status(404).json({ message: "Guest cart not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router