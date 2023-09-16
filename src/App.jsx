import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Login from "./components/Login"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footbar from "./components/Footbar";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <Outlet />
      {/* <Footbar /> */}
    </div>

  );
}

export default App;
