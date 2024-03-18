import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import { useSelector } from 'react-redux'
import friendsIcon from "../assets/friends.svg"
import logoutIcon from '../assets/logoutIcon.svg'

function Nav() {
    const currentUser = useSelector(state=>state.auth?.data)
    const navLinks = [
        {
            name: currentUser?.fullName,
            to:'/home',
        },
        {
            name: <div className='flex gap-2 items-center'><img className='w-7' src={friendsIcon}/><p>Friends</p></div>,
            to:'/friends',
        },
        {
            name: <Logout><div className='flex gap-2 items-center'><img className='w-7' src={logoutIcon}/><p>Logout</p></div></Logout>,
            
        },
    ]
  return (
    <nav>
        {navLinks.map((link,index)=><Link key={index} className='block font-semibold text-slate-700 hover:bg-slate-200 mb-2 p-3 rounded-lg' to={link?.to}>{link?.name}</Link>)}
    </nav>
  )
}

export default Nav