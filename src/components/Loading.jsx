import React from 'react'
import Logo from './Logo'

function Loading() {
  return (
    <div className='w-screen h-screen overflow-hidden bg-slate-100 flex justify-center items-center'>
        <div className=' animate-bounce flex flex-col items-center'>
            <Logo/>
        <h1 className="text-3xl md:text-6xl font-bold text-blue-500 my-2 md:my-4">Picpulse</h1>
        </div>
    </div>
  )
}

export default Loading