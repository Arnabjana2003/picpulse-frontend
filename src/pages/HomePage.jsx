import React from "react";
import Nav from "../components/Nav";
import PostCard from "../components/PostCard";
import RightsideFeeds from "../components/RightsideFeeds";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
      <div className="md:w-[80%] mx-auto">
        <PostCard />
        <PostCard />
      </div>
    </Layout>
  );
}

export default HomePage;
