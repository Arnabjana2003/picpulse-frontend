import React, { useState } from "react";
import ProfileImgIcon from "./ProfileImgIcon";
import { useSelector } from "react-redux";
import postApis from "../Backend apis/postApis";

function CommentButton({func, postId }) {
  const [comArr, setComArr] = useState([]);
  const [comment, setComment] = useState("");
  const owner = useSelector((state) => state.auth.data);
  const handleAdd = () => {
    if (!comment) return;
    postApis.addComment({ content: comment, postId }).then(() => {
      setComArr([...comArr, comment]);
      func((prev) => ++prev);
    })
    .catch(err=>alert(err.response.data.message))
    .finally(()=> setComment(""))
  };
  return (
    <div className="">
      {comArr.length != 0 &&
        comArr.map((com, index) => (
          <div key={index} className="p-2 mb-3 rounded-md bg-white flex ">
            <ProfileImgIcon owner={owner} />
            <div>
              <h3 className="font-semibold text-slate-700 mb-1">
                {owner.fullName}
              </h3>
              <p>{com}</p>
            </div>
          </div>
        ))}
      <div className=" flex items-center w-full">
        <textarea
          placeholder="Write your comment"
          className="flex-grow w-full h-full p-2"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button
          className="py-1 px-2 text-white font-semibold rounded-md bg-blue-500"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CommentButton;
