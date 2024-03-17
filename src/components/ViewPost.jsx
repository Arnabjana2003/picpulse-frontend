import React from 'react'
import ProfileImgIcon from "./ProfileImgIcon"
import TimeAgo from "./TimeAgo"

function ViewPost({post}) {
  
  return (
    <div className='w-full h-fit md:h-screen'>
      <header className='md:hidden p-3'>
            <div className='flex items-center'>
                <ProfileImgIcon owner={post?.owner?.profileImageLink} />
                <div>
                    <h4 className='font-semibold'>{post?.owner?.fullName || "User name"}</h4>
                    <p className=' text-sm'><TimeAgo timestamp={post?.createdAt || Date.now()}/></p>
                </div>
            </div>
            <div className='about mt-2'>
                <p>{post?.about}</p>
            </div>
        </header>
        <div className='m-auto w-fit h-[92%]'>
          <img src={post?.contentUrl} className='max-w-full h-full object-contain'/>
        </div>
    </div>
  )
}

export default ViewPost