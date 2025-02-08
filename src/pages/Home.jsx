import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/mockData'
import HeroImage from '../assets/images/pix.webp'
import InfoSection from '../component/InfoSection'
import  CategorySection from '../component/CategorySection'
import { setProducts } from '../redux/ProductSlice'
import {useDispatch, useSelector } from 'react-redux'
import ProductCard from '../component/productCard'
import Shop from '../pages/Shop'



const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    useEffect(() => {
        dispatch(setProducts(mockData));
    }, [])
    
  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 '>
        <div className='mx-auto py-4 flex flex-col md:flex-row space-x-2'>
            <div className='w-2/8 md:w3/19'>
                <div className=' bg-purple-600 text-white text-xs font-bold px-2 py-2.5'> SHOP BY CATEGORIES</div>
                    <ul className='space-y-4 bg-gray-100 p-3 border'>
                        {Categories.map((category, index) => (
                            <li key={index} className='flex items-center text-sm font-medium'>
                                <div className='w-2 h-2 border border-purple-500 rounded-full mr-2'></div>
                                {category}
                            </li>
                        ))}
                    </ul>
                    </div>

                        <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                             <img src={HeroImage} alt="" className='hero-img w-full h-full  object-fit   '  /> 
                         <div className='absolute top-16 left-8'> 
                            <p className='text-gray-600 mb-4'>Shop with Betty</p>
                            <h2 className='font-bold '>WELCOME TO B-STORE</h2>
                            <p className='mt-2.5  text-gray-800'>MILLONS + PRODUCTS</p>
                            <button className='bg-purple-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>
                                SHOP NOW
                            </button>
                         </div>
                            
                         </div>
                    </div>
                    <InfoSection />
                    <CategorySection />

                    <div className='container mx-auto py-12'>
                        <h2 className='text-3x1 font-bold mb-6 text-center'>TOP PRODUCTS</h2>
                        <div className='grid grid-col-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                            {products.products.slice(0,5) .map(((product)=>(
                            <ProductCard product= {product}/>

                            )))}
                        </div>
                    </div>
                </div>
                    <Shop />
                </div>
    
  )
}

export default Home