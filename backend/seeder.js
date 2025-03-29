const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Product = require("./model/Product")
const User = require("./model/User")
const Cart = require("./model/Cart")

const products = require("./data/products")

dotenv.config()

mongoose.connect(process.env.MONGO_URI)

const seedData = async () => {
    try {
        // Clear existing data
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany()

        // Create a default admin user
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456",
            role: "admin",
        });

        // Assign the default user ID to each product
        const userID = createdUser.id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: userID };
        });

        // Insert the products into the database
        await Product.insertMany(sampleProducts);

        console.log("Product data seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Error seeding the data:", error);
        process.exit(1);
    }
}

seedData()