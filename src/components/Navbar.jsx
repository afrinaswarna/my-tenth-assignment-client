import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const baseButtonStyle = "font-semibold text-sm px-6 py-2 rounded-lg transition duration-200";
    const PRIMARY_BLUE_BG = "bg-[#3458A7] text-white hover:bg-[#2c4b8e]";
    const WHITE_BTN_BG = "bg-white border border-[#3458A7] text-[#3458A7] hover:bg-gray-100";
    
    // Function to handle NavLink styling (for Home, Properties, etc.)
    // const getNavLinkClasses = ({ isActive }) => 
    //     `hover:text-[#3458A7] ${isActive ? 'text-[#3458A7] font-bold border-b-2 border-[#3458A7]' : 'text-gray-700'}`;

  return (
    <div className="flex items-center justify-between py-4 border-b">
            
            <div className="flex items-center ">
                <img className="size-10" src="https://i.ibb.co.com/m5xz0FmP/home.png" alt="" />
                <div className="border-l-2 border-gray-400 pl-1">
                    <h2 className="font-bold">HomeNest</h2>
                    <p className="text-xs text-gray-400">Property finding partner</p>

                </div>
                
            </div>
           
            
        
                <div className="">
                <ul className="flex gap-4 text-sm font-semibold">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allProperties'>All Properties</NavLink></li>
                    <li><NavLink to='/addProperties'>Add Properties</NavLink></li>
                    <li><NavLink to='/myProperty'>My Properties</NavLink></li>
                    <li><NavLink to='/myReviews'>My Reviews</NavLink></li>
                </ul>
                </div>
                <div className="flex items-center gap-2">
                <NavLink 
                            to='/login'
                            className={({ isActive }) => 
                                `${baseButtonStyle} ${isActive ? PRIMARY_BLUE_BG : WHITE_BTN_BG}`
                            }
                        >
                            Login
                        </NavLink>
                        
                        {/* SignUp Button: Apply primary color when active */}
                        <NavLink 
                            to='/register'
                            className={({ isActive }) => 
                                `${baseButtonStyle} ${isActive ? PRIMARY_BLUE_BG : WHITE_BTN_BG}`
                            }
                        >
                            SignUp
                        </NavLink>
                </div>
             </div>
             
    
  );
};

export default Navbar;
