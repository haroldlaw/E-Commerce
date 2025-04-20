const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")
const checkoutRoute = require("./routes/checkoutRoute")
const orderRoute = require("./routes/orderRoute")
const uploadRoute = require("./routes/uploadRoute")
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
dotenv.config()

const PORT = process.env.PORT || 3000

connectDB()

app.get("/", (req, res) => {
    res.send("Welcome")
})

// API routes
app.use("/api/user", userRoute)
app.use("/api/product", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/checkout", checkoutRoute)
app.use("/api/order", orderRoute)
app.use("/api/upload", uploadRoute)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})