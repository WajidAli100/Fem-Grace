import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import FilterData from './pages/FilterData'
import Home from "./pages/Home"
import Order from './pages/Order'
import ProductDetails from './pages/ProductDetails'
import Shop from "./pages/Shop"

function App() {
  const [order, setOrder] = useState(null)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />}></Route>
        <Route path="/order-confirmation" element={<Order order={order} />}></Route>
        <Route path="/filter-data" element={<FilterData />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
