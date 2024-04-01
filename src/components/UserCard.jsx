import React, { useState } from 'react'
import ProfileImgIcon from './ProfileImgIcon'
import { Link } from 'react-router-dom'
import friendApis from '../Backend apis/friendApis'

function UserCard({info,isFriend}) {
  const [friendStatus,setFriendStatus] = useState(isFriend)
  const handleClick = ()=>{
    if(friendStatus == 3) return
    else if(friendStatus == 0){
      setFriendStatus(1)
      friendApis.send(info?._id)
      .catch((err)=>{
      setFriendStatus(0)
      alert(err.response.data.message)
    })
    }
    else if(friendStatus == 1){
      setFriendStatus(0)
      friendApis.unsend(info?._id)
      .catch((err)=>{
      setFriendStatus(1)
      alert(err.response.data.message)
    })
    }
    else if(friendStatus == 2){
      setFriendStatus(3)
      friendApis.accept(info?._id)
      .catch((err)=>{
      setFriendStatus(2)
      alert(err.response.data.message)
    })
    }
  }
  return (
    <div className='w-full flex justify-between items-center'>
        <div className='left-part flex'>
            <ProfileImgIcon owner={info} />
            <div>
                <Link to={`/profile/${info?._id}`}><h3 className='font-semibold'>{info?.fullName}</h3></Link>
                <p className='text-sm capitalize'>{info.gender}</p>
            </div>
        </div>
        <div className='right-part'>
          {isFriend != 3 &&  <button className='text-blue-600 border border-blue-600 p-1 rounded-lg font-semibold' onClick={handleClick}>{friendStatus==0?"Add friend":friendStatus==1?"Request sent":friendStatus==2?"Accept request":''}</button>}
          {isFriend ==3 && <p>Friend</p>}
        </div>
    </div>
  )
}

export default UserCard