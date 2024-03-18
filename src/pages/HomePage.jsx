import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
import postApis from "../Backend apis/postApis"

function HomePage() {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    postApis.getFeeds()
    .then(res=>{
      setPosts(res.data.feeds)
    })
    .catch((err)=>console.log("Error at HomePage::",err))
    .finally(()=>setLoading(false))
  },[])
  return (
    <Layout> 
      <div className="md:w-[80%] mx-auto">
        {loading && <p>Loading...</p>}
        {!loading && !posts.length && <p className="text-lg mt-5 text-center">No post found at this moment</p>}
        {!loading && posts.map((post,index)=><div key={post._id || index}><PostCard post={post}/></div>)}
      </div>
    </Layout>
  );
}

export default HomePage;
