const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()

const PORT = process.env.PORT || 3000

connectDB()

app.get("/", (req, res) => {
    res.send("Welcome")
})

// API routes
app.use("/api/user", userRoute)
app.use("/api/product", productRoute)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})