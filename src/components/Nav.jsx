import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import { useSelector } from 'react-redux'

function Nav() {
    const currentUser = useSelector(state=>state.auth?.data)
    const navLinks = [
        {
            name: currentUser?.fullName,
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
            name: <Logout>Logout</Logout>,
            to:'/home',
            icon: "",
            
        },
    ]
  return (
    <nav>
        {navLinks.map((link,index)=><Link key={index} className='block font-semibold text-slate-700 hover:bg-slate-200 mb-2 p-3 rounded-lg' to={link.to}>{link.name}</Link>)}
    </nav>
  )
}

export default Nav