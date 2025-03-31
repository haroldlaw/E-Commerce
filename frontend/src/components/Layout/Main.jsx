import React from 'react'
import mainImg from '../../assets/main.jpg'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <section className='relative'>
            <img src={mainImg} alt="Main" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center'>
                <div className='text-center text-white p-6'>
                    <Link to="/products/all" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>
                        Shop Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Main