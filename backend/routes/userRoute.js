const express = require("express")
const User = require("../model/User")
const jwt = require("jsonwebtoken")
const { protect } = require("../middleware/authentication")

const router = express.Router()

// route to handle user registration
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: "User already registered" })
        user = new User({ name, email, password })
        await user.save()

        // create jwt payload
        const payload = { user: { id: user.id, role: user.role } }

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "40h" },
            (err, token) => {
                if (err) throw err;

                // Send the user and token in response
                res.status(201).json({
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    },
                    token,
                });
            }
        )
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Server error")
    }
})

// route to handle login
router.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        // find user by email
        let user = await User.findOne({ email })
        if (!user) return res.status(400).json({ message: "Invalid credentials" })

        // match user password
        const isMatch = await user.matchPassword(password)
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" })

        const payload = { user: { id: user.id, role: user.role } }
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: "40h" },
            (err, token) => {
                if (err) throw err;

                // Send the user and token in response
                res.json({
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    },
                    token,
                });
            }
        )
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
})

// route to handle user profile
router.get("/profile", protect, async (req, res) => {
    res.json(req.user);
})

module.exports = router