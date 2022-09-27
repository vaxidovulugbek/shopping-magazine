import React from 'react'
import { Route, Routes } from 'react-router'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Datail from './Datail'
import Home from './Home'
import Shop from './Shop'

function main() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/:id' element={<Datail />}/>
        <Route path='/shop' element={<Shop />}/>
      </Routes>
      
      
    </>
  )
}

export default main