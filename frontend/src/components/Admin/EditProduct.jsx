import React, { useState } from 'react'

const EditProduct = () => {
    const [productDetail, setProductDetail] = useState({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "",
        brand: "",
        colours: [],
        collection: "",
        images: [{
            url: "https://picsum.photos/150?random=1"
        }, {
            url: "https://picsum.photos/150?random=2"
        }]
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductDetail((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file)
    }

    return (
        <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
            <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productDetail.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={productDetail.description}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        rows={4}
                        required
                    />
                </div>

                {/* Price */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={productDetail.price}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Count In stock */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Stock Count</label>
                    <input
                        type="number"
                        name="countInStock"
                        value={productDetail.countInStock}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* SKU */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">SKU</label>
                    <input
                        type="text"
                        name="sku"
                        value={productDetail.sku}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Colour */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">
                        Colour
                    </label>
                    <input
                        type="text"
                        name="colours"
                        value={productDetail.colours.join(", ")}
                        onChange={(e) =>
                            setProductDetail({
                                ...productDetail,
                                colours: e.target.value.split(",").map((colour) => colour.trim()),
                            })
                        }
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                {/* Image Upload */}
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Upload Image</label>
                    <input type="file" onChange={handleImageUpload} />
                    <div className="flex gap-4 mt-4">
                        {productDetail.images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image.url}
                                    alt={image.altText || "Product Image"}
                                    className="w-20 h-20 object-cover rounded-md shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                    Update Product
                </button>
            </form>
        </div>
    )
}

export default EditProduct