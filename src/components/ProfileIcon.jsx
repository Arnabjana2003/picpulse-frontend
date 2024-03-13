import React, { useState } from 'react'

function ProfileIcon() {
  const [showPopup,setShowPopup] = useState(false)
  return (
    <div className=' relative'>
      <div className='w-9 h-9 md:w-11 md:h-11 bg-slate-700 rounded-full overflow-hidden' onClick={()=>setShowPopup(prev=>!prev)}>
      <img src='' className='w-full h-full'/>
      </div>
      {showPopup && <section className='z-10 absolute bg-white right-4 mt-1 p-3 rounded-lg rounded-tr-none  w-56 shadow-md'>dfds</section>}
    </div>
  )
}

export default ProfileIcon