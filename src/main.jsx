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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/login",
        element: <LoginPage/>
      },
      {
        path:"/signup",
        element: <SignupPage/>
      },
      {
        path:"/home",
        element: <HomePage/>
      },
      {
        path:"/friends",
        element: <FriendsPage/>
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
