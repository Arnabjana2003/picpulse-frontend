import React from "react";
import { Link } from "react-router-dom";

function ProfileImgIcon({owner}) {
  return (
    <Link to={`/profile/${owner?._id}`}>
    <div className="profile-img w-11 h-11 bg-slate-700 rounded-full mr-2 overflow-hidden">
      {
        owner?.profileImageLink && <img src={owner?.profileImageLink} alt="profile-image" className="w-full h-full object-cover object-center" />
      }
    </div>
    </Link>
  );
}

export default ProfileImgIcon;
