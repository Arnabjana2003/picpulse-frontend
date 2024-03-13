import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
  return (
    <div className=' w-72 md:w-96 flex flex-col p-4 rounded-xl border bg-white shadow-lg'>
        <input className='p-2 md:p-3 border rounded-lg placeholder:text-base md:placeholder:text-lg w-full my-2' placeholder='Mobile number' name='mobile' required/>
        <input className='p-2 md:p-3 border rounded-lg placeholder:text-base md:placeholder:text-lg w-full my-2' placeholder='Password' name='password' required/>
        <button className='hover:bg-blue-400 bg-blue-500 text-lg md:text-xl font-bold text-white rounded-md my-2 p-1 md:p-2 text-center '>Log in</button>
        <hr className='mt-4'/>
        <div className='text-center'>
        <button className='hover:bg-green-400 bg-green-500 text-base md:text-lg font-bold text-white rounded-md my-3 p-1 md:p-2 text-center ' onClick={()=>navigate("/signup")}>Create new account</button>
        </div>
    </div>
  )
}

export default Login