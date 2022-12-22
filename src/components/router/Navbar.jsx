import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nlink from './Nlink'
import Home from './Home'
import About from './About'
import Contect from './Contect'
const Navbar = () => {
  return (
    <div>
        <BrowserRouter>
        <Nlink/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route  path='/about' element={<About/>}/>
            <Route  path='/contect' element={<Contect/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navbar