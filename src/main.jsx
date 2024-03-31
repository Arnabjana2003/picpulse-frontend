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
import ProfilePage from "./pages/ProfilePage.jsx";
import UpdatePicPage from "./pages/UpdatePicPage.jsx";
import ViewPostPage from "./pages/ViewPostPage.jsx";
import MobileMenu from "./pages/MobileMenu.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ViewPhotoPage from "./pages/ViewPhotoPage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";

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
      {
        path:"/profile/:userId",
        element: <Protector authentication={true}><ProfilePage/></Protector>
      },
      {
        path:"/post/:postId",
        element: <Protector authentication={true}><ViewPostPage/></Protector>
      },
      {
        path:"/view/:postId",
        element: <Protector authentication={true}><ViewPhotoPage/></Protector>
      },
      {
        path:"/profile/update/:isProfilePicUpdation/:imageId",
        element: <Protector authentication={true}><UpdatePicPage/></Protector>
      },
      {
        path:"/menu",
        element: <Protector authentication={true}><MobileMenu/></Protector>
      },
      {
        path:"/search",
        element: <Protector authentication={true}><SearchPage/></Protector>
      },
      {
        path:"/search/result/:query",
        element: <Protector authentication={true}><SearchResultPage/></Protector>
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
