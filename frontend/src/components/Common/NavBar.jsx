import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import Search from './Search'

const NavBar = () => {
    return (
        <nav className='container mx-atuo flex items-center justify-between py-4 px-6'>
            <div>
                <Link to="/" className='text-xl font-medium'>
                    ShootItWithFilm
                </Link>
            </div>
            <div className='hidden md:flex space-x-6'>
                <Link to="#" className='text-700 hover:text-black text-sm font-medium'>
                    Digital Cameras
                </Link>
                <Link to="#" className='text-700 hover:text-black text-sm font-medium'>
                    Film Cameras
                </Link>
                <Link to="#" className='text-700 hover:text-black text-sm font-medium'>
                    Lenses
                </Link>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to="/profile" className='hover:text-black'>
                    <HiOutlineUser className='h-6 w-6 text-700' />
                </Link>
                <button className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-700' />
                    <span className='absolute -top-1 bg-black text-white text-xs rounded-full px-2 py-0.5'>
                        1
                    </span>
                </button>
                <div className='overflow-hidden'>
                    <Search />
                </div>
                <button className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-700' />
                </button>
            </div>
        </nav>
    )
}

export default NavBar