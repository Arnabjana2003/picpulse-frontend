import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProfileImgIcon from "./ProfileImgIcon";
import { useSelector } from "react-redux";
import friendsIcon from "../assets/friends.svg"
import homeIcon from '../assets/homeIcon.svg'
import photosIcon from '../assets/photosIcon.svg'
import menubarIcon from '../assets/menubarIcon.svg'
import crossIcon from '../assets/crossIcon.svg'
import searchIcon from '../assets/searchIcon.svg'

function Header() {
  const navigate = useNavigate()
  const [clickMenu,setClickMenu] = useState(false)
  const currentUser = useSelector((state) => state.auth?.data);
  const friendReqCount = useSelector(state=>state.friendReq?.count)
  const navLinks = [
    {
      name: <img src={homeIcon}/>,
      to: "/home",
    },
    {
      name: <div className="relative">
        <img src={friendsIcon}/>
        {friendReqCount>0? <span className="absolute -top-4 md:-top-2 -right-3 md:-right-4 px-1 rounded-full bg-red-500 text-white text-sm">{friendReqCount}</span>:null}
      </div>,
      to: "/friends",
    },
    {
      name: <img src={photosIcon}/>,
      to: "/createpost",
    },
  ];
  const handleMenu = ()=>{
    if(clickMenu){
      setClickMenu((prev)=>!prev)
      window.history.back()
    }else{
      setClickMenu((prev)=>!prev)
      navigate("/menu")
    }
  }
  return (
    <div className="bg-white px-2 fixed top-0 right-0 left-0 z-50">
      <header className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12">
        <div className="hidden col-span-2 lg:col-span-3 md:flex items-center">
          <div>
            <Logo />
          </div>
          <div className="ml-2">
            <SearchBar />
          </div>
        </div>


        {/* top header icons for mobile screen */}
        <div className="md:hidden col-span-6 flex items-center justify-between">
          <Logo />
          <div className="flex">
            <Link to={"/search"} className="mr-2 w-8 p-1 rounded-md bg-slate-100">
              <img src={searchIcon}/>
            </Link>
            <div className=" w-9 p-1 rounded-md bg-slate-100" onClick={handleMenu}>
            <img src={clickMenu?crossIcon:menubarIcon}/>
            </div>
          </div>
        </div>


        <div className="col-span-6 flex items-center justify-evenly">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                `px-2 pb-1 font-semibold w-10 md:w-14 md:p-2 rounded-md  mb-1 ${
                  isActive ? "border-b-4 text-blue-600" : "text-slate-700"
                } border-blue-500`
              }
              to={link.to}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* <div className="hidden md:flex justify-center items-center lg:hidden col-span-1">
          <p>Menu</p>
        </div> */}
        <div className="hidden col-span-3 lg:flex items-center justify-end">
          <ProfileImgIcon owner={currentUser} />
        </div>
      </header>
    </div>
  );
}

export default Header;
