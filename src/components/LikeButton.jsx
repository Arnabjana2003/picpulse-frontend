import React, { useState } from "react";
import postApis from "../Backend apis/postApis";
import likeIcon from "../assets/likeIcon.svg"
import likedIcon from "../assets/likedIcon.svg"

function LikeButton({ isLiked = false, className = "text-sm md:text-base",likesCount=0,postId,commentId,isComment=false }) {
  const [liked, setLiked] = useState(isLiked);
  const [count,setCount] = useState(likesCount)
  const handleLike = ()=>{
    if(!isComment){
      if(!liked){
        setCount(prev=>prev+1)
        setLiked(true)
        postApis.likePost({postId})
        .then(()=>{
        })
        .catch((err)=>{
        setCount(prev=>--prev)
        setLiked(false)
        alert(err?.response?.data?.message)
      })
      }else{
        setCount(prev=>prev-1)
        setLiked(false)
        postApis.unlikePost({postId})
        .then(()=>{
          
        })
        .catch((err)=>{
        setCount(prev=>++prev)
        setLiked(true)
        alert(err.response.data.message)
      })
      }
    }else{
      if(!liked){
        setCount(prev=>++prev)
        setLiked(true)
        postApis.likePost({commentId})
        .then(()=>{
        })
        .catch((err)=>{
        setCount(prev=>--prev)
        setLiked(false)
        alert(err.response.data.message)
      })
      }else{
        setCount(prev=>prev-1)
        setLiked(false)
        postApis.unlikePost({commentId})
        .then(()=>{
        })
        .catch((err)=>{
        setCount(prev=>++prev)
        setLiked(true)
        alert(err.response.data.message)
      })
      }
    }
  }
  return (
    <button
      onClick={handleLike}
      className={`${className} flex items-center gap-2  ${
        liked ? "font-bold text-blue-500" : null
      }`}
    >
      <img src={liked ?likedIcon:likeIcon} className={`${isComment?"w-4 md:w-5":"w-6 md:w-8"} `}/>  {count}
    </button>
  );
}

export default LikeButton;
