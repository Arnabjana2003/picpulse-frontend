import React from 'react'

function FriendReqCard() {
  return (
    <div className='w-full h-[22rem] p-2 bg-slate-50 shadow-md rounded-lg mb-5 overflow-hidden'>
        <div className='img w-full h-2/3 bg-slate-700 overflow-hidden rounded-md'>
            <img src='' className='w-full'/>
        </div>
        <h4 className='font-semibold text-lg p-2'>Arnab Jana</h4>
        <div className=''>
            <button className="block rounded-md text-center mb-2 p-1 bg-blue-100 text-blue-600 font-semibold">Add friend</button>
            <button className="block rounded-md text-center mb-2 p-1 bg-slate-300">Remove</button>
        </div>
    </div>
  )
}

export default FriendReqCard