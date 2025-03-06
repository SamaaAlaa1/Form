import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const Nav = () => {
  const [on, setOn] = useState(false);

  return (
    <div className="bg-[#1f1f1f] flex md:justify-around justify-between items-center px-6 md:px-24 md:py-2 py-1 text-[#ccc] z-50 
      sticky  md:top-0 top-[-0.5px]  w-full"
    >
      <img src={logo} className="md:w-[70px] w-[88px]" alt="Logo" />
      
      <div className="hidden md:flex gap-6">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Team Hierarchy</a>
        <a href="#">Blogs</a>
        <a href="#">Dashboard</a>
      </div>

      <button
        className="md:hidden  text-[#700601] bg-white rounded-md w-9 h-9 flex items-center justify-center text-xl"
        onClick={() => setOn(!on)}
      >
        <FontAwesomeIcon icon={on ? faTimes : faBars} />
      </button>

      <div
        className={`absolute top-[90px] right-0 w-full bg-[#1f1f1f] flex flex-col items-center  gap-4 text-xl py-[30%] h-screen  ${
          on ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">Team Hierarchy</a>
        <a href="#">Blogs</a>
        <a href="#">Dashboard</a>
      </div>
    </div>
  );
};

export default Nav;
