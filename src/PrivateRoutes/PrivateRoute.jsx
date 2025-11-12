import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';

const PrivateRoute = ({children}) => {
      const {user,loading} = use(AuthContext)
    const location = useLocation()

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
     return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};


export default PrivateRoute;