import React, { useState } from "react";
import postApis from "../Backend apis/postApis";

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
      className={`${className} ${
        isLiked || liked ? "font-bold text-blue-500" : null
      }`}
    >
      👍 | {count}
    </button>
  );
}

export default LikeButton;
