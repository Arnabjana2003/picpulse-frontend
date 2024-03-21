import React, { useState } from 'react'
import ProfileImgIcon from "./ProfileImgIcon"
import TimeAgo from "./TimeAgo"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import postApis from '../Backend apis/postApis'
import { updatePost } from '../store/postViewSlice'
import crossIcon from "../assets/crossIcon.svg"

function ViewPost() {
  const post = useSelector(state=>state.viewedPost?.post)
  const currentUser = useSelector(state=>state.auth?.data)
  const [showDots,setShowDots] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const deletePost = (e)=>{
    e.target.disabled = true
    postApis.deletePost(post?._id,post?.contentId)
    .then(()=>{
      dispatch(updatePost(null))
      navigate("/home")
    })
    .catch((err)=>{
      console.log(err) 
      alert(err?.response?.data?.message)
    })
    .finally(()=>e.target.disabled = false)
  }
  return (
    <div className='w-full h-fit md:h-screen'>
       <header className="md:hidden p-3 relative">
        <div className="flex items-center">
          <ProfileImgIcon owner={post?.owner} />
          <div>
            <h4 className="font-semibold mr-2 inline">
              {post?.owner?.fullName}
            </h4>
            <span>{post?.type}</span>
            <p className=" text-sm">
              {post?.createdAt && <TimeAgo timestamp={post?.createdAt} />}
            </p>
          </div>
        </div>
        <div className="about mt-2">
          <p>{post?.about}</p>
        </div>
        
        {currentUser?._id === post?.owner?._id && <div className='absolute -top-4 right-2'>
          <span className='cursor-pointer' onClick={()=>setShowDots(prev=>!prev)}>
            {
              showDots?<img src={crossIcon} className='w-5'/>:<span className='text-lg font-bold'>...</span>
            }
          </span>
          {showDots && <div className='absolute right-1 top-6 rounded-lg rounded-tr-none p-2 bg-slate-200'>
            <button className='text-nowrap disabled:text-white' onClick={deletePost}>Delete post</button>
          </div>}
        </div>}
      </header>
        
        <div className='m-auto w-fit h-[92%]'>
          <Link to={`/view/${post?._id}`}>
          <img src={post?.contentUrl} className='max-w-full h-full object-contain'/>
          </Link>
        </div>
    </div>
  )
}

export default ViewPost