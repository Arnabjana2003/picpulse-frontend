import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userApis from '../Backend apis/userApis'

function Signup() {
    const initialData = {fullName:"",mobile:"",password:"",dob:"",gender:""}
    const navigate = useNavigate()
    const [data,setData] = useState(initialData)
    const handleSubmit = (e)=>{
        e.target.disabled = true
        if(!(data.fullName && data.mobile && data.password && data.dob && data.gender)){
            e.target.disabled = false
            return alert("All fields are required")
        }
        userApis.register(data)
        .then(()=>navigate("/login"))
        .catch((err)=>{
            alert(err.response.data.message)
        })
        .finally(()=>{
            e.target.disabled = false
        })
    }
    return (
        <div className=' w-72 md:w-96 flex flex-col p-4 rounded-xl border bg-white shadow-lg'>
            <h2 className='text-center mb-3 text-lg md:text-xl font-semibold text-slate-500'>Sign up</h2>
            <hr/>
            <input type='text' className='p-2 md:p-3 border rounded-lg placeholder:text-base md:placeholder:text-lg w-full my-2' placeholder='Full name' name='fullName' onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} value={data.fullName} required/>
            <input type='number' className='p-2 md:p-3 border rounded-lg placeholder:text-base md:placeholder:text-lg w-full my-2' placeholder='Mobile number' name='mobile' onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} value={data.mobile} required/>
            <input className='p-2 md:p-3 border rounded-lg placeholder:text-base md:placeholder:text-lg w-full my-2' placeholder='New password' type='password' name='password' onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} value={data.password} required/>
            <label className='text-slate-600 mt-1' htmlFor='dob'>Date of birth</label>
            <input className='mb-2 text-slate-400 border p-2 rounded-lg' type='date' name='dob' id='dob' onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} value={data.dob} required/>
            <label className='text-slate-600 mt-1'>Gender</label>
            <div className='mb-2 text-slate-400 p-2 rounded-lg flex justify-between'>
               <div className='flex items-center justify-between border rounded-md p-1 px-2'>
               <label htmlFor='male'>Male</label>
                <input type='radio'name='gender' id='male'className=' ml-4 md:ml-7' onChange={(e)=>setData({...data,[e.target.name]:"male"})} checked={data.gender === "male"?true:false}/>
               </div>
               <div className='flex items-center justify-between border rounded-md p-1 px-2'>
               <label htmlFor='female'>Female</label>
                <input type='radio'name='gender' id='female'className=' ml-4 md:ml-7' onChange={(e)=>setData({...data,[e.target.name]:"female"})} checked={data.gender === "female"?true:false}/>
               </div>
               <div className='flex items-center justify-between border rounded-md p-1 px-2'>
               <label htmlFor='other'>Other</label>
                <input type='radio'name='gender' id='other'className=' ml-4 md:ml-7' onChange={(e)=>setData({...data,[e.target.name]:"other"})} checked={data.gender === "other"?true:false}/>
               </div>
            </div>
            <button className='disabled:bg-green-300 hover:bg-green-400 bg-green-500 text-lg md:text-xl font-bold text-white rounded-md my-2 p-1 md:p-2 text-center ' onClick={handleSubmit}>Create new account</button>
            <hr className='mt-4'/>
            <div className='text-center'>
            <button className='hover:bg-blue-400 bg-blue-500 text-base md:text-lg font-bold text-white rounded-md my-3 p-1 md:p-2 text-center ' onClick={()=>navigate("/login")}>Log in</button>
            </div>
        </div>
      )
}

export default Signup