import React, { useEffect, useState } from 'react'
import ViewPost from "../components/ViewPost"
import Comments from "../components/Comments"
import { useParams } from 'react-router-dom'
import postApis from "../Backend apis/postApis"

function ViewPostPage() {
    const {postId} = useParams()
    const [post,setPost] = useState()
    useEffect(()=>{
        postApis.viewPost(postId)
        .then((res)=>setPost(res.data))
        .catch((err)=>alert(err.response.data.message))
    },[postId])
  return (
    <div className='md:grid grid-cols-12'>
        <section className='post-content col-span-9 '>
            <ViewPost post={post}/>
        </section>
        <section className='post-comments col-span-3'>
            <Comments post={post}/>
        </section>
    </div>
  )
}

export default ViewPostPage