import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

function Protector({authentication = true,children}) {
    const navigate = useNavigate()
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authentication && !authStatus) navigate("/login")
        else if(!authentication && authStatus) navigate("/home")
    },[authStatus])

  return (
    <div>{children}</div>
  )
}

export default Protector