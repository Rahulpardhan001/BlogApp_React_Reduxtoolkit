import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DarkModeToggler from "./DarkModeToggler";
import { IoIosLogOut } from "react-icons/io";
import { logout } from "../../Redux/Slices/AuthSlice/authSlice";
// import DarkModeToggler from "./excelDataRead";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
 const dispatch =  useDispatch();
 const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
 const handleLogout = () => {
  // Dispatch logout action
  dispatch(logout());
};


  return (
    <div className="container ">
    <nav className="p-4">
    <div className="">
      <div className=" flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#1A1A1A] font-[600] text-[20px] dark:text-white">
          <Link to="/">Your Name</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 ">
          <Link to="/" className="text-[#1A1A1A] hover:text-gray-300 font-[400] leading-5 dark:text-white ">
           Blog
          </Link>
          <Link to="/project" className="text-[#1A1A1A] hover:text-gray-300 font-[400] leading-5 dark:text-white">
          Project
          </Link>
          <Link to="/about" className="text-[#1A1A1A] hover:text-gray-300 font-[400] leading-5 dark:text-white">
          About
          </Link>
          <Link to="/newsletter" className="text-[#1A1A1A] hover:text-gray-300 font-[400] leading-5 dark:text-white">
          Newsletter
          </Link>
          <span className="flex align-middle items-center h-5 ">
          <DarkModeToggler/>
          </span>
         
          {isAuthenticated? (
                   <Link to="/logout" onClick={handleLogout} className="text-[#1A1A1A] text-2xl hover:text-gray-300 font-[400] leading-5 dark:text-white">
          <IoIosLogOut />
          </Link>
                ) : (
          ""
        )}

          
        </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        
      </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden dark:text-white  text-center ">
          <Link to="/" className="block text-dark py-2 px-4 hover:bg-blue-700">
            Blog
          </Link>
          <Link to="/project" className="block text-dark  py-2 px-4 hover:bg-blue-700">
            Project
          </Link>
          <Link to="/about" className="block text-dark  py-2 px-4 hover:bg-blue-700">
            About
          </Link>
          <Link to="/newsletter" className="block text-dark  py-2 px-4 hover:bg-blue-700">
           Newsletter
          </Link>
          <span className="block text-dark  py-2 px-4 hover:bg-blue-700 flex justify-center">
          <DarkModeToggler/>
          </span>
          <Link to="/newsletter" className="block text-dark  py-2 px-4 hover:bg-blue-700 flex justify-center">
          <IoIosLogOut />
          </Link>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Header;

