import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import Search from './Search'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from "react-icons/io"

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const toggleNavCartDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    };

    return (
        <div>
            <nav className='container mx-atuo flex items-center justify-between py-4 px-6'>
                <div>
                    <Link to="/" className='text-xl font-medium'>
                        ShootItWithFilm
                    </Link>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="/products/all?collection=Digital camera" className='text-700 hover:text-black text-md font-medium'>
                        Digital Camera
                    </Link>
                    <Link to="/products/all?collection=Film camera" className='text-700 hover:text-black text-md font-medium'>
                        Film Camera
                    </Link>
                    <Link to="/products/all?collection=Lens" className='text-700 hover:text-black text-md font-medium'>
                        Lens
                    </Link>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white">Admin</Link>
                    <Link to="/profile" className='hover:text-black'>
                        <HiOutlineUser className='h-6 w-6 text-700' />
                    </Link>
                    <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                        <HiOutlineShoppingBag className='h-6 w-6 text-700' />
                        <span className='absolute -top-1 bg-black text-white text-xs rounded-full px-2 py-0.5'>
                            1
                        </span>
                    </button>
                    <div className='overflow-hidden'>
                        <Search />
                    </div>
                    <button onClick={toggleNavCartDrawer} className='md:hidden'>
                        <HiBars3BottomRight className='h-6 w-6 text-700' />
                    </button>
                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
            {/* Mobile Navigation  */}
            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleNavCartDrawer}>
                        <IoMdClose className="h-6 w-6 text-gray-600" />
                    </button>
                </div>
                <div className='p-4'>
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>
                    <nav className='space-y-4'>
                        <Link to="/products/all?collection=Digital camera" onClick={toggleNavCartDrawer} className="block text-gray-600 hover:text-black">
                            Digital Camera
                        </Link>
                        <Link to="/products/all?collection=Film camera" onClick={toggleNavCartDrawer} className="block text-gray-600 hover:text-black">
                            Film Camera
                        </Link>
                        <Link to="/products/all?collection=Lens" onClick={toggleNavCartDrawer} className="block text-gray-600 hover:text-black">
                            Lens
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar