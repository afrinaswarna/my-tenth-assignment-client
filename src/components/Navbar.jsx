import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);
  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light')
const navigate = useNavigate()
  useEffect(()=>{
    const html = document.querySelector('html')
    html.setAttribute("data-theme",theme)
    localStorage.setItem("theme",theme)

  },[theme])

  
  const baseButtonStyle =
    "font-semibold text-sm px-6 py-2 rounded-lg transition duration-200";


  const PINK_GRADIENT_BG = "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600";
  
  
  const WHITE_BTN_BG =
    "bg-white border border-pink-500 text-pink-500 hover:bg-pink-50 border-pink-500"; 

  
  const getNavLinkClasses = ({ isActive }) =>
    `hover:text-pink-600 transition duration-200 ${
      isActive 
        ? 'text-white ' + PINK_GRADIENT_BG + ' px-3 py-1 rounded-lg' 
        : 'text-gray-700'
    }`;
  
  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success('You logged out successfully');
        navigate('/');
      })
      .catch(e => {
        toast.error(e.message);
      });
  };
const handleTheme=(checked)=>{
setTheme(checked?"dark":"light")
}
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-4 w-11/12 mx-auto gap-4">
      
      <div className="bg-white rounded-lg p-3">
        <ul className="flex flex-wrap gap-4 items-center justify-center text-md font-semibold">
          <li>
            <NavLink to="/" className={getNavLinkClasses}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/allProperties" className={getNavLinkClasses}>All Properties</NavLink>
          </li>
          <li>
            <NavLink to="/addProperties" className={getNavLinkClasses}>Add Properties</NavLink>
          </li>
          <li>
            <NavLink to="/myProperties" className={getNavLinkClasses}>My Properties</NavLink>
          </li>
          <li>
            <NavLink to="/myRatings" className={getNavLinkClasses}>My Ratings</NavLink>
          </li>
        </ul>
      </div>
      

  <div className="flex items-center gap-3">
    <input 
    type="checkbox" 
    onChange={(e)=>handleTheme(e.target.checked)}
    className="toggle" />
      <div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-14 rounded-full">
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="user avatar"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li className="text-center font-semibold text-gray-600">
                {user.displayName || "User"}
              </li>
              <li className="text-gray-600 text-xs mb-2">{user.email}</li>

              <button
                onClick={handleLogout}
                className="w-full py-2 mt-2 text-white font-semibold  bg-linear-to-r from-[#FF6B6B] via-[#FF8E8E] to-[#E05297] 
                  hover:from-[#E05297] hover:to-[#FF6B6B] transition duration-500 ease-in-out rounded-md">
                Log Out
              </button>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${baseButtonStyle} ${
                  isActive ? PINK_GRADIENT_BG : WHITE_BTN_BG
                }`
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${baseButtonStyle} ${
                  isActive ? PINK_GRADIENT_BG : WHITE_BTN_BG
                }`
              }
            >
              SignUp
            </NavLink>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;