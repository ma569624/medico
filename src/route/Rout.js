import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../component/header/Header'
import Home from '../pages/home/Home'
import About from '../pages/about/About'

const Rout = () => {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route  path='/'  element={<Home />}/>
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rout
