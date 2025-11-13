import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    const PINK_GRADIENT_TEXT = "bg-gradient-to-r from-pink-400 to-rose-400 text-transparent bg-clip-text";
    const PINK_BORDER = "border-pink-400"; 
    return (
        <div className='bg-rose-700 text-white '>
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
                                <h2 className="text-2xl font-bold">
                                    <span className={PINK_GRADIENT_TEXT}>HomeNest</span>
                                </h2>
                                <p className="text-xs text-rose-300">Property finding partner</p>
                            </div>
                        </div>
                        <p className='text-sm text-rose-200'>
                            Your trusted partner in finding the perfect property solution.
                        </p>
                    </div>

                    
                    <div>
                        <h3 className={`font-semibold text-lg mb-4 border-b ${PINK_BORDER} inline-block`}>
                            <span className={PINK_GRADIENT_TEXT}>Contact Us</span>
                        </h3>
                        <ul className='space-y-2 text-sm text-rose-200'>
                            <li>
                                <span className='font-medium'>Address:</span> 123 Property St, City, Country
                            </li>
                            <li>
                                <span className='font-medium'>Phone:</span> (123) 456-7890
                            </li>
                            <li>
                                <span className='font-medium'>Email:</span> info@homenest.com
                            </li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 className={`font-semibold text-lg mb-4 border-b ${PINK_BORDER} inline-block`}>
                            <span className={PINK_GRADIENT_TEXT}>Legal & Links</span>
                        </h3>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link to="/allProperties" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                    All Properties
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                    Terms & Conditions
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
                        <h3 className={`font-semibold text-lg mb-4 border-b ${PINK_BORDER} inline-block`}>
                            <span className={PINK_GRADIENT_TEXT}>Connect With Us</span>
                        </h3>
                        <div className='flex space-x-4 text-2xl'>
                         
                            <a href="#" aria-label="Facebook" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                F
                            </a>
                            <a href="#" aria-label="Twitter" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                T
                            </a>
                            <a href="#" aria-label="LinkedIn" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                L
                            </a>
                            <a href="#" aria-label="Instagram" className='text-rose-200 hover:text-pink-300 transition-colors duration-200'>
                                I
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className='pt-6 text-center text-sm text-rose-400'>
                    &copy; {new Date().getFullYear()} HomeNest. All rights reserved.
                </div>
            </div>
            </div>
    );
};

export default Footer;