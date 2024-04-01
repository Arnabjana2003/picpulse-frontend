import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import userApis from "../Backend apis/userApis";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import cameraIcon from "../assets/cameraIcon.svg";
import friendApis from "../Backend apis/friendApis";

function ProfilePage() {
  const [user, setUser] = useState();
  const { userId } = useParams();
  const currentUser = useSelector((state) => state.auth.data);

  const handleFriendReq = ()=>{
    if(user?.friendStatus == 3) return
    else if(user?.friendStatus == 0){
      setUser({...user,friendStatus:1})
      friendApis.send(user?._id)
      .catch((err)=>{
      setUser({...user,friendStatus:0})
      alert(err.response.data.message)
    })
    }
    else if(user?.friendStatus == 1){
      setUser({...user,friendStatus:0})
      friendApis.unsend(user?._id)
      .catch((err)=>{
      setUser({...user,friendStatus:1})
      alert(err.response.data.message)
    })
    }
    else if(user?.friendStatus == 2){
      setUser({...user,friendStatus:3})
      friendApis.accept(user?._id)
      .catch((err)=>{
      setUser({...user,friendStatus:2})
      alert(err.response.data.message)
    })
    }
  }

  useEffect(() => {
    userApis.viewProfile(userId).then((res) => {
      setUser(res.data);
    });
  }, [userId]);

  return (
    <div className="">
      <div className="container md:w-[80%] mx-auto ">

        <div className="cover-and-profile-pic relative w-full  h-32 md:h-52 lg:h-64 bg-slate-400 mb-8 -top-2">
          <img
            src={user?.coverImageLink}
            className="w-full h-full object-cover object-center"
          />
          {currentUser?._id == userId && (
            <Link
              to={`/profile/update/0/${user?.coverImageId}`}
              className="absolute bottom-1 right-5 translate-x-1/2 bg-slate-50 p-1 rounded-full"
            >
              <img src={cameraIcon} className="w-5" />
            </Link>
          )}
          <div className="w-32 h-32 md:w-52 md:h-52 rounded-full bg-white absolute -bottom-[32px] md:-bottom-[52px] left-1 md:left-4 p-[0.1rem] md:p-1">
            <img
              src={user?.profileImageLink}
              className="w-full h-full rounded-full object-cover object-center"
            />
            {currentUser?._id == userId && (
              <Link
                to={`/profile/update/1/${user?.profileImageId}`}
                className="absolute bottom-1 right-1/2 translate-x-1/2 bg-slate-50 p-1 rounded-full"
              >
                <img src={cameraIcon} className="w-5" />
              </Link>
            )}
          </div>
        </div>

        <div className="mt-2 md:mt-8 lg:mt-14 p-2">
              <h2 className="font-bold text-lg md:text-xl">{user?.fullName}</h2>
              <Link
                to={`/${user?._id}/friend/all`}
                className="text-sm md:text-base font-semibold"
              >
                {user?.friendsCount} friends
              </Link>
              <div className="">
                {user?.friendStatus != 3 && (
                  <button
                    className="bg-blue-600 border text-white p-1 rounded-lg font-semibold mt-3"
                    onClick={handleFriendReq}
                  >
                    {user?.friendStatus == 0
                      ? "Add friend"
                      : user?.friendStatus == 1
                      ? "Request sent"
                      : user?.friendStatus == 2
                      ? "Accept request"
                      : ""}
                  </button>
                )}
                {user?.friendStatus == 3 && <p>Friend</p>}
              </div>
            </div>

        <section className="posts mt-2 sm:mt-3 md:mt-4 lg:mt-5">
          <p className=" font-semibold p-2">Posts</p>
          <div className="md:w-[80%] mx-auto mt-5">
            {user?.posts.map((post) => (
              <div key={post._id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfilePage;
