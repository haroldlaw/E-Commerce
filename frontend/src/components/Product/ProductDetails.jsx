import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'sonner'

const selectedProduct = {
    name: "Fujifilm X100V",
    price: 1500,
    description: "With the Fujifilm X100V, you'll enjoy photography in its purest form",
    colors: ["Silver", "Black"],
    images: [{
        url: "https://picsum.photos/500/500?random=1",
        altText: "Fujifilm X100V"
    }]
}

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct]);

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1);
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleAddToCart = () => {
        if (!selectedColor) {
            toast.error("Please select a colour before adding to cart", {
                duration: 1000
            })
            return
        }

        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart", {
                duration: 1000
            })
            setIsButtonDisabled(false)
        }, 500)
    }

    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    {/* Left Thumbnails */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"
                                    }`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={mainImage} alt="Main Product"
                                className='w-full h-auto object-cover rounded-lg' />
                        </div>
                    </div>
                    <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"
                                    }`}
                                onClick={() => setMainImage(image.url)}
                            />
                        ))}
                    </div>
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>
                        <p className='text-xl text-gray-500 mb-2'>
                            ${selectedProduct.price}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {selectedProduct.description}
                        </p>
                        <div className='mb-4'>
                            <p className="text-gray-700">Colour:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border ${selectedColor === color
                                            ? "border-4 border-black"
                                            : "border-gray-300"
                                            }`}
                                        style={{
                                            backgroundColor: color.toLocaleLowerCase(),
                                            filter: "brightness(0.5)",
                                        }}
                                    >

                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='mb-6'>
                            <p className='text-gray-700'>Quantity:</p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button
                                    onClick={() => handleQuantityChange("minus")}
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'
                                >
                                    -
                                </button>
                                <span className='text-lg'>{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange("plus")}
                                    className='px-2 py-1 bg-gray-200 rounded text-lg'
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled
                                    ? "cursor-not-allowed opacity-50"
                                    : "hover:bg-gray-900"
                                }`}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails