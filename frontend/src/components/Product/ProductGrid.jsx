import React from 'react'
import { Link } from 'react-router-dom'

const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {products.map((product, index) => (
                <Link key={index} to={`/product/${product.id}`} className="block">
                    <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-lg">
                            <img
                                src={`http://localhost:9000${product.images[0].url}`}
                                alt={product.images[0].alText || product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
                        <p className="text-gray-600 font-semibold">$ {product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductGrid
