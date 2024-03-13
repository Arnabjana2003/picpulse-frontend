import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {

  return (
    <Link to={"/home"}>
        <div className='w-9 h-9 md:w-11 md:h-11 bg-blue-600 flex justify-center items-center rounded-full overflow-hidden m-1'>
        <span className='text-4xl w:text-5xl mt-2 font-extrabold text-white'>P</span>
    </div>
    </Link>
  )
}

export default Logo