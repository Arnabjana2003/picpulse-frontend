import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../assets/searchIcon.svg";
import { useNavigate } from "react-router-dom";
import userApis from "../Backend apis/userApis";
import { updateSearchHistory } from "../store/authSlice";

function SearchBar() {
  const history = useSelector((state) => state.auth?.searchHistory);
  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [historyList, setHistoryList] = useState(history);
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const debouncedFunction = (callback, delay) => {
    let timeId;
    return (e) => {
      if (timeId) clearTimeout(timeId);
      timeId = setTimeout(() => {
        callback(e);
      }, delay);
    };
  };
  const historySuggestion = (e) => {
    setText(e.target.value);
    const regex = new RegExp(e.target.value, "i");
    setHistoryList(history.filter((item) => regex.test(item)));
  };
  const debounced = debouncedFunction(historySuggestion, 500);
  const handleSearch = () => {
    setShowHistory(false);
    if (!text) return;
    setText("");
    setHistoryList([text, ...historyList]);
    navigate(`/search/result/${text}`);
  };
  const removeHistory = (query) => {
    userApis.removeHistory(query).then((res) => {
      dispatch(updateSearchHistory([...res.data.searchHistory].reverse()));
      setHistoryList([...res.data.searchHistory].reverse());
    });
  };
  return (
    <div>
      <div className="relative">
        <input
          placeholder="Search"
          className="p-2 pl-4 rounded-full w-full bg-slate-100 outline-none"
          onClick={() => setShowHistory((prev) => !prev)}
          onChange={(e) => debounced(e)}
          ref={inputRef}
        />

        <div
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white"
          onClick={handleSearch}
        >
          <img src={searchIcon} className="w-6 p-1" />
        </div>

        {showHistory && (
          <section className="hidden md:block z-10 absolute bg-white mt-1 right-0 left-0 max-h-72 w-60 rounded-md rounded-tl-none overflow-y-auto p-3 shadow-md">
            {!historyList.length && (
              <p className="text-center font-semibold text-slate-700">
                No history found
              </p>
            )}
            <ul>
              {historyList.map((item, index) => (
                <li
                  key={index}
                  className="  w-full flex justify-between items-center"
                >
                  <div
                    className="flex gap-2 hover:bg-slate-100 p-2 rounded-md w-full"
                    onClick={() => {
                      setShowHistory(false);
                      inputRef.current.value = item;
                      navigate(`/search/result/${item}`);
                    }}
                  >
                    <img src={searchIcon} alt="searchIcon" className="w-4" />
                    <p>{item}</p>
                  </div>
                  <span className="pl-2" onClick={() => removeHistory(item)}>
                    x
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
