import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/auth/Signup";
import Contact from "./components/Contact";
import Agencies from "./components/Agencies";
import About from "./components/About";
import Profile from "./components/profile/Profile";
import Newhome from "./components/Newhome";
import Alerts from "./components/Alerts";
import ChatBox from "./components/ChatBox";
import Addalert from "./components/Addalert";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/agencies',
        element: <Agencies />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'alerts',
        element: <Alerts />
      },
      {
        path: 'chat',
        element: <ChatBox />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/addalert',
    element: <Addalert />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
