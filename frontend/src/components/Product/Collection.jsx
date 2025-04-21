import React from 'react'
import digitalCollectionImage from "../../assets/digital.jpg";
import filmCollectionImage from "../../assets/film.jpg";
import lensesCollectionImage from "../../assets/lenses.jpg";
import { Link } from 'react-router-dom';

const Collection = () => {
    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8'>
                {/* Digital Camera Collection */}
                <div className="relative flex-1">
                    <img
                        src={digitalCollectionImage}
                        alt="Digital Camera Collection"
                        className="w-full h-[700px] object-cover"
                    />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Digital Camera
                        </h2>
                        <Link
                            to="/products/all?collection=Digital"
                            className="text-gray-900 underline"
                        >
                            Shop
                        </Link>
                    </div>
                </div>
                {/* Film Camera Collection */}
                <div className="relative flex-1">
                    <img
                        src={filmCollectionImage}
                        alt="Film Camera Collection"
                        className="w-full h-[700px] object-cover"
                    />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Film Camera
                        </h2>
                        <Link
                            to="/products/all?collection=Film"
                            className="text-gray-900 underline"
                        >
                            Shop
                        </Link>
                    </div>
                </div>
                {/* Lenses Collection */}
                <div className="relative flex-1">
                    <img
                        src={lensesCollectionImage}
                        alt="Lenses Collection"
                        className="w-full h-[700px] object-cover"
                    />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Lens
                        </h2>
                        <Link
                            to="/products/all?collection=Lens"
                            className="text-gray-900 underline"
                        >
                            Shop
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection