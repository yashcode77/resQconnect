import React from 'react';
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import profile from '../assets/images/profile.png';

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-blue-900 text-white">
      <div className='flex gap-4 items-center'>
        <h1 className='text-lg font-semibold text-red-300 cursor-pointer'><Link to="/">resQconnect</Link></h1>
        <ul className="cursor-pointer"><Link to="/">Home</Link></ul>
        <ul className="cursor-pointer"><Link to="/agencies">Agencies</Link></ul>
        <ul className="cursor-pointer"><Link to="/about">About</Link></ul>
        <ul className="cursor-pointer"><Link to="/contact">Contact us</Link></ul>
      </div>
      <div>
        <Link to="/profile">
          <div className='flex gap-2 cursor-pointer'>
            <img src={profile} className='w-6 h-6'/>
            <ul className="cursor-pointer"><Link to="/profile">Profile</Link></ul>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Navbar
