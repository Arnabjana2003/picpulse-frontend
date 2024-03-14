import React from "react";

function ProfileImgIcon({src}) {
  return (
    <div className="profile-img w-11 h-11 bg-slate-700 rounded-full mr-2">
      {src && <img src={src} alt="profile-image" className="w-full" />}
    </div>
  );
}

export default ProfileImgIcon;
