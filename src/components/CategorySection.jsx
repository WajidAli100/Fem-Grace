import React from 'react'
import MenCategory from '../assets/images/Men.jpeg'
import WomenCategory from '../assets/images/HeroGirlimg.webp'
import KidsCategory from '../assets/images/Kid.jpeg'

const categories = [
  {
    title: 'Men',
    imageUrl: MenCategory,
  },
  {
    title: 'Women',
    imageUrl: WomenCategory,
  },
  {
    title: 'Kids',
    imageUrl: KidsCategory,
  },
];
const CategorySection = () => {
  return (
    <div className='container ms-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
      {categories.map((category, index) => (
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
          <img src={category.imageUrl} alt="" className='w-full h-full object-contain rounded-lg shadow-lg' />
          <div className='absolute top-20 left-4'>
            <p className='text-xl font-bold'>{category.title}</p>
            <p className='text-gray-900'>View All</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection