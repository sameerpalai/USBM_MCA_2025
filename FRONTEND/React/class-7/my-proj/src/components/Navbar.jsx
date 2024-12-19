import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className='border-2 shadow-2xl '>
        <ul className='flex w-full justify-around' >
            <li>
                <NavLink to="/" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>About</NavLink>
            </li>
            <li>
            <NavLink to="/contact" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>Contact</NavLink>
            </li>
            <li>
            <NavLink to="/blog" className={({isActive}) => `${isActive ? "text-blue-500" : ""}`}>Blog</NavLink>
            </li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar