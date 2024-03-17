import React, { useState } from "react";
import friendApis from "../Backend apis/friendApis";

function FriendReqCard({ user, isRequest }) {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleAccept = () => {
    friendApis
      .accept({sentBy:user._id})
      .then((res) => {
        if (res.success) setIsAccepted(true);
      })
      .catch((err) => alert(err.response.data.message));
  };
  const handleReject = () => {
    friendApis
      .reject({sentBy:user._id})
      .then((res) => {
        if (res.success) setIsRejected(true);
      })
      .catch((err) => alert(err.response.data.message));
  };
  const handleSent= () => {
    friendApis
      .send({sentTo:user._id})
      .then((res) => {
        if (res.success) setIsSent(true);
      })
      .catch((err) => alert(err.response.data.message))
  };
  return (
    <div className="w-full h-[22rem] p-2 bg-slate-50 shadow-md rounded-lg mb-5 overflow-hidden">
      <div className={`img w-full ${isRequest?"h-2/3":'h-[75%]'} bg-slate-700 overflow-hidden rounded-md`}>
        <img src={user?.profileImageLink} className="w-full h-full object-cover object-center" />
      </div>
      <h4 className="font-semibold text-lg p-2">{user?.fullName}</h4>
      <div className="">
        <button
          className={`w-full rounded-md text-center mb-2 p-1 disabled:text-slate-300 bg-blue-100 ${
            isAccepted || isSent
              ? "text-blue-600 font-bold"
              : "text-slate-800 font-semibold"
          }`}
          disabled={isAccepted || isSent}
          onClick={()=>isRejected?handleAccept():handleSent()}
        >
          {isRequest
            ? isAccepted
              ? "Accepted"
              : "Accept request"
            : isSent?"Request sent":"Add friend"}
        </button>
        {isRequest && (
          <button className={`w-full rounded-md text-center mb-2 p-1 bg-slate-300 disabled:text-red-500 text-slate-800 `} disabled={isAccepted || isRejected}
          onClick={handleReject}>
            {isRejected?"Rejected":"Reject"}
          </button>
        )}
      </div>
    </div>
  );
}

export default FriendReqCard;
