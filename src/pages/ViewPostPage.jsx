import React, { useEffect, useState } from 'react'
import ViewPost from "../components/ViewPost"
import Comments from "../components/Comments"
import { useParams } from 'react-router-dom'
import postApis from "../Backend apis/postApis"
import { useDispatch } from 'react-redux'
import { updatePost } from "../store/postViewSlice"

function ViewPostPage() {
    const {postId} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        postApis.viewPost(postId)
        .then((res)=>{
            dispatch(updatePost(res.data))
        })
        .catch((err)=>console.log(err))
    },[postId])
  return (
    <div className='md:grid grid-cols-12'>
        <section className='post-content col-span-9 '>
            <ViewPost />
        </section>
        <section className='post-comments col-span-3'>
            <Comments />
        </section>
    </div>
  )
}

export default ViewPostPage