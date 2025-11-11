import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);

  const baseButtonStyle =
    "font-semibold text-sm px-6 py-2 rounded-lg transition duration-200";
  const PRIMARY_BLUE_BG = "bg-[#3458A7] text-white hover:bg-[#2c4b8e]";
  const WHITE_BTN_BG =
    "bg-white border border-[#3458A7] text-[#3458A7] hover:bg-gray-100";

  // Function to handle NavLink styling (for Home, Properties, etc.)
  // const getNavLinkClasses = ({ isActive }) =>
  //     `hover:text-[#3458A7] ${isActive ? 'text-[#3458A7] font-bold border-b-2 border-[#3458A7]' : 'text-gray-700'}`;
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center ">
        <img
          className="size-10"
          src="https://i.ibb.co.com/m5xz0FmP/home.png"
          alt=""
        />
        <div className="border-l-2 border-gray-400 pl-1">
          <h2 className="font-bold">HomeNest</h2>
          <p className="text-xs text-gray-400">Property finding partner</p>
        </div>
      </div>

      <div className="">
        <ul className="flex gap-4 text-sm font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allProperties">All Properties</NavLink>
          </li>
          <li>
            <NavLink to="/addProperties">Add Properties</NavLink>
          </li>
          <li>
            <NavLink to="/myProperty">My Properties</NavLink>
          </li>
          <li>
            <NavLink to="/myReviews">My Reviews</NavLink>
          </li>
        </ul>
      </div>
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
                className="w-full py-2 mt-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
              >
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
                  isActive ? PRIMARY_BLUE_BG : WHITE_BTN_BG
                }`
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${baseButtonStyle} ${
                  isActive ? PRIMARY_BLUE_BG : WHITE_BTN_BG
                }`
              }
            >
              SignUp
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
