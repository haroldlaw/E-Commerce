const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    sku: {
        type: String,
        unique: true,
        required: true
    },
    brand: {
        type: String,
    },
    collection: {
        type: String,
        required: true
    },
    images: [{
        url: {
            type: String,
            required: true
        },
        altText: {
            type: String
        }
    }],
    isFeatured: {
        type: Boolean,
        default: false
    },
    isPublised: {
        type: Boolean,
        deafault: false
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    metaKeywords: {
        type: String,
    },
},
    { timestamps: true }

)

module.exports = mongoose.model("Product", productSchema)