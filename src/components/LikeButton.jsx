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
        postApis.likePost({postId})
      .then(()=>{
        setCount(prev=>prev+1)
        setLiked(true)
      })
      .catch((err)=>alert(err.response.data.message))
      }else{
        postApis.unlikePost({postId})
      .then(()=>{
        setCount(prev=>prev-1)
        setLiked(false)
      })
      .catch((err)=>alert(err.response.data.message))
      }
    }else{
      if(!liked){
        postApis.likePost({commentId})
      .then(()=>{
        setCount(prev=>prev+1)
        setLiked(true)
      })
      .catch((err)=>alert(err.response.data.message))
      }else{
        postApis.unlikePost({commentId})
      .then(()=>{
        setCount(prev=>prev-1)
        setLiked(false)
      })
      .catch((err)=>alert(err.response.data.message))
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
