import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            const mockOrder = [{
                id: "001",
                createdAt: new Date(),
                shippingAddress: { street:"52 Lios An Uisce", city: "Galway", country: "Ireland" },
                items: [{
                    name: "Fujifilm X100V",
                    image: "https://www.mpb.com/media-service/1606dcec-3cf0-4ff3-a27e-d6742931e8b0"
                }],
                price: 1500,
                isPaid: true
            }]
            setOrders(mockOrder)
        })
    }, 1000)

    const handleRowClick = (orderId) => {
        navigate(`/order/${orderId}`)
    }

    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-bold mb-6'>
                Orders
            </h2>
            <div className='relative shadow-md sm:rounded-lg overflow-hidden'>
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                        <tr>
                            <th className="py-2 px-4 sm:py-3">Item</th>
                            <th className="py-2 px-4 sm:py-3">Order ID</th>
                            <th className="py-2 px-4 sm:py-3">Order Placed</th>
                            <th className="py-2 px-4 sm:py-3">Shipping Address</th>
                            <th className="py-2 px-4 sm:py-3">Quantity</th>
                            <th className="py-2 px-4 sm:py-3">Price</th>
                            <th className="py-2 px-4 sm:py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr
                                    key={order.id}
                                    onClick={() => handleRowClick(order.id)}
                                    className="border-b hover:border-gray-50 cursor-pointer"
                                >
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        <img src={order.items[0].image} alt={order.items[0].name}
                                            className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg' />
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                                        {order.id}
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900">
                                        {new Date(order.createdAt).toLocaleDateString()}{" "}
                                        {new Date(order.createdAt).toLocaleTimeString()}
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900">
                                        {order.shippingAddress
                                            ? `${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.country}`
                                            : "N/A"}
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                                        {order.items.length}
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                                        ${order.price}
                                    </td>
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        <span
                                            className={`${order.isPaid
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                } px-2 py-1 rounded-full text-xs sm:text-sm font-medium `}
                                        >
                                            {order.isPaid ? "Paid" : "Pending"}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                                    No Orders
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order