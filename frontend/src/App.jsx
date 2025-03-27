import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Product from './pages/Product'
import ProductDetails from './components/Product/ProductDetails'
import Checkout from './components/Cart/Checkout'
import OrderConfirmation from './pages/orderConfirmation'
import OrderDetails from './pages/OrderDetails'
import Order from './pages/Order'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="products/:product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orderConfirmation" element={<OrderConfirmation />} />
          <Route path="order/:id" element={<OrderDetails />} />
          <Route path="order" element={<Order/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App