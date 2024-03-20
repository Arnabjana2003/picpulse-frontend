import React, { useEffect, useState } from "react";
import FriendReqCard from "../components/FriendReqCard";
import Layout from "../components/Layout";
import friendApis from "../Backend apis/friendApis";

function FriendsPage() {
  const [requests, setRequests] = useState([]);
  const [requestsLoading, setRequestsLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsLoading, setSuggestionsLoading] = useState(true);
  useEffect(() => {
    friendApis.friendRequests()
    .then((res)=>setRequests(res.data))
    .catch((err)=>console.log(err))
    .finally(()=>setRequestsLoading(false))

    friendApis.suggestedFriends()
    .then((res)=>setSuggestions(res.data))
    .catch((err)=>console.log(err))
    .finally(()=>setSuggestionsLoading(false))
  }, []);
  return (
    <Layout>
      <div className="md:grid grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10">
        {requestsLoading && (
          <p className="col-span-full text-lg font-semibold">Loading Friends requests</p>
        )}
        {!requestsLoading && requests.length ? (
          <div className="col-span-full">
            <p className="text-lg font-semibold">
              Your pending friend requests
            </p>
            <div className=" mb-5 mt-5 md:grid grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10">
              {requests.map((request) => (
                <div key={request._id} className="col-span-6 md:col-span-3 lg:col-span-2">
                  <FriendReqCard
                    user={{
                      _id:request.profile._id,
                      fullName: request.profile.fullName,
                      profileImageLink: request.profile.profileImageLink,
                    }}
                    isRequest={true}
                  />
                </div>
              ))}
            </div>
          </div>
        ):null}

        {suggestionsLoading && (
          <p className="col-span-full text-lg font-semibold">Loading Frinds suggestions</p>
        )}
        {!suggestionsLoading && suggestions.length && (
          <div className="col-span-full">
            <p className="text-lg font-semibold">
              Let's connect with more people
            </p>
            <div className=" mb-5 mt-5 md:grid grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10">
              {suggestions.map((fnd) => (
                <div key={fnd._id} className="col-span-6 md:col-span-3 lg:col-span-2">
                  <FriendReqCard user={fnd} isRequest={false}/>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default FriendsPage;
