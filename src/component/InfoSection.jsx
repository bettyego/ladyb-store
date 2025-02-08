import React from 'react'
import { FaHeadset,FaMoneyBillWave, FaShippingFast, FaLock, FaTag , FaMoneyCheckAlt, FaGift,FaTruck, FaShieldAlt, FaExchangeAlt,FaAward } from 'react-icons/fa'

const InfoSection = () => {
const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: 'Free Shipping',
      description: 'Free shipping on all orders.',
    },
    {
      icon: <FaMoneyCheckAlt className="text-3xl text-green-600" />,
      title: '100% Money Back',
      description: 'Full refund if you are not satisfied.',
    },
    {
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      title: 'Support 24/7',
      description: 'We are here to assist you anytime.',
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-600" />,
      title: 'Secure Payment',
      description: 'Your payment information is safe with us.',
    },
    {
      icon: <FaGift className="text-3xl text-yellow-600" />,
      title: 'Exclusive Offers',
      description: 'Get access to exclusive discounts and deals.',
    },
    {
      icon: <FaTruck className="text-3xl text-orange-600" />,
      title: 'Fast Delivery',
      description: 'Get your products delivered in no time.',
    },
    {
      icon: <FaExchangeAlt className="text-3xl text-teal-600" />,
      title: 'Easy Returns',
      description: 'Hassle-free returns within 30 days.',
    },
    {
      icon: <FaAward className="text-3xl text-indigo-600" />,
      title: 'Quality Guaranteed',
      description: 'We ensure the best quality products.',
    },
    
]

  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='mx-auto grid grid-cols-2 md:grid-cols-4 lg-grid-cols-5 gap-4'>
            {infoItems.map((item, index) => (
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    
                        <h3 className='mt-4 text-xl font-semibold '>{item.title}</h3>
                        <p className='mt-2 text-gray-600'>{item.description}</p>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection