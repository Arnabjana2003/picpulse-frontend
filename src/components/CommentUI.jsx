import React, { useRef, useState } from "react";
import ProfileImgIcon from "./ProfileImgIcon";
import { Link } from "react-router-dom";
import TimeAgo from "./TimeAgo";
import { useDispatch, useSelector } from "react-redux";
import LikeButton from "./LikeButton";
import deleteIcon from "../assets/deleteIcon.svg";
import editIcon from "../assets/editIcon.svg";
import tickIcon from "../assets/tickIcon.svg";
import crossIcon from "../assets/crossIcon.svg";
import postApis from "../Backend apis/postApis";
import { deleteComment, updateComment } from "../store/postViewSlice";

function CommentUI({ owner, comment }) {
  const currentUser = useSelector((state) => state.auth?.data);
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(comment?.content);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const handleDeleteComment = () => {
    postApis
      .deleteComment(comment?._id)
      .then(() => dispatch(deleteComment(comment?._id)))
      .catch((err) => alert(err?.response?.data?.message));
  };
  const handleUpdateComment = () => {
    if (isEditable) {
      postApis
        .updateComment({ content: text, commentId: comment?._id })
        .then(() => {
          dispatch(updateComment({ content: text, commentId: comment?._id }));
          setIsEditable(false);
        })
        .catch((err) => {
          setText(comment?.content);
          setIsEditable(false);
          alert(err?.response?.data?.message);
        });
    } else {
      inputRef.current.focus();
      setIsEditable(true);
    }
  };
  const cancelUpdateComment = () => {
    setText(comment?.content);
    setIsEditable(false);
  };
  return (
    <div className="p-2 mb-3 rounded-md flex ">
      <div className="w-fit">
        <ProfileImgIcon owner={owner} />
      </div>
      <div className="w-full">
        <div className="bg-slate-50 p-2 shadow-sm rounded-md">
          <Link
            to={`/profile/${owner?._id}`}
            className="font-semibold text-slate-700 mb-1"
          >
            {owner?.fullName}
          </Link>
          <input
            type="text"
            value={text}
            readOnly={!isEditable}
            onChange={(e) => setText(e.target.value)}
            className="bg-transparent outline-none"
            ref={inputRef}
          />
        </div>
        <div className="">
          {comment?.createdAt && (
            <TimeAgo className="text-xs" timestamp={comment?.createdAt} />
          )}
          {comment?._id && (
            <div className="flex gap-4">
              <LikeButton
                isComment={true}
                isLiked={comment?.isLiked}
                likesCount={comment?.likesCount}
                commentId={comment?._id}
              />
              {/* <p>Comment</p> */}
              {owner?._id == currentUser._id ? (
                <span className="flex gap-4">
                  {isEditable && (
                    <img
                      src={crossIcon}
                      onClick={cancelUpdateComment}
                      className="w-4 bg-red-500"
                    />
                  )}
                  <img
                    src={isEditable ? tickIcon : editIcon}
                    onClick={handleUpdateComment}
                    className={`${isEditable ? "bg-green-500 w-5" : "w-4"}`}
                  />
                  <img
                    src={deleteIcon}
                    onClick={handleDeleteComment}
                    className="w-4"
                  />
                </span>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentUI;
