import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import searchIcon from '../assets/searchIcon.svg'
import { useNavigate } from 'react-router-dom'
import userApis from '../Backend apis/userApis'
import { updateSearchHistory } from '../store/authSlice'

function SearchBar() {
  const history = useSelector(state=>state.auth?.searchHistory)
  const [text,setText] = useState("")
  const [showHistory,setShowHistory] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSearch = ()=>{
    setShowHistory(false)
    if(!text) return;
    setText("")
    navigate(`/search/result/${text}`)
  }
  const removeHistory = (query)=>{
      userApis.removeHistory(query)
      .then((res)=>{
        dispatch(updateSearchHistory([...res.data.searchHistory].reverse()))
      })
  }
  return (
    <div>
        <div className='relative'>
        <input placeholder='Search' className='p-2 pl-4 rounded-full w-full bg-slate-100 outline-none' onClick={()=>setShowHistory((prev)=>!prev)}  value={text} onChange={(e)=>setText(e.target.value)} />
        <div className='absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white' onClick={handleSearch}>
          <img src={searchIcon} className='w-6 p-1'/>
        </div>

        {showHistory && <section className='hidden md:block z-10 absolute bg-white mt-1 right-0 left-0 max-h-72 w-60 rounded-md rounded-tl-none overflow-y-auto p-3 shadow-md'>
          {!history.length && <p className='text-center'>No History</p>}
          <ul>
            {history.map((item,index)=><li key={index} className='  w-full flex justify-between items-center'>
              <p className='hover:bg-slate-100 p-2 rounded-md' onClick={()=>{setText(item);setShowHistory(false)}}>{item}</p><span className='pl-2' onClick={()=>removeHistory(item)}>x</span>
            </li>)}
          </ul>
          
        </section>}
        </div>
    </div>
  )
}

export default SearchBar