import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Emptycart from '../assets/images/emptycart.jpeg';
import { FaTrashAlt} from 'react-icons/fa';
import Modal from '../component/Modal';
import ChangeAddress from '../component/ChangeAddress';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const cart = useSelector((state) => state.cart || { products: [] });
  const [address, setAddress] =useState('main stret,0019')
  const [isModelOpen, setIsModelOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate ()

  return (
    <div className='mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-500">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          <div className=' md:w-2/3'>
            <div className="font-bold flex justify-between border-b items-center mb-4 text-xs">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product, index) => (
                  <div 
                  key={product.id} 
                  className="flex items-center justify-between border-b p-3">
                    <div className=" md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className='flex-1 ml-4'>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-10">
                      <p>${product.price.toFixed(2)}</p>
                      <div className="flex items-center justify-center border">
                        <button className="text-xl font-bold px-1.5 border-r"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        >-</button>

                        <p className='text-xl px-2'>{product.quantity}</p>
                        <button className="text-xl px-1 border-1"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        >+</button>
                        

                      </div>
                      <p className=''>${(product.quantity * product.price).toFixed(2)}</p>
                      <button className="text-red-500 hover:text-red-700"
                      onClick={()=> dispatch(removeFromCart(product.id))}>

                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
            <h3 className='text-sm font-semibold mb-5 '>CART TOTAL</h3>
              <div className='flex justify-between mb-5 border-b pb-1 bg-purple-500'>
                <span className='text-sm '>TOTAL ITEMS:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className='mb-4 border-b pb-2'>
                <p>Shipping:</p>
                <p className='ml-2'>
                  Shipping to{" "}
                  <span className='text-xs font-bold'>{address}</span>
                </p>
                <button className='text-blue-500 hover:underline mt-1 ml-2'
                onClick={() => setIsModelOpen(true)}>
                  Change address
                  </button>
              </div>
              <div className='flex justify-between mb-4'>
                <span>Total Price:</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
               <button className='w-full bg-purple-600 text-white py-2 hover:bg-purple-800'
               onClick={() => navigate('/checkout')}
               >
                
                procced to checkout</button>

            </div>
          </div>
          <Modal
          isModelOpen={isModelOpen}
          setIsModelOpen={setIsModelOpen}>
             <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
          </Modal>
         
        </div>
      ) : (
        <div className="flex justify-center ">
          <img src={Emptycart} alt="Empty Cart" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
