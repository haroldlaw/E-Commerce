import React from 'react'
import { RiDeleteBin3Line } from "react-icons/ri"

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Sony Alpha A6700",
      quantity: 1,
      price: 1500,
      image: "https://www.mpb.com/media-service/341f363e-50bc-4ace-a059-5804cd2fa966"
    },
    {
      productId: 2,
      name: "Sony Alpha A7C II",
      quantity: 1,
      price: 1900,
      image: "https://www.mpb.com/media-service/59f7d773-5909-4ffa-9420-7565d4d57ba8"
    }
  ]
  return (
    <div>
      {
        cartProducts.map((product, index) => (
          <div key={index} className='flex items-start justify-between py-4 border-b'>
            <div className='flex items-start'>
              <img
                src={product.image}
                alt={product.name}
                className='w-16 h-20 sm:w-20 sm:h-24 object-cover mr-4 rounded'
              />
              <div>
                <h3>{product.name}</h3>
                <div className='flex items-center mt-2'>
                  <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                  <span className='mx-4'>{product.quantity}</span>
                  <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                </div>
              </div>
            </div>
            <div>
              <p>${product.price.toLocaleString()}</p>
            </div>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
            </button>
          </div>
        ))}
    </div>
  )
}

export default CartContent