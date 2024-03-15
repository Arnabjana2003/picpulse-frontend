import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import FriendsPage from "./pages/FriendsPage.jsx";
import Protector from "./components/Protector.jsx";
import CreatePostPage from "./pages/CreatePostPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Protector authentication={true}><HomePage/></Protector>
      },
      {
        path:"/login",
        element: <Protector authentication={false}><LoginPage/></Protector>
      },
      {
        path:"/signup",
        element: <Protector authentication={false}><SignupPage/></Protector>
      },
      {
        path:"/home",
        element: <Protector authentication={true}><HomePage/></Protector>
      },
      {
        path:"/friends",
        element: <Protector authentication={true}><FriendsPage/></Protector>
      },
      {
        path:"/createpost",
        element: <Protector authentication={true}><CreatePostPage/></Protector>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
