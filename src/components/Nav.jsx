import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const navLinks = [
        {
            name: "Arnab Jana",
            to:'/home',
            icon: ""
        },
        {
            name: "Friends",
            to:'/home',
            icon: ""
        },
        {
            name: "Videos",
            to:'/home',
            icon: ""
        },
        {
            name: "Log out",
            to:'/home',
            icon: ""
        },
    ]
  return (
    <nav>
        {navLinks.map((link,index)=><Link key={index} className='block font-semibold text-slate-700 hover:bg-slate-200 mb-2 p-3 rounded-lg' to={link.to}>{link.name}</Link>)}
    </nav>
  )
}

export default Nav