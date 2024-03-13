import React from 'react'

function SearchBar() {
  return (
    <div>
        <div className='relative'>
        <input placeholder='Search Picpulse' className='p-2 pl-4 rounded-full w-full bg-slate-100 outline-none'/>

        {/* <section className='z-10 absolute bg-white mt-1 right-0 left-0 max-h-72 rounded-md overflow-y-auto p-3 shadow-md'>
          <p className='hover:bg-slate-100 p-2 rounded-md'>gsg</p>
          <p className='hover:bg-slate-100 p-2 rounded-md'>gsg</p>
        </section> */}
        </div>
    </div>
  )
}

export default SearchBar