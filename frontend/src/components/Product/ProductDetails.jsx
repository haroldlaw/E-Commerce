import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetails } from '../../redux/slice/productSlice'

const ProductDetails = ({ productId }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { selectedProduct, loading, error } = useSelector((state) => state.products)
    const { userId, guestId } = useSelector((state) => state.auth)
    const [mainImage, setMainImage] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const productFetchId = productId || id

    useEffect(() => {
        if (productFetchId) {
            dispatch(fetchProductDetails(productFetchId))
        }
    }, [dispatch, productFetchId])


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
        setIsButtonDisabled(true);

        dispatch(
            addToCart({
                productId: productFetchId,
                quantity,
                guestId,
                userId: user?.id,
            })
        )
            .then(() => {
                toast.success("Product added to cart", {
                    duration: 1000,
                });
            })
            .finally(() => {
                setIsButtonDisabled(false);
            })
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='p-6'>
            {selectedProduct && (
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
            )}
        </div>
    )
}

export default ProductDetails