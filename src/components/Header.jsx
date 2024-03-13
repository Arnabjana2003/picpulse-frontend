import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className='bg-white px-2 fixed top-0 right-0 left-0'>
        <header className='grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12'>
            <div className='hidden col-span-2 lg:col-span-3 md:flex items-center'>
                <div><Logo/></div>
                <div className='ml-2'><SearchBar/></div>
            </div>
            <div className='md:hidden col-span-6 flex items-center justify-between'>
                <Logo/>
                <div className='flex'>
                    <p className='mr-2'>Search</p>
                    <p>Menu</p>
                </div>
            </div>
            <div className='col-span-6 flex items-center justify-evenly'>
                <p>Home</p>
                <p>Video</p>
                <p>Friends</p>
            </div>
            <div className='hidden md:flex justify-center items-center lg:hidden col-span-1'>
                <p>Menu</p>
            </div>
            <div className='hidden col-span-3 lg:flex items-center justify-evenly'>
                <p>Menu</p>
                <p>Profile</p>
            </div>
        </header>
    </div>
  )
}

export default Header