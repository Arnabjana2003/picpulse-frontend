import React, { useState } from 'react'
import LikeButton from './LikeButton'
import CommentButton from './CommentButton'
import ProfileImgIcon from './ProfileImgIcon'
import TimeAgo from './TimeAgo'

function PostCard({post}) {
    const [comment,setComment] = useState(post?.commentsCount)
  return (
    <div className='mb-8 mx-auto md:w-[90%] border rounded-md overflow-hidden bg-slate-50 shadow-lg'>
        <header className='p-3'>
            <div className='flex items-center'>
                <ProfileImgIcon src={post?.owner?.profileImageLink}/>
                <div>
                    <h4 className='font-semibold'>{post?.owner?.fullName}</h4>
                    <p className=' text-sm'><TimeAgo timestamp={post?.createdAt}/></p>
                </div>
            </div>
            <div className='about mt-2'>
                <p>{post?.about}</p>
            </div>
        </header>
        <div className='content-div w-full min-h-56 bg-slate-700'>
            <img src={post?.contentUrl} alt='content' className='w-full'/>
        </div>
        <div className='flex justify-around p-3 my-4 border-y-2'>
            <div className='px-5 py-1 rounded-md hover:bg-slate-200'><LikeButton likesCount={post.likesCount} isLiked={post?.isLiked} postId={post._id}/></div>
            <div className='px-5 py-1 rounded-md hover:bg-slate-200'>Comment | {comment}</div>
        </div>
        <div className='p-3'>
            <CommentButton postId={post?._id} func={setComment}/>
        </div>
    </div>
  )
}

export default PostCard