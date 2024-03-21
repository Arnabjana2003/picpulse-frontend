import React,{useState} from "react";
import ProfileImgIcon from "./ProfileImgIcon";
import TimeAgo from "./TimeAgo";
import CommentUI from "./CommentUI";
import { useDispatch, useSelector } from "react-redux";
import postApis from "../Backend apis/postApis";
import { addComment } from "../store/postViewSlice";

function Comments() {
  const post = useSelector(state=>state.viewedPost?.post)
  const dispatch = useDispatch()
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
  return (
    <div className="p-3 md:h-screen relative">

      <div className="md:h-[80%] overflow-auto">
      <header className="hidden md:block p-2">
        <div className="flex items-center">
          <ProfileImgIcon owner={post?.owner} />
          <div>
            <h4 className="font-semibold">
              {post?.owner?.fullName}
            </h4>
            <p className=" text-sm">
            {post?.createdAt && <TimeAgo timestamp={post?.createdAt}/>}
            </p>
          </div>
        </div>
        <div className="about mt-2">
          <p>{post?.about}</p>
        </div>
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
