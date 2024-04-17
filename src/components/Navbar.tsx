import React from 'react'
import "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li><NavLink to="/" className={({isActive})=>{return isActive ? "active" : undefined}}>Home</NavLink></li>
            <li><NavLink to="/blogs" className={({isActive})=>{return isActive ? "active" : undefined}}>Blogs</NavLink></li>
            <li><NavLink to="/login" className={({isActive})=>{return isActive ? "active" : undefined}}>Login</NavLink></li>        
        </ul>        
    </nav> 
  )
}
