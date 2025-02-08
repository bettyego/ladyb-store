import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Order = ({ order = {} }) => {
    const navigate = useNavigate()
  return (
    <div className='mx-auto py-8 md:px-16 px-4 lg:px-24'>
      <h2 className='text-2xl font-semibold mb-4'>Thank you for your order</h2>
      <p>Your order has been placed successfully, you will receive an email shortly</p>
      
      <div className='mt-6 p-4 border rounded-lg bg-gray-100'>
        <h3 className='text-lg font-semibold mb-2'>Order Summary</h3>
        <p>Order Number: {order?.orderNumber || 'N/A'}</p>

        <div>
          <h4 className='text-md font-semibold mb-2'>Shipping Information</h4>
          <p>{order?.shippingInformation?.name }</p>
          <p>{order?.shippingInformation?.address}</p>
          <p>{order?.shippingInformation?.city }</p>
          <p>{order?.shippingInformation?.zip }</p>
        </div>

        <div className='mt-4'>
          <h4 className='text-md font-semibold mb-2'>Products Ordered</h4>
          {Array.isArray(order?.products) && order.products.length > 0 ? (
            order.products.map((product, index) => (
              <div key={product.id || index} className='flex justify-between mt-2'>
                <p>{product.name} x {product.quantity}</p>
                <p>${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>No products ordered</p>
          )}
        </div>

        <div className='mt-4 flex justify-between'>
          <span>Total price: </span>
          <span className='font-semibold'>${order?.totalPrice?.toFixed(2) || '0.00'}</span>
        </div>

        <div className='mt-6'>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600 ">Order Tracking</button>
          <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded hover:bg-red-800"
          onClick={() => navigate('/')}>
            Continue Shopping</button>
        </div>
      </div>
    </div>
  )
}

export default Order
