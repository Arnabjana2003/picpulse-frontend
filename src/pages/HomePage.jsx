import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
import postApis from "../Backend apis/postApis"

function HomePage() {
  const [posts,setPosts] = useState([{dgg:"dfsg"}])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    postApis.getFeeds()
    .then(res=>{
      console.log(res.data.feeds)
      setPosts(res.data.feeds)
    })
    .catch((err)=>alert(err.response.data.message))
    .finally(()=>setLoading(false))
  },[])
  return (
    <Layout>
      <div className="md:w-[80%] mx-auto">
        {loading && <p>Loading...</p>}
        {!loading && !posts.length && <p className="text-lg mt-5 text-center">No post found at this moment</p>}
        {!loading && posts.map(post=><div key={post._id}><PostCard post={post}/></div>)}
      </div>
    </Layout>
  );
}

export default HomePage;
