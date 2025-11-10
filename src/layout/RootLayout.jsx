import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        
           <div className='flex flex-col min-h-screen'>
             <header>
                <Navbar></Navbar>

            </header>
            
            <main className='flex-1 '>
               <Outlet></Outlet>
            </main>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
      
           </div>
    );
};

export default RootLayout;