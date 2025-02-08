import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './component/Navbar'
import { Footer } from './component/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import FilterData from './pages/FilterData'


const App = () => {
  const [order,setOrder] =useState (null)
  return (

<>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/shop' element={<Shop/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}/>
  <Route path='/order-confirmation' element={<Order order={order}/>}/>
  <Route path='/filter-data' element={<FilterData/>}/>

  
</Routes>
<Footer/>

</>
  )
}

export default App
