import React from 'react'
import Mancategory from '../assets/images/men4.webp'
import Womencategory from '../assets/images/women7.webp'
import Kidcategory from '../assets/images/kids.jpeg'


const categories = [
    {
        title: 'Men',
        imageUrl: Mancategory,
    },
    {
        title: 'Women',
        imageUrl: Womencategory,
    },
    {
        title: 'Kids',
        imageUrl: Kidcategory,
    },
]

 const CategorySection = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
   {categories.map((category, index) => (
    <div key={index} className='relative h-64 transform transition-tansform duration-300 hover:scale-105'>
        <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover rounder-lg shadow-md' />
        <div className='absolute top-20 left-12'>
            <p className='text-xl text-black font-bold '>{category.title} </p>
            <p className='text-pink-600'>View All</p>

        </div>
    </div>
))}

    </div>
  )
}

export default CategorySection
