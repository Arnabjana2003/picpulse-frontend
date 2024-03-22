import React from 'react'
import { useSelector } from 'react-redux'
import backIcon from "../assets/backIcon.svg"

function ViewPhotoPage() {
    const url = useSelector(state=>state.viewedPost?.post?.contentUrl)
    console.log(url)
  return (
    <div className='w-screen h-screen -mt-[20px] flex justify-center items-center bg-black text-white'>
        <div className='w-screen md:w-[100vh]'>
            <img src={url} className='w-full'/>
        </div>
        <p className='absolute top-1 left-1' onClick={()=>window.history.back()}><img src={backIcon} className='w-5'/></p>
    </div>
  )
}

export default ViewPhotoPage