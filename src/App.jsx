import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import userApis from "./Backend apis/userApis";
import { login, logout } from "./store/authSlice";
import UploadBar from "./components/UploadBar";
import Loading from "./components/Loading";

function App() {
  const location = useLocation()
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    userApis.currentUser()
    .then((res)=>{
      dispatch(login(res.data.data))
    })
    .catch(err=>{
      dispatch(logout())
    })
    .finally(()=>setLoading(false))
  },[])

  if(loading){
    return <Loading/>
  }
  return (
    <div className="max-w-[100vw] min-h-[100vh] bg-slate-100 overflow-x-hidden">
      {location.pathname !== "/signup" && location.pathname !== "/login" && location.pathname !== "/search" && <div className="mb-[70px] md:mb-[55px]"><Header/></div>}
      <UploadBar/>
      <Outlet />
      {/* {location.pathname !== "/signup" && location.pathname !== "/login" && <Footer/>} */}
    </div>
  );
}

export default App;
