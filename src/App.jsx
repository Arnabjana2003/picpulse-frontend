import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation()
  return (
    <div className="max-w-[100vw] min-h-[100vh] bg-slate-100 overflow-x-hidden">
      {location.pathname !== "/signup" && location.pathname !== "/login" && <div className="mb-[70px] md:mb-[55px]"><Header/></div>}
      <Outlet />
      {/* {location.pathname !== "/signup" && location.pathname !== "/login" && <Footer/>} */}
    </div>
  );
}

export default App;
