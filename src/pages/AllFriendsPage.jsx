import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import friendApis from '../Backend apis/friendApis'
import UserCard from "../components/UserCard"
import Layout from '../components/Layout'

function AllFriendsPage() {
    const {userId} = useParams()
    const [friends,setFriends] = useState([])
    useEffect(()=>{
        friendApis.getAllFriends(userId)
      .then((res)=>{
        console.log(res.data)
        setFriends([...res.data].reverse())
      })
    },[userId])
  return (
    <Layout>
      <div className='w-full md:w-[80%] lg:w-[70%] mx-auto p-2'>
        {friends.map(fnd=><div key={fnd._id} className='mb-5'><UserCard info={fnd.profileData} isFriend={fnd.statusWithCurrentUser}/></div>)}
    </div>
    </Layout>
  )
}

export default AllFriendsPage