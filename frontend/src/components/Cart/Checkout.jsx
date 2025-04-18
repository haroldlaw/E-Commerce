import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PayPal from './PayPal'

const cart = {
    products: [{
        name: "Sony Alpha A7C II",
        price: 1900,
        image: "https://www.mpb.com/media-service/59f7d773-5909-4ffa-9420-7565d4d57ba8"
    }
    ],
    totalPrice: 1900
}

const Checkout = () => {

    const navigate = useNavigate()

    const [checkoutId, setCheckoutId] = useState(null)

    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        eircode: "",
        country: "",
        phone: "",
    })

    const handleCreateCheckout = async (e) => {
        e.preventDefault();
        setCheckoutId(123)
    }

    const handlePaymentSuccess = async (details) => {
        console.log("Payment successful", details)
        navigate("/orderConfirmation")
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
            <div className='bg-white rounded-lg p-6'>
                <h2 className='text-2xl uppercase mb-6'>
                    Checkout
                </h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-lg mb-4">Contact Details</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value="user@example.com"
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>
                    <h3 className="text-lg mb-4">Delivery</h3>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                value={shippingAddress.firstName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        firstName: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Last Name</label>
                            <input
                                type="text"
                                value={shippingAddress.lastName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        lastName: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Street</label>
                        <input
                            type="text"
                            value={shippingAddress.street}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    street: e.target.value,
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                value={shippingAddress.city}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        city: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Eircode</label>
                            <input
                                type="text"
                                value={shippingAddress.eircode}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        eircode: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Country</label>
                        <input
                            type="text"
                            value={shippingAddress.country}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    country: e.target.value,
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone</label>
                        <input
                            type="tel"
                            value={shippingAddress.phone}
                            onChange={(e) =>
                                setShippingAddress({
                                    ...shippingAddress,
                                    phone: e.target.value,
                                })
                            }
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        {!checkoutId ? (
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded"
                            >
                                Proceed to Payment
                            </button>
                        ) : (
                            <div>
                                <PayPal amount={1000} onSuccess={handlePaymentSuccess} onError={(err) => alert("Payment failed. Please try again.")} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-4">Order Summary</h3>
                <div className="border-t py-4 mb-4">
                    {cart.products.map((product, index) => (
                        <div
                            key={index}
                            className="flex items-start justify-between py-2 border-b"
                        >
                            <div className="flex items-start">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-20 h-24 object-cover mr-4"
                                />
                                <div>
                                    <h3 className="text-md">{product.name}</h3>
                                </div>
                            </div>
                            <p className="text-xl">${product.price?.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-lg mb-4">
                    <p>Subtotal</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <p>Total</p>
                    <p>${cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout