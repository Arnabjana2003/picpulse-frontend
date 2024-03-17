import React from 'react'

function Modal({children}) {
  return (
    <div className='fixed z-50 w-screen h-screen bg-slate-50'>{children}</div>
  )
}

export default Modal