import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    FaBoxOpen,
    FaClipboardList,
    FaSignOutAlt,
    FaStore,
    FaUser,
} from 'react-icons/fa'
import { useDispatch } from "react-redux"
import { logout } from "../../redux/slice/authSlice"
import { clearCart } from "../../redux/slice/cartSlice"

const Sidebar = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCart());
        navigate("/");
    }

    return (
        <div className='p-6'>
            <nav className="flex flex-col space-y-2">
                <NavLink
                    to="/admin/user"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaUser />
                    <span>User</span>
                </NavLink>
                <NavLink
                    to="/admin/product"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaBoxOpen />
                    <span>Product</span>
                </NavLink>
                <NavLink
                    to="/admin/order"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaClipboardList />
                    <span>Order</span>
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                    }
                >
                    <FaStore />
                    <span>Shop</span>
                </NavLink>
            </nav>
            <div className="mt-6">
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar