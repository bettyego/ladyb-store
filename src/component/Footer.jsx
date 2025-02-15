import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div>
          <h3 className='text-xl font-semibold'>Betty e-shop</h3>
          <p className='mt-4'>
            you are one step fot for all you need. shop with us and exprience the the best online shopping ever!
          </p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>
            Quick Links
          </h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to = '/' className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to = '/shop' className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to = '/about' className='hover:underline'>About us</Link>
            </li>
            <li>
              <Link to = '/contact us' className='hover:underline'>Contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold'> Follow us</h4>
         <div className='flex space-x-4 mt-4'>
         <a href="" className='hover:text-gray-400'><FaFacebook /></a>
          <a href="" className='hover:text-gray-400'><FaInstagram /></a>
          <a href="" className='hover:text-gray-400'><FaTwitter /></a>
         </div>
         <form className='flex items-center justify-center mt-8'>
          <input type="text" placeholder='Enter your email' className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 '/>
          <button className='bg-purple-600 text-white px-4 py-2 rounded-r-lg border border-gray-600'>Subscribe</button>
        </form>
        </div>
      </div>
        <div className='mt-8 border-t border-gray-700 pt-4'>
          <div className='mx-auto flex flex-col md:flex-row justify-between items-center'>
            <p>
              2024 Betty e-shop All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a href="" className='hover:underline'>Privacy Policy</a>
              <a href="" className='hover:underline'>Terms & Condition</a>
            </div>
          </div>
        </div>
    </footer>
  )
}
