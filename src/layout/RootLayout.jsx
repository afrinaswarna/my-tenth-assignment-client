import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import LoadingSpinner from '../components/LoadingSpinner';

const RootLayout = () => {
    const {state} = useNavigation()
    return (
        
           <div className='flex flex-col min-h-screen'>
             <header>
                <Navbar></Navbar>

            </header>
            
             <main className='flex-1'>
             {state=='loading'?<LoadingSpinner></LoadingSpinner>:<Outlet></Outlet>}   
            </main>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
      
           </div>
    );
};

export default RootLayout;