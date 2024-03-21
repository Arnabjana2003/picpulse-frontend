import React from 'react'
import Nav from './Nav'
import RightsideFeeds from './RightsideFeeds'

function Layout({children}) {
    return (
        <div className='grid grid-cols-6 md:grid-cols-12 h-[90vh]'>
          <div className='hidden md:block p-2 col-span-4 lg:col-span-2 ' style={{
            overflowY: 'auto',  // Enable scrolling
            scrollbarWidth: 'thin',  // Firefox
            scrollbarColor: 'lightgrey transparent'  // Firefox
          }}>
            <Nav/>
          </div>
          <div className='col-span-6 md:col-span-8'style={{
            overflowY: 'auto',  // Enable scrolling
            scrollbarWidth: 'thin',  // Firefox
            scrollbarColor: 'lightgrey transparent'  // Firefox
          }}>
            {children}
          </div>
          <div className='hidden lg:block px-6 py-2 col-span-2' style={{
            overflowY: 'auto',  // Enable scrolling
            scrollbarWidth: 'thin',  // Firefox
            scrollbarColor: 'lightgrey transparent'  // Firefox
          }}>
            <RightsideFeeds/>
          </div>
        </div>
      )
}

export default Layout