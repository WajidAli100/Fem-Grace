import React from 'react'
import { Categories, mockData } from '../assets/mockData'
import hero_image from '../assets/Images/heroGirl.jpg'
import InfoSection from '../components/infoSection'
import CategorySection from '../components/CategorySection'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setProduct } from '../redux/productSlice'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'


const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    useEffect(() => {
        dispatch(setProduct(mockData))
    }, [])
    return (
        <div>
            <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
                <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
                    <div className='w-full md:w-3/12'>

                        <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
                        <ul className='space-y-4 bg-gray-100 p-3 border'>
                            {Categories.map((category, index) => (
                                <li key={index} className='flex items-center text-sm font-medium'>
                                    <div className='w-2 h-2 border border-red-600 rounded-full mr-2'>
                                    </div>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                        <img src={hero_image} alt="hero" className='w-full h-full' />
                        <div className=' absolute top-16 left-8'>
                            <p className='text-gray-100 mb-4'>Shop with Confidence</p>
                            <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>WELCOME TO <span class="block lg:inline">FEMGRACE</span></h2>
                            <p className='text-xl mt-2.5 font-bold text-gray-900'>MILLIONS+ PRODUCTS</p>
                            <button className='bg-yellow-400 px-8 py-1.5 text-white mt-4 hover:bg-yellow-600 
                        transform transition-transform duration-300 hover:scale-105  '>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <InfoSection />
                <CategorySection />
                <div className='container mx-auto py-12'>
                    <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                        {products.products.slice(0, 5).map((product) => (
                            <ProductCard product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <Shop />
        </div>
    )
}

export default Home