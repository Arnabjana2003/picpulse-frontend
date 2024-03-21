import React from 'react'
import ProfileImgIcon from '../components/ProfileImgIcon'
import Logout from '../components/Logout'
import logoutIcon from "../assets/logoutIcon.svg"
import profileIcon from "../assets/profileIcon.svg"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function MobileMenu() {
    const auth = useSelector(state=>state.auth)
  return (
    <div className='md:hidden pt-4 border p-2 relative'>
      <p className='absolute top-0 left-1' onClick={()=>window.history.back()}>Go back</p>
        <div className='flex gap-2 items-center hover:bg-slate-50 rounded-md p-2 mt-4'>
        <Link to={`/profile/${auth?.data?._id}`} className='flex gap-2 items-center'><img className='w-6' src={profileIcon}/><p>Arnab Jana</p></Link>
        </div>
        <div className='flex gap-2 items-center hover:bg-slate-50 rounded-md p-2'>
        <Logout><div className='flex gap-2 items-center'><img className='w-7' src={logoutIcon}/><p>Logout</p></div></Logout>
        </div>
    </div>
  )
}

export default MobileMenu