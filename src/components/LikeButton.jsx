import React, { useState } from "react";
import postApis from "../Backend apis/postApis";
import likeIcon from "../assets/likeIcon.svg"
import likedIcon from "../assets/likedIcon.svg"

function LikeButton({ isLiked = false, className = "",likesCount=0,postId }) {
  const [liked, setLiked] = useState(false);
  const [count,setCount] = useState(likesCount)
  const handleLike = ()=>{
    postApis.likePost(postId)
    .then(()=>{
      setCount(prev=>prev+1)
      setLiked(true)
    })
    .catch((err)=>alert(err.response.data.message))
  }
  return (
    <button
      onClick={handleLike}
      className={`${className} flex items-center gap-2 text-xl ${
        isLiked || liked ? "font-bold text-blue-500" : null
      }`}
    >
      <img src={liked || isLiked ?likedIcon:likeIcon} className="w-6 md:w-8 "/>  {count}
    </button>
  );
}

export default LikeButton;
