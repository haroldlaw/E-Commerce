const jwt = require("jsonwebtoken")
const User = require("../model/User")

// Middleware to protect routes
const protect = async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.user.id).select("-password"); // Exclude password
            next();
        } catch (error) {
            console.error("Token verification failed:", error);
            res.status(401).json({ message: "Authorization failed" });
        }
    } else {
        res.status(401).json({ message: "Authorization failed" });
    }
}

module.exports = { protect };