import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ProfileIcon from "./ProfileIcon";
import { NavLink } from "react-router-dom";
import ProfileImgIcon from "./ProfileImgIcon";
import { useSelector } from "react-redux";

function Header() {
  const currentUser = useSelector(state=>state.auth?.data)
  const navLinks = [
    {
      name: "Home",
      to: "/home",
    },
    {
      name: "Friends",
      to: "/friends",
    },
    {
      name: "Add post",
      to: "/createpost",
    },
  ];
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
        <div className="md:hidden col-span-6 flex items-center justify-between">
          <Logo />
          <div className="flex">
            <p className="mr-2">Search</p>
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-evenly">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) => `px-2 pb-1 font-semibold ${isActive?"border-b-2 text-blue-600": "text-slate-700"} border-blue-500`
              }
              to={link.to}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:flex justify-center items-center lg:hidden col-span-1">
          <p>Menu</p>
        </div>
        <div className="hidden col-span-3 lg:flex items-center justify-end">
          {/* <ProfileIcon /> */}
          <ProfileImgIcon owner={currentUser}/>
        </div>
      </header>
    </div>
  );
}

export default Header;
