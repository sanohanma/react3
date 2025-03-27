import { useState } from 'react'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import ContactUs from '../pages/conatactUs/ContactUs'
import Blog from '../pages/blog/Blog'
import Cart from '../pages/cart/Cart'
import CatalogPage from '../pages/catalogPage/CatalogPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'


export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contactsUs' element={<ContactUs/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/catalog' element={<CatalogPage/>} />
        <Route path='*'element={<NotFoundPage/>} />
      </Routes>
  )
}
