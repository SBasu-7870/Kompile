import React from 'react';
import { Link } from "react-router-dom";


const Dropdown = ({toggle, isOpen}) => {
  return (
    <div
          className={
            isOpen
              ? "grid grid-rows-4 text-center items-center bg-zinc-500"
              : "hidden"
          }
          onClick={toggle}
        >
          <Link to="/" className="p-4">
            Home
          </Link>
          <Link to="/" className="p-4">
            Docs
          </Link>
          <Link to="/" className="p-4">
            About
          </Link>
        </div>
  )
}

export default Dropdown