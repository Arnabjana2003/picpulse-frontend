import React from 'react'
import LikeButton from './LikeButton'
import CommentButton from './CommentButton'
import ProfileImgIcon from './ProfileImgIcon'

function PostCard() {
  return (
    <div className='mb-8 mx-auto md:w-[90%] border rounded-md overflow-hidden bg-slate-50 shadow-lg'>
        <header className='p-3'>
            <div className='flex items-center'>
                <ProfileImgIcon/>
                <div>
                    <h4 className='font-semibold'>Arnab Jana</h4>
                    <p className=' text-sm'>1day ago</p>
                </div>
            </div>
            <div className='about mt-2'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, error!</p>
            </div>
        </header>
        <div className='content-div w-full min-h-56 bg-slate-700'>
            {/* <img src='' alt='content' className='w-full'/> */}
        </div>
        <div className='likes-comments-counts mt-2 text-sm px-3 pb-1 flex justify-between'>
            <p>1k likes</p>
            <p>300 comments</p>
        </div>
        <hr/>
        <div className='flex justify-around p-4'>
            <div className='px-5 py-1 rounded-md hover:bg-slate-200'><LikeButton /></div>
            <div className='px-5 py-1 rounded-md hover:bg-slate-200'><CommentButton /></div>
        </div>
    </div>
  )
}

export default PostCard