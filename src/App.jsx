import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import userApis from "./Backend apis/userApis";
import { login, logout, updateSearchHistory } from "./store/authSlice";
import UploadBar from "./components/UploadBar";
import Loading from "./components/Loading";
import friendApis from "./Backend apis/friendApis";
import { updatePendingReqCount } from "./store/friendReqSlice";

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

    userApis.getSearchHistory()
    .then(res=>{
      dispatch(updateSearchHistory([...res.data[0].searchHistory].reverse()))
    })

    friendApis.pendingReqCount()
    .then((res)=>{
      dispatch(updatePendingReqCount(res.data.pendingRequestCount))
    })
  },[])

  if(loading){
    return <div className="font-sans"><Loading/></div>
  }
  return (
    <div className="max-w-[100vw] min-h-[100vh] bg-slate-100 overflow-x-hidden font-sans">
      {location.pathname !== "/signup" && location.pathname !== "/login" && location.pathname !== "/search" && location.pathname !=="/menu" && !location.pathname.includes("/view/") && <div className="mb-[70px] md:mb-[55px]"><Header/></div>}
      <div className="pt-5">
      <UploadBar/>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
