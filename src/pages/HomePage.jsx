import React from 'react'
import Nav from '../components/Nav'
import PostCard from '../components/PostCard'
import RightsideFeeds from '../components/RightsideFeeds'

function HomePage() {
  return (
    <div className='grid grid-cols-12 h-[90vh]'>
      <div className='hidden md:block p-2 col-span-4 lg:col-span-3  overflow-y-auto'>
        <Nav/>
      </div>
      <div className='p-4 col-span-6 md:col-span-8 lg:col-span-6 overflow-y-auto'>
        <PostCard/>
        <PostCard/>
      </div>
      <div className='hidden lg:block px-6 py-2 col-span-3 overflow-y-auto'>
        <RightsideFeeds/>
      </div>
    </div>
  )
}

export default HomePage