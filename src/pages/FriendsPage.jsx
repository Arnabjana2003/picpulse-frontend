import React from "react";
import FriendReqCard from "../components/FriendReqCard";
import Layout from "../components/Layout";

function FriendsPage() {
  return (
    <Layout>
      <div className="md:grid grid-cols-6 lg:grid-cols-8 2xl:grid-cols-10 gap-3">
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <FriendReqCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <FriendReqCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <FriendReqCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <FriendReqCard />
        </div>
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <FriendReqCard />
        </div>
      </div>
    </Layout>
  );
}

export default FriendsPage;
