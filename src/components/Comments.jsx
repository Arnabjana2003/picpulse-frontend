import React,{useState} from "react";
import ProfileImgIcon from "./ProfileImgIcon";
import TimeAgo from "./TimeAgo";
import CommentUI from "./CommentUI";
import { useDispatch, useSelector } from "react-redux";
import postApis from "../Backend apis/postApis";
import { addComment } from "../store/postViewSlice";
import crossIcon from "../assets/crossIcon.svg"

function Comments() {
  const post = useSelector(state=>state.viewedPost?.post)
  const dispatch = useDispatch()
  const [showDots,setShowDots] = useState(false)
  const currentUser = useSelector(state=>state.auth?.data)
  const [text,setText] = useState("")
  const handleAdd = ()=>{
    postApis.addComment({content:text,postId:post?._id})
    .then((res)=>{
      dispatch(addComment({...res?.data,commenter:currentUser}))
    })
    .catch((err)=>console.log(err))
    .finally(()=>setText(""))
  }
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
    <div className="p-3 md:h-screen relative">

      <div className="md:h-[80%] overflow-auto">
      <header className="hidden md:block p-3 relative">
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
        
        {currentUser?._id === post?.owner?._id && <div className='absolute -top-4 md:top-0 right-2'>
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

      <section className="comments-section pb-10">
        <p className="text-lg font-semibold">Comments</p>
        {post?.comments.map((comment) => (
          <div key={comment?._id}>
            <CommentUI owner={comment.commenter} comment={comment} />
          </div>
        ))}
      </section>
      </div>

      <div className=" flex items-center w-full fixed md:absolute bottom-0 md:bottom-14 right-0">
          <textarea
            placeholder="Write your comment"
            className="flex-grow w-full p-2 outline-none rounded-s-md h-10 md:h-fit"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            className="p-2 text-white font-semibold rounded-e-md bg-blue-500"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
    </div>
  );
}

export default Comments;
