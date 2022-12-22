import React from 'react'
import { NavLink } from 'react-router-dom'

const Nlink = () => {
  return (
    <div>
        <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/contect">contect</NavLink></li>
        </ul>

    </div>
  )
}

export default Nlink