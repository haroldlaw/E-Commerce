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
import OrderDetails from './pages/OrderDetails'
import Order from './pages/Order'
import AdminLayout from './components/Admin/AdminLayout'
import AdminHomePage from './pages/AdminHomePage'
import UserManagement from './components/Admin/UserManagement'
import ProductManagement from './components/Admin/ProductManagement'
import EditProduct from './components/Admin/EditProduct'
import OrderManagement from './components/Admin/OrderManagement'
import OrderConfirmation from './pages/OrderConfirmation'

import { Provider } from "react-redux";
import store from "./redux/store";
import ProtectedRoute from './components/Common/ProtectedRoute'

const App = () => {
  return (
    <Provider store={store}>
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
            <Route path="order" element={<Order />} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute role="admin"><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminHomePage />} />
            <Route path="user" element={<UserManagement />} />
            <Route path="product" element={<ProductManagement />} />
            <Route path="product/:id/edit" element={<EditProduct />} />
            <Route path="order" element={<OrderManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App