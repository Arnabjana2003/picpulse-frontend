import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../assets/searchIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import userApis from "../Backend apis/userApis";
import { updateSearchHistory } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import backIcon from "../assets/backIcon.svg"

function SearchPage() {
  const history = useSelector(state=>state.auth?.searchHistory)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [text,setText] = useState("")
  const handleSearch = ()=>{
    if(!text) return;
    setText("")
    navigate(`/search/result/${text}`)
  }
  const removeHistory = (query)=>{
      userApis.removeHistory(query)
      .then((res)=>{
        dispatch(updateSearchHistory([...res.data.searchHistory].reverse()))
      })
  }
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <div className="md:hidden">
      <img src={backIcon} className="w-5 absolute top-1 left-1" onClick={()=>window.history.back()}/>
      <div className="m-1 mt-2 relative">
        <input
          type="text"
          placeholder="Search Picpulse"
          className="w-full p-1 pl-2 rounded-full"
          onChange={(e)=>setText(e.target.value)}
          value={text}
          ref={inputRef}
        />
        <img
          src={searchIcon}
          className="w-5 absolute top-1/2 right-3 -translate-y-1/2"
          onClick={handleSearch}
        />
      </div>
      <section className="history p-2">
        {!history.length && <p className="text-center font-semibold text-slate-700">No history found</p>}
        {history.map((item, index) => (
          <li key={index} className="  w-full flex justify-between items-center">
            <p
              className="hover:bg-slate-100 p-2 rounded-md"
              onClick={() => {
                setText(item);
              }}
            >
              {item}
            </p>
            <span className="pl-2" onClick={() => removeHistory(item)}>
              x
            </span>
          </li>
        ))}
      </section>
    </div>
  );
}

export default SearchPage;
