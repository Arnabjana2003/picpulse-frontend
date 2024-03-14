import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userApis from '../Backend apis/userApis'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'

function Login() {
  const initialData = {mobile:"",password:""}
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data,setData] = useState(initialData)
    const handleLogin = (e)=>{
      e.target.disabled = true
      if(!data.mobile || !data.password){
        e.target.disabled = false
        return alert("All fiels are required");
      }
      userApis.login(data)
      .then((res)=>{
        console.log("Login data:",res.data);
        localStorage.setItem("accessToken",res.data?.accessToken)
        dispatch(login(res.data))
        // alert("Login successful")
      })
      .catch((err)=>alert(err.response.data.message))
      .finally(()=>e.target.disabled=false)
    }
  return (
    <div className=' w-72 md:w-96 flex flex-col p-4 rounded-xl border bg-white shadow-lg'>
        <input className='p-2 md:p-3 border rounded-lg placeholder:text-base md:placeholder:text-lg w-full my-2' placeholder='Mobile number' name='mobile' value={data.mobile} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} required/>
        <input className='p-2 md:p-3 border rounded-lg placeholder:text-base md:placeholder:text-lg w-full my-2' placeholder='Password' name='password' value={data.password} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} required/>
        <button className='hover:bg-blue-400 bg-blue-500 text-lg md:text-xl font-bold text-white rounded-md my-2 p-1 md:p-2 text-center ' onClick={handleLogin}>Log in</button>
        <hr className='mt-4'/>
        <div className='text-center'>
        <button className='hover:bg-green-400 bg-green-500 text-base md:text-lg font-bold text-white rounded-md my-3 p-1 md:p-2 text-center ' onClick={()=>navigate("/signup")}>Create new account</button>
        </div>
    </div>
  )
}

export default Login