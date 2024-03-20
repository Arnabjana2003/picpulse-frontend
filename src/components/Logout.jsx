import React from 'react'
import userApis from '../Backend apis/userApis'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'

function Logout({children}) {
    const dispatch = useDispatch()
    const handleLogout = ()=>[
        userApis.logout().then(()=>{
            dispatch(logout())
            window.location.reload()
        }).catch((er)=>alert(er.response.data.message))
    ]
  return (
    <div onClick={handleLogout}>{children}</div>
  )
}

export default Logout