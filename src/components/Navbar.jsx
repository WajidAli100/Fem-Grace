import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/productSlice'

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }

    const openSignUp = () => {
        setIsLogin(false)
        setIsModalOpen(true)
    }

    const openLogin = () => {
        setIsLogin(true)
        setIsModalOpen(true)
    }

    const products = useSelector((state) => state.cart.products)
    return (
        <nav className='bg-white shadow-md'>
            <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex items-center justify-between'>
                <div className='text-lg font-bold'>
                    <Link to="/">Fem Grace</Link>
                </div>
                <div className='relative flex-1 mx-4'>
                    <form onSubmit={handleSearch}>
                        <input type={search} placeholder="Search Product"
                            className='w-full border py-2 px-4' onChange={(e) => setSearch(e.target.value)} />
                        <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                    </form>
                </div>
                <div className='flex items-center space-x-3'>
                    <Link to="/cart" className='relative'>
                        <FaShoppingCart className='text-lg' />
                        {products.length > 0 && (
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full'>
                                {products.length}
                            </span>
                        )}
                    </Link>
                    <button className='hidden md:block'
                        onClick={() => setIsModalOpen(true)}>
                        Login | Register
                    </button>
                    <button className='block md:hidden'>
                        <FaUser />
                    </button>
                </div>
            </div>
            {/* Second NavBar */}
            <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
                <Link to="/" className='hover:underline'>
                    Home
                </Link>
                <Link to="/shop" className='hover:underline'>
                    Shop
                </Link>
                <Link to="/contact" className='hover:underline'>
                    Contact
                </Link>
                <Link to="/about" className='hover:underline'>
                    About
                </Link>
            </div>
            {/* Model */}
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
            </Modal>
        </nav >
    )
}

export default Navbar