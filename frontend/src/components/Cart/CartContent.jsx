import React from 'react'
import { RiDeleteBin3Line } from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { removeFromCart, updateCartItemQuantity } from "../../redux/slice/cartSlice";

const CartContent = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (productId, delta, quantity) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId
        })
      );
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart({ productId, guestId, userId }));
  };

  return (
    <div>
      {
        cart.products.map((product, index) => (
          <div key={index} className='flex items-start justify-between py-4 border-b'>
            <div className='flex items-start'>
              <img
                src={`http://localhost:9000${product.image}`}
                alt={product.name}
                className='w-16 h-20 sm:w-20 sm:h-24 object-cover mr-4 rounded'
              />
              <div>
                <h3>{product.name}</h3>
                <div className='flex items-center mt-2'>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        -1,
                        product.quantity
                      )
                    }
                    className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                  <span className='mx-4'>{product.quantity}</span>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        1,
                        product.quantity
                      )
                    }
                    className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium">${product.price.toLocaleString()}</p>
            </div>
            <button onClick={() =>
              handleRemoveFromCart(
                product.productId
              )
            }>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        ))}
    </div>
  )
}

export default CartContent