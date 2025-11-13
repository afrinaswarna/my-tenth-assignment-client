import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
  },[])
// console.log(user)

const updateUser = (updatedData) =>{
    return updateProfile(auth.currentUser,updatedData)
  }
const userLogout=()=>{
    setLoading(true)
    return signOut(auth)
 }

    const authInfo = {
        user,
    setUser,
    createUser,
   signInUser,
   updateUser,
    userLogout,
    loading,
    setLoading
    }
    
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;