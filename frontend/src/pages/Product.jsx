import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Filter from '../components/Product/Filter'
import Sort from '../components/Product/Sort'
import ProductGrid from '../components/Product/ProductGrid'

const Product = () => {
    const [products, setProducts] = useState([])
    const filterRef = useRef(null)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen)
    }

    const handleClickOutside = (e) => {
        if (filterRef.current && !filterRef.current.contains(e.target)) {
            setIsFilterOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        document.removeEventListener("mousedown", handleClickOutside)
    })

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    id: 1,
                    name: "Fujifilm X100V",
                    price: 1500,
                    images: [{ url: "https://www.mpb.com/media-service/1606dcec-3cf0-4ff3-a27e-d6742931e8b0" }]
                },
                {
                    id: 2,
                    name: "Contax T2",
                    price: 1250,
                    images: [{ url: "https://www.mpb.com/media-service/f3d3f357-1592-4c60-9e67-031926d0f7d2" }]
                },
                {
                    id: 3,
                    name: "Leica Q3",
                    price: 5500,
                    images: [{ url: "https://www.mpb.com/media-service/9929caa3-18e7-4c5f-aebb-40607fc24376" }]
                }
            ]
            setProducts(fetchedProducts)
        }, 1000)
    })
    return (
        <div className='flex flex-col lg:flex-row'>
            {/* Mobile Filter button */}
            <button
                onClick={toggleFilter}
                className="lg:hidden border p-2 flex justify-center items-center"
            >
                <FaFilter className="mr-2" />
            </button>
            {/* Filter Sidebar */}
            <div ref={filterRef}
                className={`${isFilterOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <Filter />
            </div>
            <div className='flex-grow p-4'>
                <h2 className='text-2xl uppercase mb-4'>All Products</h2>
                {/* Sort Options */}
                <Sort />

                {/* Product Grid */}
                <ProductGrid products={products} />
            </div>
        </div>
    )
}

export default Product