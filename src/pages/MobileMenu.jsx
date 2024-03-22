import React from "react";
import ProfileImgIcon from "../components/ProfileImgIcon";
import Logout from "../components/Logout";
import logoutIcon from "../assets/logoutIcon.svg";
import profileIcon from "../assets/profileIcon.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backIcon from "../assets/backIcon.svg"

function MobileMenu() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="md:hidden pt-4 border p-2 relative">
      <p
        className="absolute top-0 left-1"
        onClick={() => window.history.back()}
      >
        <img src={backIcon} className="w-5"/>
      </p>
      <div className="flex gap-2 items-center hover:bg-slate-50 rounded-md p-2 mt-4 border-t-2">
        <Link
          to={`/profile/${auth?.data?._id}`}
          className="flex gap-2 items-center"
        >
          <img className="w-6" src={profileIcon} />
          <p>Arnab Jana</p>
        </Link>
      </div>

      <div className="mt-2 border-t-2">
        <h4 className="font-semibold">Connect with the developer</h4>
        <div className="">
          <a
            href="https://arnabjana-portfolio.vercel.app/"
            className="text-blue-700 font-bold underline underline-offset-2"
          >
            Arnab Jana
          </a>
        </div>
      </div>
      <div className="flex gap-2 items-center hover:bg-slate-50 rounded-md p-2 mt-2 border-t-2">
        <Logout>
          <div className="flex gap-2 items-center">
            <img className="w-7" src={logoutIcon} />
            <p className="text-red-700 font-semibold">Logout</p>
          </div>
        </Logout>
      </div>
    </div>
  );
}

export default MobileMenu;
