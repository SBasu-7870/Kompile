import React, { useState } from "react";

import { Link } from "react-router-dom";



const Navbar = ({toggle}) => {
  
  setInterval(updateTime);
  let time= new Date().toLocaleTimeString();
  let date = new Date().toDateString();
 
const [now,setNow]= useState(time);
const [dateNow,setDate] = useState(date);
function updateTime(){
  const newTime = new Date().toLocaleTimeString();
  const newDate = new Date().toDateString();
  setNow(newTime);
  setDate(newDate);


}
  return (
    <>
    <div>
      {dateNow} | {now}
    </div>
      <nav
        className="flex justify-between item-center h-12 pt-3 text-black text-lg relative shadow-lg font-mono bg-stone-50"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          {" "}
          VLAB{" "}
        </Link>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className=" md:block hidden">
          <Link
            className="pr-4 medium leading-6 text-gray-600 hover:text-gray-900"
            to="/"
          >
            Home
          </Link>
          <Link
            className="pr-4 medium leading-6 text-gray-600 hover:text-gray-900"
            to="/"
          >
            Docs
          </Link>
          <Link
            className="pr-4 medium leading-6 text-gray-600 hover:text-gray-900"
            to="/"
          >
            About
          </Link>
        </div>
       </nav>
    </>
  );
};

export default Navbar;
