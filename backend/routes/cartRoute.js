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

module.exports = router