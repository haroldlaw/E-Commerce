import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomePage = () => {

    const orders = [{
        id: "001",
        user: {
            name: "Harold"
        },
        totalPrice: 1000,
        status: "Processing"
    },{
        id: "002",
        user: {
            name: "Darren"
        },
        totalPrice: 1500,
        status: "Processing"
    }]

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">Revenue</h2>
                    <p className="text-2xl">$1000</p>
                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">All Orders</h2>
                    <p className="text-2xl">10</p>
                    <Link to="/admin/order" className="text-blue-500 hover:underline">
                        Manage Orders
                    </Link>
                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold">All Products</h2>
                    <p className="text-2xl">50</p>
                    <Link
                        to="/admin/product"
                        className="text-blue-500 hover:underline"
                    >
                        Manage Products
                    </Link>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-gray-500">
                        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                            <tr>
                                <th className="py-3 px-4">Order ID</th>
                                <th className="py-3 px-4">User</th>
                                <th className="py-3 px-4">Total Price</th>
                                <th className="py-3 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr
                                        key={order.id}
                                        className="border-b hover:bg-gray-50 cursor-pointer"
                                    >
                                        <td className="p-4">{order.id}</td>
                                        <td className="p-4">{order.user.name}</td>
                                        <td className="p-4">{order.totalPrice.toFixed(2)}</td>
                                        <td className="p-4">{order.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-4 text-center text-gray-500">
                                        No recent orders found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminHomePage