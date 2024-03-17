import React from "react";
import ProfileImgIcon from "./ProfileImgIcon";
import { Link } from "react-router-dom";
import TimeAgo from "./TimeAgo";

function CommentUI({ owner,comment }) {
  return (
    <div className="p-2 mb-3 rounded-md flex ">
      <div className="w-fit">
        <ProfileImgIcon owner={owner} />
      </div>
      <div className="w-full">
      <div className="bg-slate-50 p-2 shadow-sm rounded-md">
        <Link to={`/profile/${owner?._id}`} className="font-semibold text-slate-700 mb-1">
          {owner.fullName}
        </Link>
        <p>
          {comment.content || 'comment content'}
        </p>
      </div>
      <div className="flex justify-between">
      <TimeAgo className="text-sm" timestamp={comment?.createdAt} />
      {/* <div className="flex">
        <p>Like</p>
        <p>Comment</p>
      </div> */}
      </div>
      </div>
    </div>
  );
}

export default CommentUI;
