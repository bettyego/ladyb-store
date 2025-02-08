import React, { useState } from 'react'
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true)
  const [shippingToggle, setShippingToggle] = useState(false)
  const [paymentToggle, setPaymentToggle] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [shippingInfo, setShippingInfo]= useState({
    address:'',
    city:'',
    zip:'',
  })


  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate()
  
  const handleOrder =() =>{
    const newOrder = {
      products: cart.products,
      orderNumber:'1234',
      shippingInformation:shippingInfo,
      totalPrice: cart.totalPrice

    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  }


  return (
    <div className='mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-bold mb-4'>Checkout</h2>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
      <div className=' md:w-2/3'>
      <div className='border p-2 mb-6'>
        <div className='flex items-center justify-between'
        onClick={()=> setBillingToggle(!billingToggle)}>
          <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
          {billingToggle ? <FaAngleDown/>: <FaAngleUp/>}
        </div>
        <div>
        <div className={`space-y-4 ${billingToggle ? "block" : "hidden"}`}>
  <form>
    <div className='mb-4'>
      <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
      <input type='text' id='name' name='name' placeholder='Enter Your Name' className='mt-1 p-2 border rounded-md w-full' />
    </div>
    <div className='mb-4'>
      <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
      <input type='email' id='email' name='email'  placeholder='Enter Your Email' className='mt-1 p-2 border rounded-md w-full' />
    </div>
    <div className='mb-4'>
      <label htmlFor='Phone' className='block text-sm font-medium text-gray-700'>Phone</label>
      <input type='text' id='Phone' name='Phone' placeholder='Enter Your Phone Number' className='mt-1 p-2 border rounded-md w-full' />
    </div>
  </form>
</div>

        </div>
      </div>


        {/* Shipping */}
      <div className='border p-2 mb-6'>
        <div className='flex items-center justify-between'
        onClick={()=> setShippingToggle(!shippingToggle)}>
          <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
          {shippingToggle ? <FaAngleDown/>: <FaAngleUp/>}
        </div>
        <div>
        <div className={`space-y-4 ${shippingToggle ? "block" : "hidden"}`}>
  <form>
    <div className='mb-4'>
      <label htmlFor='address' className='block text-sm font-medium text-gray-700'>Address</label>
      <input type='text' id='address' name='address' placeholder='Enter Your Address' className='mt-1 p-2 border rounded-md w-full'
      onChange={(e) => setShippingInfo({...shippingInfo,address: e.target.value})}
       />
    </div>
    <div className='mb-4'>
      <label htmlFor='city' className='block text-sm font-medium text-gray-700'>City</label>
      <input type='city' id='city' name='city'  placeholder='Enter Your City' className='mt-1 p-2 border rounded-md w-full'
      onChange={(e) => setShippingInfo({...shippingInfo,city: e.target.value})}
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='zip code' className='block text-sm font-medium text-gray-700'>Zip code</label>
      <input type='text' id='zip code' name='zip code' placeholder='Enter Your Zip code' className='mt-1 p-2 border rounded-md w-full'
      onChange={(e) => setShippingInfo({...shippingInfo,zip: e.target.value})}
      />
    </div>

  </form>
</div>
        </div>
      </div>

         {/* payment method */}

         <div className='border p-2 mb-6'>
        <div className='flex items-center justify-between'
        onClick={()=> setPaymentToggle(!paymentToggle)}>
          <h3 className='text-lg font-semibold mb-2'>payment Method</h3>
          {paymentToggle ? <FaAngleDown/>: <FaAngleUp/>}
        </div>
        <div>
        <div className={`space-y-4 ${paymentToggle ? "block" : "hidden"}`}>
  
    <div className='mb-2 flex items-center'>
      <input
       type='radio' 
       name='payment'
       checked = {paymentMethod=== 'cod'}
       onChange={()=> setPaymentMethod('cod')}
      
          />
              <label htmlFor='payment'  className='block text-gray-700 ml-2'>Cash On Delivery</label>
    </div>

    <div className='flex items-center mb-2'>
    <input
       type='radio' 
       name='payment'
       checked = {paymentMethod=== 'dc'}
       onChange={()=> setPaymentMethod('dc')}
      
          />
          <label htmlFor='payment'  className='block ml-2  text-gray-700'>Debit Card</label>
    </div>
      {paymentMethod ==='dc' && (
        <div>
          <h3>Debit Card Information</h3>
          <div>
            <label htmlFor="">Card Number</label>
            <input type="text" placeholder='Enter Card Number ' />
          </div>

          <div>
            <label htmlFor="">Card Holder Name</label>
            <input type="text" placeholder='Enter ' />
          </div>

          <div>
           <div>
            <label htmlFor="">Expiring Date</label>
            <input type="text" placeholder='Enter ' />
           </div>
           <div>
            <label htmlFor="">CVV</label>
            <input type="text" placeholder='Enter ' />
           </div>

          </div>
        </div>
      )}
    </div>
    
        </div>
      </div>
        </div>

       <div className='md:w-1/3 bg-white pb-6 rounded-lg shadow-md border-r'>
  <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
  <div className='space-y-4'>
    {cart?.products?.length > 0 ? (
      cart.products.map((product, index) => (
        <div key={product.id || index} className='flex justify-between '>
          <div className='flex items-center'>
            <img src={product.image}
              alt={product.name} 
              className='w-16 h-16 object-contain rounded'
            />
            <div className='ml-4'>
              <h4 className='text-md font-semibold'>{product.name}</h4>
              <p className='text-gray-600'>{product.price} x {product.quantity}</p>
            </div>
          </div>
          <div className='text-gray-800'>
            ${product.price * product.quantity}
          </div>
        </div>
      ))
    ) : (
      <p className='text-gray-600'>No items in cart</p>
    )}
  </div>
  
  <div className='mt-4 border-t pt-4'>
    <div className='flex justify-between'>
      <span>Total Price</span>
      <span className='font-semibold'>
        ${cart.totalPrice.toFixed(2)}
      </span>
    </div>
  </div>

  <button className='w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800'
    onClick={handleOrder}
  >
    Place Order
  </button>
</div>

 
      </div>
        
    </div>
  )
}

export default Checkout