import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { Link } from 'react-router';

const Footer = () => {
    const PINK_GRADIENT_TEXT = "bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text";
    const PINK_BORDER = "border-pink-400"; 
    return (
        <div className='bg-rose-700 text-white p-5'>
       <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-rose-700 pb-10'>

                  
                    <div className='col-span-2 md:col-span-1'>
                        <div className="flex items-center mb-4">
                          
                            <img
                                className="size-10 mr-2 filter drop-shadow-[0_0_5px_rgba(255,105,180,0.5)]" // Pink glow effect
                                src="https://i.ibb.co.com/m5xz0FmP/home.png"
                                alt="HomeNest Logo"
                            />
                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    HomeNest
                                </h2>
                                <p className="text-xs text-rose-300">Property finding partner</p>
                            </div>
                        </div>
                        <p className='text-sm text-rose-200'>
                            Your trusted partner in finding the perfect property solution.
                        </p>
                    </div>

                    
                    <div>
                        <h3 className='font-semibold text-lg mb-4 border-b inline-block'>
                            Contact Us
                        </h3>
                        <ul className='space-y-2 text-sm text-rose-200'>
                            <li>
                                <span className='font-medium'>Address:</span> 123 Property St, City, Country
                            </li>
                            <li>
                                <span className='font-medium'>Phone:</span> (123) 456-7890
                            </li>
                            <li>
                                <span className='font-medium'>Email:</span> home@nest.com
                            </li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 className='font-semibold text-lg mb-4 border-b inline-block6'>
                            Terms and Conditions,
                        </h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link to="/allProperties" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                    All Properties
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                    Cookie policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/sitemap" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className='font-semibold text-lg mb-4 border-b inline-block6'>
                        Social Media Links
                        </h3>
                        
                        <div className='flex flex-row gap-2 '> 
                    <div className='bg-base-300 rounded-full p-4'>
                    <FaFacebook className='size-5 text-gray-600'></FaFacebook>
                    </div>
                   <div className='bg-base-300 rounded-full p-4'>
                   <FaInstagram className='size-5 text-gray-600'></FaInstagram>
                   </div>
                    <div className='bg-base-300 rounded-full p-4'>
                    <FaPinterest className='size-5 text-gray-600'></FaPinterest>
                   </div>
                    <div className='bg-base-300 rounded-full p-4'>
                   <BsTwitterX className='size-5 text-gray-600'></BsTwitterX>
                    </div>
                    
                    </div>
                    </div>

                </div>
                <div className='pt-6 text-center text-sm text-white'>
                    &copy; {new Date().getFullYear()} HomeNest. All rights reserved.
                </div>
            </div>
            </div>
    );
};

export default Footer;