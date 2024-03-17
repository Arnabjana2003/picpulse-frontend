import React from "react";
import ProfileImgIcon from "./ProfileImgIcon";
import TimeAgo from "./TimeAgo";
import CommentUI from "./CommentUI";

function Comments({ post }) {
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
              <TimeAgo timestamp={post?.createdAt} />
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
            className="flex-grow w-full p-2 outline-none rounded-md h-10 md:h-fit"
            // onChange={(e) => setComment(e.target.value)}
            // value={comment}
          />
          <button
            className="py-1 px-2 text-white font-semibold rounded-md bg-blue-500"
            // onClick={handleAdd}
          >
            Add
          </button>
        </div>
    </div>
  );
}

export default Comments;
