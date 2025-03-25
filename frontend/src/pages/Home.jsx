import React from 'react'
import Main from '../components/Layout/Main'
import Collection from '../components/Product/Collection'
import ProductDetails from '../components/Product/ProductDetails'

const Home = () => {
  return (
    <div>
        <Main />
        <Collection />
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetails />
    </div>
  )
}

export default Home