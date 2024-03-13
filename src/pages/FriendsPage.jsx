import React from 'react'
import Nav from '../components/Nav'
import RightsideFeeds from '../components/RightsideFeeds'
import FriendReqCard from '../components/FriendReqCard'

function FriendsPage() {
    return (
        <div className='grid grid-cols-6 md:grid-cols-12 h-[90vh]'>
          <div className='hidden md:block p-2 col-span-4 lg:col-span-2  overflow-y-auto'>
            <Nav/>
          </div>
          <div cclassName='p-4 col-span-6 md:col-span-8 lg:col-span-8 overflow-y-auto'>
            <div className='grid grid-cols-6 gap-3'>
                <div className='col-span-2'><FriendReqCard/></div>
                <div className='col-span-2'><FriendReqCard/></div>
                <div className='col-span-2'><FriendReqCard/></div>
                <div className='col-span-2'><FriendReqCard/></div>
            </div>
          </div>
          <div className='hidden lg:block px-6 py-2 col-span-2 overflow-y-auto'>
            <RightsideFeeds/>
          </div>
        </div>
      )
}

export default FriendsPage